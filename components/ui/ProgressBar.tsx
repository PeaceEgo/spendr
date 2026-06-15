import { View } from 'react-native';

import { Colors } from '@/constants/Colors';
import { progressBarStyles as styles } from '@/styles/ui/progress-bar';

type ProgressBarProps = {
  progress: number;
  color?: string;
};

export function ProgressBar({ progress, color = Colors.primaryLight }: ProgressBarProps) {
  const clamped = Math.min(1, Math.max(0, progress));

  return (
    <View style={styles.track}>
      <View style={[styles.fill, { width: `${clamped * 100}%`, backgroundColor: color }]} />
    </View>
  );
}
