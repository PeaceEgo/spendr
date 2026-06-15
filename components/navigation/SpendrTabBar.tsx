import { Ionicons } from '@expo/vector-icons';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { homeLayout } from '@/constants/home';
import { spendrTabBarStyles as styles } from '@/styles/navigation/tab-bar';

const TAB_ICONS = {
  index: {
    active: require('@/assets/home/tab-home-active.png'),
  },
  budgets: {
    active: require('@/assets/home/tab-budget.png'),
    inactive: require('@/assets/home/tab-budget.png'),
  },
  insights: {
    active: require('@/assets/home/tab-insights.png'),
    inactive: require('@/assets/home/tab-insights.png'),
  },
  settings: {
    active: require('@/assets/home/tab-settings.png'),
    inactive: require('@/assets/home/tab-settings.png'),
  },
} as const;

type TabRouteName = keyof typeof TAB_ICONS;

export function SpendrTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.footer,
        {
          paddingBottom: Math.max(insets.bottom, homeLayout.tabBarOuterPaddingVertical),
        },
      ]}
    >
      <LinearGradient
        colors={['#E5E5E5', '#BFC7DB', '#4062B9']}
        locations={[0, 0.55, 1]}
        start={{ x: 0.2, y: 1 }}
        end={{ x: 0.8, y: 0 }}
        style={styles.tabContainerGradient}
      >
        <View style={styles.tabContainerInner}>
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;
            const { options } = descriptors[route.key];
            const iconSet = TAB_ICONS[route.name as TabRouteName];

            if (!iconSet) {
              return null;
            }

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <Pressable
                key={route.key}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel ?? route.name}
                onPress={onPress}
                onLongPress={onLongPress}
                style={({ pressed }) => [
                  styles.tab,
                  isFocused ? styles.tabActive : styles.tabInactive,
                  pressed && styles.tabPressed,
                ]}
              >
                {route.name === 'index' && !isFocused ? (
                  <Ionicons name="home-outline" size={26} color="#475569" />
                ) : route.name === 'index' && isFocused ? (
                  <Image
                    source={iconSet.active}
                    style={[styles.tabIcon, styles.tabIconActive]}
                    resizeMode="contain"
                  />
                ) : (
                  <Image
                    source={'inactive' in iconSet ? iconSet.inactive : iconSet.active}
                    style={[styles.tabIcon, isFocused && styles.tabIconActive]}
                    resizeMode="contain"
                  />
                )}
              </Pressable>
            );
          })}
        </View>
      </LinearGradient>
    </View>
  );
}
