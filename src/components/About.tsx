'use client';

import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';

export default function About() {
  const { colors, theme } = useTheme();

  return (
    <section
      id="over-ons"
      style={{
        padding: '120px 40px',
        background: theme === 'industrial' ? colors.backgroundAlt : colors.cardBg,
        textAlign: 'center',
      }}
    >
      {theme === 'industrial' && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: `repeating-linear-gradient(90deg, ${colors.accent} 0, ${colors.accent} 20px, transparent 20px, transparent 40px)`,
        }} />
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: 900, margin: '0 auto' }}
      >
        <h2
          style={{
            fontFamily: theme === 'industrial' ? 'Oswald, sans-serif' : theme === 'friendly' ? 'Nunito, sans-serif' : 'Playfair Display, serif',
            fontSize: '2.5rem',
            fontWeight: 700,
            color: theme === 'industrial' ? '#fff' : colors.text,
            marginBottom: 32,
            position: 'relative',
            display: 'inline-block',
            textTransform: theme === 'industrial' ? 'uppercase' : 'none',
          }}
        >
          Over Texel Services
          {theme !== 'industrial' && (
            <div
              style={{
                position: 'absolute',
                bottom: -12,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 60,
                height: 2,
                background: colors.accent,
              }}
            />
          )}
        </h2>

        <p
          style={{
            fontSize: '1.1rem',
            color: theme === 'industrial' ? colors.backgroundAlt : colors.textMuted,
            marginBottom: 20,
            lineHeight: 1.9,
          }}
        >
          Texel Services biedt onderhoud en reparatiediensten aan zowel particulieren als bedrijven. 
          Wij focussen op praktische klussen die met de nodige vakmanschap, netheid en volgens afspraak worden uitgevoerd.
        </p>

        <p
          style={{
            fontSize: '1.1rem',
            color: theme === 'industrial' ? colors.backgroundAlt : colors.textMuted,
            marginBottom: 20,
            lineHeight: 1.9,
          }}
        >
          Betrouwbaarheid, heldere communicatie en een zorgvuldige afwerking staan bij ons voorop. 
          Zo weet u altijd precies waar u aan toe bent.
        </p>

        <motion.span
          whileHover={{ scale: 1.02 }}
          style={{
            display: 'inline-block',
            marginTop: 40,
            padding: theme === 'friendly' ? '20px 40px' : theme === 'industrial' ? '24px 48px' : '16px 32px',
            background: theme === 'industrial' 
              ? 'transparent' 
              : theme === 'friendly'
              ? `linear-gradient(135deg, ${colors.accent} 0%, #D4917A 100%)`
              : colors.backgroundAlt,
            color: theme === 'industrial' ? colors.accent : theme === 'friendly' ? '#fff' : colors.primary,
            fontFamily: theme === 'industrial' ? 'Oswald, sans-serif' : theme === 'friendly' ? 'Nunito, sans-serif' : 'Playfair Display, serif',
            fontSize: theme === 'friendly' ? '1.1rem' : '1.2rem',
            fontWeight: theme === 'industrial' ? 700 : theme === 'friendly' ? 700 : 400,
            fontStyle: theme === 'coastal' ? 'italic' : 'normal',
            border: theme === 'industrial' ? `2px solid ${colors.accent}` : 'none',
            borderRadius: theme === 'friendly' ? 50 : theme === 'coastal' ? 0 : 0,
            boxShadow: theme === 'friendly' ? '0 8px 24px rgba(196, 120, 90, 0.25)' : 'none',
          }}
        >
          Kleine klussen. Groot verschil.
        </motion.span>
      </motion.div>
    </section>
  );
}
