import { z } from 'zod';
import { FormSlug, FormValuesMap } from '@/types/forms';

const req = 'Please complete this field.';
const arrReq = 'Choose at least one.';

// ─── Schemas ──────────────────────────────────────────────────────────────────

export const formSchemas = {

  /** Form 1 — Welcome to Your Body */
  'daily-check-in': z.object({
    date: z.string().min(1, req),
    presenceLevel: z.number().min(1).max(10),
    bodyAreas: z.array(z.string()).min(1, arrReq),
    sensations: z.array(z.string()).min(1, arrReq),
    emotion: z.array(z.string()).min(1, arrReq),
    whatBroughtYouHere: z.string().min(3, req),
    oneWord: z.string().min(1, req),
  }),

  /** Form 2 — Pleasure & Aliveness Map */
  'body-awareness': z.object({
    aliveAreas: z.array(z.string()).min(1, arrReq),
    numbAreas: z.array(z.string()).default([]),
    pleasureDefinition: z.string().min(3, req),
    permissionLevel: z.number().min(1).max(10),
    whatLimitsPleasure: z.string().min(3, req),
    oneDesire: z.string().min(2, req),
  }),

  /** Form 3 — Sensation Vocabulary Builder */
  'end-of-shift-reset': z.object({
    currentSensations: z.array(z.string()).min(1, arrReq),
    sensationLocation: z.string().min(2, req),
    sensationDescription: z.string().min(5, req),
    sensationShift: z.enum(['shifted', 'same', 'disappeared', 'intensified']),
    storyVsSensation: z.string().min(3, req),
    reflection: z.string().min(3, req),
  }),

  /** Form 4 — Desire Discovery Form */
  'emotional-body-map': z.object({
    desireInBody: z.string().min(3, req),
    desireInLife: z.string().min(3, req),
    desireBlocked: z.array(z.string()).default([]),
    desirePermission: z.number().min(1).max(10),
    desireBeliefs: z.string().min(3, req),
    desireNewBelief: z.string().min(3, req),
  }),

  /** Form 5 — Know Your Nervous System */
  'regulation-tracker': z.object({
    currentState: z.enum(['regulated', 'activated', 'shutdown', 'mixed']),
    activationLevel: z.number().min(1).max(10),
    regulationSignals: z.string().min(3, req),
    activationSignals: z.string().min(3, req),
    regulationSupports: z.array(z.string().min(1, req)).min(1, 'Add at least one thing that helps.'),
    pleasureAndSafety: z.string().min(5, req),
  }),

  /** Form 6 — Benefits That Resonate With Me */
  'pendulation-tracking': z.object({
    resonantBenefits: z.array(z.string()).min(1, arrReq),
    mostImportant: z.string().min(2, req),
    currentRelationshipWithBody: z.enum(['distant', 'neutral', 'complicated', 'present']),
    readinessLevel: z.number().min(1).max(10),
    intention: z.string().min(5, req),
    oneQuestion: z.string().min(5, req),
  }),

  /** Form 7 — Embodied Confidence Check-In */
  'resource-anchoring': z.object({
    date: z.string().min(1, req),
    presenceInBody: z.number().min(1).max(10),
    confidenceInBody: z.number().min(1).max(10),
    howYouCarriedYourself: z.string().min(3, req),
    momentOfPresence: z.string().min(5, req),
    whatShifted: z.string().min(5, req),
  }),

} satisfies { [K in FormSlug]: z.ZodTypeAny };

// ─── Default values ───────────────────────────────────────────────────────────

export const defaultValues: FormValuesMap = {

  /** Form 1 — Welcome to Your Body */
  'daily-check-in': {
    date: new Date().toISOString().slice(0, 10),
    presenceLevel: 5,
    bodyAreas: [],
    sensations: [],
    emotion: [],
    whatBroughtYouHere: '',
    oneWord: '',
  },

  /** Form 2 — Pleasure & Aliveness Map */
  'body-awareness': {
    aliveAreas: [],
    numbAreas: [],
    pleasureDefinition: '',
    permissionLevel: 5,
    whatLimitsPleasure: '',
    oneDesire: '',
  },

  /** Form 3 — Sensation Vocabulary Builder */
  'end-of-shift-reset': {
    currentSensations: [],
    sensationLocation: '',
    sensationDescription: '',
    sensationShift: 'shifted',
    storyVsSensation: '',
    reflection: '',
  },

  /** Form 4 — Desire Discovery Form */
  'emotional-body-map': {
    desireInBody: '',
    desireInLife: '',
    desireBlocked: [],
    desirePermission: 5,
    desireBeliefs: '',
    desireNewBelief: '',
  },

  /** Form 5 — Know Your Nervous System */
  'regulation-tracker': {
    currentState: 'mixed',
    activationLevel: 5,
    regulationSignals: '',
    activationSignals: '',
    regulationSupports: [''],
    pleasureAndSafety: '',
  },

  /** Form 6 — Benefits That Resonate With Me */
  'pendulation-tracking': {
    resonantBenefits: [],
    mostImportant: '',
    currentRelationshipWithBody: 'neutral',
    readinessLevel: 5,
    intention: '',
    oneQuestion: '',
  },

  /** Form 7 — Embodied Confidence Check-In */
  'resource-anchoring': {
    date: new Date().toISOString().slice(0, 10),
    presenceInBody: 5,
    confidenceInBody: 5,
    howYouCarriedYourself: '',
    momentOfPresence: '',
    whatShifted: '',
  },

};
