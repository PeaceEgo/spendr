import { Text, View } from 'react-native';

import { expenseFlowStyles as styles } from '@/styles/expense/flow';

export function OrManualInputDivider() {
  return (
    <View style={styles.manualDividerRow}>
      <View style={styles.manualDividerLine} />
      <Text style={styles.manualDividerText}>Or manually input</Text>
      <View style={styles.manualDividerLine} />
    </View>
  );
}
