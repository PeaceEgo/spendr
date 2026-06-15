import { Pressable, Text, View } from 'react-native';

import { SettingsIcon } from '@/components/settings/SettingsIcon';
import { accountSettingsStyles as styles } from '@/styles/settings/account';
import { getInitials } from '@/utils/getInitials';

type AccountProfileHeaderProps = {
  name: string;
  onEditAvatar?: () => void;
};

export function AccountProfileHeader({ name, onEditAvatar }: AccountProfileHeaderProps) {
  return (
    <View style={styles.profileSection}>
      <View style={styles.avatarWrap}>
        <View style={styles.avatar}>
          <Text style={styles.avatarInitials}>{getInitials(name)}</Text>
        </View>
        <Pressable
          style={({ pressed }) => [styles.avatarEditButton, pressed && styles.pressed]}
          onPress={onEditAvatar}
          accessibilityRole="button"
          accessibilityLabel="Edit profile photo"
        >
          <SettingsIcon name="edit" />
        </Pressable>
      </View>
      <Text style={styles.profileName}>{name}</Text>
    </View>
  );
}
