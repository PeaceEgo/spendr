import { Redirect } from 'expo-router';

/**
 * App entry — routes to intro flow.
 * Later: check auth/onboarding state and redirect to (tabs) when complete.
 */
export default function Index() {
  return <Redirect href="/(intro)" />;
}
