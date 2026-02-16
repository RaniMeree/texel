'use client';

import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { Phone, Mail, Globe, Send } from 'lucide-react';

export default function Contact() {
  const { colors, theme } = useTheme();

  const contactInfo = [
    { icon: Phone, label: '06 4370 8128', href: 'tel:0643708128' },
    { icon: Mail, label: 'info@texelservices.nl', href: 'mailto:info@texelservices.nl' },
    { icon: Globe, label: 'www.texelservices.nl', href: '#' },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: '120px 40px',
        background: theme === 'industrial' 
          ? colors.backgroundAlt 
          : theme === 'friendly'
          ? colors.cardBg
          : `linear-gradient(135deg, ${colors.backgroundAlt} 0%, ${colors.background} 100%)`,
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          textAlign: 'center',
          fontFamily: theme === 'industrial' ? 'Oswald, sans-serif' : theme === 'friendly' ? 'Nunito, sans-serif' : 'Playfair Display, serif',
          fontSize: '2.5rem',
          fontWeight: 700,
          color: theme === 'coastal' ? colors.primary : colors.text,
          marginBottom: 60,
          textTransform: theme === 'industrial' ? 'uppercase' : 'none',
        }}
      >
        Contact
      </motion.h2>

      <div
        style={{
          maxWidth: 1000,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: theme === 'friendly' ? 48 : 80,
          alignItems: 'start',
        }}
      >
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3
            style={{
              fontFamily: theme === 'industrial' ? 'Oswald, sans-serif' : theme === 'friendly' ? 'Nunito, sans-serif' : 'Playfair Display, serif',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: theme === 'coastal' ? colors.primary : colors.text,
              marginBottom: 16,
              textTransform: theme === 'industrial' ? 'uppercase' : 'none',
            }}
          >
            Neem contact op
          </h3>
          <p
            style={{
              color: colors.textMuted,
              marginBottom: 40,
            }}
          >
            Heeft u een klus? Wij staan voor u klaar om u te helpen.
          </p>

          {contactInfo.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ x: 8 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                marginBottom: 28,
                textDecoration: 'none',
              }}
            >
              <div
                style={{
                  width: theme === 'friendly' ? 48 : 52,
                  height: theme === 'friendly' ? 48 : 52,
                  background: theme === 'friendly'
                    ? `linear-gradient(135deg, ${colors.accent} 0%, #D4917A 100%)`
                    : theme === 'industrial'
                    ? colors.background
                    : colors.cardBg,
                  borderRadius: theme === 'friendly' ? 14 : theme === 'coastal' ? '50%' : 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: theme === 'friendly' ? '#fff' : theme === 'industrial' ? colors.accent : colors.primary,
                  boxShadow: theme === 'coastal' ? '0 8px 24px rgba(45, 90, 107, 0.1)' : 'none',
                  flexShrink: 0,
                  border: theme === 'industrial' ? `1px solid ${colors.accent}` : 'none',
                }}
              >
                <item.icon size={20} />
              </div>
              <span
                style={{
                  color: theme === 'industrial' ? colors.backgroundAlt : colors.text,
                  fontWeight: 600,
                  fontSize: '1rem',
                }}
              >
                {item.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          style={{
            background: theme === 'industrial' ? colors.background : theme === 'friendly' ? colors.background : colors.cardBg,
            padding: theme === 'friendly' ? 40 : 48,
            boxShadow: theme === 'friendly' 
              ? '0 8px 32px rgba(61, 54, 50, 0.06)' 
              : theme === 'coastal'
              ? '0 30px 60px rgba(45, 90, 107, 0.08)'
              : 'none',
            borderRadius: theme === 'friendly' ? 28 : theme === 'industrial' ? 0 : 0,
            border: theme === 'industrial' ? `1px solid ${colors.border}` : 'none',
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Uw naam"
            required
            style={{
              width: '100%',
              padding: theme === 'friendly' ? '16px 20px' : '18px 20px',
              marginBottom: 20,
              border: `1px solid ${colors.border}`,
              background: theme === 'industrial' ? colors.backgroundAlt : theme === 'friendly' ? colors.cardBg : colors.background,
              fontFamily: 'inherit',
              fontSize: '0.95rem',
              color: theme === 'industrial' ? colors.backgroundAlt : colors.text,
              borderRadius: theme === 'friendly' ? 14 : theme === 'coastal' ? 0 : 0,
              transition: 'border-color 0.3s',
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Uw e-mailadres"
            required
            style={{
              width: '100%',
              padding: theme === 'friendly' ? '16px 20px' : '18px 20px',
              marginBottom: 20,
              border: `1px solid ${colors.border}`,
              background: theme === 'industrial' ? colors.backgroundAlt : theme === 'friendly' ? colors.cardBg : colors.background,
              fontFamily: 'inherit',
              fontSize: '0.95rem',
              color: theme === 'industrial' ? colors.backgroundAlt : colors.text,
              borderRadius: theme === 'friendly' ? 14 : theme === 'coastal' ? 0 : 0,
              transition: 'border-color 0.3s',
            }}
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Beschrijf uw klus of vraag..."
            required
            style={{
              width: '100%',
              padding: theme === 'friendly' ? '16px 20px' : '18px 20px',
              marginBottom: 20,
              border: `1px solid ${colors.border}`,
              background: theme === 'industrial' ? colors.backgroundAlt : theme === 'friendly' ? colors.cardBg : colors.background,
              fontFamily: 'inherit',
              fontSize: '0.95rem',
              color: theme === 'industrial' ? colors.backgroundAlt : colors.text,
              borderRadius: theme === 'friendly' ? 14 : theme === 'coastal' ? 0 : 0,
              resize: 'vertical',
              minHeight: 140,
              transition: 'border-color 0.3s',
            }}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              background: theme === 'friendly'
                ? colors.accent
                : theme === 'industrial'
                ? colors.accent
                : colors.primary,
              color: '#fff',
              padding: '18px 36px',
              border: theme === 'industrial' ? `2px solid ${colors.accent}` : 'none',
              borderRadius: theme === 'friendly' ? 14 : theme === 'coastal' ? 0 : 0,
              fontWeight: 700,
              fontSize: '1rem',
              fontFamily: 'inherit',
              cursor: 'pointer',
              boxShadow: theme === 'friendly' ? '0 8px 24px rgba(196, 120, 90, 0.3)' : 'none',
            }}
          >
            Verstuur Bericht
            <Send size={18} />
          </motion.button>
        </motion.form>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
