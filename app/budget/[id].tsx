import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BudgetLimitStatusCard } from '@/components/budget/BudgetLimitStatusCard';
import { RecentExpensesSection } from '@/components/expense/RecentExpensesSection';
import { BudgetCategoryPill } from '@/components/budget/BudgetCategoryPill';
import { BudgetOptionsMenu } from '@/components/budget/BudgetOptionsMenu';
import { DeleteBudgetSheet } from '@/components/budget/DeleteBudgetSheet';
import { EditThresholdSheet } from '@/components/budget/EditThresholdSheet';
import { budgetFlowIcons, type BudgetThreshold } from '@/constants/budget-flow';
import { HOME_HEADER_GRADIENT } from '@/constants/home';
import {
  ensureBudgetInDraftStore,
  normalizeBudgetRouteId,
  useBudgetDraftStore,
} from '@/stores/budget-draft';
import { selectExpensesForBudget, useExpensesStore } from '@/stores/expenses';
import { formatNaira, formatPercentUsed } from '@/utils/formatNaira';
import { budgetDetailsStyles as styles } from '@/styles/budget/details';

function useStableBudgetId(): string | undefined {
  const { id: idParam } = useLocalSearchParams<{ id: string }>();
  const idRef = useRef<string | undefined>(undefined);
  const normalized = normalizeBudgetRouteId(idParam);
  if (normalized) idRef.current = normalized;
  return idRef.current ?? normalized;
}

export default function BudgetDetailsScreen() {
  const budgetId = useStableBudgetId();
  const insets = useSafeAreaInsets();
  const budget = useBudgetDraftStore((s) => (budgetId ? s.budgets[budgetId] : undefined));
  const recentExpenses = useExpensesStore((s) => selectExpensesForBudget(s, budgetId));
  const updateBudgetThreshold = useBudgetDraftStore((s) => s.updateBudgetThreshold);
  const deleteBudget = useBudgetDraftStore((s) => s.deleteBudget);
  const loadBudgetIntoDraft = useBudgetDraftStore((s) => s.loadBudgetIntoDraft);
  const [showOptions, setShowOptions] = useState(false);
  const [showThreshold, setShowThreshold] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [threshold, setThreshold] = useState<BudgetThreshold>(70);
  const [isReady, setIsReady] = useState(false);

  useLayoutEffect(() => {
    if (budgetId) ensureBudgetInDraftStore(budgetId);
    setIsReady(true);
  }, [budgetId]);

  useEffect(() => {
    if (budget) setThreshold(budget.threshold);
  }, [budget?.threshold, budget?.id]);

  if (!isReady) {
    return <View style={styles.screen} />;
  }

  if (!budget || !budgetId) {
    return (
      <View style={[styles.screen, { paddingTop: insets.top + 40, paddingHorizontal: 24 }]}>
        <Text>Budget not found.</Text>
        <Pressable onPress={() => router.back()}>
          <Text style={{ color: '#4062B9', marginTop: 12 }}>Go back</Text>
        </Pressable>
      </View>
    );
  }

  const remaining = Math.max(0, budget.amount - budget.spent);
  const progress = budget.amount > 0 ? budget.spent / budget.amount : 0;
  const selectedCategoryIds = budget.categoryIds.filter((c) => c !== 'all');
  const extra = Math.max(0, selectedCategoryIds.length - 2);

  const handleThresholdSave = (value: BudgetThreshold) => {
    setThreshold(value);
    updateBudgetThreshold(budgetId, value);
  };

  const handleDelete = () => {
    setShowDelete(false);
    deleteBudget(budgetId);
    router.replace('/(tabs)');
  };

  const handleEditBudget = () => {
    loadBudgetIntoDraft(budgetId);
    router.push('/budget/create');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.headerShell}>
        <LinearGradient
          colors={[...HOME_HEADER_GRADIENT.colors]}
          locations={[...HOME_HEADER_GRADIENT.locations]}
          start={HOME_HEADER_GRADIENT.start}
          end={HOME_HEADER_GRADIENT.end}
          style={[styles.headerGradient, { paddingTop: insets.top + 8 }]}
        >
          <View style={styles.headerNav}>
            <Pressable
              style={({ pressed }) => [styles.navSide, pressed && styles.pressed]}
              onPress={() => router.back()}
              accessibilityRole="button"
              accessibilityLabel="Go back"
            >
              <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
            </Pressable>
            <Text style={styles.headerTitle} numberOfLines={1}>
              {budget.title}
            </Text>
            <View style={styles.navSideRight}>
              <Pressable
                style={({ pressed }) => [styles.menuButton, pressed && styles.pressed]}
                onPress={() => setShowOptions(true)}
                accessibilityRole="button"
                accessibilityLabel="Open options"
              >
                <Ionicons name="ellipsis-horizontal" size={20} color="#121926" />
              </Pressable>
            </View>
          </View>

          <View style={styles.categoryRow}>
            {selectedCategoryIds.slice(0, 2).map((categoryId) => (
              <BudgetCategoryPill key={categoryId} categoryId={categoryId} variant="onDetails" />
            ))}
            {extra > 0 ? <Text style={styles.categoryMore}>+ {extra} more</Text> : null}
          </View>

          <View style={styles.amountThresholdRow}>
            <View style={styles.amountColumn}>
              <Text style={styles.amount}>{formatNaira(remaining)}</Text>
              <Text style={styles.spentText}>{formatNaira(budget.spent)} spent</Text>
            </View>
            <Pressable
              style={({ pressed }) => [styles.thresholdPill, pressed && styles.pressed]}
              onPress={() => {
                setThreshold(budget.threshold);
                setShowThreshold(true);
              }}
              accessibilityRole="button"
              accessibilityLabel="Edit alert threshold"
            >
              <Image
                source={budgetFlowIcons.alertBell}
                style={styles.thresholdBellIcon}
                resizeMode="contain"
              />
              <Text style={styles.thresholdText} numberOfLines={1}>
                Alert threshold : {threshold}%
              </Text>
              <Ionicons name="pencil" size={14} color="#36994E" />
            </Pressable>
          </View>

          <View style={styles.progressTrack}>
            {progress > 0 ? (
              <View style={[styles.progressFill, { width: `${Math.min(100, progress * 100)}%` }]} />
            ) : null}
          </View>
          <View style={styles.progressLabels}>
            <Text style={styles.progressEdge}>{formatPercentUsed(budget.spent, budget.amount)} used</Text>
            <Text style={styles.progressEdge}>100%</Text>
          </View>

          <Pressable
            style={({ pressed }) => [styles.addExpenseButton, pressed && styles.pressed]}
            onPress={() => router.push(`/expense/${budgetId}`)}
          >
            <View style={styles.addExpenseIconWrap}>
              <Ionicons name="add" size={16} color="#4062B9" />
            </View>
            <Text style={styles.addExpenseLabel}>Add Expense</Text>
          </Pressable>
        </LinearGradient>
      </View>

      <ScrollView
        style={styles.body}
        contentContainerStyle={[
          styles.bodyContent,
          { paddingBottom: insets.bottom + 24 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.statRow}>
          <View style={styles.statCard}>
            <View style={styles.statTextCol}>
              <Text style={styles.statValue}>{formatNaira(budget.spent)}</Text>
              <Text style={styles.statLabel}>Spent</Text>
            </View>
          </View>
          <View style={styles.statCard}>
            <View style={styles.statTextCol}>
              <Text style={styles.statValue}>{budget.daysLeft}</Text>
              <Text style={styles.statLabel}>days left</Text>
            </View>
          </View>
        </View>

        {recentExpenses.length > 0 ? (
          <>
            <RecentExpensesSection expenses={recentExpenses} />
            <BudgetLimitStatusCard spent={budget.spent} limit={budget.amount} />
          </>
        ) : (
          <View style={styles.emptyExpenses}>
            <Image
              source={budgetFlowIcons.emptyExpenses}
              style={styles.emptyIllustration}
              resizeMode="contain"
            />
            <Text style={styles.emptyTitle}>No expense recorded yet</Text>
            <Text style={styles.emptySubtitle}>
              You&apos;re yet to log any expense on this budget
            </Text>
          </View>
        )}
      </ScrollView>

      <BudgetOptionsMenu
        visible={showOptions}
        onClose={() => setShowOptions(false)}
        onEditBudget={handleEditBudget}
        onDeleteBudget={() => setShowDelete(true)}
      />

      <EditThresholdSheet
        visible={showThreshold}
        budgetTitle={budget.title}
        budgetAmount={budget.amount}
        value={threshold}
        onSave={handleThresholdSave}
        onClose={() => setShowThreshold(false)}
      />

      <DeleteBudgetSheet
        visible={showDelete}
        onCancel={() => setShowDelete(false)}
        onConfirm={handleDelete}
      />
    </View>
  );
}
