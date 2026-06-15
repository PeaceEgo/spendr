import { router } from 'expo-router';
import { Image, Modal, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { IntroPrimaryButton } from '@/components/intro/IntroPrimaryButton';
import { seedMockBudgetsForHome } from '@/stores/budget-draft';
import { useHomeBudgetsStore } from '@/stores/home-budgets';
import { budgetsActivatedStyles as styles } from '@/styles/budget/activated';

const CHECK_ICON =
  'file:///Users/user/.cursor/projects/Users-user-spendr/assets/ic_round-check-f7ea05eb-6e8c-4782-a5db-0360685a1ad2.png';

type BudgetsActivatedSheetProps = {
  visible: boolean;
};

export function BudgetsActivatedSheet({ visible }: BudgetsActivatedSheetProps) {
  const insets = useSafeAreaInsets();
  const activateNoExpenses = useHomeBudgetsStore((s) => s.activateNoExpenses);

  return (
    <Modal visible={visible} transparent animationType="slide" statusBarTranslucent>
      <View style={styles.modalRoot}>
        <View
          style={[
            styles.sheet,
            { paddingBottom: Math.max(insets.bottom, 16) + 8 },
          ]}
        >
          <View style={styles.sheetContent}>
            <Image source={{ uri: CHECK_ICON }} style={styles.checkIcon} resizeMode="contain" />
            <Text style={styles.title}>Budgets Activated</Text>
            <Text style={styles.subtitle}>
              You&apos;ve activated all suggested budgets, start creating expenses and track
              spendings effectively
            </Text>
            <IntroPrimaryButton
              label="Go to Dashboard"
              variant="onWhiteBg"
              style={styles.primaryButton}
              onPress={() => {
                seedMockBudgetsForHome('no_expenses');
                activateNoExpenses();
                router.replace('/(tabs)');
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
