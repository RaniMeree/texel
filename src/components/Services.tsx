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
  const { colors, theme } = useTheme();

  return (
    <section
      id="diensten"
      style={{
        padding: '120px 40px',
        background: theme === 'coastal' ? colors.cardBg : theme === 'industrial' ? colors.background : colors.backgroundAlt,
        position: 'relative',
      }}
    >
      {theme === 'coastal' && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: `linear-gradient(90deg, transparent, ${colors.border}, transparent)`,
        }} />
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: 'center',
          fontFamily: theme === 'industrial' ? 'Oswald, sans-serif' : theme === 'friendly' ? 'Nunito, sans-serif' : 'Playfair Display, serif',
          fontSize: '2.5rem',
          fontWeight: 700,
          color: theme === 'industrial' ? '#fff' : colors.text,
          marginBottom: 60,
          textTransform: theme === 'industrial' ? 'uppercase' : 'none',
          letterSpacing: theme === 'industrial' ? '2px' : 'normal',
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
          gap: theme === 'friendly' ? 24 : 40,
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
              padding: theme === 'friendly' ? '36px 28px' : theme === 'industrial' ? '48px 36px' : '48px 36px',
              background: theme === 'friendly' ? colors.cardBg : theme === 'coastal' ? colors.background : colors.cardBg,
              border: theme === 'industrial' ? `1px solid ${colors.border}` : 'none',
              borderRadius: theme === 'friendly' ? 24 : theme === 'coastal' ? 0 : 0,
              boxShadow: theme === 'friendly' ? '0 4px 16px rgba(61, 54, 50, 0.04)' : theme === 'coastal' ? 'none' : 'none',
              transition: 'all 0.3s',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {theme === 'coastal' && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: 3,
                  background: colors.primary,
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.3s',
                }}
                className="service-bar"
              />
            )}
            
            {theme === 'industrial' && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 4,
                  height: '100%',
                  background: colors.accent,
                  transform: 'scaleY(0)',
                  transformOrigin: 'top',
                  transition: 'transform 0.3s',
                }}
                className="service-bar"
              />
            )}

            <div
              style={{
                width: theme === 'friendly' ? 72 : 56,
                height: theme === 'friendly' ? 72 : 56,
                background: theme === 'friendly' 
                  ? `linear-gradient(135deg, ${index % 3 === 1 ? colors.accent : '#8FA68A'}, ${index % 3 === 1 ? '#D4917A' : '#A8BE9F'})`
                  : theme === 'industrial'
                  ? 'transparent'
                  : 'transparent',
                borderRadius: theme === 'friendly' ? 20 : theme === 'coastal' ? 0 : 0,
                border: theme === 'industrial' ? `1px solid ${colors.accent}` : 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: theme === 'friendly' ? 20 : 24,
                color: theme === 'industrial' ? colors.accent : theme === 'coastal' ? colors.primary : colors.text,
              }}
            >
              <service.icon size={theme === 'friendly' ? 28 : 24} />
            </div>

            <h3
              style={{
                fontFamily: theme === 'industrial' ? 'Oswald, sans-serif' : theme === 'friendly' ? 'Nunito, sans-serif' : 'Playfair Display, serif',
                fontSize: theme === 'friendly' ? '1.2rem' : '1.3rem',
                fontWeight: 700,
                color: theme === 'industrial' ? '#fff' : colors.text,
                marginBottom: 16,
                textTransform: theme === 'industrial' ? 'uppercase' : 'none',
              }}
            >
              {service.title}
            </h3>

            <p
              style={{
                color: theme === 'industrial' ? colors.textMuted : colors.textMuted,
                fontSize: theme === 'friendly' ? '0.9rem' : '0.95rem',
                lineHeight: 1.7,
              }}
            >
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      <style>{`
        .service-bar {
          transform: scaleX(1);
        }
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
