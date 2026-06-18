import { router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';
import { useState } from 'react';

import { OnboardingStep } from '@/components/OnboardingStep';
import { onboardingScreenStyles as styles } from '@/styles/onboarding/step-screens';

export default function OnboardingStep3() {
  const [selected, setSelected] = useState<string>('₦20k - ₦60k');
  const options = [
    { id: 'Under ₦50k', title: 'Under ₦50k', subtitle: 'Entry Level earner' },
    { id: '₦50k - ₦200k', title: '₦50k - ₦200k', subtitle: 'Mid range earner' },
    { id: '₦20k - ₦60k', title: '₦20k - ₦60k', subtitle: 'Comfortable earner' },
    { id: '₦60k - above', title: '₦60k - above', subtitle: 'High income earner' },
  ] as const;

  return (
    <OnboardingStep
      step={3}
      totalSteps={4}
      title="What's your rough monthly income?"
      subtitle="This helps us suggest realistic budget limits. It's only used for suggestions never stored or shared."
      compactContent
      primaryLabel="Continue"
      onPrimaryPress={() => router.push('/(onboarding)/step-4')}
    >
      <View style={styles.step3Body}>
        <View style={styles.incomeGrid}>
          {options.map((item) => (
            <Pressable
              key={item.id}
              style={[styles.incomeCard, selected === item.id && styles.cardSelected]}
              onPress={() => setSelected(item.id)}
            >
              <Text
                style={[styles.incomeTitle, selected === item.id && styles.cardTitleSelected]}
              >
                {item.title}
              </Text>
              <Text
                style={[styles.incomeSub, selected === item.id && styles.cardDescSelected]}
              >
                {item.subtitle}
              </Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.infoBanner}>
          <MaterialCommunityIcons name="information-outline" size={14} color="#697586" />
          <Text style={styles.infoText}>
            Selecting an income range would aid budget suggestions recommended to you
          </Text>
        </View>
      </View>
    </OnboardingStep>
  );
}
