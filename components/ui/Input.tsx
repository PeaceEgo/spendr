import { Text, TextInput, View, type TextInputProps } from 'react-native';

import { Colors } from '@/constants/Colors';
import { inputStyles as styles } from '@/styles/ui/input';

type InputProps = TextInputProps & {
  label: string;
};

export function Input({ label, style, ...props }: InputProps) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholderTextColor={Colors.textSecondary}
        style={[styles.input, style]}
        {...props}
      />
    </View>
  );
}
