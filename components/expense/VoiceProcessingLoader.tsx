import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef } from 'react';
import { Animated, Easing, Image, StyleSheet, View } from 'react-native';

import { expenseFlowColors, expenseFlowIcons, expenseFlowLayout } from '@/constants/expense-flow';

const { processingLoaderOuter, processingLoaderRing, processingLoaderInner, processingLoaderStars } =
  expenseFlowLayout;

const INNER_HOLE = processingLoaderOuter - processingLoaderRing * 2;

export function VoiceProcessingLoader() {
  const spin = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(spin, {
        toValue: 1,
        duration: 1400,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );
    animation.start();
    return () => animation.stop();
  }, [spin]);

  const rotate = spin.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.root} accessibilityLabel="Processing">
      <Animated.View style={[styles.outerSpin, { transform: [{ rotate }] }]}>
        <LinearGradient
          colors={['#607CC5', '#1D2C53', '#607CC5']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.outerGradient}
        />
      </Animated.View>
      <View style={styles.ringMask} />
      <View style={styles.innerBorder}>
        <LinearGradient
          colors={['#4062B9', '#1D2C53']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.innerGradient}
        >
          <Image
            source={expenseFlowIcons.voiceProcessingStars}
            style={styles.stars}
            resizeMode="contain"
          />
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: processingLoaderOuter,
    height: processingLoaderOuter,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerSpin: {
    ...StyleSheet.absoluteFillObject,
  },
  outerGradient: {
    width: processingLoaderOuter,
    height: processingLoaderOuter,
    borderRadius: processingLoaderOuter / 2,
  },
  ringMask: {
    position: 'absolute',
    width: INNER_HOLE,
    height: INNER_HOLE,
    borderRadius: INNER_HOLE / 2,
    backgroundColor: expenseFlowColors.processingCardBg,
  },
  innerBorder: {
    width: processingLoaderInner,
    height: processingLoaderInner,
    borderRadius: processingLoaderInner / 2,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    overflow: 'hidden',
  },
  innerGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stars: {
    width: processingLoaderStars,
    height: processingLoaderStars,
  },
});
