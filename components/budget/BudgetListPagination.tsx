import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import { budgetListPaginationStyles as styles } from '@/styles/budget/list-pagination';

type BudgetListPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function BudgetListPagination({
  currentPage,
  totalPages,
  onPageChange,
}: BudgetListPaginationProps) {
  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return (
    <View style={styles.row}>
      <Pressable
        style={[styles.nav, !canGoPrev && styles.navDisabled]}
        onPress={() => onPageChange(currentPage - 1)}
        disabled={!canGoPrev}
        accessibilityRole="button"
        accessibilityLabel="Previous page"
      >
        <Ionicons name="chevron-back" size={16} color="#4062B9" />
        <Text style={styles.navLabel}>Previous</Text>
      </Pressable>

      <View style={styles.pages}>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => {
          const isActive = page === currentPage;
          return (
            <Pressable
              key={page}
              style={[styles.page, isActive && styles.pageActive]}
              onPress={() => onPageChange(page)}
              accessibilityRole="button"
              accessibilityState={{ selected: isActive }}
              accessibilityLabel={`Page ${page}`}
            >
              <Text style={[styles.pageText, isActive && styles.pageTextActive]}>{page}</Text>
            </Pressable>
          );
        })}
      </View>

      <Pressable
        style={[styles.nav, !canGoNext && styles.navDisabled]}
        onPress={() => onPageChange(currentPage + 1)}
        disabled={!canGoNext}
        accessibilityRole="button"
        accessibilityLabel="Next page"
      >
        <Text style={styles.navLabel}>Next</Text>
        <Ionicons name="chevron-forward" size={16} color="#4062B9" />
      </Pressable>
    </View>
  );
}
