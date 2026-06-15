import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useLayoutEffect } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { BudgetContextCard } from '@/components/expense/BudgetContextCard';
import { ExpenseFlowSheet } from '@/components/expense/ExpenseFlowSheet';
import { OrManualInputDivider } from '@/components/expense/OrManualInputDivider';
import { VoiceRecordHubCard } from '@/components/expense/VoiceRecordHubCard';
import { ensureBudgetInDraftStore, useBudgetDraftStore } from '@/stores/budget-draft';
import { useExpenseBudgetId } from '@/hooks/useExpenseBudgetId';
import { expenseFlowStyles as styles } from '@/styles/expense/flow';
import { expenseSheetStyles as sheetStyles } from '@/styles/expense/sheet';

export default function AddExpenseScreen() {
  const budgetId = useExpenseBudgetId();
  const budget = useBudgetDraftStore((s) => (budgetId ? s.budgets[budgetId] : undefined));

  useLayoutEffect(() => {
    if (budgetId) ensureBudgetInDraftStore(budgetId);
  }, [budgetId]);

  if (!budgetId || !budget) {
    return (
      <ExpenseFlowSheet title="Add Expense" onClose={() => router.back()}>
        <Text>Budget not found.</Text>
      </ExpenseFlowSheet>
    );
  }

  const openManualEntry = () => {
    router.push(`/expense/${budgetId}/manual`);
  };

  const startVoice = () => {
    router.push({
      pathname: '/expense/[budgetId]/voice',
      params: { budgetId },
    });
  };

  return (
    <ExpenseFlowSheet title="Add Expense" onClose={() => router.back()}>
      <ScrollView
        style={sheetStyles.body}
        contentContainerStyle={[sheetStyles.scrollContent, { paddingBottom: 24 }]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <BudgetContextCard
          budgetTitle={budget.title}
          budgetAmount={budget.amount}
          spent={budget.spent}
        />

        <Text style={styles.promptText}>How do you want to log this expense</Text>

        <VoiceRecordHubCard onStartRecording={startVoice} />

        <OrManualInputDivider />

        <Pressable
          style={({ pressed }) => [styles.amountInputRow, pressed && styles.pressed]}
          onPress={openManualEntry}
          accessibilityRole="button"
          accessibilityLabel="Open manual expense entry"
        >
          <Text style={styles.amountInputPlaceholder}>Type expense amount</Text>
          <Ionicons name="arrow-forward" size={24} color="#141B34" />
        </Pressable>
      </ScrollView>
    </ExpenseFlowSheet>
  );
}
