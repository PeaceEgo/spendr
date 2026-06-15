import { StyleSheet } from 'react-native';

import { insightsColors, insightsLayout } from '@/constants/insights';
import { homeBudgetColors, homeBudgetLayout } from '@/constants/home-budgets';
import { fonts } from '@/constants/fonts';

const {
  activeCardIconWidth,
  activeCardIconHeight,
  activeCardIconRadius,
  activeCardIconPaddingV,
  activeCardIconPaddingH,
} = homeBudgetLayout;

export const insightsSectionStyles = StyleSheet.create({
  section: {
    gap: 10,
  },
  sectionTitle: {
    fontFamily: "Cabin",
    fontSize: 16,
    lineHeight: 25.6,
    fontWeight: 'semibold',
    color: insightsColors.sectionTitle,
  },
  sectionSubtitle: {
    fontFamily: fonts.cabin,
    fontSize: 14,
    lineHeight: 22.4,
    color: insightsColors.sectionSubtitle,
    marginTop: -4,
    marginBottom: 4,
  },
  listCard: {
    overflow: 'hidden',
  },
  rowDivider: {
    height: 1,
    backgroundColor: insightsColors.rowDivider,
    marginHorizontal: insightsLayout.cardPaddingHorizontal,
  },
  safeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: insightsLayout.cardPaddingVertical,
    paddingHorizontal: insightsLayout.cardPaddingHorizontal,
    gap: 12,
  },
  iconBox: {
    width: activeCardIconWidth,
    height: activeCardIconHeight,
    borderRadius: activeCardIconRadius,
    backgroundColor: homeBudgetColors.activeCardIconBoxBg,
    paddingVertical: activeCardIconPaddingV,
    paddingHorizontal: activeCardIconPaddingH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    width: 28,
    height: 28,
  },
  safeTextCol: {
    flex: 1,
    gap: 2,
  },
  safeTitle: {
    fontFamily: fonts.cabinBold,
    fontSize: 16,
    fontWeight: 'semibold',
    lineHeight: 25.6,
    color: insightsColors.sectionTitle,
  },
  safeSubtitle: {
    fontFamily: fonts.cabin,
    fontSize: 14,
    lineHeight: 22.4,
    color: insightsColors.rowSubtitle,
  },
  safeSubtitleDanger: {
    color: insightsColors.rowSubtitleDanger,
  },
  
  safeAmountRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
    maxWidth: 140,
    flexShrink: 0,
  },
  safeAmount: {
    fontFamily: fonts.cabinBold,
    fontSize: 16,
    lineHeight: 25.6,
    color: '#222222',
  },
  safeAmountToday: {
    fontFamily: fonts.cabin,
    fontSize: 14,
    lineHeight: 22.4,
    color: insightsColors.rowSubtitle,
  },
  alertStack: {
    gap: insightsLayout.cardGap,
  },
  patternsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingTop: 8,
  },
  patternsCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  patternsTotal: {
    fontFamily: fonts.cabinBold,
    fontSize: 18,
    lineHeight: 28.8,
    color: insightsColors.sectionTitle,
  },
  patternsTotalLabel: {
    fontFamily: fonts.cabin,
    fontSize: 12,
    lineHeight: 19.2,
    color: insightsColors.sectionSubtitle,
  },
  legendCol: {
    flex: 1,
    gap: 10,
  },
  patternLegendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  patternLegendLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  patternSwatch: {
    width: 16,
    height: 15,
    borderRadius: 5,
  },
  patternLabel: {
    fontFamily: fonts.cabin,
    fontSize: 12,
    lineHeight: 19.2,
    color: insightsColors.sectionTitle,
    flex: 1,
  },
  patternAmount: {
    fontFamily: fonts.cabinBold,
    fontSize: 12,
    lineHeight: 19.2,
    color: insightsColors.sectionTitle,
  },
});
