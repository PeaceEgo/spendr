
import { router } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';
import { useState } from 'react';

import { OnboardingStep } from '@/components/OnboardingStep';
import { onboardingScreenStyles as styles } from '@/styles/onboarding/step-screens';

export default function OnboardingStep2() {
  const [selected, setSelected] = useState<string[]>([]);
  const options = [
    {
      id: 'Feeding',
      title: 'Feeding',
      desc: 'Groceries, cooking and eating out',
      icon: 'file:///Users/user/.cursor/projects/Users-user-spendr/assets/serving-food-2d84425a-57a2-4b97-9a4f-9ee8cbecfc89.png',
    },
    {
      id: 'Transportation',
      title: 'Transportation',
      desc: 'Commuting to places, fuel, general movement',
      icon: 'file:///Users/user/.cursor/projects/Users-user-spendr/assets/car-04-4ef4c311-93d3-4e1b-807c-69a6339645e9.png',
    },
    {
      id: 'Shopping',
      title: 'Shopping',
      desc: 'Shopping on personal items, house hold items',
      icon: 'file:///Users/user/.cursor/projects/Users-user-spendr/assets/shopping-bag-02-0de7bd1f-b90d-4f1e-a668-936a57e66828.png',
    },
    {
      id: 'Entertainment',
      title: 'Entertainment',
      desc: 'Outing activities with friends and family',
      icon: 'file:///Users/user/.cursor/projects/Users-user-spendr/assets/user-group-02-33eb026b-4176-4e43-8e58-9975c615c4da.png',
    },
    {
      id: 'Health',
      title: 'Health',
      desc: 'Pharmacy, Doctors appointments',
      icon: 'file:///Users/user/.cursor/projects/Users-user-spendr/assets/health-c347153b-a1f4-42ce-b9fe-baa220325eb3.png',
    },
    {
      id: 'Bills',
      title: 'Bills',
      desc: 'Utility bills, power, water, cable, mainstream media',
      icon: 'file:///Users/user/.cursor/projects/Users-user-spendr/assets/invoice-04-f4fb0fad-6070-43f3-89e0-600fff892ad6.png',
    },
  ] as const;

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <OnboardingStep
      step={2}
      totalSteps={4}
      title="Where do you spend most of your money?"
      subtitle="Pick all cases that apply to your current expense issues"
      compactContent
      scrollable
      primaryLabel="Continue"
      onPrimaryPress={() => router.push('/(onboarding)/step-3')}
    >
      <View style={[styles.twoColGrid, styles.step2Grid]}>
        {options.map((item) => {
          const isSelected = selected.includes(item.id);
          return (
            <Pressable
              key={item.id}
              style={[styles.categoryCard, isSelected && styles.selectedCard]}
              onPress={() => toggle(item.id)}
            >
              <View style={styles.issueIconBadge}>
                <Image source={{ uri: item.icon }} style={styles.categoryIconImage} resizeMode="contain" />
              </View>
              <Text style={styles.categoryTitle}>{item.title}</Text>
              <Text style={styles.categoryDesc}>{item.desc}</Text>
            </Pressable>
          );
        })}
      </View>
    </OnboardingStep>
  );
}
