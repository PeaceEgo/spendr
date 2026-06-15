import { StyleSheet } from 'react-native';

import { fonts } from '@/constants/fonts';
import { insightsColors, insightsLayout } from '@/constants/insights';

export const insightsAlertStyles = StyleSheet.create({
  card: {
    borderRadius: insightsLayout.cardBorderRadius,
    borderWidth: 1,
    paddingVertical: insightsLayout.cardPaddingVertical,
    paddingHorizontal: insightsLayout.cardPaddingHorizontal,
    gap: 10,
  },
  badge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    minHeight: insightsColors.alertBadge.minHeight,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: insightsColors.alertBadge.bg,
    borderColor: insightsColors.alertBadge.border,
  },
  badgeText: {
    fontFamily: fonts.cabinBold,
    fontSize: 12,
    lineHeight: 19.2,
  },
  title: {
    fontFamily: fonts.cabinBold,
    fontSize: 16,
    lineHeight: 25.6,
  },
  body: {
    fontFamily: fonts.cabin,
    fontSize: 14,
    lineHeight: 22.4,
    
    borderBottomWidth: 1,
    borderBottomColor: insightsColors.rowDivider,
    paddingBottom: 10,
  },
  timestamp: {
    fontFamily: fonts.cabin,
    fontSize: 12,
    lineHeight: 19.2,
    color: insightsColors.sectionSubtitle,
  },
});
