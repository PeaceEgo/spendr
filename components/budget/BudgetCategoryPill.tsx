import { Image, Text, View } from 'react-native';

import { BUDGET_CATEGORIES, getCategoryIcon } from '@/constants/budget-flow';
import { budgetCategoryPillStyles as styles } from '@/styles/budget/category-pill';

type BudgetCategoryPillProps = {
  categoryId: string;
  variant?: 'onPrimary' | 'onCard' | 'onDetails';
};

export function BudgetCategoryPill({
  categoryId,
  variant = 'onPrimary',
}: BudgetCategoryPillProps) {
  const cat = BUDGET_CATEGORIES.find((c) => c.id === categoryId);
  if (!cat) return null;

  const pillStyle =
    variant === 'onDetails'
      ? styles.pillOnDetails
      : variant === 'onCard'
        ? styles.pillOnCard
        : styles.pillOnPrimary;

  const iconStyle = variant === 'onPrimary' ? styles.iconOnPrimary : styles.icon;

  return (
    <View style={pillStyle}>
      <Image source={getCategoryIcon(categoryId)} style={iconStyle} resizeMode="contain" />
      <Text style={styles.label}>{cat.label}</Text>
    </View>
  );
}
