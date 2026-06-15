import { StyleSheet } from 'react-native';

import { homeBudgetColors, homeBudgetLayout } from '@/constants/home-budgets';
import { homeColors } from '@/constants/home';
import { fonts } from '@/constants/fonts';

const {
  activeCardWidth,
  activeCardMinHeight,
  activeCardBorderRadius,
  activeCardPaddingVertical,
  activeCardPaddingHorizontal,
  activeCardGap,
  activeCardIconWidth,
  activeCardIconHeight,
  activeCardIconRadius,
  activeCardIconPaddingV,
  activeCardIconPaddingH,
  progressBarHeight,
  statusBarHeight,
  statusBarRadius,
  statusBarPaddingVertical,
  statusBarPaddingHorizontal,
} = homeBudgetLayout;

export const activeBudgetCardStyles = StyleSheet.create({
  card: {
    width: '100%',
    maxWidth: activeCardWidth,
    minHeight: activeCardMinHeight,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: homeBudgetColors.activeCardBorder,
    borderRadius: activeCardBorderRadius,
    paddingTop: activeCardPaddingVertical,
    paddingBottom: activeCardPaddingVertical,
    paddingHorizontal: activeCardPaddingHorizontal,
    flexDirection: 'column',
  },
  cardInner: {
    flexGrow: 1,
    minHeight: activeCardMinHeight - activeCardPaddingVertical * 2,
    gap: activeCardGap,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
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
    width: 24,
    height: 24,
  },
  headerText: {
    flex: 1,
    gap: 2,
  },
  title: {
    fontFamily: fonts.cabinBold,
    fontSize: 16,
    lineHeight: 25.6,
    fontWeight: '700',
    color: homeColors.textPrimary,
  },
  period: {
    fontFamily: fonts.cabin,
    fontSize: 13,
    lineHeight: 20.8,
    fontWeight: '400',
    color: homeColors.textMuted,
  },
  amountCol: {
    alignItems: 'flex-end',
    gap: 2,
  },
  amount: {
    fontFamily: fonts.cabinBold,
    fontSize: 16,
    lineHeight: 25.6,
    fontWeight: '700',
    color: homeColors.textPrimary,
  },
  amountLabel: {
    fontFamily: fonts.cabin,
    fontSize: 12,
    lineHeight: 19.2,
    fontWeight: '400',
    color: homeBudgetColors.remainingBlue,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: homeBudgetColors.activeCardDivider,
  },
  progressBlock: {
    gap: 10,
  },
  progressTrack: {
    width: '100%',
    height: progressBarHeight,
    borderRadius: 50,
    backgroundColor: homeBudgetColors.progressTrack,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 50,
  },
  spentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  spentText: {
    flex: 1,
    fontFamily: fonts.cabin,
    fontSize: 14,
    lineHeight: 22.4,
    fontWeight: '400',
    color: homeColors.textPrimary,
  },
  usageBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: homeBudgetColors.usageBadgeBg,
    borderColor: homeBudgetColors.usageBadgeBorder,
  },
  usageBadgeWarning: {
    backgroundColor: '#FFF9F0',
    borderColor: '#EECC9E',
  },
  usageBadgeDanger: {
    backgroundColor: '#FEF2F2',
    borderColor: '#F8C0BC',
  },
  usageIcon: {
    width: 16,
    height: 16,
  },
  usageText: {
    fontFamily: fonts.cabinBold,
    fontSize: 13,
    lineHeight: 20.8,
    fontWeight: '700',
    color: homeBudgetColors.usageBadgeText,
  },
  usageTextWarning: {
    color: homeBudgetColors.usageBadgeWarning,
  },
  usageTextDanger: {
    color: homeBudgetColors.usageBadgeDanger,
  },
  statusBar: {
    width: '100%',
    minHeight: statusBarHeight,
    borderRadius: statusBarRadius,
    paddingVertical: statusBarPaddingVertical,
    paddingHorizontal: statusBarPaddingHorizontal,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 'auto',
  },
  statusBarWithin: {
    backgroundColor: homeBudgetColors.withinLimitBg,
  },
  statusBarNearing: {
    backgroundColor: homeBudgetColors.nearingLimitBg,
  },
  statusBarAt: {
    backgroundColor: homeBudgetColors.atLimitBg,
  },
  statusLabel: {
    fontFamily: fonts.cabinBold,
    fontSize: 14,
    lineHeight: 22.4,
    fontWeight: '700',
  },
  statusLabelWithin: {
    color: homeBudgetColors.withinLimitText,
  },
  statusLabelNearing: {
    color: homeBudgetColors.nearingLimitText,
  },
  statusLabelAt: {
    color: homeBudgetColors.atLimitText,
  },
});
