/** Figma Settings/profile tokens */
export const accountSettingsColors = {
  pageBg: '#F8FAFC',
  cardBg: '#FFFFFF',
  cardBorder: '#E3E8EF',
  sectionTitle: '#222222',
  label: '#202939',
  value: '#697586',
  addLink: '#607CC5',
  profileName: '#121926',
  avatarBg: '#607CC5',
  avatarEditBorder: '#E3E8EF',
  avatarEditIcon: '#364152',
  deleteBg: '#FFF1F0',
  deleteBorder: '#F18278',
  deleteTitle: '#C3382C',
  deleteSubtitle: '#697586',
  deleteIcon: '#EA4335',
  logout: '#EA4335',
} as const;

export const accountSettingsIcons = {
  edit: require('@/assets/settings/edit.png'),
  logout: require('@/assets/settings/logout.png'),
} as const;

export const accountSettingsLayout = {
  screenPaddingH: 24,
  avatarSize: 68,
  avatarEditSize: 24,
  editIconSize: 16,
  logoutIconSize: 24,
  cardRadius: 15,
  cardPaddingV: 24,
  cardPaddingH: 16,
  cardGap: 15,
  deleteCardRadius: 10,
  deleteCardPadding: 16,
  rowMinHeight: 26,
  dividerColor: '#E3E8EF',
} as const;
