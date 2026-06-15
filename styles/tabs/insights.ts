import { StyleSheet } from 'react-native';

import { insightsLayout } from '@/constants/insights';

export const insightsTabStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    flex: 1,
  },
  body: {
    paddingHorizontal: insightsLayout.screenPaddingHorizontal,
    paddingTop: 24,
    gap: insightsLayout.sectionGap,
    backgroundColor: '#FFFFFF',
  },
});
