import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { spacing } from '@/constants/spacing';
import { screenPlaceholderStyles as styles } from '@/styles/components/screen-placeholder';

type ScreenPlaceholderProps = {
  title: string;
  route: string;
};

/** Temporary shell until Figma screens are implemented. */
export function ScreenPlaceholder({ title, route }: ScreenPlaceholderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + spacing.lg }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.route}>{route}</Text>
    </View>
  );
}
