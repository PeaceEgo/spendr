import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/Colors';
import { spacing } from '@/constants/spacing';

export const onboardingStepStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    backgroundColor: Colors.background,
  },
  dots: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  dotActive: {
    backgroundColor: Colors.primary,
    width: 24,
  },
  dotInactive: {
    backgroundColor: Colors.border,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: spacing.lg,
  },
  content: {
    flex: 1,
  },
});
