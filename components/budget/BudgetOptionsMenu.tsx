import { Ionicons } from '@expo/vector-icons';
import { Modal, Pressable, Text, View } from 'react-native';

import { budgetOptionsMenuStyles as styles } from '@/styles/budget/options-menu';

type BudgetOptionsMenuProps = {
  visible: boolean;
  onClose: () => void;
  onEditBudget: () => void;
  onDeleteBudget: () => void;
};

export function BudgetOptionsMenu({
  visible,
  onClose,
  onEditBudget,
  onDeleteBudget,
}: BudgetOptionsMenuProps) {
  return (
    <Modal visible={visible} transparent animationType="fade" statusBarTranslucent>
      <Pressable style={styles.backdrop} onPress={onClose} accessibilityLabel="Close menu" />
      <View style={styles.menuAnchor}>
        <View style={styles.menu}>
          <Pressable
            style={({ pressed }) => [styles.menuItem, pressed && styles.pressed]}
            onPress={() => {
              onClose();
              onEditBudget();
            }}
          >
            <Ionicons name="create-outline" size={20} color="#121926" />
            <Text style={styles.menuItemLabel}>Edit Budget</Text>
          </Pressable>
          <View style={styles.divider} />
          <Pressable
            style={({ pressed }) => [styles.menuItem, pressed && styles.pressed]}
            onPress={() => {
              onClose();
              onDeleteBudget();
            }}
          >
            <Ionicons name="trash-outline" size={20} color="#EA4335" />
            <Text style={[styles.menuItemLabel, styles.menuItemLabelDanger]}>Delete Budget</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
