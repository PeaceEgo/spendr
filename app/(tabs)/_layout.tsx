import { Tabs } from 'expo-router';

import { SpendrTabBar } from '@/components/navigation/SpendrTabBar';

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <SpendrTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="budgets" options={{ title: 'Budgets' }} />
      <Tabs.Screen name="insights" options={{ title: 'Smart Insights' }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
      <Tabs.Screen name="search" options={{ href: null }} />
      <Tabs.Screen name="profile" options={{ href: null }} />
    </Tabs>
  );
}
