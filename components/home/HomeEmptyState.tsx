import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, Text, View } from 'react-native';

import { homeEmptyStateStyles as styles } from '@/styles/home/empty-state';

const emptyBudgetIllustration = require('@/assets/home/empty-budget.png');

type HomeEmptyStateProps = {
  onCreateBudget: () => void;
};

export function HomeEmptyState({ onCreateBudget }: HomeEmptyStateProps) {
  return (
    <View style={styles.container}>
      <Image source={emptyBudgetIllustration} style={styles.illustration} resizeMode="contain" />
      <Text style={styles.title}>No Budgets created yet</Text>
      <Text style={styles.description}>
        Create a budget to start allocating your wallet balance and tracking your spending.
      </Text>
      <Pressable
        style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}
        onPress={onCreateBudget}
        accessibilityRole="button"
        accessibilityLabel="Create first budget"
      >
        <View style={styles.plusCircle}>
          <Ionicons name="add" size={18} color="#FFFFFF" />
        </View>
        <Text style={styles.primaryButtonLabel}>Create first budget</Text>
      </Pressable>
    </View>
  );
}
