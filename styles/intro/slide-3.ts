import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/Colors';
import { fonts } from '@/constants/fonts';
import { typography } from '@/constants/typography';

export const INTRO_SLIDE3_CARD_TOP = 98;
export const INTRO_SLIDE3_HORIZONTAL = 24;

export const ORBIT_WRAP_WIDTH = 230;
export const ORBIT_WRAP_HEIGHT = 140;

export const ORBIT_NODE_SIZE = 56;
export const ORBIT_ICON_SIZE = 32;
const ORBIT_NODE_RADIUS = 28;
const ORBIT_CENTER_LEFT = (ORBIT_WRAP_WIDTH - ORBIT_NODE_SIZE) / 2;

export const INTRO_SLIDE3_MOCKUP_HEIGHT = 142 + 20 + ORBIT_WRAP_HEIGHT + 8;
export const INTRO_SLIDE3_FOOTER_TOP = INTRO_SLIDE3_CARD_TOP + INTRO_SLIDE3_MOCKUP_HEIGHT + 40;

export const slide3Styles = StyleSheet.create({
  panel: {
    width: '100%',
    maxWidth: 382,
    marginHorizontal: INTRO_SLIDE3_HORIZONTAL,
    alignSelf: 'center',
    gap: 20,
  },
  alertCard: {
    width: '100%',
    minHeight: 142,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: Colors.intro.warningCardBorder,
    backgroundColor: Colors.white,
    paddingTop: 16,
    paddingRight: 14,
    paddingBottom: 16,
    paddingLeft: 14,
    gap: 10,
  },

  paceBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    width: 130,
    height: 31,
    gap: 8,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.intro.warningBadgeBorder,
    backgroundColor: Colors.intro.warningBadgeBg,
  },
  paceBadgeText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
    color: Colors.intro.warningBadgeText,
  },
  alertHeadline: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: Colors.intro.warningBadgeText,
    lineHeight: 20,
  },
  alertCopy: {
    ...typography.paceAlertCopy,
    fontFamily: fonts.onest,
    color: Colors.intro.alertCopy,
  },
  alertCopyAmount: {
    fontSize: 14,
    fontFamily: fonts.onest,
    fontWeight: '700' as const,
    lineHeight: 22.4,
    letterSpacing: 0,
    color: Colors.intro.alertCopyBold,
  },
  orbitWrap: {
    alignSelf: 'center',
    width: ORBIT_WRAP_WIDTH,
    height: ORBIT_WRAP_HEIGHT,
    position: 'relative',
  },
  orbitNode: {
    position: 'absolute',
    width: ORBIT_NODE_SIZE,
    height: ORBIT_NODE_SIZE,
    borderRadius: ORBIT_NODE_RADIUS,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: Colors.text,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 3,
  },
  orbitNodeTop: {
    top: 0,
    left: ORBIT_CENTER_LEFT,
  },
  orbitNodeLeft: {
    top: 40,
    left: 0,
  },
  orbitNodeRight: {
    top: 40,
    left: 174,
  },
  orbitNodeBottom: {
    top: 84,
    left: ORBIT_CENTER_LEFT,
  },
  orbitIcon: {
    width: ORBIT_ICON_SIZE,
    height: ORBIT_ICON_SIZE,
  },
});
