import { MaterialIcons } from '@expo/vector-icons';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { INTRO_SLIDE1_CARD_TOP, slide1Styles as styles } from '@/styles/intro/slide-1';
import { Colors } from '@/constants/Colors';

const feedingIcon = require('@/assets/intro/feeding.png') as ImageSourcePropType;
const groceriesIcon = require('@/assets/intro/groceries.png') as ImageSourcePropType;

export function TrackExpensesMockup() {
  const insets = useSafeAreaInsets();
  const cardOffset = Math.max(INTRO_SLIDE1_CARD_TOP - insets.top, 8);

  return (
    <View style={[styles.wrap, { marginTop: cardOffset }]}>
      <View style={styles.card}>
        <Text style={styles.cardHeading}>Today&apos;s expenses</Text>
        <View style={styles.list}>
          <ExpenseRow
            icon={feedingIcon}
            label="Feeding"
            meta="Today : 12:00AM"
            amount="-₦3,000"
            showBorderBottom
          />
          <ExpenseRow
            icon={groceriesIcon}
            label="Groceries"
            meta="yesterday : 12:00AM"
            amount="-₦4,000"
          />
        </View>
        <View style={styles.voiceBar}>
          <Text style={styles.voiceLabel}>Voice record</Text>
          <View style={styles.recordBtn}>
            <MaterialIcons name="mic" size={14} color={Colors.white} />
            <Text style={styles.recordBtnText}>Record expense</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

function ExpenseRow({
  icon,
  label,
  meta,
  amount,
  showBorderBottom = false,
}: {
  icon: ImageSourcePropType;
  label: string;
  meta: string;
  amount: string;
  showBorderBottom?: boolean;
}) {
  return (
    <View style={[styles.row, showBorderBottom && styles.rowBorderBottom]}>
      <Image source={icon} style={styles.rowIcon} resizeMode="contain" />
      <View style={styles.rowText}>
        <Text style={styles.rowLabel}>{label}</Text>
        <Text style={styles.rowMeta}>{meta}</Text>
      </View>
      <Text style={styles.rowAmount}>{amount}</Text>
    </View>
  );
}
