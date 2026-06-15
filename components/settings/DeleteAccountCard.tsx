import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import { accountSettingsColors } from '@/constants/settings';
import { accountSettingsStyles as styles } from '@/styles/settings/account';

type DeleteAccountCardProps = {
  onPress?: () => void;
};

export function DeleteAccountCard({ onPress }: DeleteAccountCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.deleteCard, pressed && styles.pressed]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel="Delete account"
    >
      <View style={styles.deleteIconBox}>
        <Ionicons name="trash-outline" size={24} color={accountSettingsColors.deleteIcon} />
      </View>
      <View style={styles.deleteTextBlock}>
        <Text style={styles.deleteTitle}>Delete Account</Text>
        <Text style={styles.deleteSubtitle}>Permanently removes all your data</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color='#141B34'/>
    </Pressable>
  );
}
