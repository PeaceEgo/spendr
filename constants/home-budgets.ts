import type { ImageSourcePropType } from 'react-native';

export const BUDGET_TAB_HEADER_COLORS = {
  light: '#E9C085',
  dark: '#836C4B',
} as const;

const lightTransparent = 'rgba(233, 192, 133, 0)';

/** Full header base — keeps top-left and top-right light */
export const BUDGET_TAB_HEADER_GRADIENT_BASE = {
  colors: [BUDGET_TAB_HEADER_COLORS.light, BUDGET_TAB_HEADER_COLORS.light] as const,
  locations: [0, 1] as const,
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
};

/** Dark lower-left only (does not reach the top) */
export const BUDGET_TAB_HEADER_GRADIENT_LEFT = {
  colors: [BUDGET_TAB_HEADER_COLORS.dark, lightTransparent] as const,
  locations: [0, 1] as const,
  start: { x: 0, y: 1 },
  end: { x: 0.58, y: 0.12 },
};

/** Dark lower-right only (does not reach the top) */
export const BUDGET_TAB_HEADER_GRADIENT_RIGHT = {
  colors: [lightTransparent, BUDGET_TAB_HEADER_COLORS.dark] as const,
  locations: [0, 1] as const,
  start: { x: 0.42, y: 0.1 },
  end: { x: 1, y: 1 },
};

export type BudgetLimitStatus = 'within_limit' | 'nearing_limit' | 'at_limit';

export type HomeActiveBudget = {
  id: string;
  name: string;
  periodLabel: string;
  limit: number;
  spent: number;
  icon: ImageSourcePropType;
  iconBackground: string;
};

export const homeBudgetColors = {
  overviewBorder: '#E3E8EF',
  progressTrack: '#DDDDDD',
  spentRed: '#EA4335',
  remainingBlue: '#4062B9',
  withinLimitBg: '#D9F1DF',
  withinLimitText: '#36994E',
  nearingLimitBg: '#FAF0E2',
  nearingLimitText: '#8F5200',
  nearingLimitProgress: '#F58E00',
  atLimitBg: '#FBD9D7',
  atLimitText: '#C3382C',
  atLimitProgress: '#EA4335',
  withinLimitProgress: '#41B75D',
  usageBadgeBg: '#FEFEF3',
  usageBadgeBorder: '#F2F2F2',
  usageBadgeText: '#36994E',
  usageBadgeWarning: '#F58E00',
  usageBadgeDanger: '#EA4335',
  activeCardBorder: '#CDD5DF',
  activeCardDivider: '#E3E8EF',
  activeCardIconBoxBg: '#F2F2F2',
} as const;

export const homeBudgetLayout = {
  overviewWidth: 382,
  overviewMinHeight: 215,
  overviewBorderRadius: 12,
  overviewPaddingVertical: 16,
  overviewPaddingHorizontal: 14,
  overviewGap: 12,
  progressBarWidth: 354,
  progressBarHeight: 10,
  progressBarRadius: 50,
  activeCardWidth: 382,
  activeCardMinHeight: 220,
  activeCardBorderRadius: 13,
  activeCardPaddingVertical: 16,
  activeCardPaddingHorizontal: 14,
  activeCardGap: 14,
  activeCardIconWidth: 44,
  activeCardIconHeight: 40,
  activeCardIconRadius: 6,
  activeCardIconPaddingV: 6,
  activeCardIconPaddingH: 8,
  statusBarHeight: 41,
  statusBarRadius: 8,
  statusBarPaddingVertical: 9,
  statusBarPaddingHorizontal: 10,
} as const;

export function getBudgetLimitStatus(spent: number, limit: number): BudgetLimitStatus {
  if (limit <= 0) return 'within_limit';
  const ratio = spent / limit;
  if (ratio >= 0.9) return 'at_limit';
  if (ratio >= 0.7) return 'nearing_limit';
  return 'within_limit';
}

/** Budgets created, no expenses yet — matches Figma “0% used” state. */
export const MOCK_HOME_BUDGETS_NO_EXPENSES: HomeActiveBudget[] = [
  {
    id: 'sapa',
    name: 'Sapa Survival Scheme',
    periodLabel: 'Monthly · 30 days left',
    limit: 150_000,
    spent: 0,
    icon: require('@/assets/budget/categories/food.png'),
    iconBackground: '#F2F2F2',
  },
  {
    id: 'movement',
    name: 'Movement',
    periodLabel: 'Weekly · 7 days left',
    limit: 100_000,
    spent: 0,
    icon: require('@/assets/budget/categories/transport.png'),
    iconBackground: '#F2F2F2',
  },
  {
    id: 'netflix',
    name: 'Netflix and Chill',
    periodLabel: 'Monthly · 30 days left',
    limit: 100_000,
    spent: 0,
    icon: require('@/assets/budget/categories/entertainment.png'),
    iconBackground: '#F2F2F2',
  },
];

/** Budgets with spending — within / nearing / at limit variants. */
export const MOCK_HOME_BUDGETS_WITH_EXPENSES: HomeActiveBudget[] = [
  {
    id: 'shopping',
    name: 'Shopping',
    periodLabel: 'Rolling · 64 days left',
    limit: 1_000_000,
    spent: 100_000,
    icon: require('@/assets/budget/categories/shopping.png'),
    iconBackground: '#F2F2F2',
  },
  {
    id: 'transport',
    name: 'Transportation',
    periodLabel: 'Monthly · 12 days left',
    limit: 125_000,
    spent: 90_000,
    icon: require('@/assets/budget/categories/transport.png'),
    iconBackground: '#F2F2F2',
  },
  {
    id: 'feeding',
    name: 'Feeding',
    periodLabel: 'Monthly · 8 days left',
    limit: 200_000,
    spent: 190_000,
    icon: require('@/assets/budget/categories/food.png'),
    iconBackground: '#F2F2F2',
  },
];

export function summarizeHomeBudgets(budgets: HomeActiveBudget[]) {
  const planned = budgets.reduce((sum, b) => sum + b.limit, 0);
  const spent = budgets.reduce((sum, b) => sum + b.spent, 0);
  const balance = Math.max(0, planned - spent);
  const overallProgress = planned > 0 ? spent / planned : 0;
  return { planned, spent, balance, overallProgress };
}
