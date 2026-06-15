import { StyleSheet } from 'react-native';

import { budgetFlowLayout } from '@/constants/budget-flow';
import { fonts } from '@/constants/fonts';

const {
  reviewCategoryPillWidth,
  reviewCategoryPillHeight,
  reviewCategoryPillPaddingV,
  reviewCategoryPillPaddingH,
  reviewCategoryPillGap,
  reviewCategoryPillRadius,
  reviewCategoryPillBg,
  reviewCategoryPillBorder,
} = budgetFlowLayout;

export const budgetCategoryPillStyles = StyleSheet.create({
  pillOnPrimary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: reviewCategoryPillGap,
    width: reviewCategoryPillWidth,
    height: reviewCategoryPillHeight,
    paddingTop: reviewCategoryPillPaddingV,
    paddingBottom: reviewCategoryPillPaddingV,
    paddingLeft: reviewCategoryPillPaddingH,
    paddingRight: reviewCategoryPillPaddingH,
    borderRadius: reviewCategoryPillRadius,
    backgroundColor: reviewCategoryPillBg,
    borderWidth: 1,
    borderColor: reviewCategoryPillBorder,
  },
  pillOnCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  pillOnDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.45)',
  },
  iconOnPrimary: {
    width: 15,
    height: 15,
  },
  icon: {
    width: 18,
    height: 18,
  },
  label: {
    fontFamily: fonts.cabin,
    fontSize: 13,
    lineHeight: 15,
    color: '#FFFFFF',
  },
});
