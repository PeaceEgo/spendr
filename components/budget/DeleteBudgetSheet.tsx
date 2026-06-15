import { Ionicons } from '@expo/vector-icons';
import { Modal, Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { deleteBudgetStyles as styles } from '@/styles/budget/delete-budget';

type DeleteBudgetSheetProps = {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

export function DeleteBudgetSheet({ visible, onCancel, onConfirm }: DeleteBudgetSheetProps) {
  const insets = useSafeAreaInsets();

  return (
    <Modal visible={visible} transparent animationType="fade" statusBarTranslucent>
      <View style={styles.root}>
        <View style={[styles.card, { marginBottom: Math.max(insets.bottom, 24) }]}>
          <View style={styles.iconCircle}>
            <Ionicons name="trash" size={28} color="#FFFFFF" />
          </View>
          <Text style={styles.title}>Delete Budget?</Text>
          <Text style={styles.subtitle}>
            Do you wish to delete this budget? the action cannot be changed after deletion
          </Text>
          <Pressable
            style={({ pressed }) => [styles.cancelButton, pressed && styles.pressed]}
            onPress={onCancel}
          >
            <Text style={styles.cancelLabel}>No, Cancel</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [styles.deleteButton, pressed && styles.pressed]}
            onPress={onConfirm}
          >
            <Text style={styles.deleteLabel}>Yes, Delete Budget</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
