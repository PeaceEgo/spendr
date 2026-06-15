import { Ionicons } from '@expo/vector-icons';
import type { ReactNode } from 'react';
import { Pressable, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { expenseSheetStyles as styles } from '@/styles/expense/sheet';

type ExpenseFlowSheetProps = {
  title: string;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
  /** Left header control; defaults to back chevron. */
  leadingIcon?: 'back' | 'close';
  /** Voice + manual entry — same sheet height as recording. */
  variant?: 'default' | 'entry';
};

export function ExpenseFlowSheet({
  title,
  onClose,
  children,
  footer,
  contentStyle,
  leadingIcon = 'back',
  variant = 'default',
}: ExpenseFlowSheetProps) {
  const insets = useSafeAreaInsets();
  const isEntry = variant === 'entry';

  return (
    <View style={styles.root}>
      <Pressable
        style={styles.backdrop}
        onPress={onClose}
        accessibilityRole="button"
        accessibilityLabel="Close"
      />
      <View
        style={[
          styles.sheet,
          isEntry && styles.sheetEntry,
          { paddingBottom: footer ? 0 : Math.max(insets.bottom, 8) },
        ]}
      >
        <View style={styles.handle} />
        <View style={styles.header}>
          <Pressable
            style={({ pressed }) => [styles.headerSide, pressed && styles.pressed]}
            onPress={onClose}
            accessibilityRole="button"
            accessibilityLabel="Go back"
          >
            <Ionicons
              name={leadingIcon === 'close' ? 'close' : 'chevron-back'}
              size={24}
              color="#121926"
            />
          </Pressable>
          <Text style={styles.headerTitle} numberOfLines={1}>
            {title}
          </Text>
          <View style={styles.headerSide} />
        </View>
        <View style={[isEntry ? styles.bodyEntry : styles.body, contentStyle]}>
          {children}
        </View>
        {footer}
      </View>
    </View>
  );
}
