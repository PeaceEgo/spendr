/** Figma Smart Insights — pri/500 header, sec/300 score arc */
export const insightsColors = {
  headerBg: '#35529A',
  headerText: '#FFFFFF',
  headerMuted: 'rgba(255, 255, 255, 0.75)',
  scoreArc: '#E9C085',
  scoreTrack: '#FFFFFF',
  legendGood: '#41B75D',
  legendFair: '#E9C085',
  legendPoor: '#EA4335',
  sectionTitle: '#121926',
  sectionSubtitle: '#697586',
  rowDivider: '#E3E8EF',
  rowSubtitle: '#697586',
  rowSubtitleDanger: '#C3382C',
  guidanceBorder: '#CDD5DF',
  /** Figma Frame 2147232520 — guidance card icon box */
  guidanceIconBg: '#F2F2F2',
  guidanceFooter: '#94A3B8',
  /** Figma Frame 39 — shared across Warning / Danger / Safe badges */
  alertBadge: {
    bg: '#FFFFFF',
    border: '#F8C0BC',
    minHeight: 31,
  },
  alertWarning: {
    bg: '#FFFCF7',
    border: '#EECC9E',
    badgeText: '#C3382C',
    title: '#E2341D',
    body: '#697586',
  },
  alertDanger: {
    bg: '#FFF5F4',
    border: '#F8C0BC',
    badgeText: '#C3382C',
    title: '#E2341D',
    body: '#EA4335',
  },
  alertSafe: {
    bg: '#F0FFF4',
    border: '#A0DBAE',
    badgeText: '#C3382C',
    title: '#2B7A3E',
    body: '#697586',
  },
} as const;

export const insightsLayout = {
  headerBottomRadius: 30,
  screenPaddingHorizontal: 24,
  sectionGap: 24,
  cardBorderRadius: 13,
  cardPaddingVertical: 16,
  cardPaddingHorizontal: 14,
  cardGap: 10,
  healthRingSize: 94,
  spendingRingSize: 117,
  spendingRingStroke: 20,
  spendingRingSegmentGapDegrees: 3,
  guidanceIconWidth: 44,
  guidanceIconHeight: 40,
  guidanceIconRadius: 6,
  guidanceIconPaddingVertical: 6,
  guidanceIconPaddingHorizontal: 8,
  guidanceCardTopGap: 10,
  guidanceFooterIconSize: 16,
} as const;

export const insightsIcons = {
  guidanceBulb: require('@/assets/insights/guidance-bulb.png'),
  guidanceStars: require('@/assets/insights/guidance-stars.png'),
} as const;

export type SafeToSpendItem = {
  id: string;
  name: string;
  /** Matches `CATEGORY_ICONS` in budget-flow (e.g. shopping, transport, food). */
  categoryId: string;
  remainingLabel: string;
  dailyAmount: number;
  exceeded?: boolean;
};

export type InsightAlertVariant = 'warning' | 'danger' | 'safe';

export type InsightAlert = {
  id: string;
  variant: InsightAlertVariant;
  title: string;
  description: string;
  timestamp: string;
};

export type SpendingPatternSegment = {
  id: string;
  label: string;
  amount: number;
  color: string;
};

export type GuidanceInsight = {
  id: string;
  title: string;
  description: string;
};

/** Populated Smart Insights — matches Figma mock content */
export const MOCK_INSIGHTS = {
  periodLabel: 'This month',
  healthScore: 34,
  healthMaxScore: 100,
  healthSummary:
    'Movement and Shopping budgets are dragging your score. Bring them back on track to improve.',
  safeToSpend: [
    {
      id: 'shopping',
      name: 'Shopping',
      categoryId: 'shopping',
      remainingLabel: '₦124,000 left · 64 days',
      dailyAmount: 30_000,
    },
    {
      id: 'transport',
      name: 'Transportation',
      categoryId: 'transport',
      remainingLabel: '₦35,000 left · 12 days',
      dailyAmount: 7_000,
    },
    {
      id: 'sapa',
      name: 'Sapa Survival Scheme',
      categoryId: 'food',
      remainingLabel: 'Budget exceeded',
      dailyAmount: 0,
      exceeded: true,
    },
  ] satisfies SafeToSpendItem[],
  alerts: [
    {
      id: 'transport-warning',
      variant: 'warning',
      title: 'Transportation nearing its limit:',
      description:
        "At your current pace you'll exceed the ₦20,000 budget balance before the end of the cycle, you need to cut cost or risk lapsing your budget balance.",
      timestamp: 'Today · 12:00AM',
    },
    {
      id: 'shopping-danger',
      variant: 'danger',
      title: 'Shopping budget at its limit',
      description:
        "You are currently at your spending limit on your 'Shopping budget' and can no longer add expenses to this budget",
      timestamp: 'Today · 12:00AM',
    },
    {
      id: 'sapa-safe',
      variant: 'safe',
      title: 'Sapa Survival Scheme at a good pace',
      description:
        "You are still on track on 'Sapa Survival Scheme' and can safely keep adding expenses to this budget",
      timestamp: 'Today · 12:00AM',
    },
  ] satisfies InsightAlert[],
  spendingPatterns: {
    totalSpent: 530_000,
    segments: [
      {
        id: 'sapa',
        label: 'Sapa Survival Scheme',
        amount: 300_000,
        color: '#4062B9',
      },
      {
        id: 'transport',
        label: 'Transportation',
        amount: 180_000,
        color: '#41B75D',
      },
      {
        id: 'shopping',
        label: 'Shopping',
        amount: 30_000,
        color: '#E9C085',
      },
      {
        id: 'billings',
        label: 'Billings',
        amount: 20_000,
        color: '#ED6257',
      },
    ] satisfies SpendingPatternSegment[],
  },
  guidance: [
    {
      id: 'shopping-cut',
      title: 'Reduce expenses made on Shopping',
      description:
        'With your current spending on shopping recently, it might be best to cut cost in order to better manage your budget appropriately',
    },
    {
      id: 'sapa-track',
      title: 'Sapa Survival Scheme on Track',
      description:
        "You spent 8% less on this budget compared to other budgets created At this pace you'll finish under budget before the end of 12 days left",
    },
    {
      id: 'movement-split',
      title: 'Split Movement into daily limits',
      description:
        'Movement is a weekly budget. You have N8k left with 3 days to go. A N2,667/day mental cap will stop it from blowing out.',
    },
  ] satisfies GuidanceInsight[],
} as const;
