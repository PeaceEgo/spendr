import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/Colors';
import { radius } from '@/constants/radius';
import { spacing } from '@/constants/spacing';

export const inputStyles = StyleSheet.create({
  wrap: {
    gap: spacing.sm,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
  },
  input: {
    minHeight: 52,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    fontSize: 16,
    color: Colors.text,
    backgroundColor: Colors.surface,
  },
});
