import { View } from 'react-native';

import { expenseFlowStyles as styles } from '@/styles/expense/flow';

/** Static bar heights matching Figma voice-entry waveform. */
const BAR_HEIGHTS = [14, 28, 20, 36, 18, 32, 24, 40, 16, 30, 22, 34, 12, 26, 20, 38];

export function VoiceWaveform() {
  return (
    <View style={styles.waveformRow} accessibilityLabel="Audio waveform">
      {BAR_HEIGHTS.map((height, index) => (
        <View key={index} style={[styles.waveformBar, { height }]} />
      ))}
    </View>
  );
}
