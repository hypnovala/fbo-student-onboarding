// Demo seed data — shown on the Progress page when no real entries exist yet.
// This gives new students a preview of the experience before they begin.
import { SavedFormEntry } from '@/types/forms';

const now = new Date();
const d = (daysAgo: number) => new Date(now.getTime() - daysAgo * 86_400_000).toISOString();

export const demoEntries: SavedFormEntry[] = [
  {
    slug: 'daily-check-in',
    title: 'Welcome to Your Body',
    status: 'completed',
    updatedAt: d(6),
    completedAt: d(6),
    values: {
      date: d(6).slice(0, 10),
      presenceLevel: 4,
      bodyAreas: ['chest', 'belly'],
      sensations: ['tightness', 'warmth'],
      emotion: ['curious', 'nervous'],
      whatBroughtYouHere: 'I want to feel more at home in my body. I have spent most of my life in my head.',
      oneWord: 'readiness',
    },
  },
  {
    slug: 'body-awareness',
    title: 'Pleasure & Aliveness Map',
    status: 'completed',
    updatedAt: d(5),
    completedAt: d(5),
    values: {
      aliveAreas: ['chest', 'heart', 'arms'],
      numbAreas: ['pelvis', 'hips'],
      pleasureDefinition: 'A warm, soft fullness that feels safe to stay in.',
      permissionLevel: 4,
      whatLimitsPleasure: 'Old beliefs that pleasure is selfish or something I need to earn.',
      oneDesire: 'Warmth in my whole body, not just my heart.',
    },
  },
  {
    slug: 'end-of-shift-reset',
    title: 'Sensation Vocabulary Builder',
    status: 'completed',
    updatedAt: d(4),
    completedAt: d(4),
    values: {
      currentSensations: ['warmth', 'buzzing', 'tingling'],
      sensationLocation: 'center of my chest',
      sensationDescription: 'Soft and round, like a slow pulse. Warm edges, open center.',
      sensationShift: 'shifted',
      storyVsSensation: 'My mind wanted to call it anxiety. But it felt more like excitement waiting to be allowed.',
      reflection: 'That I could stay with the sensation without needing to explain it.',
    },
  },
  {
    slug: 'pendulation-tracking',
    title: 'Benefits That Resonate With Me',
    status: 'completed',
    updatedAt: d(2),
    completedAt: d(2),
    values: {
      resonantBenefits: ['more-pleasure', 'less-numb', 'presence', 'self-relationship', 'radiance'],
      mostImportant: 'Feel less numb or disconnected',
      currentRelationshipWithBody: 'distant',
      readinessLevel: 7,
      intention: 'I intend to show up for myself the way I have always shown up for others.',
      oneQuestion: 'What does my body actually want — not what I think I should want?',
    },
  },
  {
    slug: 'resource-anchoring',
    title: 'Embodied Confidence Check-In',
    status: 'draft',
    updatedAt: d(1),
    values: {
      date: d(1).slice(0, 10),
      presenceInBody: 6,
      confidenceInBody: 5,
      howYouCarriedYourself: 'More softly than usual. I noticed my shoulders were down.',
      momentOfPresence: 'While making tea this morning — I actually tasted it.',
      whatShifted: '',
    },
  },
];
