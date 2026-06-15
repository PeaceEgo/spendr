import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BudgetsActivatedSheet } from '@/components/budget/BudgetsActivatedSheet';
import {
  SuggestedBudgetCard,
  type SuggestedBudget,
} from '@/components/budget/SuggestedBudgetCard';
import { IntroPrimaryButton } from '@/components/intro/IntroPrimaryButton';
import { suggestedBudgetStyles as styles } from '@/styles/budget/suggested';

const CAR_ICON =
  require('@/assets/intro/car.png');
const INTERNET_ICON =
  { uri: 'file:///Users/user/.cursor/projects/Users-user-spendr/assets/internet_1-b86b81bf-7590-4cab-aef6-25631dbe2fc4.png' } as const;
const POPCORN_ICON =
  { uri: 'file:///Users/user/.cursor/projects/Users-user-spendr/assets/popcorn_1-e0b7627e-f50c-4ced-9a2d-bf181605b790.png' } as const;
const STARS_ICON =
  'file:///Users/user/.cursor/projects/Users-user-spendr/assets/stars-2dcbd7d0-15d8-4328-ab8c-6a643934be80.png';

const SUGGESTED_BUDGETS: SuggestedBudget[] = [
  {
    id: 'sapa',
    title: 'Sapa Survival Scheme',
    frequency: 'Monthly',
    category: 'Emergency & Savings',
    amount: '₦150,000',
    icon: INTERNET_ICON,
  },
  {
    id: 'movement',
    title: 'Movement',
    frequency: 'Monthly',
    category: 'Transportation',
    amount: '₦50,000',
    icon: CAR_ICON,
  },
  {
    id: 'netflix',
    title: 'Netflix and Chill',
    frequency: 'Weekly',
    category: 'Entertainment',
    amount: '₦50,000',
    icon: POPCORN_ICON,
  },
];

export default function SuggestedBudgetsScreen() {
  const [thresholds, setThresholds] = useState<Record<string, number>>({
    sapa: 70,
    movement: 70,
    netflix: 70,
  });
  const [showActivated, setShowActivated] = useState(false);

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/(onboarding)/step-4');
    }
  };

  return (
    <SafeAreaView style={styles.screen} edges={['top', 'bottom']}>
      <ScrollView
        style={styles.fullScroll}
        contentContainerStyle={styles.fullScrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
        <Pressable style={styles.topBack} onPress={handleBack} hitSlop={10}>
          <Ionicons name="arrow-forward" size={24} color="#121926" style={styles.topBackIcon} />
          <Text style={styles.topBackLabel}>Back</Text>
        </Pressable>
        <Text style={styles.title}>We suggested these budgets for you</Text>
        <Text style={styles.subtitle}>Amounts are based on common split ratios</Text>

        <View style={styles.cardsBlock}>
          {SUGGESTED_BUDGETS.map((budget) => (
            <SuggestedBudgetCard
              key={budget.id}
              budget={budget}
              selectedThreshold={thresholds[budget.id] ?? 70}
              onSelectThreshold={(value) =>
                setThresholds((prev) => ({ ...prev, [budget.id]: value }))
              }
            />
          ))}
          <View style={styles.totalBanner}>
            <View style={styles.totalBannerRow}>
              <Image source={{ uri: STARS_ICON }} style={styles.totalBannerIcon} resizeMode="contain" />
              <Text style={styles.totalTitle}>
                Total across budgets :{' '}
                <Text style={styles.totalTitleAmount}>₦350,000</Text>
              </Text>
            </View>
            <Text style={styles.totalSubtitle}>Recommended based on your monthly income</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <IntroPrimaryButton
            label="Activate all Budgets (3)"
            variant="onWhiteBg"
            onPress={() => setShowActivated(true)}
          />
          <Pressable
            style={({ pressed }) => [
              styles.secondaryButton,
              pressed && styles.secondaryButtonPressed,
            ]}
            onPress={() => router.replace('/budget/create')}
          >
            <Text style={styles.secondaryButtonLabel}>Skip and Add Manually</Text>
          </Pressable>
        </View>
      </View>
      </ScrollView>
      <BudgetsActivatedSheet visible={showActivated} />
    </SafeAreaView>
  );
}
