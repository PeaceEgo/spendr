import { Stack } from 'expo-router';

import { accountSettingsColors } from '@/constants/settings';

export default function SettingsStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: accountSettingsColors.pageBg },
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
