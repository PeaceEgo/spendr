import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/Colors';
import { typography } from '@/constants/typography';

export const INTRO_FOOTER_TOP = 425;

export const introScreenStyles = StyleSheet.create({
  root: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  rootWhite: {
    backgroundColor: Colors.white,
  },
  mockupAreaTop: {
    justifyContent: 'flex-start',
  },
  mockupAreaBottom: {
    justifyContent: 'flex-end',
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    paddingTop: 8,
  },
  title: {
    ...typography.introTitle,
    textAlign: 'center',
    marginBottom: 10,
  },
  titleOnBlue: {
    color: Colors.white,
  },
  titleOnWhite: {
    color: Colors.text,
  },
  subtitle: {
    ...typography.introSubtitle,
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 4,
  },
  subtitleOnBlue: {
    color: Colors.white,
  },
  subtitleOnWhite: {
    color: Colors.textSecondary,
  },
  secondaryPress: {
    alignItems: 'center',
    marginTop: 16,
    paddingVertical: 4,
  },
  secondary: {
    fontSize: 15,
    fontWeight: '600',
  },
  secondaryOnBlue: {
    color: Colors.white,
  },
  secondaryOnWhite: {
    color: Colors.intro.skipOnWhite,
  },
  secondaryLink: {
    color: Colors.introBlue,
  },
});
