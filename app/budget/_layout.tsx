import { Stack } from 'expo-router';

export default function BudgetStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#FFFFFF' },
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="suggested" />
      <Stack.Screen name="create" />
      <Stack.Screen name="review" />
      <Stack.Screen name="[id]" />
    </Stack>
  );
}
