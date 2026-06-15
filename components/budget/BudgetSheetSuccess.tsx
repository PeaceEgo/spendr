import { Image, Pressable, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { budgetFlowIcons } from '@/constants/budget-flow';
import { budgetsActivatedStyles as styles } from '@/styles/budget/activated';

type BudgetSheetSuccessProps = {
  title: string;
  subtitle: string;
  primaryLabel: string;
  onPrimary: () => void;
  secondaryLabel?: string;
  onSecondary?: () => void;
  contentStyle?: StyleProp<ViewStyle>;
};

export function BudgetSheetSuccess({
  title,
  subtitle,
  primaryLabel,
  onPrimary,
  secondaryLabel,
  onSecondary,
  contentStyle,
}: BudgetSheetSuccessProps) {
  return (
    <View style={[styles.sheetContent, contentStyle]}>
      <Image source={budgetFlowIcons.checkCircle} style={styles.checkIcon} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Pressable
        style={({ pressed }) => [styles.primaryButton, pressed && { opacity: 0.9 }]}
        onPress={onPrimary}
      >
        <Text style={styles.primaryButtonLabel}>{primaryLabel}</Text>
      </Pressable>
      {secondaryLabel && onSecondary ? (
        <Pressable
          style={({ pressed }) => [
            styles.secondaryButton,
            pressed && styles.secondaryButtonPressed,
          ]}
          onPress={onSecondary}
        >
          <Text style={styles.secondaryButtonLabel}>{secondaryLabel}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}
