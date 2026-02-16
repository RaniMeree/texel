'use client';

import { useTheme } from '@/context/ThemeContext';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { colors, setTheme, theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#over-ons', label: 'Over Ons' },
    { href: '#diensten', label: 'Diensten' },
    { href: '#contact', label: 'Contact' },
  ];

  const themeOptions = [
    { value: 'coastal', label: 'Coastal' },
    { value: 'industrial', label: 'Industrial' },
    { value: 'friendly', label: 'Friendly' },
  ] as const;

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: theme === 'industrial' 
          ? 'rgba(26, 26, 26, 0.95)' 
          : 'rgba(253, 248, 244, 0.92)',
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '18px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {theme === 'friendly' && (
            <div
              style={{
                width: 48,
                height: 48,
                background: colors.accent,
                borderRadius: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
          )}
          <span
            style={{
              fontFamily: theme === 'industrial' ? 'Oswald, sans-serif' : 'inherit',
              fontWeight: 700,
              fontSize: theme === 'industrial' ? '1.4rem' : '1.1rem',
              color: colors.text,
              letterSpacing: theme === 'industrial' ? '2px' : 'normal',
            }}
          >
            {theme === 'industrial' ? 'TEXEL SERVICES' : 'Texel Services'}
          </span>
        </div>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <div style={{ display: 'flex', gap: theme === 'friendly' ? 8 : 40 }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: theme === 'industrial' ? '0.75rem' : '0.85rem',
                  fontWeight: 500,
                  color: colors.textMuted,
                  textDecoration: 'none',
                  letterSpacing: theme === 'industrial' ? '3px' : '1.5px',
                  textTransform: theme === 'industrial' ? 'uppercase' : 'none',
                  transition: 'color 0.3s',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Theme Switcher */}
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as typeof theme)}
            style={{
              padding: '8px 12px',
              borderRadius: theme === 'friendly' ? 20 : 4,
              border: `1px solid ${colors.border}`,
              background: colors.cardBg,
              color: colors.text,
              fontFamily: 'inherit',
              fontSize: '0.8rem',
              cursor: 'pointer',
            }}
          >
            {themeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: colors.text,
          }}
          className="mobile-menu-btn"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: colors.cardBg,
              borderTop: `1px solid ${colors.border}`,
              padding: '20px',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '12px 0',
                  color: colors.text,
                  textDecoration: 'none',
                  borderBottom: `1px solid ${colors.border}`,
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          nav > div:nth-child(2) {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
