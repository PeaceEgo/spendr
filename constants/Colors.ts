
export const palette = {
  primary: {
    50: '#F0F5FF',
    75: '#E6F0FF',
    100: '#D1E1FF',
    200: '#A8C6FF',
    300: '#7DAEFF',
    400: '#4062B9',
    500: '#297DFF',
    600: '#0061FF',
    700: '#0049C2',
    800: '#003185',
    900: '#001A47',
  },
  secondary: {
    50: '#FFF9F0',
    75: '#FFF2E0',
    100: '#FFE6C2',
    200: '#FFD18F',
    300: '#FFBC5C',
    400: '#FFA729',
    500: '#F58E00',
    600: '#C27000',
    700: '#8F5200',
    800: '#5C3500',
    900: '#291800',
  },
  danger: {
    50: '#FBD9D7',
    100: '#F8C0BC',
    200: '#F5A19A',
    300: '#F18278',
    400: '#EE6257',
    500: '#EA4335',
    600: '#C3382C',
    700: '#9C2D23',
    800: '#75221B',
    900: '#2F0D0B',
  },
  success: {
    50: '#F0FFF4',
    75: '#E0FFE9',
    100: '#C2FFD1',
    200: '#8FFFAD',
    300: '#5CFF89',
    400: '#41B75D',
    500: '#36994E',
    600: '#2B7A3E',
    700: '#1F5C2E',
    800: '#143D1F',
    900: '#0A1F10',
  },
  text: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },
} as const;

/** Semantic tokens — use these in components and screen styles. */
export const Colors = {
  white: '#FFFFFF',

  /** Figma: pri */
  primary: palette.primary[400],
  primaryDark: palette.primary[700],
  primaryLight: palette.primary[400],
  primarySoft: palette.primary[100],

  /** Figma: sec */
  secondary: palette.secondary[500],
  secondaryLight: palette.secondary[300],
  secondarySoft: palette.secondary[100],

  
  background: palette.text[50],
  surface: '#FFFFFF',
  surfaceMuted: palette.text[100],
  text: palette.text[900],
  textSecondary: palette.text[500],
  border: palette.text[200],

  /** Figma: suc */
  success: palette.success[400],

  /** Figma: danger */
  danger: palette.danger[500],
  expenseRed: palette.danger[600],

  /** Warnings / pace alerts — secondary ramp */
  warning: palette.secondary[500],
  warningSoft: palette.secondary[50],

  /** Primary blues used on intro CTAs and icons */
  introBlue: palette.primary[400],
  introBlueDeep: palette.primary[700],

  /** Intro splash — derived from design system */
  intro: {
    /** Splash 1 — Figma linear gradient + expense card */
    slide1: {
      gradientTop: '#4062B9',
      gradientBottom: '#3755A1',
      cardBackground: '#F2F2F2',
      cardBorder: '#E3E8EF',
      voiceBar: '#BF955B',
      recordExpenseBg: '#FFFFFF4D',
      recordExpenseBorder: '#FFFFFF',
      paginationActive: '#BF955B',
      paginationInactive: '#FFFFFF',
      buttonText: '#4062B9',
      continueGradient: ['#FFFFFF', '#FFFFFF', '#4062B9'] as const,
      continueGradientLocations: [0, 0.69, 1] as const,
    },
    /** Slides 2–3 Continue on white background — blue fading to a faint glow from mid → bottom */
    continueOnWhite: {
      continueGradient: ['#4062B9', '#4062B9', '#EEF2F8'] as const,
      continueGradientLocations: [0, 0.5, 1] as const,
    },
    slideBlue: palette.primary[400],
    mockupPanel: palette.primary[50],
    gold: palette.secondary[400],
    goldTrack: 'rgba(255,255,255,0.35)',
    tanLight: palette.secondary[200],
    tanDark: palette.secondary[600],
    cardBeige: palette.secondary[50],
    cardBlueGray: palette.primary[75],
    categoryText: palette.text[600],
    warningCardBorder: '#EECC9E',
    /** Figma Frame 39 — Pace Warning pill (#FAF0E2 / #F8C0BC) */
    warningBadgeBg: '#FAF0E2',
    warningBadgeBorder: '#F8C0BC',
    warningBadgeText: palette.danger[500],
    /** Figma pace alert body copy — #697586 */
    alertCopy: '#697586',
    /** Figma pace alert headline / amount — #15213E */
    alertCopyBold: '#15213E',
    warningBorder: palette.secondary[400],
    warningBg: palette.secondary[50],
    warningTitle: palette.secondary[600],
    paceHeadline: palette.danger[700],
    paginationInactiveOnBlue: 'rgba(255,255,255,0.35)',
    paginationInactiveOnWhite: '#CDD5DF',
    skipOnWhite: palette.text[400],
  },

  /** Onboarding steps 1–4 */
  onboarding: {
    stepProgressActive: '#4062B9',
    stepProgressInactive: '#D9E0F1',
    cardSelectedBg: '#BF955B',
    cardSelectedBorder: '#BF955B',
    cardSelectedText: '#FFFFFF',
    iconBadgeSelectedBg: '#997749',
  },

  /** Auth — Create Account / Sign in */
  auth: {
    title: '#15213E',
    subtitle: '#697586',
    googleBorder: '#9FB0DC',
    inputBorder: '#E3E8EF',
    inputPlaceholder: '#697586',
    hintBg: '#F4F4F4',
    hintText: '#697586',
    link: '#4062B9',
    googleLabel: '#121926',
    biometricBg: '#D9F1DF',
    biometricTitle: '#15213E',
    biometricSubtitle: '#697586',
    biometricToggleTrack: '#D3DFD4',
    biometricToggleThumb: '#516954',
  },
} as const;

export type ColorKey = keyof typeof Colors;
export type PaletteName = keyof typeof palette;
