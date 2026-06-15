import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import { ActiveBudgetCard } from '@/components/home/ActiveBudgetCard';
import type { HomeActiveBudget } from '@/constants/home-budgets';
import { activeBudgetsSectionStyles as styles } from '@/styles/home/active-budgets-section';

type ActiveBudgetsSectionProps = {
  budgets: HomeActiveBudget[];
  onViewAll?: () => void;
};

export function ActiveBudgetsSection({ budgets, onViewAll }: ActiveBudgetsSectionProps) {
  return (
    <View style={styles.section}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Active Budgets</Text>
        <Pressable
          style={({ pressed }) => [styles.viewAllPressable, pressed && { opacity: 0.85 }]}
          onPress={onViewAll}
          accessibilityRole="button"
          accessibilityLabel="View all budgets"
        >
          <Text style={styles.viewAll}>View all</Text>
          <Ionicons name="arrow-forward" size={24} color="#697586" />
        </Pressable>
      </View>
      <View style={styles.list}>
        {budgets.map((budget) => (
          <ActiveBudgetCard key={budget.id} budget={budget} />
        ))}
      </View>
    </View>
  );
}
