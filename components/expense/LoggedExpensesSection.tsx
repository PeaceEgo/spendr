import { Image, Text, View } from 'react-native';

import { expenseFlowIcons } from '@/constants/expense-flow';
import type { LoggedExpense } from '@/stores/expenses';
import { expenseFlowStyles as styles } from '@/styles/expense/flow';
import { formatNaira } from '@/utils/formatNaira';
import { formatExpenseTime } from '@/utils/formatExpenseTime';

type LoggedExpensesSectionProps = {
  expenses: LoggedExpense[];
};

export function LoggedExpensesSection({ expenses }: LoggedExpensesSectionProps) {
  return (
    <View style={styles.loggedSection}>
      <Text style={styles.sectionHeading}>Logged Expenses</Text>
      {expenses.length === 0 ? (
        <View style={styles.loggedEmpty}>
          <Image
            source={expenseFlowIcons.emptyLogged}
            style={styles.loggedEmptyImage}
            resizeMode="contain"
          />
          <Text style={styles.loggedEmptyText}>No expense logged yet</Text>
        </View>
      ) : (
        <View style={styles.loggedExpensesCard}>
          {expenses.map((expense, index) => (
            <View
              key={expense.id}
              style={[
                styles.loggedExpenseRow,
                index === expenses.length - 1 && styles.loggedExpenseRowLast,
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
      )}
    </View>
  );
}
