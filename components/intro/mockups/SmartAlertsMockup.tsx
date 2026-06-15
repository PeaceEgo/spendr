import { MaterialIcons } from '@expo/vector-icons';
import { Image, Text, View, type ImageSourcePropType } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { INTRO_SLIDE3_CARD_TOP, slide3Styles as styles } from '@/styles/intro/slide-3';
import { Colors } from '@/constants/Colors';

const feedingIcon = require('@/assets/intro/feeding.png') as ImageSourcePropType;
const carIcon = require('@/assets/intro/car.png') as ImageSourcePropType;
const cartIcon = require('@/assets/intro/cart.png') as ImageSourcePropType;
const healthcareIcon = require('@/assets/intro/healthcare.png') as ImageSourcePropType;

const ORBIT_ICONS = [
  { source: carIcon, position: styles.orbitNodeTop },
  { source: feedingIcon, position: styles.orbitNodeLeft },
  { source: cartIcon, position: styles.orbitNodeRight },
  { source: healthcareIcon, position: styles.orbitNodeBottom },
] as const;

export function SmartAlertsMockup() {
  const insets = useSafeAreaInsets();
  const cardOffset = Math.max(INTRO_SLIDE3_CARD_TOP - insets.top, 8);

  return (
    <View style={[styles.panel, { marginTop: cardOffset }]}>
      <View style={styles.alertCard}>
        <View style={styles.paceBadge}>
          <MaterialIcons name="warning" size={15} color={Colors.intro.warningBadgeText} />
          <Text style={styles.paceBadgeText}>Pace Warning</Text>
        </View>
        <Text style={styles.alertHeadline}>Transportation nearing its limit:</Text>
        <Text style={styles.alertCopy}>
          At your current pace you&apos;ll exceed{' '}
          <Text style={styles.alertCopyAmount}>₦20,000</Text>
          {' '}before the month ends.
        </Text>
      </View>
      <View style={styles.orbitWrap}>
        {ORBIT_ICONS.map((item, index) => (
          <View key={index} style={[styles.orbitNode, item.position]}>
            <Image source={item.source} style={styles.orbitIcon} resizeMode="contain" />
          </View>
        ))}
      </View>
    </View>
  );
}
