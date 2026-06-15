import { Text, View } from 'react-native';

import { authFormStyles as styles } from '@/styles/auth/form';

export function AuthEmailDivider() {
  return (
    <View style={styles.dividerRow}>
      <View style={styles.dividerLine} />
      <Text style={styles.dividerText}>Or continue with email</Text>
      <View style={styles.dividerLine} />
    </View>
  );
}
