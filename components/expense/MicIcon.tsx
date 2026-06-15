import { Image, type ImageStyle, type StyleProp } from 'react-native';

import { expenseFlowIcons } from '@/constants/expense-flow';

type MicIconProps = {
  size?: number;
  tintColor?: string;
  style?: StyleProp<ImageStyle>;
};

/** Figma mic-line asset (`assets/expense/mic-line.png`). */
export function MicIcon({ size = 24, tintColor = '#4062B9', style }: MicIconProps) {
  return (
    <Image
      source={expenseFlowIcons.micLine}
      style={[{ width: size, height: size, tintColor }, style]}
      resizeMode="contain"
    />
  );
}
