export type OnboardingStep = 
  | 'company-name'
  | 'company-check'
  | 'company-details'
  | 'ai-analysis'
  | 'results-confirmation';

export interface Company {
  name: string;
  website?: string;
  industry?: string;
  description?: string;
  brandColors?: string[];
  logo?: string;
  screenshots?: string[];
}

export interface OnboardingState {
  currentStep: OnboardingStep;
  company: Company;
  isExistingCompany: boolean;
  analysisProgress?: number;
}

export interface StepProps {
  onNext: () => void;
  onBack: () => void;
  isLoading?: boolean;
} 