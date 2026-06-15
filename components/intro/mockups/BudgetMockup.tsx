import { LinearGradient } from 'expo-linear-gradient';
import { Image, Text, View, type ImageSourcePropType } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { INTRO_SLIDE2_CARD_TOP, slide2Styles as styles } from '@/styles/intro/slide-2';

const feedingIcon = require('@/assets/intro/feeding.png') as ImageSourcePropType;
const carIcon = require('@/assets/intro/car.png') as ImageSourcePropType;

export function BudgetMockup() {
  const insets = useSafeAreaInsets();
  const cardOffset = Math.max(INTRO_SLIDE2_CARD_TOP - insets.top, 8);

  return (
    <View style={[styles.panel, { marginTop: cardOffset }]}>
      <LinearGradient
        colors={['#4062B9', '#4062B9']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.mainCard}
      >
        <View style={styles.cornerCardLarge} />
        <View style={styles.cornerCardMid} />
        <View style={styles.cornerCardSmall} />
        <Text style={styles.safeLabel}>Safe to spend today</Text>
        <Text style={styles.safeAmount}>₦120,000</Text>
        <View style={styles.progressTrack}>
          <View style={styles.progressFill} />
        </View>
        <View style={styles.mainFooter}>
          <Text style={styles.mainFooterText}>72% budget health</Text>
          <Text style={styles.mainFooterText}>18days left</Text>
        </View>
      </LinearGradient>
      <View style={styles.miniRow}>
        <View style={[styles.miniCard, styles.miniCardBeige]}>
          <View style={styles.miniTopRow}>
            <Text style={styles.miniAmount}>₦80,000</Text>
            <View style={styles.iconBadge}>
              <Image source={feedingIcon} style={styles.miniIcon} resizeMode="contain" />
            </View>
          </View>
          <Text style={styles.miniText}>
            {'spent off '}
            <Text style={styles.miniBold}>₦500,000</Text>
            {' on feeding'}
          </Text>
        </View>
        <View style={[styles.miniCard, styles.miniCardBlue]}>
          <View style={styles.miniTopRow}>
            <Text style={styles.miniAmount}>₦20,000</Text>
            <View style={styles.iconBadge}>
              <Image source={carIcon} style={styles.miniIcon} resizeMode="contain" />
            </View>
          </View>
          <Text style={styles.miniText}>
            {'spent off '}
            <Text style={styles.miniBold}>₦30,000</Text>
            {' on Transportation'}
          </Text>
        </View>
      </View>
    </View>
  );
}
