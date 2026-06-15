import { Stack } from 'expo-router';

export default function IntroLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, animation: 'none' }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="slide-2" />
      <Stack.Screen name="slide-3" />
    </Stack>
  );
}
