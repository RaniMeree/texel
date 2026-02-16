'use client';

import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const { colors, theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: theme === 'industrial'
          ? `linear-gradient(135deg, rgba(26, 26, 26, 0.97) 0%, rgba(45, 45, 45, 0.95) 100%), url('https://images.unsplash.com/photo-1581578731117-104f884470d4?auto=format&fit=crop&w=1600&q=80')`
          : theme === 'friendly'
          ? `linear-gradient(180deg, ${colors.background} 0%, ${colors.backgroundAlt} 100%)`
          : `linear-gradient(135deg, rgba(232, 228, 221, 0.95) 0%, rgba(250, 248, 245, 0.9) 100%), url('https://images.unsplash.com/photo-1581578731117-104f884470d4?auto=format&fit=crop&w=1600&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Decorative shapes for friendly theme */}
      {theme === 'friendly' && (
        <>
          <div style={{
            position: 'absolute',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(143, 166, 138, 0.15)',
            top: -100,
            right: -100,
          }} />
          <div style={{
            position: 'absolute',
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'rgba(196, 120, 90, 0.1)',
            bottom: -50,
            left: -50,
          }} />
        </>
      )}

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '120px 40px',
          display: 'grid',
          gridTemplateColumns: theme === 'friendly' ? '1fr 1fr' : theme === 'industrial' ? '1.2fr 0.8fr' : '1fr 1fr',
          gap: 80,
          alignItems: 'center',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            style={{
              display: 'inline-block',
              fontSize: theme === 'industrial' ? '0.7rem' : '0.85rem',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: theme === 'industrial' ? colors.accent : colors.textMuted,
              marginBottom: 20,
              fontWeight: theme === 'industrial' ? 700 : 500,
            }}
          >
            {theme === 'industrial' ? 'Vakmanschap & Betrouwbaarheid' : ''}
          </motion.span>

          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: theme === 'industrial' ? 'Oswald, sans-serif' : theme === 'friendly' ? 'Nunito, sans-serif' : 'Playfair Display, serif',
              fontSize: theme === 'friendly' ? '3.5rem' : theme === 'industrial' ? '5rem' : '4rem',
              fontWeight: 700,
              color: theme === 'industrial' ? '#fff' : colors.text,
              lineHeight: 1.1,
              marginBottom: 24,
              textTransform: theme === 'industrial' ? 'uppercase' : 'none',
              letterSpacing: theme === 'industrial' ? '2px' : 'normal',
            }}
          >
            {theme === 'industrial' ? (
              <>Texel <span style={{ color: colors.accent }}>Services</span></>
            ) : (
              'Texel Services'
            )}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            style={{
              fontSize: theme === 'industrial' ? '1rem' : '1.25rem',
              color: theme === 'industrial' ? colors.backgroundAlt : colors.textMuted,
              marginBottom: 32,
              maxWidth: 480,
              lineHeight: 1.8,
            }}
          >
            Kleine klussen die het verschil maken. Vakmanschap, netheid en betrouwbaarheid in elk project.
          </motion.p>

          {theme === 'industrial' && (
            <motion.div
              variants={itemVariants}
              style={{ display: 'flex', gap: 48, marginBottom: 40 }}
            >
              {[
                { number: '5+', label: 'Jaar Ervaring' },
                { number: '500+', label: 'Projecten' },
                { number: '100%', label: 'Betrouwbaar' },
              ].map((stat) => (
                <div key={stat.label} style={{ borderLeft: `2px solid ${colors.border}`, paddingLeft: 20 }}>
                  <div style={{ fontFamily: 'Oswald', fontSize: '2.5rem', fontWeight: 700, color: colors.accent, lineHeight: 1 }}>
                    {stat.number}
                  </div>
                  <div style={{ fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', color: colors.textMuted }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          <motion.a
            variants={itemVariants}
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              background: colors.accent,
              color: '#fff',
              padding: theme === 'friendly' ? '18px 36px' : '20px 40px',
              borderRadius: theme === 'friendly' ? 50 : theme === 'industrial' ? 0 : 0,
              fontWeight: 600,
              fontSize: theme === 'industrial' ? '0.8rem' : '1rem',
              textDecoration: 'none',
              letterSpacing: theme === 'industrial' ? '3px' : 'normal',
              textTransform: theme === 'industrial' ? 'uppercase' : 'none',
              fontFamily: theme === 'industrial' ? 'Oswald, sans-serif' : 'inherit',
              boxShadow: theme === 'friendly' ? '0 8px 24px rgba(196, 120, 90, 0.3)' : theme === 'industrial' ? 'none' : '0 8px 24px rgba(45, 90, 107, 0.2)',
              border: theme === 'industrial' ? `2px solid ${colors.accent}` : 'none',
              transition: 'all 0.3s',
            }}
          >
            Vraag een offerte aan
            <ArrowRight size={theme === 'friendly' ? 20 : 18} />
          </motion.a>
        </motion.div>

        {/* Logo Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {theme === 'coastal' && (
            <div
              style={{
                width: 320,
                height: 320,
                borderRadius: '50%',
                background: colors.cardBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 40px 80px rgba(45, 90, 107, 0.15), 0 20px 40px rgba(45, 90, 107, 0.1)',
                position: 'relative',
              }}
            >
              <div style={{
                position: 'absolute',
                inset: -3,
                borderRadius: '50%',
                border: `1px solid ${colors.border}`,
              }} />
              <img src="/logo.svg" alt="Texel Services" style={{ width: 180, height: 'auto' }} />
            </div>
          )}

          {theme === 'industrial' && (
            <div
              style={{
                width: 320,
                height: 320,
                border: `3px solid ${colors.accent}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(26, 26, 26, 0.9)',
                position: 'relative',
              }}
            >
              <div style={{
                position: 'absolute',
                inset: 8,
                border: `1px solid ${colors.border}`,
              }} />
              <img src="/logo.png" alt="Texel Services" style={{ width: 160, filter: 'brightness(0) invert(1)' }} />
            </div>
          )}

          {theme === 'friendly' && (
            <div
              style={{
                background: colors.cardBg,
                borderRadius: 32,
                padding: 48,
                boxShadow: '0 32px 64px rgba(61, 54, 50, 0.1), 0 16px 32px rgba(61, 54, 50, 0.05)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 6,
                background: `linear-gradient(90deg, ${colors.accent}, #8FA68A)`,
              }} />
              <img src="/logo.png" alt="Texel Services" style={{ width: 160, marginBottom: 24 }} />
              <p style={{ fontWeight: 700, fontSize: '1.1rem', color: colors.text }}>Kleine klussen. Groot verschil.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
