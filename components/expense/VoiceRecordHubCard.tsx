import { Pressable, Text, View } from 'react-native';

import { MicIcon } from '@/components/expense/MicIcon';
import { expenseFlowStyles as styles } from '@/styles/expense/flow';

type VoiceRecordHubCardProps = {
  onStartRecording: () => void;
};

export function VoiceRecordHubCard({ onStartRecording }: VoiceRecordHubCardProps) {
  return (
    <View style={styles.voiceCard}>
      <View style={styles.voiceCardIconWrap}>
        <MicIcon size={26} tintColor="#4062B9" />
      </View>
      <Text style={styles.voiceCardTitle}>Voice Record</Text>
      <Text style={styles.voiceCardDescription}>
        Just say it — &apos;e.g Spent 5,000 on food at item 7&apos; and we parse the rest.
      </Text>
      <Pressable
        style={({ pressed }) => [styles.voiceStartButton, pressed && styles.pressed]}
        onPress={onStartRecording}
        accessibilityRole="button"
        accessibilityLabel="Start Recording"
      >
        <MicIcon size={18} tintColor="#4062B9" />
        <Text style={styles.voiceStartLabel}>Start Recording</Text>
      </Pressable>
    </View>
  );
}
