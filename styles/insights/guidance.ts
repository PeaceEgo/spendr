import { StyleSheet } from 'react-native';

import { insightsColors, insightsLayout } from '@/constants/insights';
import { fonts } from '@/constants/fonts';

const {
  guidanceIconWidth,
  guidanceIconHeight,
  guidanceIconRadius,
  guidanceIconPaddingVertical,
  guidanceIconPaddingHorizontal,
  guidanceCardTopGap,
  guidanceFooterIconSize,
} = insightsLayout;

export const insightsGuidanceStyles = StyleSheet.create({
  section: {
    gap: 10,
  },
  sectionTitle: {
    fontFamily: fonts.cabinBold,
    fontSize: 18,
    lineHeight: 28.8,
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
  cardStack: {
    gap: insightsLayout.cardGap,
  },
  card: {
    borderRadius: insightsLayout.cardBorderRadius,
    borderWidth: 1,
    borderColor: insightsColors.guidanceBorder,
    backgroundColor: '#FFFFFF',
    paddingVertical: insightsLayout.cardPaddingVertical,
    paddingHorizontal: insightsLayout.cardPaddingHorizontal,
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: guidanceCardTopGap,
  },
  iconBox: {
    width: guidanceIconWidth,
    height: guidanceIconHeight,
    borderRadius: guidanceIconRadius,
    backgroundColor: insightsColors.guidanceIconBg,
    paddingVertical: guidanceIconPaddingVertical,
    paddingHorizontal: guidanceIconPaddingHorizontal,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    width: 28,
    height: 28,
  },
  textCol: {
    flex: 1,
    gap: 10,
  },
  cardTitle: {
    fontFamily: fonts.cabinBold,
    fontSize: 16,
    lineHeight: 25.6,
    color: insightsColors.sectionTitle,
  },
  cardDescription: {
    fontFamily: fonts.cabin,
    fontSize: 14,
    lineHeight: 22.4,
    color: insightsColors.sectionSubtitle,
  },
  cardDivider: {
    height: 1,
    backgroundColor: insightsColors.rowDivider,
    alignSelf: 'stretch',
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  footerIcon: {
    width: guidanceFooterIconSize,
    height: guidanceFooterIconSize,
  },
  footerText: {
    fontFamily: fonts.cabin,
    fontSize: 14,
    lineHeight: 22.4,
    color: insightsColors.sectionTitle,
  },
});
