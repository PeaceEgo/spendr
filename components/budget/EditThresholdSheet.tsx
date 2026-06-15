import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Modal, Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BudgetSheetSuccess } from '@/components/budget/BudgetSheetSuccess';
import {
  ADJUST_THRESHOLD_OPTIONS,
  thresholdAmountAtPercent,
  type BudgetThreshold,
} from '@/constants/budget-flow';
import { editThresholdStyles as styles } from '@/styles/budget/edit-threshold';
import { formatNaira } from '@/utils/formatNaira';

type EditThresholdSheetProps = {
  visible: boolean;
  budgetTitle: string;
  budgetAmount: number;
  value: BudgetThreshold;
  onSave: (value: BudgetThreshold) => void;
  onClose: () => void;
};

function RadioMark({ selected }: { selected: boolean }) {
  return (
    <View style={[styles.radioOuter, selected && styles.radioOuterSelected]}>
      {selected ? <View style={styles.radioInner} /> : null}
    </View>
  );
}

export function EditThresholdSheet({
  visible,
  budgetTitle,
  budgetAmount,
  value,
  onSave,
  onClose,
}: EditThresholdSheetProps) {
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = useState<BudgetThreshold>(value);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (visible) {
      const initial = ADJUST_THRESHOLD_OPTIONS.some((o) => o.value === value) ? value : 70;
      setSelected(initial);
      setShowSuccess(false);
    }
  }, [visible, value]);

  const handleClose = () => {
    setShowSuccess(false);
    onClose();
  };

  const handleSave = () => {
    onSave(selected);
    setShowSuccess(true);
  };

  const normalizedSelected: BudgetThreshold = ADJUST_THRESHOLD_OPTIONS.some(
    (o) => o.value === selected,
  )
    ? selected
    : 70;

  return (
    <Modal visible={visible} transparent animationType="slide" statusBarTranslucent>
      <View style={styles.root}>
        <Pressable style={styles.backdrop} onPress={handleClose} accessibilityLabel="Close" />
        <View style={[styles.sheet, styles.sheetForm]}>
          <ScrollView
            style={[styles.formScroll, showSuccess && styles.formDimmed]}
            contentContainerStyle={[
              styles.formScrollContent,
              { paddingBottom: Math.max(insets.bottom, 16) + 16 },
            ]}
            showsVerticalScrollIndicator={false}
            bounces={false}
            keyboardShouldPersistTaps="handled"
            scrollEnabled={!showSuccess}
            pointerEvents={showSuccess ? 'none' : 'auto'}
          >
            <View style={styles.handle} />
            <Text style={styles.title}>Adjust Alert Threshold</Text>
            <Text style={styles.subtitle}>
              {budgetTitle} • {formatNaira(budgetAmount)} budget. Alert fires when spending crosses the
              chosen point.
            </Text>

            <View style={styles.optionsList}>
              {ADJUST_THRESHOLD_OPTIONS.map((option) => {
                const isSelected = normalizedSelected === option.value;
                const spendAt = thresholdAmountAtPercent(budgetAmount, option.value);
                return (
                  <Pressable
                    key={option.value}
                    style={({ pressed }) => [
                      styles.optionCard,
                      isSelected && styles.optionCardSelected,
                      pressed && styles.pressed,
                    ]}
                    onPress={() => setSelected(option.value)}
                    accessibilityRole="radio"
                    accessibilityState={{ selected: isSelected }}
                  >
                    <View style={styles.percentBadge}>
                      <Text style={styles.percentBadgeText}>{option.value}%</Text>
                    </View>
                    <View style={styles.optionBody}>
                      <Text style={styles.optionTitle}>
                        {option.label} - at {formatNaira(spendAt)} spent
                      </Text>
                      <Text style={styles.optionDescription}>{option.description}</Text>
                    </View>
                    <RadioMark selected={isSelected} />
                  </Pressable>
                );
              })}
            </View>

            <View style={styles.infoBox}>
              <Ionicons name="information-circle-outline" size={18} color="#697586" />
              <Text style={styles.infoText}>
                Amounts shown are specific to this budget&apos;s {formatNaira(budgetAmount)} limit. Other
                budgets are unaffected.
              </Text>
            </View>

            <View style={styles.actions}>
              <Pressable
                style={({ pressed }) => [styles.saveButton, pressed && styles.pressed]}
                onPress={handleSave}
              >
                <Text style={styles.saveButtonLabel}>Save Changes</Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [styles.cancelButton, pressed && styles.pressed]}
                onPress={handleClose}
              >
                <Text style={styles.cancelButtonLabel}>Cancel</Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>

        {showSuccess ? (
          <View style={styles.successOverlay} pointerEvents="box-none">
            <View style={styles.successScrim} pointerEvents="auto" />
            <View
              style={[
                styles.successPanel,
                { paddingBottom: Math.max(insets.bottom, 16) + 8 },
              ]}
              pointerEvents="auto"
            >
              <BudgetSheetSuccess
                contentStyle={styles.successBody}
                title="Changes Saved"
                subtitle="You've successfully updated your alert threshold. You'll be notified when spending crosses the chosen point."
                primaryLabel="Continue"
                onPrimary={handleClose}
              />
            </View>
          </View>
        ) : null}
      </View>
    </Modal>
  );
}
