import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/Colors';
import { spacing } from '@/constants/spacing';

export const screenPlaceholderStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: spacing.sm,
  },
  route: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontFamily: 'monospace',
  },
});
