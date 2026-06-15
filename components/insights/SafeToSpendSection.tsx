import { Image, Text, View } from 'react-native';

import { getCategoryIcon } from '@/constants/budget-flow';
import { MOCK_INSIGHTS } from '@/constants/insights';
import { formatNaira } from '@/utils/formatNaira';
import { insightsSectionStyles as styles } from '@/styles/insights/sections';

export function SafeToSpendSection() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Safe to spend today</Text>
      <View style={styles.listCard}>
        {MOCK_INSIGHTS.safeToSpend.map((item, index) => (
          <View key={item.id}>
            {index > 0 ? <View style={styles.rowDivider} /> : null}
            <View style={styles.safeRow}>
              <View style={styles.iconBox}>
                <Image
                  source={getCategoryIcon(item.categoryId)}
                  style={styles.iconImage}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.safeTextCol}>
                <Text style={styles.safeTitle}>{item.name}</Text>
                <Text
                  style={[
                    styles.safeSubtitle,
                    item.exceeded && styles.safeSubtitleDanger,
                  ]}
                >
                  {item.remainingLabel}
                </Text>
              </View>
              <View style={styles.safeAmountRow}>
                <Text style={styles.safeAmount}>{formatNaira(item.dailyAmount)}</Text>
                <Text style={styles.safeAmountToday}>today</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
