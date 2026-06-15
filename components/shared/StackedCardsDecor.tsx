import { Image, StyleSheet, useWindowDimensions, View, type StyleProp, type ViewStyle } from 'react-native';

import { budgetFlowLayout } from '@/constants/budget-flow';
import { stackedCardsImage, stackedCardsLayout } from '@/constants/stacked-cards';

type StackedCardsDecorProps = {
  variant: 'home' | 'budgetReview';
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

  const scaledStyle = {
    top: placement.top * scale,
    right: placement.right * scale,
    width: placement.width * scale,
    height: placement.height * scale,
  };

  return (
    <View style={[styles.root, scaledStyle, style]} pointerEvents="none">
      <Image source={stackedCardsImage} style={styles.image} resizeMode="contain" />
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
