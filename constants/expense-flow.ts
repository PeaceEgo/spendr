/** Design tokens for add-expense / voice-entry flows (Figma). */
export const expenseFlowColors = {
  contextCardBg: '#EECC9E',
  contextCardBorder: '#E3E8EF',
  voiceCardBg: '#4062B9',
  voiceCardLight: '#8FCBE8',
  /** Voice confirm card (Figma pri/75). */
  voiceConfirmCardBg: '#BFCBE8',
  processingCardBg: '#EECC9E',
  manualAddMoreBg: '#BF955B',
  inputBg: '#F2F2F2',
  inputBorder: '#E3E8EF',
  expenseAmount: '#EA4335',
  loggedMeta: '#697586',
  recordingDot: '#F5A623',
  /** Figma txt/300 — hint on voice recording card. */
  voiceRecordingHint: '#CDD5DF',
  processingTitle: '#15213E',
  processingSubtitle: '#35529A',
  processingDot: '#35529A',
} as const;

export const expenseFlowLayout = {
  screenPaddingH: 24,
  sheetRadius: 24,
  contextCardRadius: 15,
  contextCardMinHeight: 130,
  contextProgressWidth: 94,
  contextProgressHeight: 7,
  voiceCardRadius: 18,
  confirmCardRadius: 20,
  confirmGotItHeight: 41,
  confirmGotItMinWidth: 117,
  loggedExpensesCardRadius: 10,
  inputRadius: 8,
  inputHeight: 52,
  voiceCardMinHeight: 262,
  voiceCardPaddingV: 22,
  voiceCardPaddingH: 24,
  voiceMicCircleSize: 56,
  voiceStartButtonHeight: 48,
  voiceStartButtonGap: 12,
  manualInputPadding: 12,
  /** Voice + manual entry sheets should cover about 80% of the screen. */
  expenseEntrySheetMinHeightRatio: 0.8,
  manualFormGap: 16,
  manualAddMoreWidth: 146,
  contentGap: 10,
  sectionGap: 20,
  /** Gap between "Logged Expenses" title and empty-state content (Figma). */
  loggedSectionTitleGap: 35,
  /** Min whitespace below Logged Expenses on voice entry sheet (Figma). */
  voiceLoggedBottomMinSpace: 120,
  recordingDotSize: 8,
  processingLoaderOuter: 82,
  processingLoaderRing: 6,
  processingLoaderInner: 60,
  processingLoaderStars: 28,
  processingDotSize: 8,
  processingDotGap: 10,
  dividerLineColor: '#E3E8EF',
} as const;

/** Demo voice parse result (Figma voice confirmation). */
export const MOCK_VOICE_PARSED_EXPENSES = [
  { title: 'Tesla Cyber Truck', amount: 20_000 },
  { title: 'Private Jet', amount: 6_000 },
] as const;

export const expenseFlowIcons = {
  emptyLogged: require('@/assets/budget/empty-expenses.png'),
  micLine: require('@/assets/expense/mic-line.png'),
  voiceProcessingStars: require('@/assets/expense/voice-processing-stars.png'),
} as const;
