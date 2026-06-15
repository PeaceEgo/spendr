import { create } from 'zustand';

import {
  daysLeftForPeriod,
  formatPeriodSubtitle,
  getCategoryIcon,
  type BudgetPeriodId,
  type BudgetThreshold,
} from '@/constants/budget-flow';
import {
  MOCK_HOME_BUDGETS_NO_EXPENSES,
  MOCK_HOME_BUDGETS_WITH_EXPENSES,
  type HomeActiveBudget,
} from '@/constants/home-budgets';
import { useHomeBudgetsStore } from '@/stores/home-budgets';

export type SavedBudget = {
  id: string;
  title: string;
  amount: number;
  period: BudgetPeriodId;
  threshold: BudgetThreshold;
  categoryIds: string[];
  spent: number;
  daysLeft: number;
  periodSubtitle: string;
};

const DEFAULT_DRAFT = {
  title: '',
  amount: 0,
  amountText: '',
  period: 'monthly' as BudgetPeriodId,
  rollingDays: 0,
  threshold: 70 as BudgetThreshold,
  categoryIds: ['all'] as string[],
};

type BudgetDraftState = {
  draft: typeof DEFAULT_DRAFT;
  budgets: Record<string, SavedBudget>;
  updateDraft: (patch: Partial<typeof DEFAULT_DRAFT>) => void;
  resetDraft: () => void;
  loadBudgetIntoDraft: (id: string) => void;
  saveDraftAsBudget: () => string;
  getBudget: (id: string) => SavedBudget | undefined;
  updateBudgetThreshold: (id: string, threshold: BudgetThreshold) => void;
  addSpentToBudget: (id: string, amount: number) => void;
  deleteBudget: (id: string) => void;
};

function primaryCategoryId(categoryIds: string[]): string {
  const specific = categoryIds.filter((id) => id !== 'all');
  return specific[0] ?? 'food';
}

function savedToHomeActive(b: SavedBudget): HomeActiveBudget {
  const iconKey = primaryCategoryId(b.categoryIds);
  return {
    id: b.id,
    name: b.title,
    periodLabel: b.periodSubtitle,
    limit: b.amount,
    spent: b.spent,
    icon: getCategoryIcon(iconKey),
    iconBackground: '#F2F2F2',
  };
}

function homeActiveToSaved(b: HomeActiveBudget): SavedBudget {
  const period: BudgetPeriodId = b.periodLabel.startsWith('Weekly')
    ? 'weekly'
    : b.periodLabel.startsWith('Rolling')
      ? 'rolling'
      : 'monthly';
  const rollingMatch = b.periodLabel.match(/Rolling · (\d+) day/);
  const daysLeft =
    period === 'weekly' ? 7 : period === 'rolling' ? Number(rollingMatch?.[1] ?? 64) : 30;
  return {
    id: b.id,
    title: b.name,
    amount: b.limit,
    period,
    threshold: 70,
    categoryIds:
      b.id === 'movement' || b.id === 'transport'
        ? ['transport']
        : b.id === 'shopping'
          ? ['shopping']
          : b.id === 'netflix'
            ? ['entertainment']
            : ['food'],
    spent: b.spent,
    daysLeft,
    periodSubtitle: b.periodLabel,
  };
}

/** Keeps budget details / threshold editing working for demo home budgets. */
/** Route param from expo-router may be string | string[] and can briefly clear on re-render. */
export function normalizeBudgetRouteId(
  id: string | string[] | undefined,
): string | undefined {
  if (typeof id === 'string' && id.length > 0) return id;
  if (Array.isArray(id) && typeof id[0] === 'string' && id[0].length > 0) return id[0];
  return undefined;
}

/** Details screen reads from draft store; home list may be the only copy after refresh. */
export function ensureBudgetInDraftStore(id: string): boolean {
  const { budgets } = useBudgetDraftStore.getState();
  if (budgets[id]) return true;

  const homeBudget = useHomeBudgetsStore.getState().budgets.find((b) => b.id === id);
  if (!homeBudget) return false;

  useBudgetDraftStore.setState({
    budgets: { ...budgets, [id]: homeActiveToSaved(homeBudget) },
  });
  return true;
}

export function seedMockBudgetsForHome(mode: 'no_expenses' | 'with_expenses') {
  const mocks =
    mode === 'with_expenses'
      ? MOCK_HOME_BUDGETS_WITH_EXPENSES
      : MOCK_HOME_BUDGETS_NO_EXPENSES;
  useBudgetDraftStore.setState((state) => {
    const budgets = { ...state.budgets };
    for (const mock of mocks) {
      budgets[mock.id] = homeActiveToSaved(mock);
    }
    return { budgets };
  });
}

function syncHomeBudgets(budgets: Record<string, SavedBudget>) {
  const list = Object.values(budgets).map(savedToHomeActive);
  if (list.length === 0) {
    useHomeBudgetsStore.getState().clearBudgets();
  } else {
    useHomeBudgetsStore.setState({ mode: 'no_expenses', budgets: list });
  }
}

export const useBudgetDraftStore = create<BudgetDraftState>((set, get) => ({
  draft: { ...DEFAULT_DRAFT },
  budgets: {},
  updateDraft: (patch) =>
    set((state) => ({
      draft: { ...state.draft, ...patch },
    })),
  resetDraft: () => set({ draft: { ...DEFAULT_DRAFT } }),
  loadBudgetIntoDraft: (id) => {
    const budget = get().budgets[id];
    if (!budget) return;
    set({
      draft: {
        title: budget.title,
        amount: budget.amount,
        amountText: budget.amount.toLocaleString('en-NG'),
        period: budget.period,
        rollingDays: budget.period === 'rolling' ? budget.daysLeft : 0,
        threshold: budget.threshold,
        categoryIds: [...budget.categoryIds],
      },
    });
  },
  saveDraftAsBudget: () => {
    const { draft } = get();
    const id = `budget-${Date.now()}`;
    const daysLeft = daysLeftForPeriod(draft.period, draft.rollingDays);
    const periodSubtitle = formatPeriodSubtitle(draft.period, draft.rollingDays);
    const saved: SavedBudget = {
      id,
      title: draft.title.trim() || 'Untitled budget',
      amount: draft.amount,
      period: draft.period,
      threshold: draft.threshold,
      categoryIds: [...draft.categoryIds],
      spent: 0,
      daysLeft,
      periodSubtitle,
    };
    const budgets = { ...get().budgets, [id]: saved };
    set({ budgets });
    syncHomeBudgets(budgets);
    return id;
  },
  getBudget: (id) => get().budgets[id],
  updateBudgetThreshold: (id, threshold) => {
    const budget = get().budgets[id];
    if (!budget) return;
    const budgets = { ...get().budgets, [id]: { ...budget, threshold } };
    set({ budgets });
    syncHomeBudgets(budgets);
  },
  addSpentToBudget: (id, amount) => {
    const budget = get().budgets[id];
    if (!budget || amount <= 0) return;
    const spent = budget.spent + amount;
    const budgets = { ...get().budgets, [id]: { ...budget, spent } };
    set({ budgets });
    syncHomeBudgets(budgets);
  },
  deleteBudget: (id) => {
    const { [id]: _, ...rest } = get().budgets;
    set({ budgets: rest });
    syncHomeBudgets(rest);
  },
}));
