import { Platform, StyleSheet } from 'react-native';

import { expenseFlowColors, expenseFlowLayout } from '@/constants/expense-flow';
import { fonts } from '@/constants/fonts';

const {
  screenPaddingH,
  inputRadius,
  inputHeight,
  manualInputPadding,
  manualFormGap,
  manualAddMoreWidth,
} = expenseFlowLayout;

export const manualEntryStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: screenPaddingH,
    gap: manualFormGap,
    paddingTop: 4,
  },
  bottomSpacer: {
    flex: 1,
    minHeight: 24,
  },
  field: {
    gap: 8,
  },
  label: {
    fontFamily: fonts.cabinBold,
    fontSize: 14,
    lineHeight: 22.4,
    fontWeight: '700',
    color: '#121926',
  },
  input: {
    height: inputHeight,
    borderRadius: inputRadius,
    borderWidth: 1,
    borderColor: expenseFlowColors.inputBorder,
    backgroundColor: expenseFlowColors.inputBg,
    paddingHorizontal: manualInputPadding,
    fontFamily: fonts.cabin,
    fontSize: 16,
    color: '#121926',
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
        paddingVertical: 14,
      },
    }),
  },
  queuedList: {
    gap: 0,
  },
  queuedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E3E8EF',
  },
  queuedRowLast: {
    borderBottomWidth: 0,
  },
  queuedTitle: {
    fontFamily: fonts.cabinBold,
    fontSize: 15,
    lineHeight: 24,
    color: '#121926',
    flex: 1,
    paddingRight: 12,
  },
  queuedAmount: {
    fontFamily: fonts.cabinBold,
    fontSize: 15,
    lineHeight: 24,
    color: expenseFlowColors.expenseAmount,
  },
  addMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    minWidth: manualAddMoreWidth,
    gap: 12,
    height: 48,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 50,
    backgroundColor: expenseFlowColors.manualAddMoreBg,
  },
  addMoreLabel: {
    fontFamily: fonts.cabinBold,
    fontSize: 16,
    lineHeight: 25.6,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  confirmButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    width: '100%',
    gap: 8,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#4062B9',
    marginTop: 8,
  },
  confirmButtonDisabled: {
    backgroundColor: '#CDD5DF',
  },
  confirmButtonLabel: {
    fontFamily: fonts.cabinBold,
    fontSize: 16,
    lineHeight: 25.6,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  pressed: {
    opacity: 0.88,
  },
  addMoreDisabled: {
    opacity: 0.55,
  },
});
