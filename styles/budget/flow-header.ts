import { StyleSheet } from 'react-native';

import { fonts } from '@/constants/fonts';

export const budgetFlowHeaderStyles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backPlaceholder: {
    width: 40,
    height: 40,
  },
  title: {
    flex: 1,
    fontFamily: fonts.cabinBold,
    fontSize: 18,
    lineHeight: 28.8,
    fontWeight: '700',
    color: '#121926',
    textAlign: 'center',
  },
  rightSlot: {
    width: 40,
    alignItems: 'flex-end',
  },
  pressed: {
    opacity: 0.85,
  },
});
