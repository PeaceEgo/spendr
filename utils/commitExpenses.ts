import { useBudgetDraftStore } from '@/stores/budget-draft';
import { useExpensesStore, type LoggedExpense } from '@/stores/expenses';

/** Persists expenses and updates budget spent totals. */
export function commitExpensesToBudget(
  budgetId: string,
  items: ReadonlyArray<{ title: string; amount: number }>,
): LoggedExpense[] {
  const created = useExpensesStore.getState().addMany(budgetId, items);
  const total = items.reduce((sum, item) => sum + item.amount, 0);
  useBudgetDraftStore.getState().addSpentToBudget(budgetId, total);
  return created;
}
