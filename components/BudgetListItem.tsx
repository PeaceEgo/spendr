import { Text, View } from 'react-native';

import { ProgressBar } from '@/components/ui/ProgressBar';
import { budgetListItemStyles as styles } from '@/styles/components/budget-list-item';

type BudgetListItemProps = {
  name: string;
  spent: number;
  limit: number;
  color?: string;
};

export function BudgetListItem({ name, spent, limit, color }: BudgetListItemProps) {
  const progress = limit > 0 ? spent / limit : 0;

  return (
    <View style={styles.row}>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.amount}>
          ${spent} / ${limit}
        </Text>
      </View>
      <ProgressBar progress={progress} color={color} />
    </View>
  );
}
