import { Colors } from "./Colors";

/** Typography scale aligned with SPENDR Figma intro screens (390×844). */
export const typography = {
  introTitle: {
    fontSize: 28,
    fontWeight: '700' as const,
    lineHeight: 44,
    letterSpacing: -0.3,
  },
  introSubtitle: {
    fontSize: 16,
    fontWeight: '400' as const,
    lineHeight: 25,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700' as const,
    lineHeight: 24,
  },
  cardLabel: {
    fontSize: 13,
    fontWeight: '600' as const,
    lineHeight: 18,
  },
  cardMeta: {
    fontSize: 11,
    fontWeight: '400' as const,
    lineHeight: 14,
  },
  /** Figma slide 3 pace alert — Onest 14 / 22.4 */
  paceAlertCopy: {
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 22.4,
    letterSpacing: 0,
  },
  /** Figma auth input placeholders — Cabin 14 / 22.4 */
  authInputPlaceholder: {
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 22.4,
    letterSpacing: 0,
  },
  amount: {
    fontSize: 28,
    fontWeight: '800' as const,
    lineHeight: 34,
  },
  expenseAmount: {
    fontSize: 16,
    fontWeight: 'bold' as const,
    lineHeight: 18,
    color: Colors.expenseRed,
  },
} as const;
