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

/** Form 1 — Welcome to Your Body */
export type BodyWelcomeValues = {
  date: string;
  presenceLevel: number;
  bodyAreas: string[];
  sensations: string[];
  emotion: string[];
  whatBroughtYouHere: string;
  oneWord: string;
};

/** Form 2 — Pleasure & Aliveness Map */
export type PleasureMapValues = {
  aliveAreas: string[];
  numbAreas: string[];
  pleasureDefinition: string;
  permissionLevel: number;
  whatLimitsPleasure: string;
  oneDesire: string;
};

/** Form 3 — Sensation Vocabulary Builder */
export type SensationVocabularyValues = {
  currentSensations: string[];
  sensationLocation: string;
  sensationDescription: string;
  sensationShift: string;
  storyVsSensation: string;
  reflection: string;
};

/** Form 4 — Desire Discovery Form */
export type DesireDiscoveryValues = {
  desireInBody: string;
  desireInLife: string;
  desireBlocked: string[];
  desirePermission: number;
  desireBeliefs: string;
  desireNewBelief: string;
};

/** Form 5 — Know Your Nervous System */
export type NervousSystemValues = {
  currentState: string;
  activationLevel: number;
  regulationSignals: string;
  activationSignals: string;
  regulationSupports: string[];
  pleasureAndSafety: string;
};

/** Form 6 — Benefits That Resonate With Me */
export type BenefitsExplorerValues = {
  resonantBenefits: string[];
  mostImportant: string;
  currentRelationshipWithBody: string;
  readinessLevel: number;
  intention: string;
  oneQuestion: string;
};

/** Form 7 — Embodied Confidence Check-In */
export type EmbodiedConfidenceValues = {
  date: string;
  presenceInBody: number;
  confidenceInBody: number;
  howYouCarriedYourself: string;
  momentOfPresence: string;
  whatShifted: string;
};

// ─── FormValuesMap ────────────────────────────────────────────────────────────

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
