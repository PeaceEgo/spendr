import { Ionicons } from '@expo/vector-icons';
import { type Href, router } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IntroPrimaryButton } from '@/components/intro/IntroPrimaryButton';
import { onboardingStepStyles as styles } from '@/styles/onboarding/step';

type OnboardingStepProps = {
  step: number;
  totalSteps: number;
  title: string;
  subtitle?: string;
  primaryLabel: string;
  onPrimaryPress: () => void;
  /** Used when there is no navigation history (e.g. step 1 after auth replace). */
  backFallbackHref?: Href;
  bottomBackLabel?: string;
  compactContent?: boolean;
  scrollable?: boolean;
  hideFooter?: boolean;
  children?: React.ReactNode;
};

export function OnboardingStep({
  step,
  totalSteps,
  title,
  subtitle,
  primaryLabel,
  onPrimaryPress,
  backFallbackHref = '/(auth)/signup',
  bottomBackLabel = 'Back',
  compactContent = false,
  scrollable = false,
  hideFooter = false,
  children,
}: OnboardingStepProps) {
  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace(backFallbackHref);
    }
  };

  const headerText = (
    <>
      <Text style={styles.stepCount}>
        {step} OF {totalSteps}
      </Text>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </>
  );

  const body = (
    <>
      <View
        style={[
          styles.content,
          compactContent && styles.contentCompact,
          scrollable && styles.contentInScroll,
        ]}
      >
        {children}
      </View>
      {!hideFooter ? (
        <View style={styles.footer}>
          <IntroPrimaryButton
            label={primaryLabel}
            variant="onWhiteBg"
            onPress={onPrimaryPress}
          />
          <Pressable style={styles.bottomBack} onPress={handleBack} hitSlop={12}>
            <Text style={styles.bottomBackLabel}>{bottomBackLabel}</Text>
          </Pressable>
        </View>
      ) : null}
    </>
  );

  const chrome = (
    <>
      <View style={styles.progressRow}>
        {Array.from({ length: totalSteps }, (_, i) => (
          <View
            key={i}
            style={[styles.progressBar, i + 1 === step && styles.progressBarActive]}
          />
        ))}
      </View>
      <Pressable style={styles.topBack} onPress={handleBack} hitSlop={10}>
        <Ionicons name="arrow-forward" size={24} color="#121926" style={styles.topBackIcon} />
        <Text style={styles.topBackLabel}>Back</Text>
      </Pressable>
    </>
  );

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        {scrollable ? (
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {chrome}
            {headerText}
            {body}
          </ScrollView>
        ) : (
          <>
            {chrome}
            {headerText}
            {body}
          </>
        )}
      </View>
    </SafeAreaView>
  );
}
