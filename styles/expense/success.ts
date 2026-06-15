import { StyleSheet } from 'react-native';

import { fonts } from '@/constants/fonts';

const usageBadgeBg = '#FEFEF3';
const usageBadgeBorder = '#F2F2F2';
const usageBadgeText = '#36994E';

export const expenseSuccessStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 32,
    alignItems: 'center',
    gap: 24,
  },
  checkIcon: {
    width: 72,
    height: 72,
    marginTop: 4,
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
    color: '#697586',
    textAlign: 'center',
  },
  subtitleAmount: {
    fontFamily: fonts.cabinBold,
    fontWeight: '700',
    color: '#121926',
  },
  summaryCard: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E3E8EF',
    backgroundColor: '#FFFFFF',
    padding: 16,
    gap: 12,
  },
  summaryHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  summaryIconBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#F2F2F2',
    paddingVertical: 6,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  summaryIconImage: {
    width: 24,
    height: 24,
  },
  summaryHeaderText: {
    flex: 1,
    gap: 2,
  },
  summaryTitle: {
    fontFamily: fonts.cabinBold,
    fontSize: 16,
    lineHeight: 25.6,
    fontWeight: '700',
    color: '#121926',
  },
  summaryMeta: {
    fontFamily: fonts.cabin,
    fontSize: 13,
    lineHeight: 20.8,
    color: '#697586',
  },
  summaryRemainingCol: {
    alignItems: 'flex-end',
    gap: 2,
  },
  summaryRemainingAmount: {
    fontFamily: fonts.cabinBold,
    fontSize: 16,
    lineHeight: 25.6,
    fontWeight: '700',
    color: '#121926',
  },
  summaryRemainingLabel: {
    fontFamily: fonts.cabin,
    fontSize: 12,
    lineHeight: 19.2,
    color: '#4062B9',
  },
  progressTrack: {
    height: 8,
    borderRadius: 50,
    backgroundColor: '#E3E8EF',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 50,
    backgroundColor: '#4062B9',
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  progressSpent: {
    flex: 1,
    fontFamily: fonts.cabin,
    fontSize: 14,
    lineHeight: 22.4,
    color: '#121926',
  },
  percentBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 50,
    backgroundColor: usageBadgeBg,
    borderWidth: 1,
    borderColor: usageBadgeBorder,
  },
  percentBadgeIcon: {
    width: 16,
    height: 16,
  },
  percentBadgeText: {
    fontFamily: fonts.cabinBold,
    fontSize: 13,
    lineHeight: 20.8,
    fontWeight: '700',
    color: usageBadgeText,
  },
  expenseListCard: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EEF2F6',
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  expenseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 16,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF2F6',
  },
  expenseRowLast: {
    paddingBottom: 0,
    marginBottom: 0,
    borderBottomWidth: 0,
  },
  expenseRowText: {
    flex: 1,
    gap: 4,
    paddingRight: 12,
  },
  expenseTitle: {
    fontFamily: fonts.cabinBold,
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '700',
    color: '#121926',
  },
  expenseMeta: {
    fontFamily: fonts.cabin,
    fontSize: 13,
    lineHeight: 20.8,
    color: '#697586',
  },
  expenseAmount: {
    fontFamily: fonts.cabinBold,
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '700',
    color: '#EA4335',
  },
  actions: {
    width: '100%',
    gap: 12,
    marginTop: 4,
  },
  primaryButton: {
    height: 50,
    borderRadius: 50,
    backgroundColor: '#4062B9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryLabel: {
    fontFamily: fonts.cabinBold,
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  secondaryLink: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  secondaryLabel: {
    fontFamily: fonts.cabinBold,
    fontSize: 16,
    fontWeight: '700',
    color: '#4062B9',
  },
  pressed: {
    opacity: 0.88,
  },
});
