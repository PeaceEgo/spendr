import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/Colors';
import { typography } from '@/constants/typography';

/** Figma: card top edge 98px from screen top */
export const INTRO_SLIDE1_CARD_TOP = 98;
export const INTRO_SLIDE1_HORIZONTAL = 24;

export const slide1Styles = StyleSheet.create({
  wrap: {
    marginHorizontal: INTRO_SLIDE1_HORIZONTAL,
    alignSelf: 'stretch',
  },
  card: {
    width: '100%',
    maxWidth: 382,
    minHeight: 288,
    alignSelf: 'center',
    backgroundColor: Colors.intro.slide1.cardBackground,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.intro.slide1.cardBorder,
    padding: 16,
    gap: 16,
  },
  cardHeading: {
    ...typography.cardTitle,
    color: Colors.text,
    borderBottomWidth: 1,
    borderBottomColor: Colors.intro.slide1.cardBorder,
    paddingBottom: 14,
  },
  list: {
    gap: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 10,
  },
  rowBorderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.intro.slide1.cardBorder,
    marginBottom: 4,
    paddingBottom: 10,
  },
  rowIcon: {
    width: 40,
    height: 40,
    backgroundColor: Colors.white,
    borderRadius: 6,
    gap: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  rowText: {
    flex: 1,
  },
  rowLabel: {
    ...typography.cardLabel,
    color: Colors.text,
  },
  rowMeta: {
    ...typography.cardMeta,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  rowAmount: {
    ...typography.expenseAmount,
    color: Colors.expenseRed,
  },
  voiceBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    maxWidth: 350,
    height: 48,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: Colors.intro.slide1.voiceBar,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    gap: 77,
  },
  voiceLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.white,
    flexShrink: 1,
  },
  recordBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 165,
    height: 32,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.intro.slide1.recordExpenseBorder,
    backgroundColor: Colors.intro.slide1.recordExpenseBg,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 12,
    paddingRight: 12,
    gap: 12,
  },
  recordBtnText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.white,
  },
});
