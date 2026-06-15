import { Image, Text, View } from 'react-native';

import { BudgetCategoryPill } from '@/components/budget/BudgetCategoryPill';
import { StackedCardsDecor } from '@/components/shared/StackedCardsDecor';
import {
  budgetFlowIcons,
  getReviewCategoryDisplay,
  periodLabel,
  type BudgetPeriodId,
} from '@/constants/budget-flow';
import { formatNaira } from '@/utils/formatNaira';
import { budgetReviewSummaryStyles as styles } from '@/styles/budget/review-summary';

type BudgetReviewSummaryCardProps = {
  title: string;
  amount: number;
  period: BudgetPeriodId;
  categoryIds: string[];
  threshold: number;
};

export function BudgetReviewSummaryCard({
  title,
  amount,
  period,
  categoryIds,
  threshold,
}: BudgetReviewSummaryCardProps) {
  const { visibleIds, extraCount } = getReviewCategoryDisplay(categoryIds);

  return (
    <View style={styles.cardShell}>
      <View style={styles.card}>
        <StackedCardsDecor variant="budgetReview" />
        <View style={styles.topRow}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <View style={styles.periodPill}>
            <Text style={styles.periodText}>{periodLabel(period)}</Text>
          </View>
        </View>

        <View style={styles.categoryRow}>
          {visibleIds.map((id) => (
            <BudgetCategoryPill key={id} categoryId={id} variant="onPrimary" />
          ))}
          {extraCount > 0 ? (
            <Text style={styles.moreText}>+ {extraCount} more</Text>
          ) : null}
        </View>

        <Text style={styles.amount}>{formatNaira(amount)}</Text>

        <View style={styles.progressSection}>
          <View style={styles.progressTrack} />
          <View style={styles.progressLabels}>
            <Text style={styles.progressEdge}>0%</Text>
            <Text style={styles.progressEdge}>100%</Text>
          </View>
        </View>

        <View style={styles.thresholdPill}>
          <Image
            source={budgetFlowIcons.alertBell}
            style={styles.thresholdIcon}
            resizeMode="contain"
          />
          <Text style={styles.thresholdText}>Alert threshold : {threshold}%</Text>
        </View>
      </View>
    </View>
  );
}
