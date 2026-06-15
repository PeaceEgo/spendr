import { router } from 'expo-router';

import { IntroScreen } from '@/components/intro/IntroScreen';
import { BudgetMockup } from '@/components/intro/mockups/BudgetMockup';

export default function IntroSlide2() {
  return (
    <IntroScreen
      activeIndex={1}
      variant="white"
      mockupAlign="top"
      title="Stay ahead of your budget always"
      subtitle="See what's safe to spend today. Know your pace before you run out."
      primaryLabel="Continue"
      onPrimaryPress={() => router.push('/(intro)/slide-3')}
      secondaryLabel="Skip"
      onSecondaryPress={() => router.replace('/(auth)/signup')}
      mockup={<BudgetMockup />}
    />
  );
}
