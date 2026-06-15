import type { ImageSourcePropType } from 'react-native';

export const HOME_DESIGN_WIDTH = 430;

function cssAngleToPoints(angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    start: {
      x: 0.5 - Math.cos(rad) * 0.5,
      y: 0.5 - Math.sin(rad) * 0.5,
    },
    end: {
      x: 0.5 + Math.cos(rad) * 0.5,
      y: 0.5 + Math.sin(rad) * 0.5,
    },
  };
}

const headerGradientPoints = cssAngleToPoints(309.89);

export const HOME_HEADER_GRADIENT = {
  colors: ['#4062B9', '#1D2C53'] as const,
  locations: [0.6, 1] as const,
  start: headerGradientPoints.start,
  end: headerGradientPoints.end,
};

export const homeLayout = {
  screenPaddingHorizontal: 24,
  headerDesignHeight: 345,
  headerBottomRadius: 30,
  headerPaddingBottom: 16,
  contentGapBelowHeader: 26,
  cardWidth: 382,
  cardHeight: 91,
  cardBorderRadius: 13,
  cardPadding: 16,
  cardGap: 16,

  /** Figma icon wrapper — white box behind card icons */
  iconWrapperBorderRadius: 8,
  iconWrapperPaddingVertical: 5,
  iconWrapperPaddingHorizontal: 7,
  iconWrapperWidth: 38,
  iconWrapperHeight: 34,
  iconSize: 24,
  headerButtonWidth: 182,
  headerButtonHeight: 42,
  headerAvatarSize: 40,
  headerAvatarGap: 10,
  headerButtonGap: 18,
  primaryCtaWidth: 289,
  primaryCtaHeight: 48,
  emptyStateGapAboveTabBar: 12,
  footerHeight: 122,
  tabBarOuterPaddingVertical: 16,
  tabBarOuterPaddingHorizontal: 24,
  tabContainerWidth: 308,
  tabContainerHeight: 82,
  tabSize: 64,
} as const;

export const homeColors = {
  headerAvatarBg: '#E5B36D',
  headerBlue: '#3E597C',
  headerGradientEnd: '#1D2C53',
  primaryBlue: '#4062B9',
  activeTabBlue: '#607CC5',
  inactiveTabGray: '#E3E8EF',
  textPrimary: '#121926',
  textSecondary: '#222222',
  textMuted: '#697586',
  expenseHistoryBorder: '#898383',
  stayWithinLimitBg: '#D9F1DF',
  stayWithinLimitBorder: '#A0DBAE',
  trackHabitsBg: '#E8EBF5',
  trackHabitsBorder: '#BFCBE8',
  disciplineBg: '#FAF0E2',
  disciplineBorder: '#E9C085',
  footerShadow: '#0000000D',
} as const;

export type HomeFeatureCardConfig = {
  id: string;
  title: string;
  description: string;
  backgroundColor: string;
  borderColor: string;
  icon: ImageSourcePropType;
};

export const HOME_FEATURE_CARDS: HomeFeatureCardConfig[] = [
  {
    id: 'limits',
    title: 'Stay within limits',
    description: 'Get alerts before overspending your budgets',
    backgroundColor: homeColors.stayWithinLimitBg,
    borderColor: homeColors.stayWithinLimitBorder,
    icon: require('@/assets/home/rocket.png'),
  },
  {
    id: 'habits',
    title: 'Track spending habits',
    description: 'Understand where your money goes',
    backgroundColor: homeColors.trackHabitsBg,
    borderColor: homeColors.trackHabitsBorder,
    icon: require('@/assets/home/chart-trend.png'),
  },
  {
    id: 'discipline',
    title: 'Build better discipline',
    description: 'Create intentional spending plans',
    backgroundColor: homeColors.disciplineBg,
    borderColor: homeColors.disciplineBorder,
    icon: require('@/assets/home/discipline.png'),
  },
];
