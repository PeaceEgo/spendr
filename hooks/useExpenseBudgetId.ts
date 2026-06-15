import { useLocalSearchParams } from 'expo-router';
import { useRef } from 'react';

import { normalizeBudgetRouteId } from '@/stores/budget-draft';

export function useExpenseBudgetId(): string | undefined {
  const { budgetId: budgetIdParam } = useLocalSearchParams<{ budgetId: string }>();
  const idRef = useRef<string | undefined>(undefined);
  const normalized = normalizeBudgetRouteId(budgetIdParam);
  if (normalized) idRef.current = normalized;
  return idRef.current ?? normalized;
}
