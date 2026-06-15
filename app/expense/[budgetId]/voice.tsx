import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ExpenseFlowSheet } from '@/components/expense/ExpenseFlowSheet';
import { LoggedExpensesSection } from '@/components/expense/LoggedExpensesSection';
import { VoiceConfirmCard } from '@/components/expense/VoiceConfirmCard';
import { VoiceProcessingCard } from '@/components/expense/VoiceProcessingCard';
import { VoiceWaveform } from '@/components/expense/VoiceWaveform';
import { MOCK_VOICE_PARSED_EXPENSES } from '@/constants/expense-flow';
import { useExpenseBudgetId } from '@/hooks/useExpenseBudgetId';
import { ensureBudgetInDraftStore, useBudgetDraftStore } from '@/stores/budget-draft';
import { expenseFlowStyles as styles } from '@/styles/expense/flow';
import { expenseSheetStyles as sheetStyles } from '@/styles/expense/sheet';
import { commitExpensesToBudget } from '@/utils/commitExpenses';
import { navigateExpenseSuccess } from '@/utils/navigateExpenseSuccess';
import { buildVoiceConfirmQuote } from '@/utils/formatNaira';

type VoicePhase = 'recording' | 'processing' | 'confirm';

function formatTimer(seconds: number): string {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

export default function VoiceEntryScreen() {
  const budgetId = useExpenseBudgetId();
  const insets = useSafeAreaInsets();
  const budget = useBudgetDraftStore((s) => (budgetId ? s.budgets[budgetId] : undefined));
  const [phase, setPhase] = useState<VoicePhase>('recording');
  const [seconds, setSeconds] = useState(0);
  const pendingRef = useRef<typeof MOCK_VOICE_PARSED_EXPENSES | null>(null);

  useLayoutEffect(() => {
    if (budgetId) ensureBudgetInDraftStore(budgetId);
  }, [budgetId]);

  useEffect(() => {
    if (phase !== 'recording') return;
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'processing') return;
    const timeout = setTimeout(() => {
      pendingRef.current = [...MOCK_VOICE_PARSED_EXPENSES];
      setPhase('confirm');
    }, 2200);
    return () => clearTimeout(timeout);
  }, [phase]);

  if (!budgetId || !budget) {
    return (
      <ExpenseFlowSheet title="Voice Entry" onClose={() => router.back()}>
        <Text>Budget not found.</Text>
      </ExpenseFlowSheet>
    );
  }

  const parsed = pendingRef.current ?? [...MOCK_VOICE_PARSED_EXPENSES];
  const quote = buildVoiceConfirmQuote(parsed);
  const previewExpenses = parsed.map((item, index) => ({
    id: `preview-${index}`,
    budgetId,
    title: item.title,
    amount: item.amount,
    createdAt: Date.now() - index * 1000,
  }));

  /** Parsed lines appear in Logged Expenses only after recording finishes (confirm phase). */
  const displayExpenses = phase === 'confirm' ? previewExpenses : [];

  const handleStop = () => {
    setPhase('processing');
  };

  const handleRerecord = () => {
    pendingRef.current = null;
    setSeconds(0);
    setPhase('recording');
  };

  const handleConfirm = () => {
    const items = parsed.map((item) => ({ title: item.title, amount: item.amount }));
    const total = items.reduce((sum, item) => sum + item.amount, 0);
    const created = commitExpensesToBudget(budgetId, items);
    navigateExpenseSuccess(
      budgetId,
      total,
      created.map((expense) => expense.id),
    );
  };

  const footer =
    phase === 'confirm' ? (
      <View style={[sheetStyles.footer, { paddingBottom: Math.max(insets.bottom, 8) }]}>
        <Pressable
          style={({ pressed }) => [styles.confirmButton, pressed && styles.pressed]}
          onPress={handleConfirm}
        >
          <Ionicons name="checkmark-circle" size={22} color="#FFFFFF" />
          <Text style={styles.confirmButtonLabel}>Confirm and log into Budget</Text>
        </Pressable>
      </View>
    ) : undefined;

  return (
    <ExpenseFlowSheet
      title={phase === 'confirm' ? 'Voice entry' : 'Voice Entry'}
      onClose={() => router.back()}
      footer={footer}
      variant="entry"
      leadingIcon={phase === 'processing' || phase === 'confirm' ? 'close' : 'back'}
    >
      <ScrollView
        style={sheetStyles.scrollVoice}
        contentContainerStyle={[sheetStyles.scrollContent, sheetStyles.scrollContentVoice]}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {phase === 'recording' ? (
          <View style={styles.voiceCard}>
            <VoiceWaveform />
            <View style={styles.recordingRow}>
              <View style={styles.recordingDot} />
              <Text style={styles.recordingTimer}>Recording... {formatTimer(seconds)}</Text>
            </View>
            <Text style={styles.voiceRecordingHint}>
              Speak clearly and we&apos;ll process when you&apos;re done
            </Text>
            <Pressable
              style={({ pressed }) => [styles.stopButton, pressed && styles.pressed]}
              onPress={handleStop}
              accessibilityRole="button"
              accessibilityLabel="Stop recording"
            >
              <View style={styles.stopButtonSquare} />
            </Pressable>
            <Text style={styles.stopHint}>Tap to stop recording</Text>
          </View>
        ) : null}

        {phase === 'processing' ? <VoiceProcessingCard /> : null}

        {phase === 'confirm' ? (
          <VoiceConfirmCard quote={quote} onRerecord={handleRerecord} />
        ) : null}

        <LoggedExpensesSection expenses={displayExpenses} />
        {phase !== 'confirm' ? <View style={styles.voiceLoggedBottomSpacer} /> : null}
      </ScrollView>
    </ExpenseFlowSheet>
  );
}
