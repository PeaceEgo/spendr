import { Pressable, Text, type PressableProps } from 'react-native';

import { buttonStyles as styles } from '@/styles/ui/button';

type ButtonProps = PressableProps & {
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost';
};

export function Button({ label, variant = 'primary', style, ...props }: ButtonProps) {
  return (
    <Pressable
      style={(state) => [
        styles.base,
        variant === 'primary' && styles.primary,
        variant === 'secondary' && styles.secondary,
        variant === 'ghost' && styles.ghost,
        state.pressed && styles.pressed,
        typeof style === 'function' ? style(state) : style,
      ]}
      {...props}
    >
      <Text
        style={[
          styles.label,
          variant === 'primary' && styles.labelPrimary,
          variant !== 'primary' && styles.labelDark,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}
