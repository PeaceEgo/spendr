import { router } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BudgetCreationCompleteSheet } from '@/components/budget/BudgetCreationCompleteSheet';
import { BudgetFlowHeader } from '@/components/budget/BudgetFlowHeader';
import { BudgetReviewSummaryCard } from '@/components/budget/BudgetReviewSummaryCard';
import { budgetFlowIcons } from '@/constants/budget-flow';
import { useBudgetDraftStore } from '@/stores/budget-draft';
import { formatNaira } from '@/utils/formatNaira';
import { budgetReviewStyles as styles } from '@/styles/budget/review';

export default function BudgetReviewScreen() {
  const insets = useSafeAreaInsets();
  const draft = useBudgetDraftStore((s) => s.draft);
  const saveDraftAsBudget = useBudgetDraftStore((s) => s.saveDraftAsBudget);
  const [showSuccess, setShowSuccess] = useState(false);
  const [createdId, setCreatedId] = useState<string | null>(null);

  const monthName = new Date().toLocaleString('en-US', { month: 'long' });
  const amountLabel = formatNaira(draft.amount);

  const handleConfirm = () => {
    const id = saveDraftAsBudget();
    setCreatedId(id);
    setShowSuccess(true);
  };

  return (
    <View style={styles.screen}>
      <BudgetFlowHeader title="Budget Review" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.content,
          { paddingBottom: Math.max(insets.bottom, 16) + 8 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <BudgetReviewSummaryCard
          title={draft.title || 'Sapa Survival Scheme'}
          amount={draft.amount}
          period={draft.period}
          categoryIds={draft.categoryIds}
          threshold={draft.threshold}
        />

        <View style={styles.infoBox}>
          <Image
            source={budgetFlowIcons.shieldHonor}
            style={styles.infoIcon}
            resizeMode="contain"
          />
          <View style={styles.infoCopy}>
            <Text style={styles.infoTitle}>
              {amountLabel} allocated into {monthName} spendings
            </Text>
            <Text style={styles.infoBody}>
              Your balance would be tracked overtime during the time frame and you&apos;ll be
              alerted when spendings cap reaches {draft.threshold}% of the allocated amount.
            </Text>
          </View>
        </View>

        <View style={styles.actions}>
          <Pressable
            style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}
            onPress={handleConfirm}
          >
            <Text style={styles.primaryLabel}>Confirm Budget</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [styles.secondaryButton, pressed && styles.pressed]}
            onPress={() => router.back()}
          >
            <Text style={styles.secondaryLabel}>Change Details</Text>
          </Pressable>
        </View>
      </ScrollView>

      <BudgetCreationCompleteSheet
        visible={showSuccess}
        budgetId={createdId}
        onDismiss={() => setShowSuccess(false)}
      />
    </View>
  );
}
