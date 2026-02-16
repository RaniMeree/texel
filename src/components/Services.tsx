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
        padding: '120px 40px',
        background: colors.backgroundAlt,
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: 'center',
          fontFamily: 'Nunito, sans-serif',
          fontSize: '2.5rem',
          fontWeight: 700,
          color: colors.text,
          marginBottom: 60,
        }}
      >
        Onze Diensten
      </motion.h2>

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            style={{
              padding: '36px 28px',
              background: colors.cardBg,
              borderRadius: 24,
              boxShadow: '0 4px 16px rgba(0, 59, 111, 0.06)',
              transition: 'all 0.3s',
            }}
          >
            <div
              style={{
                width: 72,
                height: 72,
                background: index % 2 === 0 
                  ? colors.primary 
                  : colors.accent,
                borderRadius: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
                color: '#fff',
              }}
            >
              <service.icon size={28} />
            </div>

            <h3
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: colors.text,
                marginBottom: 16,
              }}
            >
              {service.title}
            </h3>

            <p
              style={{
                color: colors.textMuted,
                fontSize: '0.9rem',
                lineHeight: 1.7,
              }}
            >
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
