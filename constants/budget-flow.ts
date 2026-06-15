import type { ImageSourcePropType } from 'react-native';

export const BUDGET_THRESHOLDS = [50, 70, 80, 90] as const;
export type BudgetThreshold = (typeof BUDGET_THRESHOLDS)[number];

/** Options shown when adjusting threshold on budget details (Figma: 50 / 70 / 90). */
export const ADJUST_THRESHOLD_OPTIONS = [
  {
    value: 50 as const,
    label: 'Early',
    description:
      'Half allocated budget balance spent, maximum time to course-correct.',
  },
  {
    value: 70 as const,
    label: 'Balanced',
    description:
      'Most preferred choice, balanced and flexible enough when tracking spendings.',
  },
  {
    value: 90 as const,
    label: 'Late',
    description:
      'Alerts when spendings reach its limit, not the preferred choice but very effective.',
  },
] as const;

export function thresholdAmountAtPercent(budgetAmount: number, percent: number): number {
  return Math.round((Math.max(0, budgetAmount) * percent) / 100);
}

export const BUDGET_PERIODS = [
  { id: 'monthly' as const, label: 'Monthly' },
  { id: 'weekly' as const, label: 'Weekly' },
  { id: 'rolling' as const, label: 'Rolling' },
];

export type BudgetPeriodId = (typeof BUDGET_PERIODS)[number]['id'];

export type BudgetCategoryOption = {
  id: string;
  label: string;
  emoji: string;
};

export const BUDGET_CATEGORIES: BudgetCategoryOption[] = [
  { id: 'all', label: 'All', emoji: '✨' },
  { id: 'food', label: 'Food', emoji: '🍱' },
  { id: 'transport', label: 'Transport', emoji: '🚗' },
  { id: 'shopping', label: 'Shopping', emoji: '🛍️' },
  { id: 'bills', label: 'Bills', emoji: '📄' },
  { id: 'health', label: 'Health', emoji: '💊' },
  { id: 'groceries', label: 'Groceries', emoji: '🛒' },
  { id: 'fitness', label: 'Fitness', emoji: '💪' },
  { id: 'education', label: 'Education', emoji: '📚' },
  { id: 'entertainment', label: 'Entertainment', emoji: '🎬' },
  { id: 'others', label: 'Others', emoji: '➕' },
];

export const budgetFlowColors = {
  inputBorder: '#E3E8EF',
  inputPlaceholder: '#697586',
  labelText: '#121926',
  thresholdSelectedBg: '#BF955B',
  thresholdSelectedText: '#FFFFFF',
  thresholdBorder: '#E3E8EF',
  periodSelectedBg: '#E8EBF5',
  periodSelectedText: '#121926',
  categorySelectedBg: '#E8EBF5',
  categorySelectedBorder: '#4062B9',
  reviewCardBg: '#4062B9',
  reviewCardGradientEnd: '#1D2C53',
  infoBoxBg: '#F2F2F2',
  infoBoxBorder: '#CDD5DF',
  deleteRed: '#EA4335',
  deleteRedBg: '#FBD9D7',
} as const;

export const budgetFlowLayout = {
  inputHeight: 52,
  inputRadius: 10,
  inputPaddingH: 16,
  inputPaddingV: 14,
  chipRadius: 50,
  reviewCardWidth: 382,
  reviewCardMinHeight: 270,
  reviewCardRadius: 18,
  reviewCardPadding: 16,
  reviewCardGap: 10,
  reviewProgressBarWidth: 350,
  reviewProgressBarHeight: 7,
  reviewProgressLabelGap: 4,
  reviewCategoryPillWidth: 98,
  reviewCategoryPillHeight: 31,
  reviewCategoryPillPaddingV: 8,
  reviewCategoryPillPaddingH: 16,
  reviewCategoryPillGap: 4,
  reviewCategoryPillRadius: 50,
  reviewCategoryPillBg: '#FFFFFF40',
  reviewCategoryPillBorder: '#E3E8EF',
  reviewAmountFontSize: 36,
  reviewScreenPaddingH: 24,
  reviewContentGap: 16,
  reviewActionsGap: 12,
  detailsHeaderRadius: 30,
  detailsContentPaddingH: 24,
  detailsStatCardRadius: 10,
  detailsStatCardBg: '#E3E8EF',
  detailsStatCardPaddingV: 8,
  detailsStatCardPaddingH: 12,
  detailsStatCardGap: 10,
  detailsStatRowGap: 12,
  detailsBodyGap: 20,
  detailsProgressHeight: 8,
  thresholdSheetHeightRatio: 0.7,
  thresholdSuccessSheetPaddingTop: 28,
  thresholdSheetRadius: 24,
  thresholdSheetPaddingH: 24,
  thresholdSheetContentGap: 12,
  thresholdSheetOptionRadius: 10,
  thresholdSheetOptionPaddingV: 12,
  thresholdSheetOptionPaddingH: 12,
  thresholdSheetButtonHeight: 50,
  thresholdSheetButtonRadius: 50,
  thresholdSheetActionsGap: 12,
} as const;

export const budgetFlowIcons = {
  alertBell: require('@/assets/budget/alert-bell.png'),
  shieldHonor: require('@/assets/budget/shield-honor.png'),
  emptyExpenses: require('@/assets/budget/empty-expenses.png'),
  checkCircle: require('@/assets/budget/check-circle.png'),
} as const;

export const CATEGORY_ICONS: Record<string, ImageSourcePropType> = {
  all: require('@/assets/budget/categories/all.png'),
  food: require('@/assets/budget/categories/food.png'),
  transport: require('@/assets/intro/car.png'),
  shopping: require('@/assets/budget/categories/shopping.png'),
  bills: require('@/assets/budget/categories/bills.png'),
  health: require('@/assets/budget/categories/health.png'),
  groceries: require('@/assets/budget/categories/groceries.png'),
  fitness: require('@/assets/budget/categories/fitness.png'),
  education: require('@/assets/budget/categories/education.png'),
  entertainment: require('@/assets/budget/categories/entertainment.png'),
  others: require('@/assets/budget/categories/others.png'),
};

export function getCategoryIcon(categoryId: string): ImageSourcePropType {
  return CATEGORY_ICONS[categoryId] ?? CATEGORY_ICONS.others;
}

/** Ordered category ids for display (excludes "all"). */
export function getSelectedCategoryIds(categoryIds: string[]): string[] {
  if (categoryIds.includes('all') || categoryIds.length === 0) {
    return ['all'];
  }
  return categoryIds.filter((id) => id !== 'all');
}

export function periodLabel(id: BudgetPeriodId): string {
  return BUDGET_PERIODS.find((p) => p.id === id)?.label ?? 'Monthly';
}

export const ROLLING_DAYS_PLACEHOLDER = 'Enter amount of days';

export function daysLeftForPeriod(period: BudgetPeriodId, rollingDays = 0): number {
  if (period === 'weekly') return 7;
  if (period === 'monthly') return 30;
  return rollingDays > 0 ? rollingDays : 0;
}

export function formatPeriodSubtitle(period: BudgetPeriodId, rollingDays = 0): string {
  if (period === 'weekly') return 'Weekly · 7 days left';
  if (period === 'monthly') return 'Monthly · 30 days left';
  if (rollingDays > 0) {
    const dayLabel = rollingDays === 1 ? '1 day left' : `${rollingDays} days left`;
    return `Rolling · ${dayLabel}`;
  }
  return 'Rolling';
}

export function categoryLabels(ids: string[]): string[] {
  if (ids.includes('all')) return ['All'];
  return ids
    .map((id) => BUDGET_CATEGORIES.find((c) => c.id === id)?.label)
    .filter((l): l is string => Boolean(l));
}

/** Categories shown on the review card (max 2 pills + overflow count). */
export function getReviewCategoryDisplay(categoryIds: string[]) {
  const ids = getSelectedCategoryIds(categoryIds);
  if (ids.includes('all')) {
    return { visibleIds: ['all'] as string[], extraCount: 0 };
  }
  const visibleIds = ids.slice(0, 2);
  const extraCount = Math.max(0, ids.length - visibleIds.length);
  return { visibleIds, extraCount };
}

export function formatCategorySummary(ids: string[], maxVisible = 2): string {
  const labels = categoryLabels(ids.filter((id) => id !== 'all'));
  if (labels.length <= maxVisible) return labels.join(', ');
  return `${labels.slice(0, maxVisible).join(', ')} + ${labels.length - maxVisible} more`;
}
