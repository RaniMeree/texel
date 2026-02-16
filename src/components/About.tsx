'use client';

import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';

export default function About() {
  const { colors } = useTheme();

  return (
    <section
      id="over-ons"
      style={{
        padding: '120px 40px',
        background: colors.cardBg,
        textAlign: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: 900, margin: '0 auto' }}
      >
        <h2
          style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: '2.5rem',
            fontWeight: 700,
            color: colors.text,
            marginBottom: 32,
            position: 'relative',
            display: 'inline-block',
          }}
        >
          Over Texel Services
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
        </h2>

        <p
          style={{
            fontSize: '1.1rem',
            color: colors.textMuted,
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
            color: colors.textMuted,
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
            padding: '20px 40px',
            background: colors.primary,
            color: '#fff',
            fontFamily: 'Nunito, sans-serif',
            fontSize: '1.1rem',
            fontWeight: 700,
            borderRadius: 50,
            boxShadow: '0 8px 24px rgba(0, 59, 111, 0.25)',
          }}
        >
          Kleine klussen. Groot verschil.
        </motion.span>
      </motion.div>
    </section>
  );
}
