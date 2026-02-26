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
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <motion.div
        animate={{
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.primary} 0%, transparent 70%)`,
          top: -200,
          left: -200,
        }}
      />
      <motion.div
        animate={{
          opacity: [0.02, 0.05, 0.02],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        style={{
          position: 'absolute',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.accent} 0%, transparent 70%)`,
          bottom: -150,
          right: -150,
        }}
      />

      {/* Subtle accent line with glow */}
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
        style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}
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
            padding: '8px 16px',
            background: `${colors.accent}12`,
            borderRadius: 6,
            border: `1px solid ${colors.accent}20`,
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
          whileHover={{ scale: 1.02, boxShadow: `0 12px 40px ${colors.shadowHover}` }}
          whileTap={{ scale: 0.98 }}
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

      {/* Bottom decorative dots */}
      <div style={{
        position: 'absolute',
        bottom: 40,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 12,
      }}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: colors.accent,
            }}
          />
        ))}
      </div>
    </section>
  );
}
