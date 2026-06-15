import { router } from 'expo-router';
import { Modal, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BudgetSheetSuccess } from '@/components/budget/BudgetSheetSuccess';
import { budgetsActivatedStyles as sheetStyles } from '@/styles/budget/activated';

type BudgetCreationCompleteSheetProps = {
  visible: boolean;
  budgetId: string | null;
  onDismiss: () => void;
};

export function BudgetCreationCompleteSheet({
  visible,
  budgetId,
  onDismiss,
}: BudgetCreationCompleteSheetProps) {
  const insets = useSafeAreaInsets();

  return (
    <Modal visible={visible} transparent animationType="slide" statusBarTranslucent>
      <View style={sheetStyles.modalRoot}>
        <View
          style={[
            sheetStyles.sheet,
            { paddingBottom: Math.max(insets.bottom, 16) + 8 },
          ]}
        >
          <BudgetSheetSuccess
            title="Budget Creation Complete"
            subtitle="You've successfully created a new budget, track spendings faster by logging expenses"
            primaryLabel="Log first expense"
            onPrimary={() => {
              onDismiss();
              if (budgetId) {
                router.replace(`/expense/${budgetId}`);
              }
            }}
            secondaryLabel="Skip for later"
            onSecondary={() => {
              onDismiss();
              router.replace('/(tabs)');
            }}
          />
        </View>
      </View>
    </Modal>
  );
}
