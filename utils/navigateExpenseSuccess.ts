import { router } from 'expo-router';

export function navigateExpenseSuccess(
  budgetId: string,
  loggedTotal: number,
  loggedExpenseIds: string[],
) {
  router.replace({
    pathname: '/expense/[budgetId]/success',
    params: {
      budgetId,
      loggedTotal: String(loggedTotal),
      loggedIds: loggedExpenseIds.join(','),
    },
  });
}
