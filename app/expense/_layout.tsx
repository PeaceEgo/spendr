import { Stack } from 'expo-router';

export default function ExpenseStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'transparent' },
        animation: 'slide_from_bottom',
      }}
    >
      <Stack.Screen name="[budgetId]/index" />
      <Stack.Screen name="[budgetId]/voice" />
      <Stack.Screen name="[budgetId]/manual" />
      <Stack.Screen name="[budgetId]/success" />
    </Stack>
  );
}
