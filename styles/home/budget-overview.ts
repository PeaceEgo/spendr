import { StyleSheet } from 'react-native';

import { homeBudgetColors, homeBudgetLayout } from '@/constants/home-budgets';
import { homeColors } from '@/constants/home';
import { fonts } from '@/constants/fonts';

export const budgetOverviewStyles = StyleSheet.create({
  card: {
    width: '100%',
    maxWidth: homeBudgetLayout.overviewWidth,
    minHeight: homeBudgetLayout.overviewMinHeight,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: homeBudgetColors.overviewBorder,
    borderRadius: homeBudgetLayout.overviewBorderRadius,
    paddingTop: homeBudgetLayout.overviewPaddingVertical,
    paddingBottom: homeBudgetLayout.overviewPaddingVertical,
    paddingHorizontal: homeBudgetLayout.overviewPaddingHorizontal,
    gap: homeBudgetLayout.overviewGap,
  },
  title: {
    fontFamily: fonts.cabinBold,
    fontSize: 16,
    lineHeight: 25.6,
    fontWeight: '700',
    color: homeColors.textPrimary,
  },
  divider: {
    height: 1,
    backgroundColor: homeBudgetColors.overviewBorder,
    width: '100%',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  statCol: {
    flex: 1,
    gap: 4,
  },
  statLabel: {
    fontFamily: fonts.cabin,
    fontSize: 13,
    lineHeight: 20.8,
    fontWeight: '400',
    color: homeColors.textMuted,
  },
  statValue: {
    fontFamily: fonts.cabinBold,
    fontSize: 16,
    lineHeight: 25.6,
    fontWeight: '700',
    color: homeColors.textPrimary,
  },
  statValueSpent: {
    color: homeBudgetColors.spentRed,
  },
  progressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressLabel: {
    fontFamily: fonts.cabin,
    fontSize: 14,
    lineHeight: 22.4,
    fontWeight: '400',
    color: homeColors.textMuted,
  },
  progressPercent: {
    fontFamily: fonts.cabinBold,
    fontSize: 14,
    lineHeight: 22.4,
    fontWeight: '700',
    color: homeColors.textPrimary,
  },
});
