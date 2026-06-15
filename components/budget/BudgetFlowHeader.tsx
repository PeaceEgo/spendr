import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { budgetFlowHeaderStyles as styles } from '@/styles/budget/flow-header';

type BudgetFlowHeaderProps = {
  title: string;
  onBack?: () => void;
  rightAction?: React.ReactNode;
  backgroundColor?: string;
};

export function BudgetFlowHeader({
  title,
  onBack,
  rightAction,
  backgroundColor = '#FFFFFF',
}: BudgetFlowHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.bar, { paddingTop: insets.top + 8, backgroundColor }]}>
      <Pressable
        style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}
        onPress={onBack ?? (() => router.back())}
        accessibilityRole="button"
        accessibilityLabel="Go back"
      >
        <Ionicons name="chevron-back" size={24} color="#121926" />
      </Pressable>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <View style={styles.rightSlot}>{rightAction ?? <View style={styles.backPlaceholder} />}</View>
    </View>
  );
}
