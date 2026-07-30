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

