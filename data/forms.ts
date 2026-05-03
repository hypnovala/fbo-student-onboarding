import { FormDefinition } from '@/types/forms';

const sensationOptions = [
  'warmth', 'tightness', 'heaviness', 'numbness',
  'buzzing', 'tingling', 'openness', 'pressure', 'softness', 'other',
].map((value) => ({ label: value[0].toUpperCase() + value.slice(1), value }));

const bodyAreaOptions = [
  'head', 'throat', 'chest', 'heart', 'belly',
  'pelvis', 'hips', 'legs', 'arms', 'whole body',
].map((value) => ({ label: value[0].toUpperCase() + value.slice(1), value }));

const emotionOptions = [
  'curious', 'nervous', 'excited', 'numb', 'open',
  'guarded', 'hopeful', 'overwhelmed', 'peaceful', 'uncertain',
].map((value) => ({ label: value[0].toUpperCase() + value.slice(1), value }));

export const formDefinitions: FormDefinition[] = [
  {
    slug: 'daily-check-in',
    title: 'Welcome to Your Body',
    shortTitle: 'Body Welcome',
    summary: 'Your very first check-in — a gentle arrival into your body before anything else.',
    description: 'Before exploring somatic bodywork, we start here: simply noticing. There is no right answer. This is an act of arrival.',
    estimatedTime: '3 minutes',
    audience: 'Perfect as your very first form. Do this before exploring anything else.',
    fields: [
      { name: 'date', label: "Today's date", type: 'date' },
      { name: 'presenceLevel', label: 'How present do you feel in your body right now?', type: 'range', min: 1, max: 10, description: '1 = mostly in your head, 10 = fully in your body.' },
      { name: 'bodyAreas', label: 'Where do you feel aliveness right now?', type: 'checkbox-group', options: bodyAreaOptions },
      { name: 'sensations', label: 'What sensations are present?', type: 'checkbox-group', options: sensationOptions },
      { name: 'emotion', label: 'What emotion feels closest right now?', type: 'checkbox-group', options: emotionOptions },
      { name: 'whatBroughtYouHere', label: 'What brought you here today?', type: 'textarea', rows: 4, placeholder: 'No pressure — just notice what feels true.' },
      { name: 'oneWord', label: 'If your body could speak one word right now, what would it say?', type: 'text', placeholder: 'Softness, readiness, hunger, rest...' },
    ],
  },
  {
    slug: 'body-awareness',
    title: 'Pleasure & Aliveness Map',
    shortTitle: 'Pleasure Map',
    summary: 'Discover where in your body you feel alive — and where you feel numb or guarded.',
    description: 'Aliveness is not the same as pleasure. This form helps you locate both — without judgment, without urgency.',
    estimatedTime: '5 minutes',
    audience: 'For students beginning to explore their relationship with sensation and pleasure.',
    fields: [
      { name: 'aliveAreas', label: 'Where in your body do you feel the most aliveness or pleasure?', type: 'checkbox-group', options: bodyAreaOptions },
      { name: 'numbAreas', label: 'Where do you feel numbness, disconnection, or guardedness?', type: 'checkbox-group', options: bodyAreaOptions },
      { name: 'pleasureDefinition', label: 'How would you describe pleasure in your own words?', type: 'textarea', rows: 3, placeholder: 'Not a definition — just what feels true for you.' },
      { name: 'permissionLevel', label: 'How much permission do you give yourself to feel pleasure?', type: 'range', min: 1, max: 10, description: '1 = very little, 10 = fully.' },
      { name: 'whatLimitsPleasure', label: 'What gets in the way of feeling pleasure for you?', type: 'textarea', rows: 4, placeholder: 'Thoughts, beliefs, past experiences, habits...' },
      { name: 'oneDesire', label: 'If you could feel more of one thing in your body, what would it be?', type: 'text', placeholder: 'Warmth, ease, aliveness, softness, electricity...' },
    ],
  },
  {
    slug: 'end-of-shift-reset',
    title: 'Sensation Vocabulary Builder',
    shortTitle: 'Sensation Vocabulary',
    summary: 'Learn to describe what your body feels — without rushing to conclusions.',
    description: 'Most of us jump from sensation straight to story. This form trains the pause in between — noticing what is actually there.',
    estimatedTime: '4 minutes',
    audience: 'Students who feel disconnected from their body or struggle to name what they feel.',
    fields: [
      { name: 'currentSensations', label: 'What sensations are you aware of right now?', type: 'checkbox-group', options: sensationOptions },
      { name: 'sensationLocation', label: 'Where in your body is the most noticeable sensation right now?', type: 'text', placeholder: 'Example: back of my throat, center of my chest, low belly' },
      { name: 'sensationDescription', label: 'Describe that sensation without labeling it as good or bad.', type: 'textarea', rows: 3, placeholder: 'Temperature, texture, movement, size, edges, depth...' },
      { name: 'sensationShift', label: 'Did the sensation change as you paid attention to it?', type: 'radio', options: [{ label: 'Yes, it shifted', value: 'shifted' }, { label: 'No, it stayed the same', value: 'same' }, { label: 'It disappeared', value: 'disappeared' }, { label: 'It intensified', value: 'intensified' }] },
      { name: 'storyVsSensation', label: 'What story did your mind want to tell about that sensation?', type: 'textarea', rows: 3, placeholder: 'Notice the difference between what you felt and what you thought it meant.' },
      { name: 'reflection', label: 'What surprised you about this practice?', type: 'textarea', rows: 3, placeholder: 'Even a small noticing counts.' },
    ],
  },
  {
    slug: 'emotional-body-map',
    title: 'Desire Discovery Form',
    shortTitle: 'Desire Discovery',
    summary: 'What do you actually want to feel? This form helps you get honest about desire.',
    description: 'Desire is not the same as need. This form invites you to explore what you are longing for — in your body, in your life — without performing or editing.',
    estimatedTime: '5 minutes',
    audience: 'Students ready to move from "what I should want" to "what I actually want."',
    fields: [
      { name: 'desireInBody', label: 'What do you desire to feel more of in your body?', type: 'textarea', rows: 3, placeholder: 'Warmth, openness, strength, softness, aliveness, electricity...' },
      { name: 'desireInLife', label: 'What do you desire to feel more of in your life overall?', type: 'textarea', rows: 3, placeholder: 'Intimacy, freedom, presence, joy, rest, power...' },
      { name: 'desireBlocked', label: 'Where does desire feel blocked or unfamiliar?', type: 'checkbox-group', options: bodyAreaOptions },
      { name: 'desirePermission', label: 'How much permission do you give yourself to want things?', type: 'range', min: 1, max: 10, description: '1 = almost none, 10 = complete freedom.' },
      { name: 'desireBeliefs', label: 'What belief about desire did you inherit growing up?', type: 'textarea', rows: 3, placeholder: 'No judgment — just notice what was modeled or taught.' },
      { name: 'desireNewBelief', label: 'What would you like to believe about desire instead?', type: 'textarea', rows: 3, placeholder: 'Write the belief your body is asking for.' },
    ],
  },
  {
    slug: 'regulation-tracker',
    title: 'Know Your Nervous System',
    shortTitle: 'Nervous System',
    summary: 'Learn to recognize when you are regulated, activated, or shut down — and what helps.',
    description: 'Your nervous system is the gatekeeper of pleasure. This form teaches you to read your own states so you can move toward more safety and openness.',
    estimatedTime: '4 minutes',
    audience: 'All new students. Understanding your baseline is the foundation of everything.',
    fields: [
      { name: 'currentState', label: 'Which state feels closest right now?', type: 'radio', options: [{ label: 'Regulated — calm, open, present', value: 'regulated' }, { label: 'Activated — anxious, buzzy, alert', value: 'activated' }, { label: 'Shut down — numb, flat, disconnected', value: 'shutdown' }, { label: 'Mixed — hard to tell', value: 'mixed' }] },
      { name: 'activationLevel', label: 'How activated does your nervous system feel right now?', type: 'range', min: 1, max: 10, description: '1 = deeply calm, 10 = highly activated.' },
      { name: 'regulationSignals', label: 'What signals tell you that you are regulated?', type: 'textarea', rows: 3, placeholder: 'Soft jaw, easy breath, warmth in chest, slow thoughts...' },
      { name: 'activationSignals', label: 'What signals tell you that you are activated or shut down?', type: 'textarea', rows: 3, placeholder: 'Tight shoulders, shallow breath, racing thoughts, numbness...' },
      { name: 'regulationSupports', label: 'What helps you return to regulation?', type: 'multi-text', itemLabel: 'What helps', description: 'Think of small, accessible things — not big interventions.' },
      { name: 'pleasureAndSafety', label: 'What is the connection between feeling safe and feeling pleasure for you?', type: 'textarea', rows: 4, placeholder: "Notice what feels true — even if it's complicated." },
    ],
  },
  {
    slug: 'pendulation-tracking',
    title: 'Benefits That Resonate With Me',
    shortTitle: 'Benefits Explorer',
    summary: 'Discover which benefits of somatic bodywork feel most alive for you right now.',
    description: 'Somatic bodywork offers many doors. This form helps you identify which ones feel most relevant to where you are right now — so your journey starts with what is real for you.',
    estimatedTime: '5 minutes',
    audience: 'New students exploring whether somatic bodywork is right for them.',
    fields: [
      { name: 'resonantBenefits', label: 'Which benefits feel most alive or relevant to you right now?', type: 'checkbox-group', options: [{ label: 'Feel more pleasure and sensation in my body', value: 'more-pleasure' }, { label: 'Know my own desires more clearly', value: 'know-desires' }, { label: 'Feel less numb or disconnected', value: 'less-numb' }, { label: 'Build confidence in my erotic self', value: 'erotic-confidence' }, { label: 'Expand my capacity for intimacy', value: 'intimacy' }, { label: 'Understand my nervous system and arousal', value: 'nervous-system' }, { label: 'Feel more present in my body day-to-day', value: 'presence' }, { label: 'Learn to receive touch with more ease', value: 'receive-touch' }, { label: 'Develop a deeper relationship with myself', value: 'self-relationship' }, { label: 'Feel radiant and alive in my femininity', value: 'radiance' }] },
      { name: 'mostImportant', label: 'Of those, which one feels most urgent right now?', type: 'text', placeholder: 'Copy one from above or write your own.' },
      { name: 'currentRelationshipWithBody', label: 'How would you describe your current relationship with your body?', type: 'radio', options: [{ label: 'Distant — I mostly live in my head', value: 'distant' }, { label: 'Neutral — not bad, but not connected either', value: 'neutral' }, { label: 'Complicated — some good, some difficult', value: 'complicated' }, { label: 'Present — I feel fairly connected', value: 'present' }] },
      { name: 'readinessLevel', label: 'How ready do you feel to begin this work?', type: 'range', min: 1, max: 10, description: '1 = not sure yet, 10 = fully ready.' },
      { name: 'intention', label: 'Set one intention for your somatic journey.', type: 'textarea', rows: 3, placeholder: 'I intend to...' },
      { name: 'oneQuestion', label: 'What is one question your body is asking right now?', type: 'textarea', rows: 3, placeholder: 'Let her speak — not your mind, your body.' },
    ],
  },
  {
    slug: 'resource-anchoring',
    title: 'Embodied Confidence Check-In',
    shortTitle: 'Embodied Confidence',
    summary: 'Track how you carry yourself — how present, open, and self-possessed you feel.',
    description: 'Embodied confidence is not performance. It is the feeling of being at home in yourself. This form tracks your progress toward that.',
    estimatedTime: '3 minutes',
    audience: 'Students revisiting after sessions or practices to notice what is shifting.',
    fields: [
      { name: 'date', label: 'Date', type: 'date' },
      { name: 'presenceInBody', label: 'How present do you feel in your body today?', type: 'range', min: 1, max: 10, description: '1 = fully in your head, 10 = fully embodied.' },
      { name: 'confidenceInBody', label: 'How confident do you feel in your body today?', type: 'range', min: 1, max: 10, description: '1 = self-conscious or guarded, 10 = at ease and self-possessed.' },
      { name: 'howYouCarriedYourself', label: 'How did you carry yourself today?', type: 'textarea', rows: 3, placeholder: 'Softly, openly, guardedly, with ease, collapsed, upright...' },
      { name: 'momentOfPresence', label: 'Describe one moment today when you felt fully in your body.', type: 'textarea', rows: 3, placeholder: 'Even a breath, a pause, a glance in the mirror counts.' },
      { name: 'whatShifted', label: 'What feels different compared to when you started this work?', type: 'textarea', rows: 4, placeholder: 'Notice even the smallest shifts — they matter.' },
    ],
  },
];
