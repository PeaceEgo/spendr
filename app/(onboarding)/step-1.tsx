import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import { OnboardingStep } from '@/components/OnboardingStep';
import { onboardingScreenStyles as styles } from '@/styles/onboarding/step-screens';

export default function OnboardingStep1() {
  const [selected, setSelected] = useState<string[]>(['No Visibility']);

  const items = [
    {
      id: 'Overspending',
      title: 'Overspending',
      description: 'I spend too much than i intend to',
      iconType: 'image',
      icon: 'file:///Users/user/.cursor/projects/Users-user-spendr/assets/trade-up-588c2f3f-1c32-4d3a-bed6-970b47efd6b6.png',
    },
    {
      id: 'No Visibility',
      title: 'No Visibility',
      description: "I don't know where my money goes",
      iconType: 'vector',
      icon: 'eye-off-outline',
    },
    {
      id: 'Month-end stress',
      title: 'Month-end stress',
      description: 'money runs out before the month ends',
      iconType: 'image',
      icon: 'file:///Users/user/.cursor/projects/Users-user-spendr/assets/calendar-remove-01-7536f7fa-1bff-408c-b781-bfc120c2f1c5.png',
    },
    {
      id: 'No Discipline',
      title: 'No Discipline',
      description: 'Hard to spend money safely and smartly',
      iconType: 'image',
      icon: 'file:///Users/user/.cursor/projects/Users-user-spendr/assets/ai-brain-01-50c48428-0425-48b5-a6a6-be13b7c0e4dd.png',
    },
  ] as const;

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <OnboardingStep
      step={1}
      totalSteps={4}
      title="What's your biggest money challenge right now?"
      subtitle="We'll personalise Spendr around what actually matters to you."
      compactContent
      primaryLabel="Continue"
      onPrimaryPress={() => router.push('/(onboarding)/step-2')}
      backFallbackHref="/(auth)/signup"
    >
      <View style={[styles.twoColGrid, styles.step1Grid]}>
        {items.map((item) => {
          const isSelected = selected.includes(item.id);
          return (
            <Pressable
              key={item.id}
              style={[styles.issueCard, isSelected && styles.cardSelected]}
              onPress={() => toggle(item.id)}
            >
              <View style={[styles.issueIconBadge, isSelected && styles.iconBadgeSelected]}>
                {item.iconType === 'image' ? (
                  <Image
                    source={{ uri: item.icon }}
                    style={[styles.issueIconImage, isSelected && styles.iconImageSelected]}
                    resizeMode="contain"
                  />
                ) : (
                  <MaterialCommunityIcons
                    name={item.icon}
                    size={24}
                    color={isSelected ? '#FFFFFF' : '#15213E'}
                  />
                )}
              </View>
              <Text style={[styles.issueTitle, isSelected && styles.cardTitleSelected]}>
                {item.title}
              </Text>
              <Text style={[styles.issueDesc, isSelected && styles.cardDescSelected]}>
                {item.description}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </OnboardingStep>
  );
}
