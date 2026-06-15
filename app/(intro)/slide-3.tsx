import { router } from 'expo-router';

import { IntroScreen } from '@/components/intro/IntroScreen';
import { SmartAlertsMockup } from '@/components/intro/mockups/SmartAlertsMockup';
import { INTRO_SLIDE3_FOOTER_TOP } from '@/styles/intro/slide-3';

export default function IntroSlide3() {
  return (
    <IntroScreen
      activeIndex={2}
      variant="white"
      mockupAlign="top"
      footerTop={INTRO_SLIDE3_FOOTER_TOP}
      title="Smart Alerts before you overspend"
      subtitle="Get warned by category, by pace, before the money runs out, not after."
      primaryLabel="Create Account"
      onPrimaryPress={() => router.replace('/(auth)/signup')}
      secondaryLabel="I have an Account"
      secondaryVariant="link"
      onSecondaryPress={() => router.replace('/(auth)/login')}
      mockup={<SmartAlertsMockup />}
    />
  );
}
