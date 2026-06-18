import { router } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';
import { useState } from 'react';

import { OnboardingSuccessSheet } from '@/components/onboarding/OnboardingSuccessSheet';
import { OnboardingStep } from '@/components/OnboardingStep';
import { onboardingScreenStyles as styles } from '@/styles/onboarding/step-screens';

const NOTIFICATION_ICON =
  'file:///Users/user/.cursor/projects/Users-user-spendr/assets/notification-01-b0beef47-8f94-4d65-b5f2-6e7d13f26fab.png';

type ThresholdOption = {
  id: 'early' | 'balanced' | 'late';
  title: string;
  badge: string;
  badgeStyle: typeof styles.badgeRelaxed;
  badgeTextStyle: typeof styles.badgeTextRelaxed;
  description: string;
  fillStyle: typeof styles.progressFill50 | typeof styles.progressFill70 | typeof styles.progressFill90;
};

const OPTIONS: ThresholdOption[] = [
  {
    id: 'early',
    title: 'Early . 50%',
    badge: 'Relaxed',
    badgeStyle: styles.badgeRelaxed,
    badgeTextStyle: styles.badgeTextRelaxed,
    description:
      'Alert when half your budget is gone. Plenty of time to adjust. Good if you like early heads-up.',
    fillStyle: styles.progressFill50,
  },
  {
    id: 'balanced',
    title: 'Balanced . 70%',
    badge: 'Recommended',
    badgeStyle: styles.badgeRecommended,
    badgeTextStyle: styles.badgeTextRecommended,
    description:
      'Alert when 70% is spent. Still enough room to course-correct without panic. Most users pick this.',
    fillStyle: styles.progressFill70,
  },
  {
    id: 'late',
    title: 'Late . 90%',
    badge: 'Brave',
    badgeStyle: styles.badgeBrave,
    badgeTextStyle: styles.badgeTextBrave,
    description:
      "Alert only when you're nearly out. Less noise, but less time to fix it. For the disciplined spender.",
    fillStyle: styles.progressFill90,
  },
];

export default function OnboardingStep4() {
  const [selected, setSelected] = useState<ThresholdOption['id']>('balanced');
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <>
      <OnboardingStep
        step={4}
        totalSteps={4}
        title="Setup Alert threshold"
        subtitle="Choose the point at which Spendr alerts you across all your budgets. You can tune each budget individually after."
        scrollable
        hideFooter={showSuccess}
        primaryLabel="Finish setup"
        onPrimaryPress={() => setShowSuccess(true)}
      >
      <View style={styles.thresholdList}>
        {OPTIONS.map((option) => {
          const isSelected = selected === option.id;
          return (
            <Pressable
              key={option.id}
              onPress={() => setSelected(option.id)}
              style={[
                styles.thresholdCard,
                isSelected && styles.cardSelected,
              ]}
            >
              <View style={styles.thresholdHeader}>
                <View style={styles.thresholdHeadingRow}>
                  <View style={[styles.thresholdIconBox, isSelected && styles.iconBadgeSelected]}>
                    <Image
                      source={{ uri: NOTIFICATION_ICON }}
                      style={[styles.thresholdIconImage, isSelected && styles.iconImageSelected]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.thresholdTitle, isSelected && styles.cardTitleSelected]}>
                    {option.title}
                  </Text>
                </View>
                <View style={[styles.badge, option.badgeStyle]}>
                  <Text style={[styles.badgeText, option.badgeTextStyle]}>
                    {option.badge}
                  </Text>
                </View>
              </View>
              <Text style={[styles.thresholdDesc, isSelected && styles.cardDescSelected]}>
                {option.description}
              </Text>
              <View style={styles.progressTrack}>
                <View style={[styles.progressFill, option.fillStyle]} />
              </View>
              <View style={styles.progressLabelRow}>
                <Text style={[styles.progressLabel, isSelected && styles.cardDescSelected]}>
                  Alert fires here
                </Text>
                <Text style={[styles.progressLabel, isSelected && styles.cardDescSelected]}>
                  100%
                </Text>
              </View>
            </Pressable>
          );
        })}
      </View>
      </OnboardingStep>
      <OnboardingSuccessSheet
        visible={showSuccess}
        onViewSuggested={() => {
          setShowSuccess(false);
          router.replace('/budget/suggested');
        }}
        onSetupManually={() => {
          setShowSuccess(false);
          router.replace('/(tabs)');
        }}
      />
    </>
  );
}
