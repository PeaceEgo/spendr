import { Text, View } from 'react-native';

import type { LoggedExpense } from '@/stores/expenses';
import { budgetDetailsStyles as styles } from '@/styles/budget/details';
import { formatNaira } from '@/utils/formatNaira';
import { formatExpenseTime } from '@/utils/formatExpenseTime';

type RecentExpensesSectionProps = {
  expenses: LoggedExpense[];
};

export function RecentExpensesSection({ expenses }: RecentExpensesSectionProps) {
  const sorted = [...expenses].sort((a, b) => b.createdAt - a.createdAt);

  return (
    <View style={styles.recentExpensesCard}>
      <Text style={styles.recentExpensesCardTitle}>Recent expenses</Text>
      <View style={styles.expenseList}>
        {sorted.map((expense, index) => (
          <View
            key={expense.id}
            style={[
              styles.expenseRow,
              index === sorted.length - 1 && styles.expenseRowLast,
            ]}
          >
            <View style={styles.expenseRowText}>
              <Text style={styles.expenseRowTitle}>{expense.title}</Text>
              <Text style={styles.expenseRowMeta}>{formatExpenseTime(expense.createdAt)}</Text>
            </View>
            <Text style={styles.expenseRowAmount}>-{formatNaira(expense.amount)}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
