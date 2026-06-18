import { Image, StyleSheet, useWindowDimensions, View, type StyleProp, type ViewStyle } from 'react-native';

import { budgetFlowLayout } from '@/constants/budget-flow';
import {
  introSlide2StackedCardsImage,
  stackedCardsImage,
  stackedCardsLayout,
} from '@/constants/stacked-cards';

type StackedCardsDecorProps = {
  variant: 'home' | 'budgetReview' | 'introSlide2';
  style?: StyleProp<ViewStyle>;
};

export function StackedCardsDecor({ variant, style }: StackedCardsDecorProps) {
  const { width: screenWidth } = useWindowDimensions();
  const placement = stackedCardsLayout[variant];
  const frameWidth =
    variant === 'home'
      ? screenWidth
      : Math.min(
          screenWidth - budgetFlowLayout.reviewScreenPaddingH * 2,
          budgetFlowLayout.reviewCardWidth
        );
  const scale = frameWidth / placement.frameWidth;

  const scaledStyle =
    'left' in placement
      ? {
          top: placement.top * scale,
          left: placement.left * scale,
          width: placement.width * scale,
          height: placement.height * scale,
        }
      : {
          top: placement.top * scale,
          right: placement.right * scale,
          width: placement.width * scale,
          height: placement.height * scale,
        };

  const source = variant === 'introSlide2' ? introSlide2StackedCardsImage : stackedCardsImage;

  return (
    <View style={[styles.root, scaledStyle, style]} pointerEvents="none">
      <Image source={source} style={styles.image} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    zIndex: 0,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
