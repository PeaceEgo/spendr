import { Image, Text, View } from 'react-native';

import { insightsIcons, MOCK_INSIGHTS } from '@/constants/insights';
import { insightsGuidanceStyles as styles } from '@/styles/insights/guidance';

export function GuidanceSection() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Guidance</Text>
      <Text style={styles.sectionSubtitle}>
        Based on pace, spending history on all budgets
      </Text>
      <View style={styles.cardStack}>
        {MOCK_INSIGHTS.guidance.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardTop}>
              <View style={styles.iconBox}>
                <Image
                  source={insightsIcons.guidanceBulb}
                  style={styles.iconImage}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.textCol}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
                <View style={styles.cardDivider} />
                <View style={styles.cardFooter}>
                  <Image
                    source={insightsIcons.guidanceStars}
                    style={styles.footerIcon}
                    resizeMode="contain"
                  />
                  <Text style={styles.footerText}>Generated from pace analysis</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
