import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/Colors';
import { fonts } from '@/constants/fonts';

export const onboardingSuccessStyles = StyleSheet.create({
  modalRoot: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(15, 23, 42, 0.35)',
  },
  sheet: {
    width: '100%',
    backgroundColor: Colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 28,
    paddingHorizontal: 24,
  },
  sheetContent: {
    width: '100%',
    maxWidth: 347,
    alignSelf: 'center',
    gap: 25,
    alignItems: 'center',
  },
  checkIcon: {
    width: 64,
    height: 64,
  },
  title: {
    fontFamily: fonts.cabinBold,
    fontSize: 20,
    lineHeight: 32,
    fontWeight: '700',
    color: '#15213E',
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: fonts.cabin,
    fontSize: 16,
    lineHeight: 25.6,
    fontWeight: '400',
    color: '#697586',
    textAlign: 'center',
  },
  actions: {
    width: '100%',
    gap: 12,
  },
  primaryButton: {
    width: '100%',
    maxWidth: 382,
    alignSelf: 'center',
  },
  secondaryButton: {
    width: '100%',
    maxWidth: 382,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#4062B9',
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  secondaryButtonPressed: {
    opacity: 0.9,
  },
  secondaryButtonLabel: {
    fontFamily: fonts.cabinBold,
    fontSize: 16,
    fontWeight: '700',
    color: '#4062B9',
  },
});
