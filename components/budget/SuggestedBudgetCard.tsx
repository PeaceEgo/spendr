import { Image, Pressable, Text, View, type ImageSourcePropType } from 'react-native';

import { suggestedBudgetStyles as styles } from '@/styles/budget/suggested';

const THRESHOLDS = [50, 70, 80, 90] as const;
const NOTIFICATION_ICON =
  'file:///Users/user/.cursor/projects/Users-user-spendr/assets/notification-01-b0beef47-8f94-4d65-b5f2-6e7d13f26fab.png';

export type SuggestedBudget = {
  id: string;
  title: string;
  frequency: string;
  category: string;
  amount: string;
  icon: ImageSourcePropType;
};

type SuggestedBudgetCardProps = {
  budget: SuggestedBudget;
  selectedThreshold: number;
  onSelectThreshold: (value: number) => void;
};

export function SuggestedBudgetCard({
  budget,
  selectedThreshold,
  onSelectThreshold,
}: SuggestedBudgetCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.cardTopSection}>
        <View style={styles.cardTopRow}>
        <View style={styles.iconBox}>
          <Image source={budget.icon} style={styles.iconImage} resizeMode="contain" />
        </View>
        <View style={styles.cardMain}>
          <Text style={styles.cardTitle}>{budget.title}</Text>
          <Text style={styles.cardMeta}>
            {budget.frequency} · {budget.category}
          </Text>
        </View>
        <View style={styles.amountCol}>
          <Text style={styles.amount}>{budget.amount}</Text>
          <Text style={styles.amountLabel}>Remaining</Text>
        </View>
        </View>
      </View>
      <View style={styles.thresholdHeaderRow}>
        <Image source={{ uri: NOTIFICATION_ICON }} style={styles.thresholdIcon} resizeMode="contain" />
        <Text style={styles.thresholdLabel}>Alert threshold</Text>
      </View>
      <View style={styles.thresholdRow}>
        {THRESHOLDS.map((value) => {
          const isSelected = selectedThreshold === value;
          return (
            <Pressable
              key={value}
              style={[styles.thresholdPill, isSelected && styles.thresholdPillSelected]}
              onPress={() => onSelectThreshold(value)}
            >
              <Text
                style={[
                  styles.thresholdPillText,
                  isSelected && styles.thresholdPillTextSelected,
                ]}
              >
                {value}%
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
