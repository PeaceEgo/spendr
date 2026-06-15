import { Pressable, Text, View } from 'react-native';

import { selectChipsStyles as styles } from '@/styles/budget/select-chips';

type SelectChipsProps<T extends string | number> = {
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
  variant?: 'threshold' | 'period' | 'category';
};

export function SelectChips<T extends string | number>({
  options,
  value,
  onChange,
  variant = 'threshold',
}: SelectChipsProps<T>) {
  return (
    <View style={[styles.row, variant === 'category' && styles.rowWrap]}>
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <Pressable
            key={String(option.value)}
            style={({ pressed }) => [
              styles.chip,
              variant === 'threshold' && styles.chipThreshold,
              variant === 'period' && styles.chipPeriod,
              variant === 'category' && styles.chipCategory,
              selected && variant === 'threshold' && styles.chipThresholdSelected,
              selected && variant === 'period' && styles.chipPeriodSelected,
              selected && variant === 'category' && styles.chipCategorySelected,
              pressed && styles.pressed,
            ]}
            onPress={() => onChange(option.value)}
          >
            <Text
              style={[
                styles.chipText,
                selected && variant === 'threshold' && styles.chipTextThresholdSelected,
                selected && variant === 'period' && styles.chipTextPeriodSelected,
                selected && variant === 'category' && styles.chipTextCategorySelected,
              ]}
            >
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
