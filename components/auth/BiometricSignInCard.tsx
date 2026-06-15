import { Image, Pressable, Text, View, type ImageSourcePropType } from 'react-native';

import { authFormStyles as styles } from '@/styles/auth/form';

const fingerprintIcon =
  require('@/assets/auth/fingerprint.png') as ImageSourcePropType;

type BiometricSignInCardProps = {
  enabled: boolean;
  onToggle: (value: boolean) => void;
};

function BiometricToggle({
  enabled,
  onToggle,
}: {
  enabled: boolean;
  onToggle: (value: boolean) => void;
}) {
  return (
    <Pressable
      style={styles.biometricToggleTrack}
      onPress={() => onToggle(!enabled)}
      accessibilityRole="switch"
      accessibilityState={{ checked: enabled }}
    >
      <View
        style={[styles.biometricToggleThumb, enabled && styles.biometricToggleThumbOn]}
      />
    </Pressable>
  );
}

export function BiometricSignInCard({ enabled, onToggle }: BiometricSignInCardProps) {
  return (
    <View style={styles.biometricCard}>
      <View style={styles.biometricLeft}>
        <Image source={fingerprintIcon} style={styles.biometricIcon} resizeMode="contain" />
        <View style={styles.biometricCopy}>
          <Text style={styles.biometricTitle}>Use biometric sign in</Text>
          <Text style={styles.biometricSubtitle}>Face ID or Fingerprint</Text>
        </View>
      </View>
      <BiometricToggle enabled={enabled} onToggle={onToggle} />
    </View>
  );
}
