import { router, useLocalSearchParams } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BudgetFlowHeader } from '@/components/budget/BudgetFlowHeader';
import { budgetFlowIcons, getCategoryIcon } from '@/constants/budget-flow';
import { useExpenseBudgetId } from '@/hooks/useExpenseBudgetId';
import { ensureBudgetInDraftStore, useBudgetDraftStore } from '@/stores/budget-draft';
import { selectExpensesForBudget, useExpensesStore } from '@/stores/expenses';
import { expenseSuccessStyles as styles } from '@/styles/expense/success';
import { formatNaira, formatPercentUsed } from '@/utils/formatNaira';
import { formatExpenseTime } from '@/utils/formatExpenseTime';

const rocketIcon = require('@/assets/home/budgets/rocket.png');

function primaryCategoryId(categoryIds: string[]): string {
  const specific = categoryIds.filter((id) => id !== 'all');
  return specific[0] ?? 'food';
}

export default function ExpenseLoggedSuccessScreen() {
  const budgetId = useExpenseBudgetId();
  const { loggedTotal: loggedTotalParam, loggedIds: loggedIdsParam } = useLocalSearchParams<{
    loggedTotal?: string;
    loggedIds?: string;
  }>();
  const insets = useSafeAreaInsets();
  const budget = useBudgetDraftStore((s) => (budgetId ? s.budgets[budgetId] : undefined));
  const expenses = useExpensesStore((s) => selectExpensesForBudget(s, budgetId));

  if (budgetId) ensureBudgetInDraftStore(budgetId);

  if (!budgetId || !budget) {
    return (
      <View style={[styles.screen, { paddingTop: insets.top + 40, paddingHorizontal: 24 }]}>
        <Text>Budget not found.</Text>
      </View>
    );
  }

  const batchIds = (typeof loggedIdsParam === 'string' ? loggedIdsParam : '')
    .split(',')
    .filter(Boolean);
  const batchExpenses = expenses
    .filter((expense) => batchIds.includes(expense.id))
    .sort((a, b) => b.createdAt - a.createdAt);
  const recent = [...expenses].sort((a, b) => b.createdAt - a.createdAt);
  const displayExpenses = batchExpenses.length > 0 ? batchExpenses : recent.slice(0, 5);

  const lastBatchTotal = Number(loggedTotalParam) || displayExpenses.reduce((s, e) => s + e.amount, 0);
  const remaining = Math.max(0, budget.amount - budget.spent);
  const progress = budget.amount > 0 ? budget.spent / budget.amount : 0;
  const categoryIcon = getCategoryIcon(primaryCategoryId(budget.categoryIds));

  return (
    <View style={styles.screen}>
      <BudgetFlowHeader title="" onBack={() => router.back()} />
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 24 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Image source={budgetFlowIcons.checkCircle} style={styles.checkIcon} resizeMode="contain" />
        <Text style={styles.title}>Expense Logged Successfully</Text>
        <Text style={styles.subtitle}>
          Your expenses have been logged successfully into your Budget and a deduction of{' '}
          <Text style={styles.subtitleAmount}>{formatNaira(lastBatchTotal)}</Text> from your
          balance.
        </Text>

        <View style={styles.summaryCard}>
          <View style={styles.summaryHeaderRow}>
            <View style={styles.summaryIconBox}>
              <Image source={categoryIcon} style={styles.summaryIconImage} resizeMode="contain" />
            </View>
            <View style={styles.summaryHeaderText}>
              <Text style={styles.summaryTitle} numberOfLines={1}>
                {budget.title}
              </Text>
              <Text style={styles.summaryMeta} numberOfLines={1}>
                {budget.periodSubtitle}
              </Text>
            </View>
            <View style={styles.summaryRemainingCol}>
              <Text style={styles.summaryRemainingAmount}>{formatNaira(remaining)}</Text>
              <Text style={styles.summaryRemainingLabel}>Remaining</Text>
            </View>
          </View>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${Math.min(100, progress * 100)}%` }]} />
          </View>
          <View style={styles.progressLabels}>
            <Text style={styles.progressSpent} numberOfLines={1}>
              {formatNaira(budget.spent)} of {formatNaira(budget.amount)} spent
            </Text>
            <View style={styles.percentBadge}>
              <Image source={rocketIcon} style={styles.percentBadgeIcon} resizeMode="contain" />
              <Text style={styles.percentBadgeText}>
                {formatPercentUsed(budget.spent, budget.amount)} used
              </Text>
            </View>
          </View>
        </View>

        {displayExpenses.length > 0 ? (
          <View style={styles.expenseListCard}>
            {displayExpenses.map((expense, index) => (
              <View
                key={expense.id}
                style={[
                  styles.expenseRow,
                  index === displayExpenses.length - 1 && styles.expenseRowLast,
                ]}
              >
                <View style={styles.expenseRowText}>
                  <Text style={styles.expenseTitle}>{expense.title}</Text>
                  <Text style={styles.expenseMeta}>{formatExpenseTime(expense.createdAt)}</Text>
                </View>
                <Text style={styles.expenseAmount}>-{formatNaira(expense.amount)}</Text>
              </View>
            ))}
          </View>
        ) : null}

        <View style={styles.actions}>
          <Pressable
            style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}
            onPress={() => router.replace(`/budget/${budgetId}`)}
          >
            <Text style={styles.primaryLabel}>View Budget Details</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [styles.secondaryLink, pressed && styles.pressed]}
            onPress={() => router.replace('/(tabs)')}
          >
            <Text style={styles.secondaryLabel}>Go to Home</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
