import { View, type ViewProps } from 'react-native';

import { cardStyles as styles } from '@/styles/ui/card';

export function Card({ style, ...props }: ViewProps) {
  return <View style={[styles.card, style]} {...props} />;
}
