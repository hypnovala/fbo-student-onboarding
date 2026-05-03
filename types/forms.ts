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

export type TrackerDay = {
  day: number;
  bodyScanCompleted: boolean;
  breathingCompleted: boolean;
  groundingCompleted: boolean;
  shoulderResetCompleted: boolean;
  notes: string;
};

export type DailyCheckInValues = {
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

export type BodyAwarenessValues = {
  beforeStressLevel: number;
  tensionArea: string;
  changeAfter: string;
  afterStressLevel: number;
  grounded: string;
  notes: string;
};

export type EndOfShiftValues = {
  activationLevel: number;
  jawRelaxed: string;
  shouldersSoftened: string;
  breathingHelped: string;
  neutralThings: string[];
  softerNow: string;
  notes: string;
};

export type EmotionalBodyMapValues = {
  bodyArea: string;
  sensation: string;
  possibleEmotion: string;
  intensity: number;
  needRightNow: string;
  notes: string;
};

export type RegulationTrackerValues = {
  days: TrackerDay[];
};

export type PendulationTrackingValues = {
  discomfortArea: string;
  neutralArea: string;
  sensationInDiscomfort: string;
  sensationInNeutral: string;
  intensityBefore: number;
  intensityAfter: number;
  didShiftOccur: string;
  notes: string;
};

export type ResourceAnchoringValues = {
  resourceType: string;
  whereFeltInBody: string;
  sensationQuality: string;
  intensityOfResource: number;
  didItExpand: string;
  whatHelpedItGrow: string;
  notes: string;
};

export type TitrationAwarenessValues = {
  sensationNoticed: string;
  intensityLevel: number;
  wasItManageable: string;
  didYouPause: string;
  whatHelpedRegulate: string;
  afterState: number;
  notes: string;
};

export type BoundaryContainmentValues = {
  boundaryAwareness: string;
  whereYouFeelContained: string;
  whereYouFeelOpenOrExposed: string;
  didContainmentIncrease: string;
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
  didItChange: string;
  changeDescription: string;
  notes: string;
};

export type FormValuesMap = {
  'welcome-to-your-body': DailyCheckInValues;
  'pleasure-aliveness-map': BodyAwarenessValues;
  'sensation-vocabulary': EndOfShiftValues;
  'desire-discovery': EmotionalBodyMapValues;
  'nervous-system-check-in': RegulationTrackerValues;
  'benefits-resonate': PendulationTrackingValues;
  'embodied-confidence': ResourceAnchoringValues;
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
