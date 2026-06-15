import { Image, Pressable, Text, View } from 'react-native';

import { BUDGET_CATEGORIES, getCategoryIcon } from '@/constants/budget-flow';
import { selectChipsStyles as styles } from '@/styles/budget/select-chips';

type CategorySelectChipsProps = {
  selectedIds: string[];
  onChange: (ids: string[]) => void;
};

export function CategorySelectChips({ selectedIds, onChange }: CategorySelectChipsProps) {
  const toggle = (id: string) => {
    if (id === 'all') {
      onChange(['all']);
      return;
    }
    const withoutAll = selectedIds.filter((x) => x !== 'all');
    if (withoutAll.includes(id)) {
      const next = withoutAll.filter((x) => x !== id);
      onChange(next.length === 0 ? ['all'] : next);
    } else {
      onChange([...withoutAll, id]);
    }
  };

  return (
    <View style={[styles.row, styles.rowWrap]}>
      {BUDGET_CATEGORIES.map((cat) => {
        const selected = selectedIds.includes(cat.id);
        return (
          <Pressable
            key={cat.id}
            style={({ pressed }) => [
              styles.chip,
              styles.chipCategory,
              selected && styles.chipCategorySelected,
              pressed && styles.pressed,
            ]}
            onPress={() => toggle(cat.id)}
          >
            <Image
              source={getCategoryIcon(cat.id)}
              style={styles.categoryIcon}
              resizeMode="contain"
            />
            <Text
              style={[
                styles.chipText,
                selected && styles.chipTextCategorySelected,
              ]}
            >
              {cat.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
