import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/Colors';

export const paginationBarsStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 20,
  },
  bar: {
    width: 68,
    height: 8,
    borderRadius: 50,
  },
  barActiveOnBlue: {
    backgroundColor: Colors.white,
  },
  barActiveOnBlueGold: {
    backgroundColor: Colors.intro.slide1.paginationActive,
  },
  barActiveOnWhite: {
    backgroundColor: Colors.introBlue,
  },
  barInactiveOnBlue: {
    backgroundColor: Colors.intro.paginationInactiveOnBlue,
  },
  barInactiveOnBlueGold: {
    backgroundColor: Colors.intro.slide1.paginationInactive,
  },
  barInactiveOnWhite: {
    backgroundColor: Colors.intro.paginationInactiveOnWhite,
  },
});
