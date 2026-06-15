import { create } from 'zustand';

import {
  MOCK_HOME_BUDGETS_NO_EXPENSES,
  MOCK_HOME_BUDGETS_WITH_EXPENSES,
  type HomeActiveBudget,
} from '@/constants/home-budgets';

export type HomeBudgetsMode = 'empty' | 'no_expenses' | 'with_expenses';

type HomeBudgetsState = {
  mode: HomeBudgetsMode;
  budgets: HomeActiveBudget[];
  setMode: (mode: HomeBudgetsMode) => void;
  activateNoExpenses: () => void;
  activateWithExpenses: () => void;
  clearBudgets: () => void;
};

export const useHomeBudgetsStore = create<HomeBudgetsState>((set) => ({
  mode: 'empty',
  budgets: [],
  setMode: (mode) =>
    set({
      mode,
      budgets:
        mode === 'no_expenses'
          ? MOCK_HOME_BUDGETS_NO_EXPENSES
          : mode === 'with_expenses'
            ? MOCK_HOME_BUDGETS_WITH_EXPENSES
            : [],
    }),
  activateNoExpenses: () =>
    set({ mode: 'no_expenses', budgets: MOCK_HOME_BUDGETS_NO_EXPENSES }),
  activateWithExpenses: () =>
    set({ mode: 'with_expenses', budgets: MOCK_HOME_BUDGETS_WITH_EXPENSES }),
  clearBudgets: () => set({ mode: 'empty', budgets: [] }),
}));
