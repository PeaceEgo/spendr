import { Text, View } from 'react-native';

import { expenseFlowLayout } from '@/constants/expense-flow';
import { expenseFlowStyles as styles } from '@/styles/expense/flow';
import { formatNaira, formatPercentUsed } from '@/utils/formatNaira';

type BudgetContextCardProps = {
  budgetTitle: string;
  budgetAmount: number;
  spent: number;
};

export function BudgetContextCard({ budgetTitle, budgetAmount, spent }: BudgetContextCardProps) {
  const remaining = Math.max(0, budgetAmount - spent);
  const progress = budgetAmount > 0 ? spent / budgetAmount : 0;
  const fillWidth = Math.max(
    0,
    Math.min(
      expenseFlowLayout.contextProgressWidth,
      progress * expenseFlowLayout.contextProgressWidth,
    ),
  );

  return (
    <View style={styles.contextCard}>
      <View style={styles.contextTopRow}>
        <View style={styles.contextLeftCol}>
          <Text style={styles.contextPrefix}>Adding expense to</Text>
          <Text style={styles.contextBudgetName}>{budgetTitle}</Text>
          <Text style={styles.contextRemaining}>{formatNaira(remaining)} remaining</Text>
        </View>
        <View style={styles.contextRightCol}>
          <Text style={styles.contextPercent}>{formatPercentUsed(spent, budgetAmount)} used</Text>
          <View style={styles.contextProgressTrack}>
            {fillWidth > 0 ? (
              <View style={[styles.contextProgressFill, { width: fillWidth }]} />
            ) : null}
          </View>
        </View>
      </View>
    </View>
  );
}
