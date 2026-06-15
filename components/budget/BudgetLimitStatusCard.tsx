import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import {
  getBudgetLimitStatus,
  homeBudgetColors,
  type BudgetLimitStatus,
} from '@/constants/home-budgets';
import { budgetDetailsStyles as styles } from '@/styles/budget/details';
import { formatPercentUsed } from '@/utils/formatNaira';

const STATUS_TITLE: Record<BudgetLimitStatus, string> = {
  within_limit: 'Budget within limit',
  nearing_limit: 'Budget nearing its limit',
  at_limit: 'Budget at its limit',
};

function statusDescription(status: BudgetLimitStatus, percentLabel: string): string {
  switch (status) {
    case 'within_limit':
      return `You have spent ${percentLabel} on expense allocated to the Budget, you're still within the spending limit`;
    case 'nearing_limit':
      return `You have spent ${percentLabel} on expense allocated to the Budget, you're approaching your alert threshold`;
    case 'at_limit':
      return `You have spent ${percentLabel} on expense allocated to the Budget, you've reached your spending limit`;
  }
}

type BudgetLimitStatusCardProps = {
  spent: number;
  limit: number;
};

export function BudgetLimitStatusCard({ spent, limit }: BudgetLimitStatusCardProps) {
  const status = getBudgetLimitStatus(spent, limit);
  const percentLabel = formatPercentUsed(spent, limit);

  const iconColor =
    status === 'within_limit'
      ? '#205B2E'
      : status === 'at_limit'
        ? homeBudgetColors.atLimitText
        : homeBudgetColors.nearingLimitText;

  return (
    <View
      style={[
        styles.limitStatusCard,
        status === 'within_limit' && styles.limitStatusCardWithin,
        status === 'nearing_limit' && styles.limitStatusCardNearing,
        status === 'at_limit' && styles.limitStatusCardAt,
      ]}
    >
      <View style={styles.limitStatusIconWrap}>
        {status === 'within_limit' ? (
          <Ionicons name="trending-up" size={20} color={iconColor} />
        ) : (
          <Ionicons name="warning" size={20} color={iconColor} />
        )}
      </View>
      <View style={styles.limitStatusTextCol}>
        <Text
          style={[
            styles.limitStatusTitle,
            status === 'within_limit' && styles.limitStatusTitleWithin,
            status === 'nearing_limit' && styles.limitStatusTitleNearing,
            status === 'at_limit' && styles.limitStatusTitleAt,
          ]}
        >
          {STATUS_TITLE[status]}
        </Text>
        <Text
          style={[
            styles.limitStatusBody,
            status === 'within_limit' && styles.limitStatusBodyWithin,
            status === 'nearing_limit' && styles.limitStatusBodyNearing,
            status === 'at_limit' && styles.limitStatusBodyAt,
          ]}
        >
          {statusDescription(status, percentLabel)}
        </Text>
      </View>
    </View>
  );
}
