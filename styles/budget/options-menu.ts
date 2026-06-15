import { StyleSheet } from 'react-native';

import { fonts } from '@/constants/fonts';

export const budgetOptionsMenuStyles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  menuAnchor: {
    position: 'absolute',
    top: 100,
    right: 20,
    alignItems: 'flex-end',
  },
  menu: {
    minWidth: 180,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E3E8EF',
    paddingVertical: 4,
    shadowColor: '#121926',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  menuItemLabel: {
    fontFamily: fonts.cabin,
    fontSize: 15,
    lineHeight: 24,
    color: '#121926',
  },
  menuItemLabelDanger: {
    color: '#EA4335',
  },
  divider: {
    height: 1,
    backgroundColor: '#E3E8EF',
    marginHorizontal: 8,
  },
  pressed: {
    opacity: 0.88,
  },
});
