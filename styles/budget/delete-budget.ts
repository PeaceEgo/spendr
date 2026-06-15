import { StyleSheet } from 'react-native';

import { budgetFlowColors } from '@/constants/budget-flow';
import { fonts } from '@/constants/fonts';

export const deleteBudgetStyles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(15, 23, 42, 0.35)',
    paddingHorizontal: 24,
  },
  card: {
    width: '100%',
    maxWidth: 347,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 28,
    gap: 16,
    alignItems: 'center',
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: budgetFlowColors.deleteRed,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.cabinBold,
    fontSize: 20,
    fontWeight: '700',
    color: '#15213E',
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: fonts.cabin,
    fontSize: 14,
    lineHeight: 22.4,
    color: '#697586',
    textAlign: 'center',
  },
  cancelButton: {
    width: '100%',
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#121926',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelLabel: {
    fontFamily: fonts.cabinBold,
    fontSize: 16,
    fontWeight: '700',
    color: '#121926',
  },
  deleteButton: {
    width: '100%',
    height: 50,
    borderRadius: 50,
    backgroundColor: budgetFlowColors.deleteRed,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteLabel: {
    fontFamily: fonts.cabinBold,
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  pressed: {
    opacity: 0.9,
  },
});
