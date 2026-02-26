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
      {/* Animated sophisticated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          width: 900,
          height: 900,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.primary}12 0%, transparent 70%)`,
          top: -350,
          right: -250,
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        style={{
          position: 'absolute',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.accent}10 0%, transparent 70%)`,
          bottom: -250,
          left: -150,
        }}
      />
      
      {/* Floating decorative elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: 60,
          height: 60,
          borderRadius: '16px',
          background: `${colors.primary}08`,
          border: `1px solid ${colors.border}`,
        }}
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        style={{
          position: 'absolute',
          bottom: '25%',
          right: '15%',
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: `${colors.accent}08`,
          border: `1px solid ${colors.borderLight}`,
        }}
      />
      
      {/* Subtle pattern overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.5,
          backgroundImage: `radial-gradient(${colors.primary}10 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Diagonal accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        style={{
          position: 'absolute',
          top: '15%',
          left: 0,
          width: 300,
          height: 1,
          background: `linear-gradient(90deg, transparent, ${colors.accent}, transparent)`,
          transform: 'rotate(-15deg)',
          transformOrigin: 'left',
        }}
      />

      <div
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: '140px 60px',
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: 100,
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
              background: `${colors.accent}12`,
              borderRadius: 6,
              border: `1px solid ${colors.accent}20`,
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
              whileHover={{ scale: 1.03, boxShadow: `0 12px 40px ${colors.shadowHover}` }}
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
          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{
              position: 'relative',
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: `0 32px 80px ${colors.shadowHover}, 0 16px 40px ${colors.shadow}`,
            }}
          >
            {/* Image accent bar */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 4,
              background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`,
            }} />
            {/* Corner accents */}
            <div style={{
              position: 'absolute',
              top: 10,
              left: 10,
              width: 30,
              height: 30,
              borderTop: `2px solid ${colors.accent}`,
              borderLeft: `2px solid ${colors.accent}`,
              borderTopLeftRadius: 8,
            }} />
            <div style={{
              position: 'absolute',
              bottom: 10,
              right: 10,
              width: 30,
              height: 30,
              borderBottom: `2px solid ${colors.primary}`,
              borderRight: `2px solid ${colors.primary}`,
              borderBottomRightRadius: 8,
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
