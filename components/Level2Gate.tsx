'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Lock, X, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const CREDENTIALS = { username: 'fbomember', password: 'fbo2026' };
const MAX_ATTEMPTS = 3;

type GateState = 'idle' | 'open' | 'shaking' | 'locked' | 'success';

export function Level2Gate() {
  const router = useRouter();
  const [gateState, setGateState] = useState<GateState>('idle');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  const usernameRef = useRef<HTMLInputElement>(null);

  // Focus username field when modal opens
  useEffect(() => {
    if (gateState === 'open' || gateState === 'shaking') {
      usernameRef.current?.focus();
    }
  }, [gateState]);

  function openModal() {
    setGateState('open');
    setUsername('');
    setPassword('');
    setErrorMsg('');
  }

  function closeModal() {
    setGateState('idle');
    setUsername('');
    setPassword('');
    setErrorMsg('');
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (gateState === 'shaking' || gateState === 'locked' || gateState === 'success') return;

    const valid =
      username.trim().toLowerCase() === CREDENTIALS.username &&
      password === CREDENTIALS.password;

    if (valid) {
      setGateState('success');
      setTimeout(() => router.push('/level-2'), 1100);
      return;
    }

    const next = attempts + 1;
    setAttempts(next);

    if (next >= MAX_ATTEMPTS) {
      setGateState('locked');
      setErrorMsg('');
      return;
    }

    setErrorMsg(`Incorrect credentials. ${MAX_ATTEMPTS - next} attempt${MAX_ATTEMPTS - next === 1 ? '' : 's'} remaining.`);
    setGateState('shaking');
    setTimeout(() => setGateState('open'), 500);
  }

  const remaining = MAX_ATTEMPTS - attempts;

  return (
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
          {/* Level 2 background image slot */}
          <div className="absolute inset-0 z-0 bg-warm">
            <Image
              src="/images/level2-bg.jpg"
              alt=""
              fill
              className="object-cover opacity-25"
              sizes="100vw"
            />
          </div>

          {/* Blurred preview cards */}
          <div className="relative z-10 grid select-none gap-4 p-6 opacity-60 md:grid-cols-2 xl:grid-cols-4 [filter:blur(3px)] [pointer-events:none]">
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
                href="https://course.brockjohn.com/"
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
        <div
          className="animate-backdrop-in fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div
            className={[
              'animate-modal-in relative w-full max-w-sm rounded-3xl bg-card p-8 shadow-calm',
              gateState === 'shaking' ? 'animate-shake' : '',
            ].join(' ')}
          >
            {/* Close button */}
            {gateState !== 'locked' && gateState !== 'success' && (
              <button
                onClick={closeModal}
                className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-muted transition hover:bg-warm hover:text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            )}

            {/* ── SUCCESS STATE ── */}
            {gateState === 'success' && (
              <div className="flex flex-col items-center gap-4 py-4 text-center">
                <div className="animate-success-pop flex h-16 w-16 items-center justify-center rounded-full bg-[#D8EBE2]">
                  <CheckCircle2 className="h-8 w-8 text-[#2E7A5E]" />
                </div>
                <p className="font-serif text-xl font-light text-ink">Welcome back.</p>
                <p className="text-sm text-stone">Taking you to Level 2…</p>
              </div>
            )}

            {/* ── LOCKED STATE ── */}
            {gateState === 'locked' && (
              <div className="flex flex-col items-center gap-5 py-2 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-red-200 bg-red-50">
                  <AlertCircle className="h-7 w-7 text-red-400" />
                </div>
                <div>
                  <p className="font-serif text-xl font-light text-ink">Access locked</p>
                  <p className="mt-2 text-sm leading-6 text-stone">
                    Too many failed attempts. To receive your access credentials, email Brock John directly:
                  </p>
                  <a
                    href="mailto:brock@brockjohn.com"
                    className="mt-3 inline-block rounded-full bg-primary/10 px-5 py-2 text-sm font-medium text-primary transition hover:bg-primary/20"
                  >
                    brock@brockjohn.com
                  </a>
                </div>
                <button
                  onClick={() => { setGateState('idle'); setAttempts(0); setUsername(''); setPassword(''); }}
                  className="mt-1 text-xs text-muted underline underline-offset-2 transition hover:text-stone"
                >
                  Dismiss
                </button>
              </div>
            )}

            {/* ── LOGIN FORM ── */}
            {(gateState === 'open' || gateState === 'shaking') && (
              <>
                <div className="mb-6 flex flex-col items-center gap-3 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-serif text-xl font-light text-ink">Member Access</p>
                    <p className="mt-1 text-xs text-stone">Enter your FBO member credentials</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-medium uppercase tracking-widest text-stone">Username</label>
                    <input
                      ref={usernameRef}
                      type="text"
                      autoComplete="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full rounded-xl border border-mist bg-warm px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="your username"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-medium uppercase tracking-widest text-stone">Password</label>
                    <input
                      type="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-xl border border-mist bg-warm px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="••••••••"
                    />
                  </div>

                  {errorMsg && (
                    <p className="flex items-center gap-1.5 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" /> {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full rounded-full bg-ink py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    Enter Level 2
                  </button>
                </form>

                <p className="mt-5 text-center text-xs text-muted">
                  No credentials?{' '}
                  <a href="mailto:brock@brockjohn.com" className="text-primary underline underline-offset-2">
                    Email Brock John
                  </a>{' '}
                  for access.
                </p>

                {remaining < MAX_ATTEMPTS && (
                  <p className="mt-2 text-center text-[11px] text-muted">
                    {remaining} attempt{remaining === 1 ? '' : 's'} remaining
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
