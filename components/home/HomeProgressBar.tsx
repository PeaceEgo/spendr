import { View } from 'react-native';

import { homeProgressBarStyles as styles } from '@/styles/home/progress-bar';

type HomeProgressBarProps = {
  progress: number;
  fillColor: string;
};

export function HomeProgressBar({ progress, fillColor }: HomeProgressBarProps) {
  const clamped = Math.min(1, Math.max(0, progress));

  return (
    <View style={styles.track}>
      {clamped > 0 ? (
        <View style={[styles.fill, { width: `${clamped * 100}%`, backgroundColor: fillColor }]} />
      ) : null}
    </View>
  );
}
