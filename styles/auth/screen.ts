import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/Colors';
import { fonts } from '@/constants/fonts';
import { spacing } from '@/constants/spacing';

export const AUTH_HORIZONTAL = 24;
export const AUTH_CONTENT_MAX_WIDTH = 382;

export const authScreenStyles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: AUTH_HORIZONTAL,
    paddingBottom: spacing.xl,
  },
  header: {
    marginTop: spacing.md,
    marginBottom: spacing.lg,
    gap: 8,
  },
  title: {
    fontFamily: fonts.onestBold,
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 36,
    color: Colors.auth.title,
  },
  subtitle: {
    fontFamily: fonts.onest,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: Colors.auth.subtitle,
  },
  form: {
    width: '100%',
    maxWidth: AUTH_CONTENT_MAX_WIDTH,
    alignSelf: 'center',
    gap: spacing.md,
  },
  footer: {
    marginTop: spacing.lg,
    alignItems: 'center',
  },
  footerText: {
    fontFamily: fonts.onest,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    color: Colors.auth.subtitle,
    textAlign: 'center',
  },
  footerLink: {
    fontFamily: fonts.onestBold,
    fontWeight: '700',
    color: Colors.auth.link,
  },
});
