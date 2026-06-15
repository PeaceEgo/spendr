import { StyleSheet } from 'react-native';

import { budgetFlowColors, budgetFlowLayout } from '@/constants/budget-flow';
import { fonts } from '@/constants/fonts';

export const budgetReviewStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: budgetFlowLayout.reviewScreenPaddingH,
    paddingTop: 8,
    gap: budgetFlowLayout.reviewContentGap,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    padding: 16,
    borderRadius: 12,
    backgroundColor: budgetFlowColors.infoBoxBg,
    borderWidth: 1,
    borderColor: budgetFlowColors.infoBoxBorder,
  },
  infoIcon: {
    width: 24,
    height: 24,
    marginTop: 2,
  },
  infoCopy: {
    flex: 1,
    gap: 6,
  },
  infoTitle: {
    fontFamily: fonts.cabinBold,
    fontSize: 16,
    lineHeight: 25.6,
    fontWeight:'bold',
    color: '#121926',
  },
  infoBody: {
    fontFamily: fonts.cabin,
    fontSize: 14,
    lineHeight: 22.4,
    color: '#697586',
  },
  actions: {
    gap: budgetFlowLayout.reviewActionsGap,
    marginTop: 14,
  },
  primaryButton: {
    height: 50,
    borderRadius: 50,
    backgroundColor: '#4062B9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryLabel: {
    fontFamily: fonts.cabinBold,
    fontSize: 16,
    lineHeight: 25.6,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  secondaryButton: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryLabel: {
    fontFamily: fonts.cabinBold,
    fontSize: 16,
    lineHeight: 25.6,
    fontWeight: '700',
    color: '#4062B9',
  },
  pressed: {
    opacity: 0.9,
  },
});
