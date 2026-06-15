import { create } from 'zustand';

export type MoneyChallenge = 'overspending' | 'no_visibility' | 'impulse' | 'other';
export type SpendingCategory = 'food' | 'transport' | 'shopping' | 'bills' | 'other';
export type AppVoice = 'calm' | 'strict';
export type AlertThreshold = 'safe' | 'balanced' | 'strict';

type OnboardingState = {
  challenges: MoneyChallenge[];
  categories: SpendingCategory[];
  monthlyIncome: number | null;
  voice: AppVoice | null;
  alertThreshold: AlertThreshold | null;
  setChallenges: (challenges: MoneyChallenge[]) => void;
  setCategories: (categories: SpendingCategory[]) => void;
  setMonthlyIncome: (income: number) => void;
  setVoice: (voice: AppVoice) => void;
  setAlertThreshold: (threshold: AlertThreshold) => void;
  reset: () => void;
};

const initialState = {
  challenges: [] as MoneyChallenge[],
  categories: [] as SpendingCategory[],
  monthlyIncome: null as number | null,
  voice: null as AppVoice | null,
  alertThreshold: null as AlertThreshold | null,
};

export const useOnboardingStore = create<OnboardingState>((set) => ({
  ...initialState,
  setChallenges: (challenges) => set({ challenges }),
  setCategories: (categories) => set({ categories }),
  setMonthlyIncome: (monthlyIncome) => set({ monthlyIncome }),
  setVoice: (voice) => set({ voice }),
  setAlertThreshold: (alertThreshold) => set({ alertThreshold }),
  reset: () => set(initialState),
}));
