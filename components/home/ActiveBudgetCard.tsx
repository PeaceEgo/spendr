import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';

import {
  getBudgetLimitStatus,
  homeBudgetColors,
  type HomeActiveBudget,
} from '@/constants/home-budgets';
import { formatNaira, formatPercentUsed } from '@/utils/formatNaira';
import { activeBudgetCardStyles as styles } from '@/styles/home/active-budget-card';

const rocketIcon = require('@/assets/home/budgets/rocket.png');

type ActiveBudgetCardProps = {
  budget: HomeActiveBudget;
};

const STATUS_COPY = {
  within_limit: 'Budget within limit',
  nearing_limit: 'Budget nearing its limit',
  at_limit: 'Budget at its limit',
} as const;

export function ActiveBudgetCard({ budget }: ActiveBudgetCardProps) {
  const status = getBudgetLimitStatus(budget.spent, budget.limit);
  const progress = budget.limit > 0 ? budget.spent / budget.limit : 0;
  const percentLabel = formatPercentUsed(budget.spent, budget.limit);
  const isZeroSpend = budget.spent === 0;
  const progressColor =
    status === 'at_limit'
      ? homeBudgetColors.atLimitProgress
      : status === 'nearing_limit'
        ? homeBudgetColors.nearingLimitProgress
        : homeBudgetColors.withinLimitProgress;

  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && { opacity: 0.96 }]}
      onPress={() => router.push(`/budget/${budget.id}`)}
      accessibilityRole="button"
      accessibilityLabel={`Open ${budget.name} budget`}
    >
      <View style={styles.cardInner}>
        <View style={styles.headerRow}>
          <View style={styles.iconBox}>
            <Image source={budget.icon} style={styles.iconImage} resizeMode="contain" />
          </View>
          <View style={styles.headerText}>
            <Text style={styles.title} numberOfLines={1}>
              {budget.name}
            </Text>
            <Text style={styles.period} numberOfLines={1}>
              {budget.periodLabel}
            </Text>
          </View>
          <View style={styles.amountCol}>
            <Text style={styles.amount}>{formatNaira(budget.limit - budget.spent)}</Text>
            <Text style={styles.amountLabel}>Remaining</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.progressBlock}>
          <View style={styles.progressTrack}>
            {progress > 0 ? (
              <View
                style={[styles.progressFill, { width: `${progress * 100}%`, backgroundColor: progressColor }]}
              />
            ) : null}
          </View>

          <View style={styles.spentRow}>
            <Text style={styles.spentText} numberOfLines={1}>
              {formatNaira(budget.spent)} of {formatNaira(budget.limit)} spent
            </Text>
            <View
              style={[
                styles.usageBadge,
                status === 'nearing_limit' && styles.usageBadgeWarning,
                status === 'at_limit' && styles.usageBadgeDanger,
              ]}
            >
              {isZeroSpend ? (
                <Image source={rocketIcon} style={styles.usageIcon} resizeMode="contain" />
              ) : status === 'at_limit' || status === 'nearing_limit' ? (
                <Ionicons
                  name="warning"
                  size={16}
                  color={
                    status === 'at_limit'
                      ? homeBudgetColors.usageBadgeDanger
                      : homeBudgetColors.usageBadgeWarning
                  }
                />
              ) : (
                <Ionicons name="trending-up" size={16} color={homeBudgetColors.usageBadgeText} />
              )}
              <Text
                style={[
                  styles.usageText,
                  status === 'nearing_limit' && styles.usageTextWarning,
                  status === 'at_limit' && styles.usageTextDanger,
                ]}
              >
                {percentLabel} used
              </Text>
            </View>
          </View>
        </View>

        <View
          style={[
            styles.statusBar,
            status === 'within_limit' && styles.statusBarWithin,
            status === 'nearing_limit' && styles.statusBarNearing,
            status === 'at_limit' && styles.statusBarAt,
          ]}
        >
          {status === 'within_limit' ? (
            <Ionicons name="trending-up" size={18} color={homeBudgetColors.withinLimitText} />
          ) : (
            <Ionicons
              name="warning"
              size={18}
              color={
                status === 'at_limit'
                  ? homeBudgetColors.atLimitText
                  : homeBudgetColors.nearingLimitText
              }
            />
          )}
          <Text
            style={[
              styles.statusLabel,
              status === 'within_limit' && styles.statusLabelWithin,
              status === 'nearing_limit' && styles.statusLabelNearing,
              status === 'at_limit' && styles.statusLabelAt,
            ]}
          >
            {STATUS_COPY[status]}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
