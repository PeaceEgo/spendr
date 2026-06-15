import { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';

import { expenseFlowColors, expenseFlowLayout } from '@/constants/expense-flow';

const DOT_COUNT = 3;

export function VoiceProcessingDots() {
  const opacities = useRef(
    Array.from({ length: DOT_COUNT }, () => new Animated.Value(0.35)),
  ).current;

  useEffect(() => {
    const animations = opacities.map((opacity, index) =>
      Animated.loop(
        Animated.sequence([
          Animated.delay(index * 180),
          Animated.timing(opacity, {
            toValue: 1,
            duration: 360,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0.35,
            duration: 360,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ]),
      ),
    );
    animations.forEach((a) => a.start());
    return () => animations.forEach((a) => a.stop());
  }, [opacities]);

  return (
    <View style={styles.row} accessibilityLabel="Loading">
      {opacities.map((opacity, index) => (
        <Animated.View key={index} style={[styles.dot, { opacity }]} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: expenseFlowLayout.processingDotGap,
    height: expenseFlowLayout.processingDotSize,
  },
  dot: {
    width: expenseFlowLayout.processingDotSize,
    height: expenseFlowLayout.processingDotSize,
    borderRadius: expenseFlowLayout.processingDotSize / 2,
    backgroundColor: expenseFlowColors.processingDot,
  },
});
