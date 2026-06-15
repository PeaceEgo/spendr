import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/Colors';
import { radius } from '@/constants/radius';

export const buttonStyles = StyleSheet.create({
  base: {
    minHeight: 52,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  secondary: {
    backgroundColor: Colors.primarySoft,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  pressed: {
    opacity: 0.85,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
  },
  labelPrimary: {
    color: Colors.white,
  },
  labelDark: {
    color: Colors.primary,
  },
});
