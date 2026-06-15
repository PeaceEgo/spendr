import { StyleSheet } from 'react-native';

import { homeLayout } from '@/constants/home';
import { Colors } from '@/constants/Colors';

export const homeStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  scrollContentEmpty: {
    paddingBottom: homeLayout.emptyStateGapAboveTabBar,
  },
  scrollContentBudgets: {
    paddingBottom: homeLayout.emptyStateGapAboveTabBar,
  },
  cardsSection: {
    paddingHorizontal: homeLayout.screenPaddingHorizontal,
    paddingTop: homeLayout.contentGapBelowHeader,
    gap: 12,
    backgroundColor: Colors.white,
  },
  budgetsContent: {
    paddingHorizontal: homeLayout.screenPaddingHorizontal,
    paddingTop: homeLayout.contentGapBelowHeader,
    gap: 20,
    backgroundColor: Colors.white,
  },
});
