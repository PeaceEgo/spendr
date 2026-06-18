import { StyleSheet } from 'react-native';

import { fonts } from '@/constants/fonts';

export const budgetListPaginationStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 4,
  },
  navDisabled: {
    opacity: 0.4,
  },
  navLabel: {
    fontFamily: fonts.cabin,
    fontSize: 14,
    lineHeight: 22.4,
    color: '#4062B9',
  },
  pages: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  page: {
    minWidth: 38,
    height: 38,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E3E8EF',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageActive: {
    backgroundColor: '#4062B9',
    borderColor: '#4062B9',
  },
  pageText: {
    fontFamily: fonts.cabin,
    fontSize: 14,
    lineHeight: 22.4,
    color: '#121926',
  },
  pageTextActive: {
    fontFamily: fonts.cabinBold,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
