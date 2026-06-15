import { Stack } from 'expo-router';

export default function OnboardingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#FFFFFF' },
      }}
    >
      <Stack.Screen name="step-1" />
      <Stack.Screen name="step-2" />
      <Stack.Screen name="step-3" />
      <Stack.Screen name="step-4" />
      <Stack.Screen name="step-5" />
      <Stack.Screen
        name="success"
        options={{
          gestureEnabled: false,
          presentation: 'fullScreenModal',
          animation: 'fade',
          contentStyle: { backgroundColor: '#FFFFFF' },
        }}
      />
    </Stack>
  );
}
