import { StyleSheet } from 'react-native';

import { expenseFlowLayout } from '@/constants/expense-flow';
import { fonts } from '@/constants/fonts';

export const expenseSheetStyles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(15, 23, 42, 0.35)',
  },
  sheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: expenseFlowLayout.sheetRadius,
    borderTopRightRadius: expenseFlowLayout.sheetRadius,
    overflow: 'hidden',
    maxHeight: '88%',
  },
  sheetEntry: {
    minHeight: `${Math.round(expenseFlowLayout.expenseEntrySheetMinHeightRatio * 100)}%`,
    flexDirection: 'column',
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#E3E8EF',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: expenseFlowLayout.screenPaddingH,
    paddingBottom: 12,
  },
  headerSide: {
    width: 40,
    alignItems: 'flex-start',
  },
  headerTitle: {
    flex: 1,
    fontFamily: fonts.cabinBold,
    fontSize: 18,
    lineHeight: 28.8,
    fontWeight: '700',
    color: '#121926',
    textAlign: 'center',
  },
  body: {
    flexGrow: 0,
    flexShrink: 1,
  },
  bodyEntry: {
    flex: 1,
    minHeight: 0,
  },
  scrollVoice: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: expenseFlowLayout.screenPaddingH,
    gap: expenseFlowLayout.sectionGap,
  },
  /** Voice entry — fill sheet body so bottom spacer can expand below Logged Expenses. */
  scrollContentVoice: {
    flexGrow: 1,
  },
  footer: {
    paddingHorizontal: expenseFlowLayout.screenPaddingH,
    paddingTop: 12,
    backgroundColor: '#FFFFFF',
  },
  pressed: {
    opacity: 0.88,
  },
});
