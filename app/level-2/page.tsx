'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Circle, ChevronRight } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

type SensationArea = string;

type Module = {
  num: number;
  title: string;
  subtitle: string;
  accent: string;
  accentBg: string;
  stepAccent: string;
  stepBg: string;
  summary: string;
  practiceLabel: string;
  steps: string[];
  journalPrompt: string;
  hasSensation: boolean;
  sensationAreas?: SensationArea[];
};

// ─── Course data ──────────────────────────────────────────────────────────────

const modules: Module[] = [
  {
    num: 1, title: 'Arrival', subtitle: 'Creating Safety in the Body',
    accent: '#9A3E55', accentBg: '#F0E0D6', stepAccent: '#2E7A5E', stepBg: 'rgba(46,122,94,0.10)',
    summary: 'True erotic expansion does not begin with touch — it begins with <strong>safety</strong>. When the nervous system has been in "on" mode all day, the body tightens and guards rather than opens. This module teaches that arrival means creating the conditions — slower breath, softened posture, undivided presence — that signal to the body it is safe to receive. Pleasure begins when she feels truly allowed to rest.',
    practiceLabel: 'Guided Body-Scan Arrival',
    steps: [
      'Find a quiet, private space. Dim the lights or close the curtains. Remove any source of urgency — phone, notifications, timers. Give yourself at least 10 uninterrupted minutes.',
      'Lie down or sit comfortably. Scan your body for where tension is still living — jaw, shoulders, chest, low belly, pelvic floor. Don\'t try to fix it yet. Simply notice.',
      'Take 5 slow, deliberate breaths: inhale through the nose for 4 counts, exhale through softly parted lips for 6–8 counts. With each exhale, consciously release one area of tension.',
      'Rest in stillness for 2–3 minutes. Notice what shifts — warmth, heaviness, tingling? Practice witnessing without labeling or rushing.',
    ],
    journalPrompt: 'What does "safety" feel like in your body right now — and how does it differ from how you feel at the start of most days? Where did you notice your body holding tension, and did anything soften during the exercise?',
    hasSensation: false,
  },
  {
    num: 2, title: 'Sensual Awakening', subtitle: 'Listening Before Labeling',
    accent: '#2E7A5E', accentBg: '#D8EBE2', stepAccent: '#9A3E55', stepBg: 'rgba(154,62,85,0.10)',
    summary: 'The body speaks first in raw sensation — warmth, pulsing, slickness, aching — before the mind rushes in to name and categorize it. This module cultivates <strong>erotic listening</strong>: the art of noticing what is actually present in the body without collapsing it into judgment or performance.',
    practiceLabel: 'Sensation Inventory',
    steps: [
      'After completing the Module 1 arrival practice, slowly move your awareness downward. Start at the tops of your thighs, drift inward, then to your yoni.',
      'For 3–5 minutes, only observe. No touching yet. Notice whatever is present — heat, coolness, pulsing, numbness, dryness, wetness, tingling, heaviness. All of it is information.',
      'Each time your mind starts to interpret, gently redirect: "That\'s a story. What is the raw sensation right now?" Return to pure physical data.',
      'Use the Sensation Map below to log what you noticed — just a word or two per box.',
    ],
    journalPrompt: 'What story did your mind most want to tell about what you felt? Were you able to pause before labeling the sensation? What was the difference between the raw feeling and the story you noticed wanting to attach to it?',
    hasSensation: true,
    sensationAreas: ['Outer lips / vulva', 'Clitoris area', 'Inner walls / vaginal canal', 'Womb / low belly', 'Breasts / nipples', 'Overall body temperature'],
  },
  {
    num: 3, title: 'Breath as Foreplay', subtitle: 'Activating the Nervous System',
    accent: '#9A6F2E', accentBg: '#F5EBD4', stepAccent: '#6B5BA8', stepBg: 'rgba(107,91,168,0.10)',
    summary: 'Before the body can fully open to pleasure, it needs to be <strong>activated</strong> — not by urgency, but by the slow build of conscious breath. Breath is the most direct pathway into the autonomic nervous system. This module teaches you to use breath rhythm, depth, and direction to generate arousal from the inside out.',
    practiceLabel: 'Circular Breath Activation',
    steps: [
      'Begin in your arrived state from Module 1. Place one hand on your low belly and one on your chest. Notice which hand rises more when you inhale.',
      'Shift to belly breathing for 5 cycles: let the low belly expand on the inhale, fall on the exhale. Feel the pelvic floor soften with each release.',
      'Introduce circular breathing: inhale through the nose into the belly, exhale slowly through the mouth in a continuous loop with no pause. Do this for 2–3 minutes.',
      'Notice what changes — heat, tingling, pulsing, aliveness. Breathe into those sensations rather than away from them.',
    ],
    journalPrompt: 'Where in your body did the breath land most powerfully? Did you notice any resistance to breathing fully? What does "breathing into pleasure" feel like versus breathing as a functional act?',
    hasSensation: false,
  },
  {
    num: 4, title: 'Jing Awareness', subtitle: 'Connecting to Your Sexual Energy',
    accent: '#6B5BA8', accentBg: '#E2DCF0', stepAccent: '#2E7A5E', stepBg: 'rgba(46,122,94,0.10)',
    summary: 'In Taoist anatomy, <strong>jing</strong> is the foundational life-force energy stored in the kidneys and expressed through sexuality. This module helps you feel and locate your jing — not as an idea, but as a felt sense — and introduces the practice of drawing it upward through the body rather than releasing it outward.',
    practiceLabel: 'Lower Dantian Cultivation',
    steps: [
      'After your breath activation, bring your awareness two finger widths below the navel, two finger widths in. Rest there for a full minute.',
      'On your next inhale, imagine drawing warmth from your yoni upward through your pelvis to that point. On the exhale, let it rest and deepen.',
      'After 5 cycles, extend the draw: inhale up through the spine, exhale and let it settle. You\'re beginning to circulate rather than discharge.',
      'Spend 3 minutes simply being with whatever warmth or aliveness you feel in the lower dantian. Witness it without doing anything with it.',
    ],
    journalPrompt: 'Did you feel anything in the lower belly area — warmth, pressure, pulsing, or emptiness? What is your relationship to your own sexual energy — have you thought of it as something to release, avoid, or something else entirely?',
    hasSensation: false,
  },
  {
    num: 5, title: 'Expansion', subtitle: 'Spreading Sensation Through the Body',
    accent: '#9A3E55', accentBg: '#F0E0D6', stepAccent: '#9A6F2E', stepBg: 'rgba(154,111,46,0.10)',
    summary: 'Expansion practices teach the body to <strong>spread</strong> pleasure rather than concentrate it. This module introduces you to full-body orgasmic states, where sensation moves like a wave through the whole system rather than a point of release — the foundation of non-ejaculatory and valley orgasm.',
    practiceLabel: 'Full-Body Wave Practice',
    steps: [
      'From your jing awareness practice, begin introducing gentle movement — small pelvic rocks, slow figure-eights with the hips, soft undulations through the spine.',
      'With each movement, imagine the warmth in your pelvis spreading outward — into the thighs, up through the belly, into the chest. Breathe into each new area as it awakens.',
      'Add sound if it arises — soft sighs, tones, or humming. Sound amplifies sensation and signals the nervous system that it\'s safe to open further.',
      'Let the movement become as large or small as it wants. There is no target. You are practicing the art of spreading — not arriving.',
    ],
    journalPrompt: 'What happened when you tried to spread sensation rather than concentrate it? Did the body resist, or did it naturally follow the invitation? What does it feel like to have pleasure move through you rather than build toward something?',
    hasSensation: false,
  },
  {
    num: 6, title: 'Circulation', subtitle: 'The Microcosmic Orbit',
    accent: '#2E7A5E', accentBg: '#D8EBE2', stepAccent: '#9A3E55', stepBg: 'rgba(154,62,85,0.10)',
    summary: 'The <strong>microcosmic orbit</strong> is a foundational Taoist energy practice — a loop that circulates life-force energy up the spine and back down the front of the body. When applied to sexual practice, it transforms pleasure from a linear event into a <strong>cyclical, replenishing experience</strong>.',
    practiceLabel: 'Microcosmic Orbit — 9 Cycles',
    steps: [
      'In a relaxed, activated state, place attention at your perineum. On the inhale, draw energy upward along the spine — tailbone, sacrum, lower back, mid-back, between shoulder blades, up the neck, to the crown.',
      'On the exhale, let the energy pour down the front — forehead, face, throat, heart, solar plexus, navel, back to the perineum.',
      'Complete 9 full orbits with no rush. Each cycle should feel like the energy is deepening, not speeding up.',
      'Notice: does the energy feel different after multiple cycles? More coherent? More expansive? Note any quality changes.',
    ],
    journalPrompt: 'Were you able to feel a sense of movement along the orbit, or did it feel conceptual? What areas felt alive and what areas felt blocked? What changed after 9 cycles?',
    hasSensation: false,
  },
  {
    num: 7, title: 'Integration', subtitle: 'Returning and Remembering',
    accent: '#9A6F2E', accentBg: '#F5EBD4', stepAccent: '#6B5BA8', stepBg: 'rgba(107,91,168,0.10)',
    summary: 'The most undervalued part of any somatic practice is the <strong>integration period</strong> — the time after practice ends, before ordinary life resumes. Integration is not rest — it is active reception. You are allowing what happened to settle into tissue, into cellular knowing, into a new baseline.',
    practiceLabel: 'Stillness & Integration',
    steps: [
      'After completing the circulation practice, lie completely still. Let the body weight fully surrender to the surface beneath you. Do not move for at least 3 minutes.',
      'Scan the body from crown to soles. Notice the quality of sensation now compared to when you began. What is different?',
      'Take three deep, slow breaths. With each exhale, imagine the experience becoming part of your body\'s knowledge — not something you did, but something you are.',
      'When ready to return, move slowly. Touch your face, your arms. Drink water. Give the body a transition rather than an abrupt return to ordinary time.',
    ],
    journalPrompt: 'How does your body feel now compared to before you began? What was the most surprising or significant moment in today\'s practice? What do you want to remember or carry forward from this session?',
    hasSensation: false,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Level2Page() {
  const [current, setCurrent] = useState(0);
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [journals, setJournals] = useState<Record<number, string>>({});
  const [sensations, setSensations] = useState<Record<string, string>>({});

  const m = modules[current];
  const doneCount = completed.size;
  const progress = Math.round((doneCount / 7) * 100);

  const markDone = useCallback(() => {
    setCompleted((prev) => {
      const next = new Set(prev);
      next.add(current);
      return next;
    });
    if (current < 6) setCurrent((c) => c + 1);
  }, [current]);

  const updateJournal = (val: string) =>
    setJournals((prev) => ({ ...prev, [current]: val }));

  const updateSensation = (area: string, val: string) =>
    setSensations((prev) => ({ ...prev, [`${current}-${area}`]: val }));

  return (
    <div className="flex min-h-screen" style={{ fontFamily: "'Jost', sans-serif", background: '#F5EED8' }}>

      {/* ── SIDEBAR ── */}
      <aside style={{ width: 220, background: '#2E1F0E', flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '14px 16px', borderBottom: '1px solid rgba(201,169,110,0.15)' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'rgba(201,169,110,0.5)', textDecoration: 'none', letterSpacing: '0.08em' }}>
            <ArrowLeft size={12} /> Back to Level 1
          </Link>
        </div>

        <div style={{ padding: '16px 18px 14px', borderBottom: '1px solid rgba(201,169,110,0.15)' }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 15, fontWeight: 500, color: '#C9A96E', letterSpacing: '0.04em', lineHeight: 1.3 }}>Brock John</div>
          <div style={{ fontSize: 9, fontWeight: 300, letterSpacing: '0.14em', color: 'rgba(201,169,110,0.5)', textTransform: 'uppercase', marginTop: 3 }}>Somatic Sex Education</div>
        </div>

        <div style={{ padding: '12px 18px 6px', fontSize: 8.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.4)' }}>
          Level 2 · FBO Course 2026
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '0 10px 10px' }}>
          {modules.map((mod, i) => (
            <div
              key={mod.num}
              onClick={() => setCurrent(i)}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '9px 10px', borderRadius: 6, cursor: 'pointer',
                marginBottom: 2,
                background: i === current ? 'rgba(201,169,110,0.15)' : 'transparent',
                transition: 'background 0.15s',
              }}
            >
              <div style={{
                width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 9, fontWeight: 500,
                background: i === current ? mod.accent : 'rgba(201,169,110,0.08)',
                color: i === current ? '#fff' : 'rgba(201,169,110,0.5)',
              }}>{mod.num}</div>

              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 9, color: 'rgba(201,169,110,0.4)', letterSpacing: '0.1em' }}>Module {mod.num}</div>
                <div style={{ fontSize: 11, color: i === current ? '#C9A96E' : 'rgba(245,238,216,0.7)', fontWeight: 400, marginTop: 1, lineHeight: 1.3 }}>{mod.title}</div>
              </div>

              <div style={{ width: 14, height: 14, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {completed.has(i)
                  ? <CheckCircle2 size={14} color="#C9A96E" />
                  : <Circle size={14} color="rgba(201,169,110,0.25)" />
                }
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* ── MAIN ── */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>

        {/* Top bar */}
        <div style={{ background: '#F5EED8', borderBottom: '1px solid #E4D8B0', padding: '12px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
          <div style={{ fontSize: 11, color: '#7A5C38', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Module {m.num} — {m.title}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ fontSize: 11, color: '#7A5C38', whiteSpace: 'nowrap' }}>{doneCount} of 7 complete</span>
            <div style={{ width: 120, height: 3, background: '#E4D8B0', borderRadius: 20 }}>
              <div style={{ height: '100%', borderRadius: 20, background: '#C9A96E', width: `${progress}%`, transition: 'width 0.3s' }} />
            </div>
            <button
              onClick={markDone}
              style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 4, cursor: 'pointer', background: 'transparent', border: '1px solid #9A6F2E', color: '#9A6F2E', transition: 'all 0.15s' }}
            >
              {completed.has(current) ? '✓ Complete' : 'Mark complete'}
            </button>
            <button
              style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 4, cursor: 'pointer', background: '#9A6F2E', color: '#F5EED8', border: 'none' }}
              onClick={() => window.print()}
            >
              ↗ Print
            </button>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '28px 32px 60px', flex: 1 }}>

          {/* Header */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 12px 4px 8px', borderRadius: 20, background: m.accentBg, color: m.accent, fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>
              <span style={{ fontSize: 8 }}>●</span> Module {m.num}
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 500, color: '#2E1F0E', lineHeight: 1.2, marginBottom: 4 }}>{m.title}</div>
            <div style={{ fontSize: 12, color: '#7A5C38', letterSpacing: '0.06em', marginBottom: 16 }}>{m.subtitle} · 35-Minute Deep Yoni &amp; Full-Body Orgasmic Activation</div>
          </div>

          {/* Accent divider */}
          <div style={{ height: 1, background: `linear-gradient(to right, ${m.accent}, transparent)`, marginBottom: 24 }} />

          {/* Summary */}
          <div style={{ marginBottom: 22 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <div style={{ width: 24, height: 24, borderRadius: '50%', background: m.accentBg, color: m.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 600 }}>S</div>
              <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: m.accent }}>Summary</div>
            </div>
            <div style={{ borderLeft: `3px solid ${m.accent}`, background: m.accentBg, padding: '16px 18px' }}>
              <div style={{ fontSize: 13, lineHeight: 1.75, color: '#2E1F0E' }} dangerouslySetInnerHTML={{ __html: m.summary }} />
            </div>
          </div>

          {/* Practice */}
          <div style={{ marginBottom: 22 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <div style={{ width: 24, height: 24, borderRadius: '50%', background: m.stepBg, color: m.stepAccent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 600 }}>P</div>
              <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: m.stepAccent }}>Practical Exercise</div>
            </div>
            <div style={{ fontSize: 11, color: '#7A5C38', marginBottom: 8, letterSpacing: '0.04em' }}>{m.practiceLabel}</div>
            <div style={{ borderLeft: `3px solid ${m.stepAccent}`, background: m.stepBg, padding: '16px 18px' }}>
              {m.steps.map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: m.stepBg, color: m.stepAccent, border: `1px solid ${m.stepAccent}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500, flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                  <div style={{ fontSize: 13, lineHeight: 1.7, color: '#2E1F0E', flex: 1 }}>{step}</div>
                </div>
              ))}

              {/* Sensation grid */}
              {m.hasSensation && m.sensationAreas && (
                <div style={{ marginTop: 8 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                    {m.sensationAreas.map((area) => (
                      <div key={area} style={{ background: '#EDE3C8', border: '1px solid #E4D8B0', borderRadius: 6, padding: '8px 10px 10px' }}>
                        <div style={{ fontSize: 9.5, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9A6F2E', marginBottom: 6 }}>{area}</div>
                        <input
                          type="text"
                          placeholder="describe sensation…"
                          value={sensations[`${current}-${area}`] || ''}
                          onChange={(e) => updateSensation(area, e.target.value)}
                          style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid #C9A96E', outline: 'none', fontFamily: "'Jost', sans-serif", fontSize: 12, color: '#2E1F0E', padding: '2px 0 4px' }}
                        />
                      </div>
                    ))}
                  </div>
                  <div style={{ fontSize: 11, color: '#7A5C38', fontStyle: 'italic', marginTop: 8 }}>&lsquo;Numb&rsquo; and &lsquo;nothing&rsquo; are also valid answers.</div>
                </div>
              )}
            </div>
          </div>

          {/* Journal */}
          <div style={{ marginBottom: 22 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#E2DCF0', color: '#6B5BA8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 600 }}>J</div>
              <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6B5BA8' }}>Journal Reflection</div>
            </div>
            <div style={{ background: '#E2DCF0', borderLeft: '3px solid #6B5BA8', padding: '16px 18px' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 15, fontStyle: 'italic', color: '#6B5BA8', lineHeight: 1.7, marginBottom: 14 }}>{m.journalPrompt}</div>
              <textarea
                value={journals[current] || ''}
                onChange={(e) => updateJournal(e.target.value)}
                placeholder="Write your reflection here…"
                rows={6}
                style={{ width: '100%', background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(107,91,168,0.2)', borderRadius: 6, padding: '10px 12px', fontFamily: "'Jost', sans-serif", fontSize: 13, color: '#2E1F0E', resize: 'vertical', lineHeight: 1.7, outline: 'none' }}
              />
            </div>
          </div>

          {/* Next module button */}
          {current < 6 && (
            <button
              onClick={() => { markDone(); }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '10px 20px', borderRadius: 4, cursor: 'pointer', background: '#9A6F2E', color: '#F5EED8', border: 'none', transition: 'background 0.15s' }}
            >
              Complete &amp; continue to Module {current + 2} <ChevronRight size={14} />
            </button>
          )}
          {current === 6 && (
            <div style={{ background: '#D8EBE2', borderLeft: '3px solid #2E7A5E', padding: '16px 20px', borderRadius: 0 }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 17, color: '#2E7A5E', marginBottom: 4 }}>You have completed the full 35-minute activation.</div>
              <div style={{ fontSize: 13, color: '#7A5C38', lineHeight: 1.7 }}>Return to this course as often as you like. Each pass deepens the practice.</div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
