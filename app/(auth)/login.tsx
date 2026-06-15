import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { AuthEmailDivider } from '@/components/auth/AuthEmailDivider';
import { AuthFooterLink } from '@/components/auth/AuthFooterLink';
import { AuthHeader } from '@/components/auth/AuthHeader';
import { AuthPasswordField } from '@/components/auth/AuthPasswordField';
import { AuthScreenLayout } from '@/components/auth/AuthScreenLayout';
import { AuthTextField } from '@/components/auth/AuthTextField';
import { BiometricSignInCard } from '@/components/auth/BiometricSignInCard';
import { GoogleSignInButton } from '@/components/auth/GoogleSignInButton';
import { IntroPrimaryButton } from '@/components/intro/IntroPrimaryButton';
import { authFormStyles as styles } from '@/styles/auth/form';
import { authScreenStyles as screenStyles } from '@/styles/auth/screen';

export default function LoginScreen() {
  const [biometricEnabled, setBiometricEnabled] = useState(false);

  return (
    <AuthScreenLayout>
      <AuthHeader
        title="Welcome Back"
        subtitle="Continue your smart spending journey"
      />

      <View style={screenStyles.form}>
        <GoogleSignInButton onPress={() => {}} />
        <AuthEmailDivider />

        <AuthTextField
          label="Email Address"
          placeholder="Enter email address"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <AuthPasswordField label="Password" placeholder="Enter 8-digit password" />

        <Pressable style={styles.forgotRow} onPress={() => {}} hitSlop={8}>
          <Text style={styles.forgotLink}>Forgot Password?</Text>
        </Pressable>

        <BiometricSignInCard
          enabled={biometricEnabled}
          onToggle={setBiometricEnabled}
        />

        <IntroPrimaryButton
          label="Sign in"
          variant="onWhiteBg"
          onPress={() => router.replace('/(onboarding)/step-1')}
        />
      </View>

      <AuthFooterLink
        prefix="New to Spendr? "
        linkLabel="Create Account"
        onPress={() => router.replace('/(auth)/signup')}
      />
    </AuthScreenLayout>
  );
}
