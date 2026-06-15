# SPENDR

Personal finance and budgeting app — Expo + Expo Router bootstrap aligned with the Figma design flows.

## Project structure

```text
app/
  index.tsx              # Entry → intro flow
  (intro)/               # Splash slides 1–3
  (auth)/                # Login & signup
  (onboarding)/          # Setup steps 1–5 + success
  (tabs)/                # Main app (Home, Budgets, Discover, Profile)
  budget/                # Create budget + review stack
components/
  ui/                    # Button, Card, Input, ProgressBar
  OnboardingStep.tsx
  BudgetListItem.tsx
constants/               # Colors, spacing, radius
store/                   # Zustand onboarding state
assets/
  images/
  icons/
```

## Getting started

```bash
cd spendr
npm install
npx expo start
```

Copy icon/splash assets from Figma into `assets/images/` (see `app.json` for expected filenames).

## Navigation flows

1. **Intro** → `(intro)` → Auth or Sign up
2. **Auth** → `(auth)/login` | `signup` → Onboarding
3. **Onboarding** → `(onboarding)/step-1` … `step-5` → `success` → Tabs
4. **Main app** → `(tabs)` with bottom tab bar
5. **Budget** → `/budget/create` → `/budget/review`

Screens use placeholder UI until you implement the Figma designs. Shared primitives live in `components/ui/` and tokens in `constants/Colors.ts`.

## Next steps

- Export icons and images from Figma into `assets/`
- Wire auth (Google + email) and persist onboarding via `store/useOnboardingStore.ts`
- Replace `ScreenPlaceholder` and stub screens with pixel-accurate layouts
- Add auth gate in `app/index.tsx` to skip intro/onboarding for returning users
