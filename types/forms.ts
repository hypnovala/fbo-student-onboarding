// Slugs kept from original repo so storage, routing, and form engine work unchanged.
// Content behind each slug has been replaced with FBO student-facing forms.
export type FormSlug =
  | 'welcome-to-your-body'
  | 'pleasure-aliveness-map'
  | 'sensation-vocabulary'
  | 'desire-discovery'
  | 'nervous-system-check-in'
  | 'benefits-resonate'
  | 'embodied-confidence'
  | 'titration-awareness'
  | 'boundary-containment'
  | 'somatic-tracking';

export type ProgressStatus = 'draft' | 'completed';

export type Option = {
  label: string;
  value: string;
};

export type FormFieldType =
  | 'date'
  | 'range'
  | 'text'
  | 'textarea'
  | 'checkbox-group'
  | 'select'
  | 'radio'
  | 'multi-text'
  | 'tracker';

export type BaseField = {
  name: string;
  label: string;
  description?: string;
  placeholder?: string;
  type: FormFieldType;
};

export type FieldDefinition = BaseField & {
  options?: Option[];
  min?: number;
  max?: number;
  rows?: number;
  itemLabel?: string;
};

export type FormDefinition = {
  slug: FormSlug;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  estimatedTime: string;
  audience: string;
  fields: FieldDefinition[];
};

// ─── Form value types ────────────────────────────────────────────────────────

export type WelcomeToYourBodyValues = {
  date: string;
  energyLevel: number;
  stressLevel: number;
  sleepQuality: number;
  tensionAreas: string[];
  sensations: string[];
  emotion: string;
  reflection: string;
  supportiveAction: string;
};

export type PleasureAlivenessMapValues = {
  beforeStressLevel: number;
  tensionArea: string;
  changeAfter: string;
  afterStressLevel: number;
  grounded: 'yes' | 'no' | 'a-little';
  notes: string;
};

export type SensationVocabularyValues = {
  activationLevel: number;
  jawRelaxed: 'yes' | 'no';
  shouldersSoftened: 'yes' | 'no';
  breathingHelped: 'yes' | 'no' | 'a-little';
  neutralThings: string[];
  softerNow: string;
  notes: string;
};

export type DesireDiscoveryValues = {
  bodyArea: string;
  sensation: string;
  possibleEmotion: string;
  intensity: number;
  needRightNow: string;
  notes: string;
};

export type NervousSystemCheckInValues = {
  days: TrackerDay[];
};

export type BenefitsResonateValues = {
  discomfortArea: string;
  neutralArea: string;
  sensationInDiscomfort: string;
  sensationInNeutral: string;
  intensityBefore: number;
  intensityAfter: number;
  didShiftOccur: 'yes' | 'no' | 'slightly';
  notes: string;
};

export type EmbodiedConfidenceValues = {
  resourceType: string;
  whereFeltInBody: string;
  sensationQuality: string;
  intensityOfResource: number;
  didItExpand: 'yes' | 'no' | 'slightly';
  whatHelpedItGrow: string;
  notes: string;
};

export type TitrationAwarenessValues = {
  sensationNoticed: string;
  intensityLevel: number;
  wasItManageable: 'yes' | 'no' | 'partially';
  didYouPause: 'yes' | 'no';
  whatHelpedRegulate: string;
  afterState: number;
  notes: string;
};

export type BoundaryContainmentValues = {
  boundaryAwareness: string;
  whereYouFeelContained: string;
  whereYouFeelOpenOrExposed: string;
  didContainmentIncrease: 'yes' | 'no' | 'slightly';
  whatHelpedContainment: string;
  bodyResponse: string;
  notes: string;
};

export type SomaticTrackingValues = {
  sensationLocation: string;
  sensationType: string;
  sensationMovement: string;
  intensityStart: number;
  intensityEnd: number;
  didItChange: 'yes' | 'no' | 'slightly';
  changeDescription: string;
  notes: string;
};

// ─── FormValuesMap ────────────────────────────────────────────────────────────

export type FormValuesMap = {
  'welcome-to-your-body': WelcomeToYourBodyValues;
  'pleasure-aliveness-map': PleasureAlivenessMapValues;
  'sensation-vocabulary': SensationVocabularyValues;
  'desire-discovery': DesireDiscoveryValues;
  'nervous-system-check-in': NervousSystemCheckInValues;
  'benefits-resonate': BenefitsResonateValues;
  'embodied-confidence': EmbodiedConfidenceValues;
  'titration-awareness': TitrationAwarenessValues;
  'boundary-containment': BoundaryContainmentValues;
  'somatic-tracking': SomaticTrackingValues;
};

export type SavedFormEntry<T = unknown> = {
  slug: FormSlug;
  title: string;
  values: T;
  status: ProgressStatus;
  updatedAt: string;
  completedAt?: string;
};

// ─── TrackerDay ───────────────────────────────────────────────────────────────
// Retained for component compatibility (TrackerField, PrintableSummary).
// Not used in FBO student forms but required so those components compile.
export type TrackerDay = {
  day: number;
  bodyScanCompleted: boolean;
  breathingCompleted: boolean;
  groundingCompleted: boolean;
  shoulderResetCompleted: boolean;
  notes: string;
};
