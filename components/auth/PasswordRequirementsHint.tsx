import { MaterialIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import { Colors } from '@/constants/Colors';
import { authFormStyles as styles } from '@/styles/auth/form';

const HINT =
  'Password must contain at least 8 characters, a number, uppercase letter, lowercase letter and symbol(@,.,%)';

export function PasswordRequirementsHint() {
  return (
    <View style={styles.hintBox}>
      <MaterialIcons name="info-outline" size={18} color={Colors.auth.hintText} />
      <Text style={styles.hintText}>{HINT}</Text>
    </View>
  );
}
