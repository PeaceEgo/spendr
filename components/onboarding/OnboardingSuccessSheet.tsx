import { router } from 'expo-router';
import { Image, Modal, Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { IntroPrimaryButton } from '@/components/intro/IntroPrimaryButton';
import { onboardingSuccessStyles as styles } from '@/styles/onboarding/success';

const CHECK_ICON =
  'file:///Users/user/.cursor/projects/Users-user-spendr/assets/ic_round-check-f7ea05eb-6e8c-4782-a5db-0360685a1ad2.png';

type OnboardingSuccessSheetProps = {
  visible: boolean;
  onViewSuggested?: () => void;
  onSetupManually?: () => void;
};

export function OnboardingSuccessSheet({
  visible,
  onViewSuggested,
  onSetupManually,
}: OnboardingSuccessSheetProps) {
  const insets = useSafeAreaInsets();

  return (
    <Modal visible={visible} transparent animationType="slide" statusBarTranslucent>
      <View style={styles.modalRoot}>
        <View
          style={[
            styles.sheet,
            { paddingBottom: Math.max(insets.bottom, 16) + 8 },
          ]}
        >
          <View style={styles.sheetContent}>
            <Image source={{ uri: CHECK_ICON }} style={styles.checkIcon} resizeMode="contain" />
            <Text style={styles.title}>Spendr is ready for you Peace!!</Text>
            <Text style={styles.subtitle}>
              We&apos;ve set up budgets based on your income just for you to hit the ground running.
            </Text>
            <View style={styles.actions}>
              <IntroPrimaryButton
                label="View Suggested Budgets"
                variant="onWhiteBg"
                style={styles.primaryButton}
                onPress={
                  onViewSuggested ??
                  (() => {
                    router.replace('/budget/suggested');
                  })
                }
              />
              <Pressable
                style={({ pressed }) => [
                  styles.secondaryButton,
                  pressed && styles.secondaryButtonPressed,
                ]}
                onPress={
                  onSetupManually ??
                  (() => {
                    router.replace('/(tabs)');
                  })
                }
              >
                <Text style={styles.secondaryButtonLabel}>Set up Manually</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
