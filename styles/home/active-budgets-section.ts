import { StyleSheet } from 'react-native';

import { fonts } from '@/constants/fonts';
import { homeColors } from '@/constants/home';
import { homeBudgetLayout } from '@/constants/home-budgets';

export const activeBudgetsSectionStyles = StyleSheet.create({
  section: {
    width: '100%',
    gap: 14,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fonts.cabinBold,
    fontSize: 16,
    lineHeight: 25.6,
    fontWeight: '700',
    color: homeColors.textPrimary,
  },
  viewAllPressable: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  viewAll: {
    fontFamily: fonts.cabinBold,
    fontSize: 14,
    lineHeight: 22.4,
    fontWeight: '700',
    color: homeColors.textMuted,
  },
  list: {
    gap: homeBudgetLayout.activeCardGap,
  },
});
