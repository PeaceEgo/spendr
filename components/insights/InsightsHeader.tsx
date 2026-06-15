import { Ionicons } from '@expo/vector-icons';
import { Image, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import {
  insightsColors,
  insightsLayout,
  MOCK_INSIGHTS,
} from '@/constants/insights';
import { insightsHeaderStyles as styles } from '@/styles/insights/header';

const budgetHealthPieIcon = require('@/assets/insights/pie-chart.png');

type InsightsHeaderProps = {
  paddingTop: number;
};

export function InsightsHeader({ paddingTop }: InsightsHeaderProps) {
  const score = MOCK_INSIGHTS.healthScore;
  const maxScore = MOCK_INSIGHTS.healthMaxScore;
  const progress = maxScore > 0 ? score / maxScore : 0;
  const size = insightsLayout.healthRingSize;
  const stroke = 8.5;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = circumference * Math.max(0, Math.min(1, progress));

  return (
    <View style={[styles.shell, { paddingTop: paddingTop + 10 }]}>
      <View style={styles.topRow}>
        <Text style={styles.title}>Smart Insights</Text>
        <View style={styles.periodPill}>
          <Ionicons name="calendar-outline" size={24} color={insightsColors.headerText} />
          <Text style={styles.periodText}>{MOCK_INSIGHTS.periodLabel}</Text>
          <Ionicons name="chevron-down" size={24} color={insightsColors.headerText} />
        </View>
      </View>

      <View style={styles.scoreLabelRow}>
        <Image
          source={budgetHealthPieIcon}
          style={styles.scoreLabelIcon}
          resizeMode="contain"
          accessibilityIgnoresInvertColors
        />
        <Text style={styles.scoreLabel}>Budget Health Score</Text>
      </View>

      <View style={styles.scoreRow}>
        <View style={styles.ringWrap}>
          <Svg width={size} height={size}>
            <Circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={insightsColors.scoreTrack}
              strokeWidth={stroke}
              fill="transparent"
            />
            {progress > 0 ? (
              <Circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke={insightsColors.scoreArc}
                strokeWidth={stroke}
                strokeLinecap="round"
                fill="transparent"
                strokeDasharray={`${dash} ${circumference}`}
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
              />
            ) : null}
          </Svg>
          <View style={styles.ringCenter}>
            <Text style={styles.ringScoreMain}>{score}/</Text>
            <Text style={styles.ringScoreSub}>{maxScore}</Text>
          </View>
        </View>

        <View style={styles.scoreDetails}>
          <Text style={styles.signalsText}>Score calculated from 3 signals</Text>
          <View style={styles.legendRow}>
            <LegendSwatch color={insightsColors.legendGood} label="Good" />
            <LegendSwatch color={insightsColors.legendFair} label="Fair" />
            <LegendSwatch color={insightsColors.legendPoor} label="Poor" />
          </View>
          <View style={styles.divider} />
          <Text style={styles.summaryText}>{MOCK_INSIGHTS.healthSummary}</Text>
        </View>
      </View>
    </View>
  );
}

function LegendSwatch({ color, label }: { color: string; label: string }) {
  return (
    <View style={styles.legendItem}>
      <View style={[styles.legendSwatch, { backgroundColor: color }]} />
      <Text style={styles.legendLabel}>{label}</Text>
    </View>
  );
}
