import { router } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

import { BudgetFlowHeader } from '@/components/budget/BudgetFlowHeader';
import { CategorySelectChips } from '@/components/budget/CategorySelectChips';
import { SelectChips } from '@/components/budget/SelectChips';
import {
  BUDGET_PERIODS,
  BUDGET_THRESHOLDS,
  ROLLING_DAYS_PLACEHOLDER,
  type BudgetPeriodId,
  type BudgetThreshold,
} from '@/constants/budget-flow';
import { useBudgetDraftStore } from '@/stores/budget-draft';
import { budgetCreateStyles as styles } from '@/styles/budget/create';

export default function CreateBudgetScreen() {
  const draft = useBudgetDraftStore((s) => s.draft);
  const updateDraft = useBudgetDraftStore((s) => s.updateDraft);

  const [title, setTitle] = useState(draft.title || 'Sapa Survival Scheme');
  const [amountText, setAmountText] = useState(
    draft.amountText || (draft.amount ? draft.amount.toLocaleString('en-NG') : '150,000'),
  );
  const [period, setPeriod] = useState<BudgetPeriodId>(draft.period);
  const [rollingDaysText, setRollingDaysText] = useState(
    draft.rollingDays > 0 ? String(draft.rollingDays) : '',
  );
  const [threshold, setThreshold] = useState<BudgetThreshold>(draft.threshold);
  const [categoryIds, setCategoryIds] = useState<string[]>(draft.categoryIds);

  const androidInputProps =
    Platform.OS === 'android' ? ({ includeFontPadding: false } as const) : {};

  const parsedAmount = Number(amountText.replace(/,/g, '')) || 0;
  const parsedRollingDays = Number(rollingDaysText.replace(/\D/g, '')) || 0;
  const rollingDaysValid = period !== 'rolling' || parsedRollingDays > 0;
  const canContinue =
    title.trim().length > 0 && parsedAmount > 0 && rollingDaysValid;

  const handleContinue = () => {
    updateDraft({
      title: title.trim(),
      amount: parsedAmount,
      amountText,
      period,
      rollingDays: period === 'rolling' ? parsedRollingDays : 0,
      threshold,
      categoryIds,
    });
    router.push('/budget/review');
  };

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <BudgetFlowHeader title="Create Budget" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.field}>
          <Text style={styles.label}>Budget Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="Sapa Survival Scheme"
            placeholderTextColor="#697586"
            {...androidInputProps}
            textAlignVertical="center"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>How much is this budget?</Text>
          <TextInput
            style={styles.input}
            value={amountText}
            onChangeText={setAmountText}
            placeholder="₦150,000"
            placeholderTextColor="#697586"
            keyboardType="number-pad"
            {...androidInputProps}
            textAlignVertical="center"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Period</Text>
          <SelectChips
            variant="period"
            options={BUDGET_PERIODS.map((p) => ({ value: p.id, label: p.label }))}
            value={period}
            onChange={setPeriod}
          />
          {period === 'rolling' ? (
            <TextInput
              style={styles.input}
              value={rollingDaysText}
              onChangeText={(text) => setRollingDaysText(text.replace(/\D/g, ''))}
              placeholder={ROLLING_DAYS_PLACEHOLDER}
              placeholderTextColor="#697586"
              keyboardType="number-pad"
              {...androidInputProps}
              textAlignVertical="center"
            />
          ) : null}
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Warn me at</Text>
          <SelectChips
            variant="threshold"
            options={BUDGET_THRESHOLDS.map((t) => ({ value: t, label: `${t}%` }))}
            value={threshold}
            onChange={setThreshold}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Apply to Categories</Text>
          <CategorySelectChips selectedIds={categoryIds} onChange={setCategoryIds} />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable
          style={({ pressed }) => [
            styles.continueButton,
            !canContinue && styles.continueButtonDisabled,
            pressed && canContinue && { opacity: 0.9 },
          ]}
          disabled={!canContinue}
          onPress={handleContinue}
        >
          <Text style={styles.continueLabel}>Continue to Review</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
