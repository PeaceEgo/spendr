import type { ImageSourcePropType } from 'react-native';
import { Image, type ImageStyle, type StyleProp } from 'react-native';

import { accountSettingsIcons, accountSettingsLayout } from '@/constants/settings';

type SettingsIconName = keyof typeof accountSettingsIcons;

type SettingsIconProps = {
  name: SettingsIconName;
  size?: number;
  style?: StyleProp<ImageStyle>;
};

const defaultSizes: Record<SettingsIconName, number> = {
  edit: accountSettingsLayout.editIconSize,
  logout: accountSettingsLayout.logoutIconSize,
};

export function SettingsIcon({ name, size, style }: SettingsIconProps) {
  const dimension = size ?? defaultSizes[name];

  return (
    <Image
      source={accountSettingsIcons[name]}
      style={[{ width: dimension, height: dimension }, style]}
      resizeMode="contain"
    />
  );
}
