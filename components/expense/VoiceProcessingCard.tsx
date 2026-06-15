import { Text, View } from 'react-native';

import { VoiceProcessingDots } from '@/components/expense/VoiceProcessingDots';
import { VoiceProcessingLoader } from '@/components/expense/VoiceProcessingLoader';
import { expenseFlowStyles as styles } from '@/styles/expense/flow';

export function VoiceProcessingCard() {
  return (
    <View style={styles.processingCard}>
      <VoiceProcessingLoader />
      <Text style={styles.processingTitle}>Catching that...</Text>
      <Text style={styles.processingSubtitle}>
        Processing your voice record, This may take a few seconds.
      </Text>
      <VoiceProcessingDots />
    </View>
  );
}
