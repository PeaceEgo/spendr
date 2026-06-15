import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, Text, type PressableProps } from 'react-native';

import { Colors } from '@/constants/Colors';
import { introPrimaryButtonStyles as styles } from '@/styles/intro/primary-button';

type IntroPrimaryButtonProps = PressableProps & {
  label: string;
  /**
   * slide1Continue → white button on blue bg (Splash screen 1)
   * onWhiteBg → blue button on white bg (Splash screens 2 & 3)
   */
  variant: 'slide1Continue' | 'onWhiteBg';
};

export function IntroPrimaryButton({
  label,
  variant,
  style,
  ...props
}: IntroPrimaryButtonProps) {
  const isSlide1 = variant === 'slide1Continue';

  const gradientProps = isSlide1
    ? {
        colors: [...Colors.intro.slide1.continueGradient] as [string, string, string],
        locations: [...Colors.intro.slide1.continueGradientLocations] as [
          number,
          number,
          number,
        ],
      }
    : {
        colors: [...Colors.intro.continueOnWhite.continueGradient] as [
          string,
          string,
          string,
        ],
        locations: [...Colors.intro.continueOnWhite.continueGradientLocations] as [
          number,
          number,
          number,
        ],
      };

  return (
    <Pressable
      style={(state) => [
        styles.wrapper,
        state.pressed && styles.pressed,
        typeof style === 'function' ? style(state) : style,
      ]}
      {...props}
    >
      <LinearGradient
        colors={gradientProps.colors}
        locations={gradientProps.locations}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.gradientButton}
      >
        <Text style={isSlide1 ? styles.labelSlide1 : styles.labelOnWhite}>
          {label}
        </Text>
      </LinearGradient>
    </Pressable>
  );
}
