import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import { Colors } from '@/constants/Colors';
import { authFormStyles as styles } from '@/styles/auth/form';

type TermsAgreementProps = {
  checked: boolean;
  onToggle: () => void;
};

export function TermsAgreement({ checked, onToggle }: TermsAgreementProps) {
  return (
    <Pressable style={styles.termsRow} onPress={onToggle}>
      <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
        {checked ? (
          <MaterialIcons name="check" size={14} color={Colors.white} />
        ) : null}
      </View>
      <Text style={styles.termsText}>
        I agree to the{' '}
        <Text style={styles.termsLink}>Terms of Service</Text>
        {' '}and{' '}
        <Text style={styles.termsLink}>Privacy Policy</Text>
      </Text>
    </Pressable>
  );
}
