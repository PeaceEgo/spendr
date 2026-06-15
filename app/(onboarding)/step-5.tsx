import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { OnboardingStep } from '@/components/OnboardingStep';

export default function OnboardingStep5() {
  return (
    <OnboardingStep
      step={4}
      totalSteps={4}
      title="Setup Alert threshold"
      subtitle="This route is kept for backward compatibility."
      primaryLabel="Finish setup"
      onPrimaryPress={() => router.replace('/(onboarding)/step-4')}
    >
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Text>Continue to finish setup.</Text>
      </View>
    </OnboardingStep>
  );
}
