import { Text, View } from 'react-native';

import { DonutChart } from '@/components/insights/DonutChart';
import { MOCK_INSIGHTS, insightsLayout } from '@/constants/insights';
import { formatNaira, formatNairaCompact } from '@/utils/formatNaira';
import { insightsSectionStyles as styles } from '@/styles/insights/sections';

export function SpendingPatternsSection() {
  const { totalSpent, segments } = MOCK_INSIGHTS.spendingPatterns;
  const ringSize = insightsLayout.spendingRingSize;
  const stroke = insightsLayout.spendingRingStroke;

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Spending Patterns</Text>
      <Text style={styles.sectionSubtitle}>
        Money actually spent from each budgets created
      </Text>
      <View style={styles.patternsRow}>
        <DonutChart
          size={ringSize}
          stroke={stroke}
          segmentGapDegrees={insightsLayout.spendingRingSegmentGapDegrees}
          strokeLinecap="round"
          trackColor="transparent"
          segments={segments.map((segment) => ({
            value: segment.amount,
            color: segment.color,
          }))}
        >
          <View style={styles.patternsCenter}>
            <Text style={styles.patternsTotal}>{formatNairaCompact(totalSpent)}</Text>
            <Text style={styles.patternsTotalLabel}>total spent</Text>
          </View>
        </DonutChart>
        <View style={styles.legendCol}>
          {segments.map((segment) => (
            <View key={segment.id} style={styles.patternLegendRow}>
              <View style={styles.patternLegendLeft}>
                <View style={[styles.patternSwatch, { backgroundColor: segment.color }]} />
                <Text style={styles.patternLabel} numberOfLines={1}>
                  {segment.label}
                </Text>
              </View>
              <Text style={styles.patternAmount}>{formatNaira(segment.amount)}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
