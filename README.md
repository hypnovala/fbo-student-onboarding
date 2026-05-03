# FBO Student Onboarding — Agent Guide

## Brand & product identity
- Product: FBO Student Onboarding
- Brand: Brock John · Somatic Sex Education
- Footer: "Brock John · Somatic Sex Education · FBO Course 2026"
- Audience: New students exploring somatic bodywork for the first time
- Tone: Warm, embodied, poetic, intimate — never clinical, never salesy

## Copy rules
- Preferred verbs: "notice," "feel," "arrive," "discover," "sense," "allow," "receive"
- Avoid: diagnose, treat, heal, cure, fix, fix yourself
- Never frame the work as therapy or medical
- Always honor the student's pace — no urgency language
- Use second person ("you") warmly, not directively

## Design rules
- Color palette: Cream `#F9F5EE`, Gold `#B8922A`, Deep Brown `#2C1A0E`, Warm Sand `#D4B896`
- Mobile-first layout
- Generous whitespace — this app should feel like a breath
- Every page footer: "Education only. Not medical advice."

## Engineering rules
- All form data persists via localStorage — no backend
- Keep validation schemas in `lib/validation.ts`
- Keep shared types in `types/forms.ts`
- Use demo data from `data/demo.ts` when no saved entries exist
- Keep Vercel deployment simple and zero-env-var

## Content principles
- Each form is a step in a journey — number them
- Forms should feel like invitations, not questionnaires
- Progress tracking should feel like witnessing growth, not grading performance
