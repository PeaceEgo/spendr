import { StyleSheet } from 'react-native';

import { fonts } from '@/constants/fonts';
import { homeColors, homeLayout } from '@/constants/home';

export const homeEmptyStateStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: homeLayout.screenPaddingHorizontal,
    paddingTop: 26,
    paddingBottom: 32,
    gap: 12,
  },
  illustration: {
    width: 120,
    height: 120,
    marginBottom: 4,
  },
  title: {
    fontFamily: fonts.cabinBold,
    fontSize: 18,
    lineHeight: 28.8,
    fontWeight: '700',
    color: homeColors.textPrimary,
    textAlign: 'center',
  },
  description: {
    fontFamily: fonts.cabin,
    fontSize: 14,
    lineHeight: 22.4,
    fontWeight: '400',
    color: homeColors.textMuted,
    textAlign: 'center',
    maxWidth: 320,
  },
  primaryButton: {
    width: homeLayout.primaryCtaWidth,
    maxWidth: '100%',
    height: homeLayout.primaryCtaHeight,
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: homeColors.primaryBlue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginTop: 4,
  },
  plusCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonLabel: {
    fontFamily: fonts.cabinBold,
    fontSize: 16,
    lineHeight: 25.6,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  pressed: {
    opacity: 0.9,
  },
});
