import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/Colors';
import { radius } from '@/constants/radius';

export const progressBarStyles = StyleSheet.create({
  track: {
    height: 8,
    borderRadius: radius.full,
    backgroundColor: Colors.surfaceMuted,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: radius.full,
  },
});
