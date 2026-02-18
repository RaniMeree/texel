'use client';

import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Wrench, 
  Sofa, 
  Wand2, 
  Hammer, 
  ClipboardList 
} from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Elektra',
    description: 'Vervangen van schakelaars, stopcontacten en verlichting.',
  },
  {
    icon: Wrench,
    title: 'Reparaties',
    description: 'Kleine reparaties en preventief onderhoud in en om het huis.',
  },
  {
    icon: Sofa,
    title: 'Montage',
    description: 'Vakkundige montage van meubels, kasten en accessoires.',
  },
  {
    icon: Wand2,
    title: 'Keukenrenovatie',
    description: 'Reparatie en het wrappen van keukendeurtjes met folie.',
  },
  {
    icon: Hammer,
    title: 'Timmerwerk',
    description: 'Kleine timmerklussen, planken ophangen en afwerking.',
  },
  {
    icon: ClipboardList,
    title: 'Algemeen Onderhoud',
    description: 'Diverse service en onderhoudsklussen voor woning of kantoor.',
  },
];

export default function Services() {
  const { colors } = useTheme();

  return (
    <section
      id="diensten"
      style={{
        padding: '140px 60px',
        background: colors.backgroundAlt,
        position: 'relative',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: 64 }}
      >
        <span
          style={{
            display: 'inline-block',
            fontFamily: 'Outfit, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: colors.accent,
            marginBottom: 16,
            padding: '8px 16px',
            background: `${colors.accent}10`,
            borderRadius: 6,
          }}
        >
          Onze Diensten
        </span>
        <h2
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '3rem',
            fontWeight: 600,
            color: colors.text,
          }}
        >
          Wat wij doen
        </h2>
      </motion.div>

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8, boxShadow: `0 24px 48px ${colors.shadowHover}` }}
            style={{
              padding: '40px 32px',
              background: colors.surface,
              borderRadius: 16,
              boxShadow: `0 8px 32px ${colors.shadow}`,
              transition: 'all 0.4s ease',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Subtle top accent */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 3,
              background: index % 2 === 0 
                ? `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`
                : `linear-gradient(90deg, ${colors.accent}, ${colors.primary})`,
              opacity: 0,
              transition: 'opacity 0.3s',
            }} 
            className="service-accent"
            />

            <div
              style={{
                width: 56,
                height: 56,
                background: index % 2 === 0 
                  ? `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`
                  : `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentLight} 100%)`,
                borderRadius: 14,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 24,
                color: '#fff',
                boxShadow: `0 8px 24px ${colors.shadow}`,
              }}
            >
              <service.icon size={24} />
            </div>

            <h3
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.5rem',
                fontWeight: 600,
                color: colors.text,
                marginBottom: 12,
              }}
            >
              {service.title}
            </h3>

            <p
              style={{
                fontFamily: 'Outfit, sans-serif',
                color: colors.textSecondary,
                fontSize: '0.95rem',
                lineHeight: 1.7,
              }}
            >
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      <style>{`
        .service-accent {
          opacity: 1;
        }
        @media (max-width: 1024px) {
          div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
