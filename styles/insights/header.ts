import { StyleSheet } from 'react-native';

import { insightsColors, insightsLayout } from '@/constants/insights';
import { fonts } from '@/constants/fonts';

export const insightsHeaderStyles = StyleSheet.create({
  shell: {
    backgroundColor: insightsColors.headerBg,
    borderBottomLeftRadius: insightsLayout.headerBottomRadius,
    borderBottomRightRadius: insightsLayout.headerBottomRadius,
    paddingHorizontal: insightsLayout.screenPaddingHorizontal,
    paddingBottom: 24,
    gap: 14,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fonts.cabinBold,
    fontSize: 18,
    lineHeight: 38.4,
    color: insightsColors.headerText,
  },
  periodPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  periodText: {
    fontFamily: fonts.cabin,
    fontSize: 14,
    lineHeight: 22.4,
    color: insightsColors.headerText,
  },
  scoreLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  scoreLabelIcon: {
    width: 24,
    height: 24,
    tintColor: insightsColors.headerText,
  },
  scoreLabel: {
    fontFamily: fonts.cabin,
    fontSize: 14,
    lineHeight: 22.4,
    color: insightsColors.headerText,
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },
  ringWrap: {
    width: insightsLayout.healthRingSize,
    height: insightsLayout.healthRingSize,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ringCenter: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ringScoreMain: {
    fontFamily: fonts.cabinBold,
    fontSize: 24,
    lineHeight: 38.4,
    color: insightsColors.headerText,
  },
  ringScoreSub: {
    fontFamily: fonts.cabin,
    fontSize: 14,
    lineHeight: 22.4,
    color: insightsColors.headerMuted,
    marginTop: -2,
  },
  scoreDetails: {
    flex: 1,
    gap: 8,
    paddingTop: 4,
  },
  signalsText: {
    fontFamily: fonts.cabin,
    fontSize: 14,
    lineHeight: 19.2,
    color: '#FFFFFF',
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  legendSwatch: {
    width: 13,
    height: 11,
    borderRadius: 1,
  },
  legendLabel: {
    fontFamily: fonts.cabin,
    fontSize: 14,
    lineHeight: 19.2,
    color: '#FFFFFF',
  },
  divider: {
    height: 1,
    backgroundColor: '#FFFFFF',
  },
  summaryText: {
    fontFamily: fonts.cabin,
    fontSize: 14,
    lineHeight: 19.2,
    color: '#FFFFFF',
  },
});
