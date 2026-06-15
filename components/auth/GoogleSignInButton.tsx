import { Image, Pressable, Text, type ImageSourcePropType, type PressableProps } from 'react-native';

import { authFormStyles as styles } from '@/styles/auth/form';

const googleIcon = require('@/assets/auth/google.png') as ImageSourcePropType;

type GoogleSignInButtonProps = PressableProps;

export function GoogleSignInButton({ style, ...props }: GoogleSignInButtonProps) {
  return (
    <Pressable
      style={(state) => [
        styles.googleButton,
        state.pressed && { opacity: 0.9 },
        typeof style === 'function' ? style(state) : style,
      ]}
      {...props}
    >
      <Image source={googleIcon} style={styles.googleIcon} resizeMode="contain" />
      <Text style={styles.googleLabel}>Continue with google</Text>
    </Pressable>
  );
}
