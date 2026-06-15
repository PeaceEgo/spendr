import { Text, View } from 'react-native';

import { MOCK_INSIGHTS } from '@/constants/insights';
import { InsightsAlertCard } from '@/components/insights/InsightsAlertCard';
import { insightsSectionStyles as styles } from '@/styles/insights/sections';

export function AlertsSection() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Alerts</Text>
      <View style={styles.alertStack}>
        {MOCK_INSIGHTS.alerts.map((alert) => (
          <InsightsAlertCard key={alert.id} alert={alert} />
        ))}
      </View>
    </View>
  );
}
