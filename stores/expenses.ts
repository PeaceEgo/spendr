import { create } from 'zustand';

export type LoggedExpense = {
  id: string;
  budgetId: string;
  title: string;
  amount: number;
  createdAt: number;
};

const EMPTY_EXPENSES: LoggedExpense[] = [];

type ExpenseState = {
  byBudgetId: Record<string, LoggedExpense[]>;
  getForBudget: (budgetId: string) => LoggedExpense[];
  addMany: (
    budgetId: string,
    items: ReadonlyArray<{ title: string; amount: number }>,
  ) => LoggedExpense[];
};

export const useExpensesStore = create<ExpenseState>((set, get) => ({
  byBudgetId: {},
  getForBudget: (budgetId) => get().byBudgetId[budgetId] ?? EMPTY_EXPENSES,
  addMany: (budgetId, items) => {
    const now = Date.now();
    const created: LoggedExpense[] = items.map((item, index) => ({
      id: `expense-${budgetId}-${now}-${index}`,
      budgetId,
      title: item.title,
      amount: item.amount,
      createdAt: now + index * 60_000,
    }));
    set((state) => ({
      byBudgetId: {
        ...state.byBudgetId,
        [budgetId]: [...(state.byBudgetId[budgetId] ?? EMPTY_EXPENSES), ...created],
      },
    }));
    return created;
  },
}));

/** Stable selector — never use `?? []` inline in useExpensesStore callbacks. */
export function selectExpensesForBudget(
  state: { byBudgetId: Record<string, LoggedExpense[]> },
  budgetId: string | undefined,
): LoggedExpense[] {
  if (!budgetId) return EMPTY_EXPENSES;
  return state.byBudgetId[budgetId] ?? EMPTY_EXPENSES;
}
