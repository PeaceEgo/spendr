import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo, useRef, useState, useEffect } from 'react';
import { Image, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Circle } from 'react-native-svg';

import { ActiveBudgetCard } from '@/components/home/ActiveBudgetCard';
import { BudgetListPagination } from '@/components/budget/BudgetListPagination';
import { HomeEmptyState } from '@/components/home/HomeEmptyState';
import {
  BUDGETS_TAB_PAGE_SIZE,
  BUDGET_TAB_HEADER_GRADIENT_BASE,
  BUDGET_TAB_HEADER_GRADIENT_LEFT,
  BUDGET_TAB_HEADER_GRADIENT_RIGHT,
} from '@/constants/home-budgets';
import { useBudgetDraftStore } from '@/stores/budget-draft';
import { useHomeBudgetsStore } from '@/stores/home-budgets';
import { budgetsTabStyles as styles } from '@/styles/tabs/budgets';
import { formatNaira } from '@/utils/formatNaira';

type FilterOption = 'all' | 'healthy' | 'at_risk' | 'at_limit' | 'exceeded';

const FILTER_ITEMS: Array<{ id: FilterOption; label: string }> = [
  { id: 'all', label: 'All' },
  { id: 'healthy', label: 'Healthy' },
  { id: 'at_risk', label: 'At risk' },
  { id: 'at_limit', label: 'At Limit' },
  { id: 'exceeded', label: 'Exceeded' },
];

const FILTER_MENU_ITEMS = FILTER_ITEMS.filter((item) => item.id !== 'all');

const filterIcon = require('@/assets/budget/filter-icon.png');

export default function BudgetsTabScreen() {
  const budgets = useHomeBudgetsStore((s) => s.budgets);
  const resetDraft = useBudgetDraftStore((s) => s.resetDraft);
  const insets = useSafeAreaInsets();
  const [filterOpen, setFilterOpen] = useState(false);
  const [headerMenuOpen, setHeaderMenuOpen] = useState(false);
  const [filter, setFilter] = useState<FilterOption>('all');
  const [page, setPage] = useState(1);
  const [filterMenuTop, setFilterMenuTop] = useState(0);
  const filterAnchorRef = useRef<View>(null);

  const planned = budgets.reduce((sum, b) => sum + b.limit, 0);
  const spent = budgets.reduce((sum, b) => sum + b.spent, 0);
  const remaining = Math.max(0, planned - spent);
  const overallProgress = planned > 0 ? spent / planned : 0;
  const atRiskCount = budgets.filter((b) => b.limit > 0 && b.spent / b.limit >= 0.7).length;

  const visibleBudgets = useMemo(() => {
    if (filter === 'all') return budgets;
    return budgets.filter((budget) => {
      const ratio = budget.limit > 0 ? budget.spent / budget.limit : 0;
      if (filter === 'healthy') return ratio < 0.7;
      if (filter === 'at_risk') return ratio >= 0.7 && ratio < 0.9;
      if (filter === 'at_limit') return ratio >= 0.9 && ratio <= 1;
      return ratio > 1;
    });
  }, [budgets, filter]);

  const totalPages = Math.max(1, Math.ceil(visibleBudgets.length / BUDGETS_TAB_PAGE_SIZE));

  const paginatedBudgets = useMemo(() => {
    const start = (page - 1) * BUDGETS_TAB_PAGE_SIZE;
    return visibleBudgets.slice(start, start + BUDGETS_TAB_PAGE_SIZE);
  }, [visibleBudgets, page]);

  useEffect(() => {
    setPage(1);
  }, [filter]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const openCreateBudget = () => {
    resetDraft();
    router.push('/budget/create');
  };

  const openAddExpense = () => {
    const firstBudget = visibleBudgets[0] ?? budgets[0];
    if (!firstBudget) {
      openCreateBudget();
      return;
    }
    router.push({
      pathname: '/expense/[budgetId]',
      params: { budgetId: firstBudget.id },
    });
  };

  const closeMenus = () => {
    setHeaderMenuOpen(false);
    setFilterOpen(false);
  };

  const toggleFilterMenu = () => {
    if (filterOpen) {
      setFilterOpen(false);
      return;
    }
    setHeaderMenuOpen(false);
    filterAnchorRef.current?.measureInWindow((_x, y, _w, height) => {
      setFilterMenuTop(y + height + 4);
      setFilterOpen(true);
    });
  };

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{ paddingBottom: Math.max(insets.bottom + 96, 120) }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        onScrollBeginDrag={closeMenus}
      >
        <View style={[styles.headerCard, { paddingTop: insets.top + 10 }]}>
          <View style={styles.headerGradientLayers} pointerEvents="none">
            <LinearGradient
              colors={[...BUDGET_TAB_HEADER_GRADIENT_BASE.colors]}
              locations={[...BUDGET_TAB_HEADER_GRADIENT_BASE.locations]}
              start={BUDGET_TAB_HEADER_GRADIENT_BASE.start}
              end={BUDGET_TAB_HEADER_GRADIENT_BASE.end}
              style={StyleSheet.absoluteFill}
            />
            <LinearGradient
              colors={[...BUDGET_TAB_HEADER_GRADIENT_LEFT.colors]}
              locations={[...BUDGET_TAB_HEADER_GRADIENT_LEFT.locations]}
              start={BUDGET_TAB_HEADER_GRADIENT_LEFT.start}
              end={BUDGET_TAB_HEADER_GRADIENT_LEFT.end}
              style={StyleSheet.absoluteFill}
            />
            <LinearGradient
              colors={[...BUDGET_TAB_HEADER_GRADIENT_RIGHT.colors]}
              locations={[...BUDGET_TAB_HEADER_GRADIENT_RIGHT.locations]}
              start={BUDGET_TAB_HEADER_GRADIENT_RIGHT.start}
              end={BUDGET_TAB_HEADER_GRADIENT_RIGHT.end}
              style={StyleSheet.absoluteFill}
            />
          </View>
          <View style={styles.headerTopRow}>
            <Text style={styles.headerTitle}>Budgets</Text>
            <View style={styles.menuAnchor}>
              <Pressable
                style={styles.infoButton}
                accessibilityRole="button"
                accessibilityLabel="Download report menu"
                onPress={() => {
                  setHeaderMenuOpen((v) => !v);
                  setFilterOpen(false);
                }}
              >
                <Ionicons name="ellipsis-vertical" size={16} color="#121926" />
              </Pressable>
            </View>
          </View>

          <Text style={styles.overallLabel}>Overall budget balance</Text>

          <View style={styles.summaryRow}>
            <ProgressRing progress={overallProgress} />
            <View style={styles.summaryTextCol}>
              <Text style={styles.remainingValue}>{formatNaira(remaining)}</Text>
              <Text style={styles.remainingLabel}>remaining across all budgets</Text>
            </View>
          </View>

          <View style={styles.track}>
            {overallProgress > 0 ? (
              <View style={[styles.trackFill, { width: `${Math.min(overallProgress, 1) * 100}%` }]} />
            ) : null}
          </View>
          <View style={styles.scaleRow}>
            <Text style={styles.scaleText}>{formatNaira(spent)} spent</Text>
            <Text style={styles.scaleText}>{formatNaira(planned)}</Text>
          </View>

          <View style={styles.statRow}>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{budgets.length}</Text>
              <Text style={styles.statLabel}>Total Budgets</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{atRiskCount}</Text>
              <Text style={styles.statLabel}>At risk</Text>
            </View>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.allBudgetRow}>
            <Text style={styles.allBudgetsTitle}>All Budgets</Text>
            <View ref={filterAnchorRef} collapsable={false}>
              <Pressable
                style={({ pressed }) => [styles.filterPill, pressed && styles.pressed]}
                onPress={toggleFilterMenu}
                accessibilityRole="button"
                accessibilityLabel="Filter budgets"
              >
                <Image source={filterIcon} style={styles.filterIcon} resizeMode="contain" />
                <Text style={styles.filterText}>Filter</Text>
              </Pressable>
            </View>
          </View>

          {visibleBudgets.length > 0 ? (
            <>
              <View style={styles.list}>
                {paginatedBudgets.map((budget) => (
                  <ActiveBudgetCard key={budget.id} budget={budget} />
                ))}
              </View>
              {totalPages > 1 ? (
                <BudgetListPagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={setPage}
                />
              ) : null}
            </>
          ) : (
            <HomeEmptyState onCreateBudget={openCreateBudget} />
          )}
        </View>
      </ScrollView>

      <Modal
        visible={headerMenuOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setHeaderMenuOpen(false)}
      >
        <View style={styles.menuBackdrop}>
          <Pressable
            style={StyleSheet.absoluteFill}
            onPress={() => setHeaderMenuOpen(false)}
            accessibilityRole="button"
            accessibilityLabel="Close menu"
          />
          <View style={[styles.downloadPopoverScreen, { top: insets.top + 42, right: 24 }]}>
            <View style={styles.menuCaret} />
            <Pressable
              style={({ pressed }) => [styles.downloadButton, pressed && styles.pressed]}
              accessibilityRole="button"
              accessibilityLabel="Download report"
              onPress={() => setHeaderMenuOpen(false)}
            >
              <Ionicons name="download-outline" size={16} color="#121926" />
              <Text style={styles.downloadText}>Download Report</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal
        visible={filterOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setFilterOpen(false)}
      >
        <View style={styles.menuBackdrop}>
          <Pressable
            style={StyleSheet.absoluteFill}
            onPress={() => setFilterOpen(false)}
            accessibilityRole="button"
            accessibilityLabel="Close filter menu"
          />
          <View style={[styles.filterMenuScreen, { top: filterMenuTop, right: 24 }]}>
            <View style={styles.filterMenu}>
              {FILTER_MENU_ITEMS.map((item) => (
                <Pressable
                  key={item.id}
                  style={({ pressed }) => [styles.filterItem, pressed && styles.filterItemPressed]}
                  onPress={() => {
                    setFilter(item.id);
                    setFilterOpen(false);
                  }}
                >
                  <Text
                    style={[
                      styles.filterItemText,
                      filter === item.id && styles.filterItemTextSelected,
                    ]}
                  >
                    {item.label}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      </Modal>

      {budgets.length > 0 ? (
        <Pressable
          style={({ pressed }) => [
            styles.fabWrap,
            { bottom: Math.max(insets.bottom + 84, 108) },
            pressed && styles.pressed,
          ]}
          onPress={openAddExpense}
          accessibilityRole="button"
          accessibilityLabel="Add expense"
        >
          <LinearGradient
            colors={['#4062B9', '#1D2C53']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.fab}
          >
            <Ionicons name="add" size={30} color="#FFFFFF" />
          </LinearGradient>
        </Pressable>
      ) : null}
    </View>
  );
}

function ProgressRing({ progress }: { progress: number }) {
  const size = 94;
  // Figma ring: 94x94 with ~42.73 radius => ~8.5 stroke
  const stroke = 8.5;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(1, progress));
  const dash = circumference * clamped;

  return (
    <View style={styles.ringBase}>
      <Svg width={size} height={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#FFFFFF"
          strokeWidth={stroke}
          fill="transparent"
        />
        {clamped > 0 ? (
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#4062B9"
            strokeWidth={stroke}
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={`${dash} ${circumference}`}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        ) : null}
      </Svg>
      <View style={styles.ringTextWrap}>
        <Text style={styles.ringPercent}>{Math.round(clamped * 100)}%</Text>
        <Text style={styles.ringUsed}>used</Text>
      </View>
    </View>
  );
}
