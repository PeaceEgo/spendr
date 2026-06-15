import { StyleSheet } from 'react-native';

import { fonts } from '@/constants/fonts';
import { homeColors, homeLayout } from '@/constants/home';

export const homeFeatureCardStyles = StyleSheet.create({
  card: {
    width: '100%',
    maxWidth: homeLayout.cardWidth,
    minHeight: homeLayout.cardHeight,
    borderRadius: homeLayout.cardBorderRadius,
    borderWidth: 1,
    padding: homeLayout.cardPadding,
    flexDirection: 'row',
    alignItems: 'center',
    gap: homeLayout.cardGap,
    alignSelf: 'center',
  },
  iconWrapper: {
    width: homeLayout.iconWrapperWidth,
    height: homeLayout.iconWrapperHeight,
    borderRadius: homeLayout.iconWrapperBorderRadius,
    paddingTop: homeLayout.iconWrapperPaddingVertical,
    paddingBottom: homeLayout.iconWrapperPaddingVertical,
    paddingLeft: homeLayout.iconWrapperPaddingHorizontal,
    paddingRight: homeLayout.iconWrapperPaddingHorizontal,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: homeLayout.iconSize,
    height: homeLayout.iconSize,
  },
  textBlock: {
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
  description: {
    fontFamily: fonts.cabin,
    fontSize: 14,
    lineHeight: 22.4,
    fontWeight: '400',
    color: homeColors.textPrimary,
  },
});
