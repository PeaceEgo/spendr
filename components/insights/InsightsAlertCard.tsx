import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import { insightsColors, type InsightAlert } from '@/constants/insights';
import { insightsAlertStyles as styles } from '@/styles/insights/alerts';

const VARIANT_THEME = {
  warning: insightsColors.alertWarning,
  danger: insightsColors.alertDanger,
  safe: insightsColors.alertSafe,
} as const;

const VARIANT_LABEL = {
  warning: 'Warning',
  danger: 'Danger',
  safe: 'Safe',
} as const;

type InsightsAlertCardProps = {
  alert: InsightAlert;
};

export function InsightsAlertCard({ alert }: InsightsAlertCardProps) {
  const theme = VARIANT_THEME[alert.variant];
  const isSafe = alert.variant === 'safe';

  return (
    <View style={[styles.card, { backgroundColor: theme.bg, borderColor: theme.border }]}>
      <View style={styles.badge}>
        {isSafe ? (
          <Ionicons name="rocket-outline" size={14} color={theme.badgeText} />
        ) : (
          <MaterialIcons name="warning" size={14} color={theme.badgeText} />
        )}
        <Text style={[styles.badgeText, { color: theme.badgeText }]}>
          {VARIANT_LABEL[alert.variant]}
        </Text>
      </View>
      <Text style={[styles.title, { color: theme.title }]}>{alert.title}</Text>
      <Text style={[styles.body, { color: theme.body }]}>{alert.description}</Text>
      <Text style={styles.timestamp}>{alert.timestamp}</Text>
    </View>
  );
}
