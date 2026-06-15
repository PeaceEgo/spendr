import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BudgetFlowHeader } from '@/components/budget/BudgetFlowHeader';
import { AccountProfileHeader } from '@/components/settings/AccountProfileHeader';
import { SettingsIcon } from '@/components/settings/SettingsIcon';
import { DeleteAccountCard } from '@/components/settings/DeleteAccountCard';
import { PersonalInfoCard } from '@/components/settings/PersonalInfoCard';
import { accountSettingsColors } from '@/constants/settings';
import { accountSettingsStyles as styles } from '@/styles/settings/account';

const MOCK_PROFILE = {
  name: 'Peace Egomaniac',
  email: 'egomania@outlook.com',
};

export default function AccountSettingsScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <BudgetFlowHeader
        title="Account Settings"
        backgroundColor={accountSettingsColors.pageBg}
        onBack={() => router.back()}
      />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + 100 }]}
        showsVerticalScrollIndicator={false}
      >
        <AccountProfileHeader name={MOCK_PROFILE.name} onEditAvatar={() => {}} />

        <PersonalInfoCard
          rows={[
            {
              id: 'name',
              label: 'Full Name',
              kind: 'value',
              value: MOCK_PROFILE.name,
              onEdit: () => {},
            },
            {
              id: 'email',
              label: 'Email Address',
              kind: 'value',
              value: MOCK_PROFILE.email,
              onEdit: () => {},
            },
            { id: 'gender', label: 'Gender', kind: 'add', onAdd: () => {} },
            { id: 'dob', label: 'Date of birth', kind: 'add', onAdd: () => {} },
          ]}
        />

        <DeleteAccountCard onPress={() => {}} />

        <Pressable
          style={({ pressed }) => [styles.logoutButton, pressed && styles.pressed]}
          onPress={() => {}}
          accessibilityRole="button"
          accessibilityLabel="Logout"
        >
          <SettingsIcon name="logout" />
          <Text style={styles.logoutLabel}>Logout</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
