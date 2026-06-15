import { Platform, StyleSheet } from 'react-native';

import { budgetFlowColors, budgetFlowLayout } from '@/constants/budget-flow';
import { fonts } from '@/constants/fonts';

export const budgetCreateStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 32,
    gap: 20,
  },
  field: {
    gap: 8,
  },
  label: {
    fontFamily: fonts.cabinBold,
    fontSize: 14,
    lineHeight: 22.4,
    fontWeight: '700',
    color: budgetFlowColors.labelText,
  },
  input: {
    height: budgetFlowLayout.inputHeight,
    borderRadius: budgetFlowLayout.inputRadius,
    borderWidth: 1,
    borderColor: budgetFlowColors.inputBorder,
    paddingHorizontal: budgetFlowLayout.inputPaddingH,
    fontFamily: fonts.cabin,
    fontSize: 16,
    color: budgetFlowColors.labelText,
    backgroundColor: '#FFFFFF',
    ...Platform.select({
      ios: {
        paddingTop: 16,
        paddingBottom: 16,
      },
      android: {
        paddingVertical: 0,
        textAlignVertical: 'center',
      },
      default: {
        paddingVertical: budgetFlowLayout.inputPaddingV,
      },
    }),
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 8,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  continueButton: {
    height: 50,
    borderRadius: 50,
    backgroundColor: '#4062B9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButtonDisabled: {
    opacity: 0.45,
  },
  continueLabel: {
    fontFamily: fonts.cabinBold,
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
