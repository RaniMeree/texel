'use client';

import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';

export default function About() {
  const { colors } = useTheme();

  return (
    <section
      id="over-ons"
      style={{
        padding: '140px 60px',
        background: colors.surface,
        position: 'relative',
      }}
    >
      {/* Subtle accent line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 120,
        height: 1,
        background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`,
      }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'inline-block',
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: colors.accent,
            marginBottom: 20,
          }}
        >
          Over Ons
        </motion.span>

        <h2
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: '3rem',
            fontWeight: 700,
            color: colors.text,
            marginBottom: 32,
            letterSpacing: '-0.3px',
          }}
        >
          Over Texel Services
        </h2>

        <p
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: '1.1rem',
            fontWeight: 400,
            color: colors.textSecondary,
            marginBottom: 24,
            lineHeight: 1.9,
          }}
        >
          Texel Services biedt onderhoud en reparatiediensten aan zowel particulieren als bedrijven. 
          Wij focussen op praktische klussen die met de nodige vakmanschap, netheid en volgens afspraak worden uitgevoerd.
        </p>

        <p
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: '1.1rem',
            fontWeight: 400,
            color: colors.textSecondary,
            marginBottom: 20,
            lineHeight: 1.9,
          }}
        >
          Betrouwbaarheid, heldere communicatie en een zorgvuldige afwerking staan bij ons voorop. 
          Zo weet u altijd precies waar u aan toe bent.
        </p>

        <motion.div
          whileHover={{ scale: 1.02 }}
          style={{
            display: 'inline-block',
            marginTop: 48,
            padding: '20px 48px',
            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
            color: '#fff',
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: '1.3rem',
            fontWeight: 600,
            fontStyle: 'italic',
            borderRadius: 8,
            boxShadow: `0 8px 32px ${colors.shadow}`,
          }}
        >
          Kleine klussen. Groot verschil.
        </motion.div>
      </motion.div>
    </section>
  );
}
