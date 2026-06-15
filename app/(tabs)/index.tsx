import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';

import { ActiveBudgetsSection } from '@/components/home/ActiveBudgetsSection';
import { BudgetOverviewCard } from '@/components/home/BudgetOverviewCard';
import { HomeEmptyState } from '@/components/home/HomeEmptyState';
import { HomeFeatureCard } from '@/components/home/HomeFeatureCard';
import { HomeHeader } from '@/components/home/HomeHeader';
import { HOME_FEATURE_CARDS } from '@/constants/home';
import { summarizeHomeBudgets } from '@/constants/home-budgets';
import { useBudgetDraftStore } from '@/stores/budget-draft';
import { useHomeBudgetsStore } from '@/stores/home-budgets';
import { homeStyles as styles } from '@/styles/tabs/home';

export default function HomeScreen() {
  const budgets = useHomeBudgetsStore((s) => s.budgets);
  const resetDraft = useBudgetDraftStore((s) => s.resetDraft);
  const hasBudgets = budgets.length > 0;
  const summary = summarizeHomeBudgets(budgets);

  const openCreateBudget = () => {
    resetDraft();
    router.push('/budget/create');
  };

  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.scrollContent,
          hasBudgets ? styles.scrollContentBudgets : styles.scrollContentEmpty,
        ]}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader
          hasBudgets={hasBudgets}
          averageSpending={summary.spent}
          onCreateBudget={openCreateBudget}
          onExpenseHistory={() => {}}
        />

        {hasBudgets ? (
          <View style={styles.budgetsContent}>
            <BudgetOverviewCard
              planned={summary.planned}
              spent={summary.spent}
              balance={summary.balance}
              overallProgress={summary.overallProgress}
            />
            <ActiveBudgetsSection budgets={budgets} />
          </View>
        ) : (
          <>
            <View style={styles.cardsSection}>
              {HOME_FEATURE_CARDS.map((card) => (
                <HomeFeatureCard key={card.id} card={card} />
              ))}
            </View>
            <HomeEmptyState onCreateBudget={openCreateBudget} />
          </>
        )}
      </ScrollView>
    </View>
  );
}
