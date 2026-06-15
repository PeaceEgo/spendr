import { View } from 'react-native';

import { paginationBarsStyles as styles } from '@/styles/intro/pagination-bars';

const BAR_COUNT = 3;

export type PaginationVariant = 'onBlue' | 'onBlueGold' | 'onWhite';

type PaginationBarsProps = {
  activeIndex: number;
  variant: PaginationVariant;
};

export function PaginationBars({ activeIndex, variant }: PaginationBarsProps) {
  const isOnBlue = variant === 'onBlue' || variant === 'onBlueGold';
  const isGold = variant === 'onBlueGold';

  return (
    <View style={styles.row}>
      {Array.from({ length: BAR_COUNT }, (_, i) => {
        const isActive = i === activeIndex;
        return (
          <View
            key={i}
            style={[
              styles.bar,
              isActive && isGold && styles.barActiveOnBlueGold,
              isActive && isOnBlue && !isGold && styles.barActiveOnBlue,
              isActive && !isOnBlue && styles.barActiveOnWhite,
              !isActive && isGold && styles.barInactiveOnBlueGold,
              !isActive && isOnBlue && !isGold && styles.barInactiveOnBlue,
              !isActive && !isOnBlue && styles.barInactiveOnWhite,
            ]}
          />
        );
      })}
    </View>
  );
}
