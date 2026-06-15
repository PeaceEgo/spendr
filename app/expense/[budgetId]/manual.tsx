import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useLayoutEffect, useRef, useState } from 'react';
import {
  InputAccessoryView,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
  type TextInput as TextInputType,
} from 'react-native';

/** Hides the default iOS number-pad "Done" toolbar above the keyboard. */
const MANUAL_AMOUNT_ACCESSORY_ID = 'manualAmountAccessory';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ExpenseFlowSheet } from '@/components/expense/ExpenseFlowSheet';
import { useExpenseBudgetId } from '@/hooks/useExpenseBudgetId';
import { ensureBudgetInDraftStore, useBudgetDraftStore } from '@/stores/budget-draft';
import { manualEntryStyles as styles } from '@/styles/expense/manual';
import { commitExpensesToBudget } from '@/utils/commitExpenses';
import { navigateExpenseSuccess } from '@/utils/navigateExpenseSuccess';
import { formatNaira } from '@/utils/formatNaira';

type DraftLine = { title: string; amount: number };

export default function ManualEntryScreen() {
  const budgetId = useExpenseBudgetId();
  const insets = useSafeAreaInsets();
  const budget = useBudgetDraftStore((s) => (budgetId ? s.budgets[budgetId] : undefined));
  const [title, setTitle] = useState('');
  const [amountText, setAmountText] = useState('');
  const [lines, setLines] = useState<DraftLine[]>([]);
  const amountRef = useRef<TextInputType>(null);

  const androidInputProps =
    Platform.OS === 'android' ? ({ includeFontPadding: false } as const) : {};

  useLayoutEffect(() => {
    if (budgetId) ensureBudgetInDraftStore(budgetId);
  }, [budgetId]);

  if (!budgetId || !budget) {
    return (
      <ExpenseFlowSheet title="Manual Entry" onClose={() => router.back()} variant="entry">
        <Text>Budget not found.</Text>
      </ExpenseFlowSheet>
    );
  }

  const parsedAmount = Number(amountText.replace(/,/g, '')) || 0;
  const canAddLine = title.trim().length > 0 && parsedAmount > 0;
  const canConfirm = lines.length > 0 || canAddLine;

  const handleAddMore = () => {
    if (!canAddLine) return;
    setLines((prev) => [...prev, { title: title.trim(), amount: parsedAmount }]);
    setTitle('');
    setAmountText('');
  };

  const handleConfirm = () => {
    const toSave = canAddLine
      ? [...lines, { title: title.trim(), amount: parsedAmount }]
      : lines;
    if (toSave.length === 0) return;
    const total = toSave.reduce((sum, item) => sum + item.amount, 0);
    const created = commitExpensesToBudget(budgetId, toSave);
    navigateExpenseSuccess(
      budgetId,
      total,
      created.map((expense) => expense.id),
    );
  };

  return (
    <ExpenseFlowSheet title="Manual Entry" onClose={() => router.back()} variant="entry">
      {Platform.OS === 'ios' ? (
        <InputAccessoryView nativeID={MANUAL_AMOUNT_ACCESSORY_ID}>
          <View />
        </InputAccessoryView>
      ) : null}
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.field}>
          <Text style={styles.label}>Expense Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter title"
            placeholderTextColor="#697586"
            value={title}
            onChangeText={setTitle}
            autoCapitalize="sentences"
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => amountRef.current?.focus()}
            {...androidInputProps}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Amount (₦)</Text>
          <TextInput
            ref={amountRef}
            style={styles.input}
            placeholder="Enter amount"
            placeholderTextColor="#697586"
            value={amountText}
            onChangeText={setAmountText}
            keyboardType="number-pad"
            inputAccessoryViewID={
              Platform.OS === 'ios' ? MANUAL_AMOUNT_ACCESSORY_ID : undefined
            }
            onSubmitEditing={Keyboard.dismiss}
            {...androidInputProps}
          />
        </View>

        {lines.length > 0 ? (
          <View style={styles.queuedList}>
            {lines.map((line, index) => (
              <View
                key={`${line.title}-${line.amount}-${index}`}
                style={[styles.queuedRow, index === lines.length - 1 && styles.queuedRowLast]}
              >
                <Text style={styles.queuedTitle}>{line.title}</Text>
                <Text style={styles.queuedAmount}>-{formatNaira(line.amount)}</Text>
              </View>
            ))}
          </View>
        ) : null}

        <Pressable
          style={({ pressed }) => [
            styles.addMoreButton,
            pressed && canAddLine && styles.pressed,
            !canAddLine && styles.addMoreDisabled,
          ]}
          onPress={handleAddMore}
          disabled={!canAddLine}
          accessibilityRole="button"
          accessibilityLabel="Add more expenses"
        >
          <Ionicons name="add" size={20} color="#FFFFFF" />
          <Text style={styles.addMoreLabel}>+ Add more</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.confirmButton,
            !canConfirm && styles.confirmButtonDisabled,
            pressed && canConfirm && styles.pressed,
          ]}
          onPress={handleConfirm}
          disabled={!canConfirm}
          accessibilityRole="button"
          accessibilityLabel="Confirm and log into budget"
        >
          <Ionicons name="checkmark-circle" size={22} color="#FFFFFF" />
          <Text style={styles.confirmButtonLabel}>Confirm and log into Budget</Text>
        </Pressable>

        <Pressable style={styles.bottomSpacer} onPress={Keyboard.dismiss} />
        <View style={{ height: Math.max(insets.bottom, 8) }} />
      </KeyboardAvoidingView>
    </ExpenseFlowSheet>
  );
}
