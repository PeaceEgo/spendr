import { StyleSheet } from 'react-native';

import { homeBudgetColors, homeBudgetLayout } from '@/constants/home-budgets';

export const homeProgressBarStyles = StyleSheet.create({
  track: {
    width: '100%',
    maxWidth: homeBudgetLayout.progressBarWidth,
    height: homeBudgetLayout.progressBarHeight,
    borderRadius: homeBudgetLayout.progressBarRadius,
    backgroundColor: homeBudgetColors.progressTrack,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  fill: {
    height: '100%',
    borderRadius: homeBudgetLayout.progressBarRadius,
  },
});
