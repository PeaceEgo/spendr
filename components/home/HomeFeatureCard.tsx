import { Image, Text, View } from 'react-native';

import type { HomeFeatureCardConfig } from '@/constants/home';
import { homeFeatureCardStyles as styles } from '@/styles/home/feature-card';

type HomeFeatureCardProps = {
  card: HomeFeatureCardConfig;
};

export function HomeFeatureCard({ card }: HomeFeatureCardProps) {
  return (
    <View
      style={[
        styles.card,
        { backgroundColor: card.backgroundColor, borderColor: card.borderColor },
      ]}
    >
      <View style={styles.iconWrapper}>
        <Image source={card.icon} style={styles.icon} resizeMode="contain" />
      </View>
      <View style={styles.textBlock}>
        <Text style={styles.title}>{card.title}</Text>
        <Text style={styles.description}>{card.description}</Text>
      </View>
    </View>
  );
}
