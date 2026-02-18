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
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
        transition: { duration: 0.7 },
    },
  };

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${colors.background} 0%, ${colors.backgroundAlt} 100%)`,
      }}
    >
      {/* Sophisticated background elements */}
      <div style={{
        position: 'absolute',
        width: 800,
        height: 800,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${colors.primary}06 0%, transparent 70%)`,
        top: -300,
        right: -200,
      }} />
      <div style={{
        position: 'absolute',
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${colors.accent}05 0%, transparent 70%)`,
        bottom: -200,
        left: -100,
      }} />
      
      {/* Subtle pattern overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.4,
          backgroundImage: `radial-gradient(${colors.primary}08 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: '140px 60px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
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
          {/* Tagline */}
          <motion.span
            variants={itemVariants}
            style={{
              display: 'inline-block',
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: colors.accent,
              marginBottom: 24,
              padding: '8px 16px',
              background: `${colors.accent}10`,
              borderRadius: 6,
            }}
          >
            Vakmanschap & Betrouwbaarheid
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '4.5rem',
              fontWeight: 700,
              color: colors.text,
              lineHeight: 1.1,
              marginBottom: 28,
              letterSpacing: '-0.5px',
            }}
          >
            Texel <span style={{ color: colors.primary }}>Services</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '1.15rem',
              fontWeight: 400,
              color: colors.textSecondary,
              marginBottom: 40,
              maxWidth: 520,
              lineHeight: 1.8,
              letterSpacing: '0.2px',
            }}
          >
            Kleine klussen die het verschil maken. Wij leveren vakmanschap, netheid en betrouwbaarheid bij elk project — groot of klein.
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
                color: '#fff',
                padding: '16px 32px',
                borderRadius: 10,
                fontFamily: "'Source Sans 3', sans-serif",
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
                boxShadow: `0 8px 32px ${colors.shadow}`,
                letterSpacing: '0.3px',
              }}
            >
              Vraag een offerte aan
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              position: 'relative',
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: `0 32px 80px ${colors.shadowHover}, 0 16px 40px ${colors.shadow}`,
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 4,
              background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`,
            }} />
            <img 
              src="/hero-image.webp" 
              alt="Texel Services" 
              style={{ 
                width: '100%', 
                maxWidth: 480,
                height: 'auto', 
                borderRadius: 20,
                display: 'block',
              }} 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
