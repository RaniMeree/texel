'use client';

import { useTheme } from '@/context/ThemeContext';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { colors } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#over-ons', label: 'Over Ons' },
    { href: '#diensten', label: 'Diensten' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(250, 252, 254, 0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <nav
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: '20px 60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img 
            src="/logo.png" 
            alt="Texel Services" 
            style={{ height: 48, width: 'auto' }} 
          />
        </div>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: colors.textSecondary,
                  textDecoration: 'none',
                  padding: '10px 24px',
                  borderRadius: 8,
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.3px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = colors.backgroundAlt;
                  e.currentTarget.style.color = colors.primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = colors.textSecondary;
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#fff',
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
              padding: '12px 28px',
              borderRadius: 8,
              textDecoration: 'none',
              boxShadow: `0 4px 16px ${colors.shadow}`,
              transition: 'all 0.3s ease',
              letterSpacing: '0.3px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = `0 8px 24px ${colors.shadowHover}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = `0 4px 16px ${colors.shadow}`;
            }}
          >
            Offerte aanvragen
          </a>
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
            padding: 8,
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
              background: colors.surface,
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
                  padding: '14px 0',
                  color: colors.text,
                  textDecoration: 'none',
                  borderBottom: `1px solid ${colors.border}`,
                  fontFamily: 'Outfit, sans-serif',
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          nav > div:nth-child(2) {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          nav {
            padding: 16px 24px !important;
          }
        }
      `}</style>
    </header>
  );
}
