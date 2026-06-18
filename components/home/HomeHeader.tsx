import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { StackedCardsDecor } from '@/components/shared/StackedCardsDecor';
import { HOME_HEADER_GRADIENT } from '@/constants/home';
import { homeHeaderStyles as styles } from '@/styles/home/header';
import { formatNaira } from '@/utils/formatNaira';
import { getInitials } from '@/utils/getInitials';

const notificationIcon = require('@/assets/home/notification.png');

type HomeHeaderProps = {
  userName?: string;
  hasBudgets?: boolean;
  averageSpending?: number;
  onCreateBudget: () => void;
  onExpenseHistory: () => void;
  onNotifications?: () => void;
};

export function HomeHeader({
  userName = 'peace',
  hasBudgets = false,
  averageSpending = 0,
  onCreateBudget,
  onExpenseHistory,
  onNotifications,
}: HomeHeaderProps) {
  const budgetHint = hasBudgets
    ? averageSpending > 0
      ? 'Based on your expense on budgets created'
      : 'Based on your budgets created'
    : 'No Budgets created yet';
  const insets = useSafeAreaInsets();
  const greeting = getGreeting();

  return (
    <View style={styles.headerShell}>
      <LinearGradient
        colors={[...HOME_HEADER_GRADIENT.colors]}
        locations={[...HOME_HEADER_GRADIENT.locations]}
        start={HOME_HEADER_GRADIENT.start}
        end={HOME_HEADER_GRADIENT.end}
        style={[styles.gradient, styles.gradientWithDecor, { paddingTop: insets.top + 8 }]}
      >
      <StackedCardsDecor variant="home" />
      <View style={styles.topRow}>
        <View style={styles.profileRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarInitial}>{getInitials(userName)}</Text>
          </View>
          <View style={styles.greetingBlock}>
            <Text style={styles.greetingTitle}>
              {greeting}, {userName}
            </Text>
            <Text style={styles.greetingSubtitle}>
              Lets begin your expense tracking journey
            </Text>
          </View>
        </View>
        <Pressable
          style={({ pressed }) => [styles.notificationButton, pressed && styles.pressed]}
          onPress={onNotifications}
          accessibilityRole="button"
          accessibilityLabel="Notifications"
        >
          <Image source={notificationIcon} style={styles.notificationIcon} resizeMode="contain" />
        </Pressable>
      </View>

      <View style={styles.spendingBlock}>
        <View style={styles.spendingContent}>
          <View style={styles.averageRow}>
            <Ionicons name="calendar-outline" size={24} color="rgba(255,255,255,0.85)" />
            <Text style={styles.averageLabel}>Average spendings</Text>
          </View>
          <Text style={styles.amount}>
            {hasBudgets ? (
              formatNaira(averageSpending)
            ) : (
              <>
                <Text style={styles.currency}>₦</Text>0
              </>
            )}
          </Text>
          <Text style={styles.budgetHint}>{budgetHint}</Text>
        </View>
      </View>

      <View style={styles.actionRow}>
        <Pressable
          style={({ pressed }) => [styles.createBudgetButton, pressed && styles.pressed]}
          onPress={onCreateBudget}
          accessibilityRole="button"
          accessibilityLabel="Create budget"
        >
          <View style={styles.plusCircleDark}>
            <Ionicons name="add" size={16} color="#121926" />
          </View>
          <Text style={styles.createBudgetLabel}>Create Budget</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [styles.addExpenseButton, pressed && styles.pressed]}
          onPress={onExpenseHistory}
          accessibilityRole="button"
          accessibilityLabel="Add expense"
        >
          <View style={styles.plusCircleLight}>
            <Ionicons name="add" size={16} color="#FFFFFF" />
          </View>
          <Text style={styles.addExpenseLabel}>Add Expense</Text>
        </Pressable>
      </View>

      </LinearGradient>
    </View>
  );
}
function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

