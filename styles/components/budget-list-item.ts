import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/Colors';
import { radius } from '@/constants/radius';
import { spacing } from '@/constants/spacing';

export const budgetListItemStyles = StyleSheet.create({
  row: {
    gap: spacing.sm,
    padding: spacing.md,
    backgroundColor: Colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
  },
  amount: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
});
