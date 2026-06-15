import { Pressable, Text, View } from 'react-native';

import { SettingsIcon } from '@/components/settings/SettingsIcon';
import { accountSettingsStyles as styles } from '@/styles/settings/account';

type PersonalInfoRow =
  | {
      id: string;
      label: string;
      kind: 'value';
      value: string;
      onEdit?: () => void;
    }
  | {
      id: string;
      label: string;
      kind: 'add';
      onAdd?: () => void;
    };

type PersonalInfoCardProps = {
  rows: PersonalInfoRow[];
};

export function PersonalInfoCard({ rows }: PersonalInfoCardProps) {
  return (
    <View style={styles.infoCard}>
      <Text style={styles.infoCardTitle}>Personal Information</Text>
      <View style={styles.infoRows}>
        {rows.map((row, index) => {
          const isLast = index === rows.length - 1;
          const rowStyle = [styles.infoRow, !isLast && styles.infoRowBorder];

          if (row.kind === 'add') {
            return (
              <Pressable
                key={row.id}
                style={({ pressed }) => [rowStyle, pressed && styles.pressed]}
                onPress={row.onAdd}
                accessibilityRole="button"
                accessibilityLabel={`Add ${row.label}`}
              >
                <Text style={styles.infoRowLabel}>{row.label}</Text>
                <View style={styles.infoRowRight}>
                  <Text style={styles.infoRowAdd}>Add</Text>
                </View>
              </Pressable>
            );
          }

          return (
            <View key={row.id} style={rowStyle}>
              <Text style={styles.infoRowLabel}>{row.label}</Text>
              <View style={styles.infoRowRight}>
                <Text style={styles.infoRowValue} numberOfLines={1}>
                  {row.value}
                </Text>
                <Pressable
                  style={({ pressed }) => [pressed && styles.pressed]}
                  onPress={row.onEdit}
                  hitSlop={8}
                  accessibilityRole="button"
                  accessibilityLabel={`Edit ${row.label}`}
                >
                  <SettingsIcon name="edit" />
                </Pressable>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}
