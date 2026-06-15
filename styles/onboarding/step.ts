import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/Colors';
import { fonts } from '@/constants/fonts';

export const onboardingStepStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  progressBar: {
    width: 85.75,
    height: 9,
    borderRadius: 100,
    backgroundColor: '#D9E0F1',
  },
  progressBarActive: {
    backgroundColor: '#35529A',
  },
  topBack: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 16,
    marginBottom: 14,
    gap: 0,
  },
  topBackIcon: {
    width: 24,
    height: 24,
    transform: [{ rotate: '180deg' }],
  },
  topBackLabel: {
    width: 32,
    height: 26,
    fontFamily: fonts.cabin,
    fontSize: 16,
    lineHeight: 25.6,
    fontWeight: '400',
    color: '#121926',
  },
  stepCount: {
    fontSize: 20,
    lineHeight: 32,
    fontWeight: '400',
    color: '#121926',
    marginBottom: 8,
  },
  title: {
    fontFamily: fonts.cabinBold,
    fontSize: 20,
    lineHeight: 32,
    letterSpacing: -0.2,
    fontWeight: '700',
    color: '#15213E',
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: fonts.cabin,
    fontSize: 16,
    lineHeight: 25.6,
    fontWeight: '400',
    color: '#697586',
    marginBottom: 16,
  },
  content: {
    flex: 1,
  },
  contentCompact: {
    flex: 0,
  },
  contentInScroll: {
    flex: 0,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 32,
  },
  footer: {
    paddingTop: 12,
    paddingBottom: 12,
  },
  bottomBack: {
    alignItems: 'center',
    paddingVertical: 8,
    marginTop: 4,
  },
  bottomBackLabel: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    color: '#15213E',
  },
});
