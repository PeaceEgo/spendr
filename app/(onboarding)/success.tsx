import { Redirect } from 'expo-router';

/** Legacy route — success is shown as a bottom sheet on step 4. */
export default function OnboardingSuccessScreen() {
  return <Redirect href="/(onboarding)/step-4" />;
}
