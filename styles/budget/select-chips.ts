import { StyleSheet } from 'react-native';

import { budgetFlowColors } from '@/constants/budget-flow';
import { fonts } from '@/constants/fonts';

export const selectChipsStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  rowWrap: {
    gap: 8,
  },
  chip: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: budgetFlowColors.thresholdBorder,
    backgroundColor: '#FFFFFF',
  },
  chipThreshold: {
    minWidth: 72,
    height: 40,
    borderRadius: 50,
    paddingHorizontal: 16,
  },
  chipThresholdSelected: {
    backgroundColor: budgetFlowColors.thresholdSelectedBg,
    borderColor: budgetFlowColors.thresholdSelectedBg,
  },
  chipPeriod: {
    flex: 1,
    minWidth: 100,
    height: 44,
    borderRadius: 10,
  },
  chipPeriodSelected: {
    backgroundColor: budgetFlowColors.periodSelectedBg,
    borderColor: budgetFlowColors.periodSelectedBg,
  },
  chipCategory: {
    flexDirection: 'row',
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 14,
    gap: 6,
  },
  chipCategorySelected: {
    backgroundColor: budgetFlowColors.categorySelectedBg,
    borderColor: budgetFlowColors.categorySelectedBorder,
  },
  categoryIcon: {
    width: 18,
    height: 18,
  },
  chipText: {
    fontFamily: fonts.cabin,
    fontSize: 14,
    lineHeight: 22.4,
    fontWeight: '400',
    color: budgetFlowColors.labelText,
  },
  chipTextThresholdSelected: {
    fontFamily: fonts.cabinBold,
    fontWeight: '700',
    color: budgetFlowColors.thresholdSelectedText,
  },
  chipTextPeriodSelected: {
    fontFamily: fonts.cabinBold,
    fontWeight: '700',
    color: budgetFlowColors.periodSelectedText,
  },
  chipTextCategorySelected: {
    fontFamily: fonts.cabinBold,
    fontWeight: '700',
    color: budgetFlowColors.categorySelectedBorder,
  },
  pressed: {
    opacity: 0.9,
  },
});
