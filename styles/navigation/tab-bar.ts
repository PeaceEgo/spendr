import { Platform, StyleSheet } from 'react-native';

import { homeColors, homeLayout } from '@/constants/home';

export const spendrTabBarStyles = StyleSheet.create({
  footer: {
    width: '100%',
    minHeight: homeLayout.footerHeight,
    paddingTop: homeLayout.tabBarOuterPaddingVertical,
    paddingHorizontal: homeLayout.tabBarOuterPaddingHorizontal,
    backgroundColor: '#FFFFFF',
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.05,
        shadowRadius: 30,
      },
      android: {
        elevation: 12,
      },
      default: {},
    }),
  },
  tabContainerGradient: {
    width: '100%',
    maxWidth: homeLayout.tabContainerWidth,
    height: homeLayout.tabContainerHeight,
    borderRadius: 500,
    padding: 2,
    alignSelf: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
      },
      android: {
        elevation: 4,
      },
      default: {},
    }),
  },
  tabContainerInner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 498,
    backgroundColor: '#FFFFFF',
    paddingVertical: 9,
    paddingHorizontal: 8,
  },
  tab: {
    width: homeLayout.tabSize,
    height: homeLayout.tabSize,
    borderRadius: homeLayout.tabSize / 2,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabActive: {
    backgroundColor: homeColors.activeTabBlue,
  },
  tabInactive: {
    backgroundColor: homeColors.inactiveTabGray,
  },
  tabPressed: {
    opacity: 0.92,
  },
  tabIcon: {
    width: 28,
    height: 28,
    tintColor: '#475569',
  },
  tabIconActive: {
    tintColor: '#FFFFFF',
  },
});
