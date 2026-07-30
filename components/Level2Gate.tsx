'use client';

import { useState, useEffect, type ReactNode, type FormEvent } from 'react';
import Link from 'next/link';
import { ArrowLeft, Lock } from 'lucide-react';

const STORAGE_KEY = 'fbo-level2-access';

// Shared access code for FBO Level 2 members.
// To rotate this, change the value below and redeploy —
// anyone with the old code will be prompted to re-enter.
const ACCESS_CODE = 'FBOGRADUATE';

export function Level2Gate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === ACCESS_CODE) {
      setUnlocked(true);
    }
    setChecked(true);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim().toUpperCase() === ACCESS_CODE) {
      window.localStorage.setItem(STORAGE_KEY, ACCESS_CODE);
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  // Avoid a flash of the gate before localStorage has been read
  if (!checked) {
    return <div style={{ minHeight: '100vh', background: '#F5EED8' }} />;
  }

  if (unlocked) {
    return <>{children}</>;
  }

  return (
<<<<<<< HEAD
    <div
      style={{
        minHeight: '100vh',
        background: '#F5EED8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        fontFamily: "'Jost', sans-serif",
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 400,
          background: '#FFFFFF',
          border: '1px solid #E4D8B0',
          borderRadius: 16,
          padding: '40px 36px',
          textAlign: 'center',
        }}
      >
=======
    <>
      {/* ── LOCKED PREVIEW SECTION ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">2</div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">Level 2 — FBO Members Only</p>
            <h2 className="text-2xl font-light text-ink">Deep Yoni &amp; Full-Body Orgasmic Activation</h2>
            <p className="mt-1 text-sm font-light text-stone">The complete somatic course — seven guided practice modules with worksheets, breath work, energy cultivation, and full integration.</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-mist">
          {/* Blurred preview cards */}
          <div className="grid select-none gap-4 p-6 opacity-60 md:grid-cols-2 xl:grid-cols-4 [filter:blur(3px)] [pointer-events:none]">
            {['Arrival', 'Sensual Awakening', 'Breath as Foreplay', 'Jing Awareness', 'Expansion', 'Circulation', 'Integration'].map((title, i) => (
              <Card key={title} className="p-5">
                <p className="mb-1 text-xs font-medium text-stone">Module {i + 1}</p>
                <h3 className="text-base font-semibold text-ink">{title}</h3>
                <div className="mt-1 h-8 rounded bg-mist" />
              </Card>
            ))}
          </div>

          {/* Lock overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-canvas/80 backdrop-blur-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/30 bg-white shadow-calm">
              <Lock className="h-7 w-7 text-primary" />
            </div>
            <div className="text-center">
              <p className="font-serif text-2xl font-light text-ink">FBO Members Only</p>
              <p className="mt-2 max-w-sm text-sm text-stone">
                The full somatic activation course is available to FBO members. Join to unlock all 7 practice modules.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                I&apos;m a Member — Enter <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="https://fbo-membership.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink ring-1 ring-mist transition hover:bg-warm"
              >
                Join FBO →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODAL ── */}
      {gateState !== 'idle' && (
>>>>>>> parent of c305bb88 (Update Join FBO link)
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: '#F5EBD4',
            border: '2px solid rgba(154,111,46,0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
          }}
        >
          <Lock size={22} color="#9A6F2E" />
        </div>

        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 24,
            fontWeight: 500,
            color: '#2E1F0E',
            marginBottom: 8,
          }}
        >
          Level 2 — Members Only
        </div>
        <p style={{ fontSize: 13, color: '#7A5C38', lineHeight: 1.7, marginBottom: 28 }}>
          Enter your access code to begin the 35-Minute Deep Yoni &amp; Full-Body Orgasmic Activation course.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              if (error) setError(false);
            }}
            placeholder="Access code"
            autoComplete="off"
            autoCapitalize="characters"
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: 8,
              border: error ? '1px solid #9A3E55' : '1px solid #E4D8B0',
              fontSize: 14,
              fontFamily: "'Jost', sans-serif",
              color: '#2E1F0E',
              outline: 'none',
              textAlign: 'center',
              letterSpacing: '0.08em',
              marginBottom: 12,
              background: '#F5EED8',
            }}
          />

          {error && (
            <p style={{ fontSize: 12, color: '#9A3E55', marginBottom: 12 }}>
              That code didn&apos;t match. Please try again or reach out to Brock.
            </p>
          )}

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px 20px',
              borderRadius: 100,
              background: '#9A6F2E',
              color: '#F5EED8',
              border: 'none',
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              marginBottom: 20,
            }}
          >
            Unlock Level 2
          </button>
        </form>

        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 12,
            color: '#A08878',
            textDecoration: 'none',
          }}
        >
          <ArrowLeft size={12} /> Back to Level 1
        </Link>
      </div>
    </div>
  );
}

