import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AlertsSection } from '@/components/insights/AlertsSection';
import { GuidanceSection } from '@/components/insights/GuidanceSection';
import { InsightsHeader } from '@/components/insights/InsightsHeader';
import { SafeToSpendSection } from '@/components/insights/SafeToSpendSection';
import { SpendingPatternsSection } from '@/components/insights/SpendingPatternsSection';
import { insightsTabStyles as styles } from '@/styles/tabs/insights';

export default function SmartInsightsTabScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{ paddingBottom: Math.max(insets.bottom + 96, 120) }}
        showsVerticalScrollIndicator={false}
      >
        <InsightsHeader paddingTop={insets.top} />
        <View style={styles.body}>
          <SafeToSpendSection />
          <AlertsSection />
          <SpendingPatternsSection />
          <GuidanceSection />
        </View>
      </ScrollView>
    </View>
  );
}
