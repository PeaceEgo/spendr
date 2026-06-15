import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, Text, TextInput, View, type TextInputProps } from 'react-native';

import { Colors } from '@/constants/Colors';
import { authFormStyles as styles } from '@/styles/auth/form';

type AuthPasswordFieldProps = Omit<TextInputProps, 'secureTextEntry'> & {
  label: string;
};

export function AuthPasswordField({
  label,
  value,
  defaultValue,
  onChangeText,
  placeholder,
  ...props
}: AuthPasswordFieldProps) {
  const [visible, setVisible] = useState(false);
  const [internalValue, setInternalValue] = useState(
    () => (defaultValue as string | undefined) ?? '',
  );
  const isControlled = value !== undefined;
  const currentValue = isControlled ? String(value ?? '') : internalValue;
  const showPlaceholder = currentValue.length === 0 && Boolean(placeholder);

  return (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <View style={styles.passwordRow}>
        {showPlaceholder ? (
          <Text style={styles.passwordPlaceholder} numberOfLines={1} pointerEvents="none">
            {placeholder}
          </Text>
        ) : null}
        <TextInput
          style={styles.passwordInput}
          value={isControlled ? value : internalValue}
          onChangeText={(text) => {
            if (!isControlled) {
              setInternalValue(text);
            }
            onChangeText?.(text);
          }}
          placeholder=""
          secureTextEntry={!visible}
          autoCapitalize="none"
          autoCorrect={false}
          {...props}
        />
        <Pressable
          onPress={() => setVisible((v) => !v)}
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel={visible ? 'Hide password' : 'Show password'}
        >
          <MaterialIcons
            name={visible ? 'visibility' : 'visibility-off'}
            size={22}
            color={Colors.auth.inputPlaceholder}
          />
        </Pressable>
      </View>
    </View>
  );
}
