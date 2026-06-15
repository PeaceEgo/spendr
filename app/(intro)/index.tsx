import { router } from 'expo-router';

import { IntroScreen } from '@/components/intro/IntroScreen';
import { TrackExpensesMockup } from '@/components/intro/mockups/TrackExpensesMockup';

export default function IntroSlide1() {
  return (
    <IntroScreen
      activeIndex={0}
      variant="blue"
      mockupAlign="top"
      paginationVariant="onBlueGold"
      title="Track every expense the fast way"
      subtitle="Smarter and easy tracker, regulating your timely spending habits"
      primaryLabel="Continue"
      onPrimaryPress={() => router.push('/(intro)/slide-2')}
      secondaryLabel="Skip"
      onSecondaryPress={() => router.replace('/(auth)/signup')}
      mockup={<TrackExpensesMockup />}
    />
  );
}
