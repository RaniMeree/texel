'use client';

import { useTheme } from '@/context/ThemeContext';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { colors } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#over-ons', label: 'Over Ons' },
    { href: '#diensten', label: 'Diensten' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: `linear-gradient(180deg, ${colors.primaryDark} 0%, ${colors.primary} 100%)`,
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
        color: '#fff',
        transition: 'all 0.3s ease',
      }}
    >
      <nav
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: '16px 60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          style={{ display: 'flex', alignItems: 'center', gap: 12 }}
        >
          <img 
            src="/logo2-white.png" 
            alt="Texel Services" 
            style={{ height: 64, width: 'auto' }} 
          />
        </motion.div>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ scale: 1.05, backgroundColor: colors.backgroundAlt }}
                whileTap={{ scale: 0.95 }}
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: '#fff',
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
                  e.currentTarget.style.color = '#fff';
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: `0 8px 24px ${colors.shadowHover}`, y: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
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
          >
            Offerte aanvragen
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#fff',
            padding: 8,
          }}
          className="mobile-menu-btn"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
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
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '14px 0',
                  color: colors.text,
                  textDecoration: 'none',
                  borderBottom: `1px solid ${colors.border}`,
                  fontFamily: "'Source Sans 3', sans-serif",
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'block',
                marginTop: 16,
                padding: '14px',
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
color: colors.text,
                textAlign: 'center',
                borderRadius: 8,
                textDecoration: 'none',
                fontFamily: "'Source Sans 3', sans-serif",
                fontWeight: 600,
              }}
            >
              Offerte aanvragen
            </motion.a>
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
    </motion.header>
  );
}
