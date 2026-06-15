import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/Colors';
import { radius } from '@/constants/radius';
import { spacing } from '@/constants/spacing';

export const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: radius.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
  },
});
