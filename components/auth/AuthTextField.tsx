import { useState } from 'react';
import { Text, TextInput, View, type TextInputProps } from 'react-native';

import { authFormStyles as styles } from '@/styles/auth/form';

type AuthTextFieldProps = TextInputProps & {
  label: string;
};

export function AuthTextField({
  label,
  style,
  value,
  defaultValue,
  onChangeText,
  placeholder,
  ...props
}: AuthTextFieldProps) {
  const [internalValue, setInternalValue] = useState(
    () => (defaultValue as string | undefined) ?? '',
  );
  const isControlled = value !== undefined;
  const currentValue = isControlled ? String(value ?? '') : internalValue;
  const showPlaceholder = currentValue.length === 0 && Boolean(placeholder);

  return (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <View style={styles.fieldInputWrap}>
        {showPlaceholder ? (
          <Text style={styles.fieldPlaceholder} numberOfLines={1} pointerEvents="none">
            {placeholder}
          </Text>
        ) : null}
        <TextInput
          style={[styles.fieldInput, style]}
          value={isControlled ? value : internalValue}
          onChangeText={(text) => {
            if (!isControlled) {
              setInternalValue(text);
            }
            onChangeText?.(text);
          }}
          placeholder=""
          {...props}
        />
      </View>
    </View>
  );
}
