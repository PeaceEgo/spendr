import { Text, View } from 'react-native';

import { HomeProgressBar } from '@/components/home/HomeProgressBar';
import { homeBudgetColors } from '@/constants/home-budgets';
import { budgetOverviewStyles as styles } from '@/styles/home/budget-overview';
import { formatNaira } from '@/utils/formatNaira';

type BudgetOverviewCardProps = {
  planned: number;
  spent: number;
  balance: number;
  overallProgress: number;
};

export function BudgetOverviewCard({
  planned,
  spent,
  balance,
  overallProgress,
}: BudgetOverviewCardProps) {
  const percentLabel = `${Math.round(overallProgress * 100)}%`;
  const fillColor =
    overallProgress >= 0.9
      ? homeBudgetColors.atLimitProgress
      : overallProgress >= 0.7
        ? homeBudgetColors.nearingLimitProgress
        : homeBudgetColors.withinLimitProgress;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Budget overview</Text>
      <View style={styles.divider} />
      <View style={styles.statsRow}>
        <View style={styles.statCol}>
          <Text style={styles.statLabel}>Planned</Text>
          <Text style={styles.statValue}>{formatNaira(planned)}</Text>
        </View>
        <View style={styles.statCol}>
          <Text style={styles.statLabel}>Spent</Text>
          <Text style={[styles.statValue, styles.statValueSpent]}>{formatNaira(spent)}</Text>
        </View>
        <View style={styles.statCol}>
          <Text style={styles.statLabel}>Balance</Text>
          <Text style={styles.statValue}>{formatNaira(balance)}</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.progressHeader}>
        <Text style={styles.progressLabel}>Overall progress</Text>
        <Text style={styles.progressPercent}>{percentLabel}</Text>
      </View>
      <HomeProgressBar progress={overallProgress} fillColor={fillColor} />
    </View>
  );
}
