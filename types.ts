export interface VideoGenerationState {
  isLoading: boolean;
  videoUri: string | null;
  error: string | null;
  progressMessage: string;
}

export enum CleaningStep {
  LIFT = 'LIFT',
  STEAM = 'STEAM',
  DRY = 'DRY'
}

export const VEO_MODEL = 'veo-3.1-fast-generate-preview';