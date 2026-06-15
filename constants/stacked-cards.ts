import type { ImageSourcePropType } from 'react-native';

import { HOME_DESIGN_WIDTH } from '@/constants/home';

/** Figma export — Group 4.png stacked glass cards */
export const stackedCardsImage: ImageSourcePropType = require('@/assets/shared/stacked-cards.png');

/** PNG intrinsic size (do not upscale — Figma frame lists 2× layout width) */
export const STACKED_CARDS_ASSET = {
  width: 122,
  height: 205,
} as const;

/** Placement on the 430px-wide home frame (Group 4 — top 66.7, left 308.47) */
export const stackedCardsLayout = {
  home: {
    top: 67,
    right: 0,
    width: STACKED_CARDS_ASSET.width,
    height: STACKED_CARDS_ASSET.height,
    frameWidth: HOME_DESIGN_WIDTH,
  },
  /** 382px card — upper-right of header (Figma Budget Review) */
  budgetReview: {
    top: -36,
    right: -52,
    width: STACKED_CARDS_ASSET.width,
    height: STACKED_CARDS_ASSET.height,
    frameWidth: 382,
  },
} as const;
