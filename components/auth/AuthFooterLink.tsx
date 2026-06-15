import { Pressable, Text } from 'react-native';

import { authScreenStyles as styles } from '@/styles/auth/screen';

type AuthFooterLinkProps = {
  prefix: string;
  linkLabel: string;
  onPress: () => void;
};

export function AuthFooterLink({ prefix, linkLabel, onPress }: AuthFooterLinkProps) {
  return (
    <Pressable onPress={onPress} style={styles.footer} hitSlop={8}>
      <Text style={styles.footerText}>
        {prefix}
        <Text style={styles.footerLink}>{linkLabel}</Text>
      </Text>
    </Pressable>
  );
}
