import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/Colors';
import { typography } from '@/constants/typography';

export const INTRO_SLIDE2_CARD_TOP = 98;
export const INTRO_SLIDE2_HORIZONTAL = 24;

export const slide2Styles = StyleSheet.create({
  panel: {
    width: '100%',
    maxWidth: 382,
    marginHorizontal: INTRO_SLIDE2_HORIZONTAL,
    alignSelf: 'center',
    gap: 18,
  },
  mainCard: {
    width: '100%',
    height: 172,
    borderRadius: 18,
    backgroundColor: '#4062B9',
    paddingTop: 19,
    paddingRight: 16,
    paddingBottom: 23,
    paddingLeft: 16,
    overflow: 'hidden',
  },
  safeLabel: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    color: Colors.white,
    marginLeft: 3,
    marginBottom: 18,
  },
  safeAmount: {
    ...typography.amount,
    fontSize: 32,
    lineHeight: 38,
    color: Colors.white,
    marginLeft: 3,
    marginBottom: 10,
  },
  progressTrack: {
    width: 350,
    height: 7,
    borderRadius: 50,
    backgroundColor: Colors.white,
    overflow: 'hidden',
    marginBottom: 14,
  },
  progressFill: {
    width: 196,
    height: '100%',
    borderRadius: 50,
    backgroundColor: '#E5B36D',
  },
  mainFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainFooterText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    color: Colors.white,
  },
  cornerCardLarge: {
    position: 'absolute',
    top: -3,
    left: 294,
    width: 134,
    height: 56,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Colors.white,
    backgroundColor: '#FFFFFF80',
  },
  cornerCardMid: {
    position: 'absolute',
    top: -10,
    left: 301,
    width: 134,
    height: 56,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Colors.white,
    backgroundColor: '#9FB0DC',
  },
  cornerCardSmall: {
    position: 'absolute',
    top: -18,
    left: 310,
    width: 134,
    height: 56,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Colors.white,
    backgroundColor: '#9FB0DC',
  },
  miniRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  miniCard: {
    width: 183,
    height: 94,
    borderRadius: 13,
    borderWidth: 1,
    paddingTop: 13,
    paddingRight: 9,
    paddingBottom: 13,
    paddingLeft: 10,
    gap: 10,
  },
  miniCardBeige: {
    backgroundColor: Colors.intro.cardBeige,
    borderColor: Colors.intro.tanLight,
  },
  miniCardBlue: {
    backgroundColor: Colors.intro.cardBlueGray,
    borderColor: Colors.primarySoft,
  },
  miniTopRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  miniAmount: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
    color: Colors.text,
  },
  iconBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  miniIcon: {
    width: 24,
    height: 24,
  },
  miniText: {
    fontSize: 11,
    lineHeight: 17,
    color: Colors.intro.categoryText,
    fontWeight: '400',
  },
  miniBold: {
    fontWeight: '700',
    color: Colors.text,
  },
});
