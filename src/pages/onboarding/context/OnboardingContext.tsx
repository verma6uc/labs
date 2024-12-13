import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { OnboardingState, OnboardingStep, Company } from '../types';

// Initial state
const initialState: OnboardingState = {
  currentStep: 'company-name',
  company: {
    name: '',
  },
  isExistingCompany: false,
  analysisProgress: 0,
};

// Action types
type OnboardingAction =
  | { type: 'SET_STEP'; payload: OnboardingStep }
  | { type: 'UPDATE_COMPANY'; payload: Partial<Company> }
  | { type: 'SET_EXISTING_COMPANY'; payload: boolean }
  | { type: 'SET_ANALYSIS_PROGRESS'; payload: number };

// Reducer
function onboardingReducer(state: OnboardingState, action: OnboardingAction): OnboardingState {
  console.log('Onboarding Reducer:', { action, currentState: state });
  
  switch (action.type) {
    case 'SET_STEP':
      console.log('Setting step to:', action.payload);
      return { ...state, currentStep: action.payload };
    case 'UPDATE_COMPANY':
      console.log('Updating company:', action.payload);
      return { ...state, company: { ...state.company, ...action.payload } };
    case 'SET_EXISTING_COMPANY':
      console.log('Setting existing company:', action.payload);
      return { ...state, isExistingCompany: action.payload };
    case 'SET_ANALYSIS_PROGRESS':
      return { ...state, analysisProgress: action.payload };
    default:
      return state;
  }
}

// Context
const OnboardingContext = createContext<{
  state: OnboardingState;
  dispatch: React.Dispatch<OnboardingAction>;
} | null>(null);

// Provider component
export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(onboardingReducer, initialState);

  console.log('OnboardingProvider State:', state);

  return (
    <OnboardingContext.Provider value={{ state, dispatch }}>
      {children}
    </OnboardingContext.Provider>
  );
}

// Hook for using the onboarding context
export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
}
