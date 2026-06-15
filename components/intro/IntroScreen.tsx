import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import type { ReactNode } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { IntroPrimaryButton } from '@/components/intro/IntroPrimaryButton';
import {
  INTRO_FOOTER_TOP,
  introScreenStyles as styles,
} from '@/styles/intro/screen';
import { PaginationBars } from '@/components/intro/PaginationBars';
import { Colors } from '@/constants/Colors';

type PaginationVariant = 'onBlue' | 'onBlueGold' | 'onWhite';

type IntroScreenProps = {
  activeIndex: number;
  variant: 'blue' | 'white';
  title: string;
  subtitle: string;
  primaryLabel: string;
  onPrimaryPress: () => void;
  secondaryLabel: string;
  onSecondaryPress: () => void;
  secondaryVariant?: 'muted' | 'link';
  paginationVariant?: PaginationVariant;
  mockupAlign?: 'top' | 'bottom';
  /** Override when mockup is taller (e.g. slide 3 orbit). Defaults to INTRO_FOOTER_TOP. */
  footerTop?: number;
  mockup: ReactNode;
};

export function IntroScreen({
  activeIndex,
  variant,
  title,
  subtitle,
  primaryLabel,
  onPrimaryPress,
  secondaryLabel,
  onSecondaryPress,
  secondaryVariant = 'muted',
  paginationVariant,
  mockupAlign = 'bottom',
  footerTop = INTRO_FOOTER_TOP,
  mockup,
}: IntroScreenProps) {
  const insets = useSafeAreaInsets();
  const isBlue = variant === 'blue';
  const pagination =
    paginationVariant ?? (isBlue ? 'onBlue' : 'onWhite');

  const content = (
    <>
      <View
        style={[
          mockupAlign === 'top' ? styles.mockupAreaTop : styles.mockupAreaBottom,
          { height: footerTop, paddingTop: mockupAlign === 'top' ? insets.top : insets.top + 12 },
        ]}
      >
        {mockup}
      </View>
      <View
        style={[
          styles.footer,
          { top: footerTop, paddingBottom: Math.max(insets.bottom, 16) + 8 },
        ]}
      >
        <PaginationBars activeIndex={activeIndex} variant={pagination} />
        <Text style={[styles.title, isBlue ? styles.titleOnBlue : styles.titleOnWhite]}>
          {title}
        </Text>
        <Text style={[styles.subtitle, isBlue ? styles.subtitleOnBlue : styles.subtitleOnWhite]}>
          {subtitle}
        </Text>
        <IntroPrimaryButton
          label={primaryLabel}
          variant={isBlue ? 'slide1Continue' : 'onWhiteBg'}
          onPress={onPrimaryPress}
        />
        <Pressable onPress={onSecondaryPress} style={styles.secondaryPress} hitSlop={12}>
          <Text
            style={[
              styles.secondary,
              isBlue ? styles.secondaryOnBlue : styles.secondaryOnWhite,
              secondaryVariant === 'link' && styles.secondaryLink,
            ]}
          >
            {secondaryLabel}
          </Text>
        </Pressable>
      </View>
    </>
  );

  if (isBlue) {
    return (
      <LinearGradient
        colors={[Colors.intro.slide1.gradientTop, Colors.intro.slide1.gradientBottom]}
        style={styles.root}
      >
        <StatusBar style="light" />
        <View style={styles.gradient}>{content}</View>
      </LinearGradient>
    );
  }

  return (
    <View style={[styles.root, styles.rootWhite]}>
      <StatusBar style="dark" />
      {content}
    </View>
  );
}
