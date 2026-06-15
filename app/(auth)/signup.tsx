import { router } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';

import { AuthEmailDivider } from '@/components/auth/AuthEmailDivider';
import { AuthFooterLink } from '@/components/auth/AuthFooterLink';
import { AuthHeader } from '@/components/auth/AuthHeader';
import { AuthPasswordField } from '@/components/auth/AuthPasswordField';
import { AuthScreenLayout } from '@/components/auth/AuthScreenLayout';
import { AuthTextField } from '@/components/auth/AuthTextField';
import { GoogleSignInButton } from '@/components/auth/GoogleSignInButton';
import { PasswordRequirementsHint } from '@/components/auth/PasswordRequirementsHint';
import { TermsAgreement } from '@/components/auth/TermsAgreement';
import { IntroPrimaryButton } from '@/components/intro/IntroPrimaryButton';
import { authScreenStyles as screenStyles } from '@/styles/auth/screen';

export default function SignupScreen() {
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  return (
    <AuthScreenLayout>
      <AuthHeader
        title="Create Account"
        subtitle="Begin your smart spending journey"
      />

      <View style={screenStyles.form}>
        <GoogleSignInButton onPress={() => {}} />
        <AuthEmailDivider />

        <AuthTextField label="Full Name" placeholder="Enter full name" autoCapitalize="words" />
        <AuthTextField
          label="Email Address"
          placeholder="Enter email address"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <AuthPasswordField label="Password" placeholder="Enter 8-digit password" />
        <PasswordRequirementsHint />
        <AuthPasswordField label="Confirm Password" placeholder="Confirm 8-digit password" />

        <TermsAgreement
          checked={agreedToTerms}
          onToggle={() => setAgreedToTerms((v) => !v)}
        />

        <IntroPrimaryButton
          label="Create Account"
          variant="onWhiteBg"
          onPress={() => router.replace('/(onboarding)/step-1')}
        />
      </View>

      <AuthFooterLink
        prefix="Already a Spendr? "
        linkLabel="Signin"
        onPress={() => router.replace('/(auth)/login')}
      />
    </AuthScreenLayout>
  );
}
