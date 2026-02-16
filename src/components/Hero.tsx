'use client';

import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const { colors } = useTheme();

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
        background: `linear-gradient(180deg, ${colors.background} 0%, ${colors.backgroundAlt} 100%)`,
      }}
    >
      {/* Decorative shapes */}
      <div style={{
        position: 'absolute',
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'rgba(0, 59, 111, 0.06)',
        top: -150,
        right: -150,
      }} />
      <div style={{
        position: 'absolute',
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'rgba(0, 140, 186, 0.06)',
        bottom: -100,
        left: -100,
      }} />

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '120px 40px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
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
          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: '3.5rem',
              fontWeight: 700,
              color: colors.text,
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            Texel Services
          </motion.h1>

          <motion.p
            variants={itemVariants}
            style={{
              fontSize: '1.25rem',
              color: colors.textMuted,
              marginBottom: 32,
              maxWidth: 480,
              lineHeight: 1.8,
            }}
          >
            Kleine klussen die het verschil maken. Vakmanschap, netheid en betrouwbaarheid in elk project.
          </motion.p>

          <motion.a
            variants={itemVariants}
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              background: colors.primary,
              color: '#fff',
              padding: '18px 36px',
              borderRadius: 50,
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(0, 59, 111, 0.3)',
              transition: 'all 0.3s',
            }}
          >
            Vraag een offerte aan
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>

        {/* Hero Image */}
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
          <div
            style={{
              background: colors.cardBg,
              borderRadius: 32,
              padding: 16,
              boxShadow: '0 32px 64px rgba(0, 59, 111, 0.15), 0 16px 32px rgba(0, 59, 111, 0.08)',
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
              background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`,
            }} />
            <img 
              src="/hero-image.webp" 
              alt="Texel Services" 
              style={{ 
                width: '100%', 
                maxWidth: 400,
                height: 'auto', 
                borderRadius: 20,
                display: 'block',
              }} 
            />
            <p style={{ 
              fontWeight: 700, 
              fontSize: '1.1rem', 
              color: colors.text,
              marginTop: 16,
            }}>
              Kleine klussen. Groot verschil.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
