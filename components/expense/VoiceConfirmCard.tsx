import { Image, Pressable, Text, View } from 'react-native';

import { MicIcon } from '@/components/expense/MicIcon';
import { expenseFlowIcons } from '@/constants/expense-flow';
import { expenseFlowStyles as styles } from '@/styles/expense/flow';

type VoiceConfirmCardProps = {
  quote: string;
  onRerecord: () => void;
};

export function VoiceConfirmCard({ quote, onRerecord }: VoiceConfirmCardProps) {
  return (
    <View style={styles.confirmCard}>
      <View style={styles.confirmGotIt}>
        <Image
          source={expenseFlowIcons.voiceProcessingStars}
          style={styles.confirmGotItIcon}
          resizeMode="contain"
        />
        <Text style={styles.confirmGotItLabel}>Got it</Text>
      </View>
      <Text style={styles.confirmPrompt}>Did i get it right?</Text>
      <Text style={styles.confirmQuote}>&quot;{quote}&quot;</Text>
      <Pressable
        style={({ pressed }) => [styles.rerecordButton, pressed && styles.pressed]}
        onPress={onRerecord}
        accessibilityRole="button"
        accessibilityLabel="Wrong entry, record again"
      >
        <MicIcon size={18} tintColor="#4062B9" />
        <Text style={styles.rerecordLabel}>Wrong entry, record again</Text>
      </Pressable>
    </View>
  );
}
