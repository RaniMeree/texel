'use client';

import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { Phone, Mail, Globe, Send } from 'lucide-react';

export default function Contact() {
  const { colors } = useTheme();

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
        background: colors.cardBg,
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          textAlign: 'center',
          fontFamily: 'Nunito, sans-serif',
          fontSize: '2.5rem',
          fontWeight: 700,
          color: colors.text,
          marginBottom: 60,
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
          gap: 48,
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
              fontFamily: 'Nunito, sans-serif',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: colors.text,
              marginBottom: 16,
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
                  width: 48,
                  height: 48,
                  background: colors.primary,
                  borderRadius: 14,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  flexShrink: 0,
                }}
              >
                <item.icon size={20} />
              </div>
              <span
                style={{
                  color: colors.text,
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
            background: colors.background,
            padding: 40,
            boxShadow: '0 8px 32px rgba(0, 59, 111, 0.06)',
            borderRadius: 28,
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Uw naam"
            required
            style={{
              width: '100%',
              padding: '16px 20px',
              marginBottom: 20,
              border: `1px solid ${colors.border}`,
              background: colors.cardBg,
              fontFamily: 'inherit',
              fontSize: '0.95rem',
              color: colors.text,
              borderRadius: 14,
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
              padding: '16px 20px',
              marginBottom: 20,
              border: `1px solid ${colors.border}`,
              background: colors.cardBg,
              fontFamily: 'inherit',
              fontSize: '0.95rem',
              color: colors.text,
              borderRadius: 14,
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
              padding: '16px 20px',
              marginBottom: 20,
              border: `1px solid ${colors.border}`,
              background: colors.cardBg,
              fontFamily: 'inherit',
              fontSize: '0.95rem',
              color: colors.text,
              borderRadius: 14,
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
              background: colors.primary,
              color: '#fff',
              padding: '18px 36px',
              border: 'none',
              borderRadius: 14,
              fontWeight: 700,
              fontSize: '1rem',
              fontFamily: 'inherit',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0, 59, 111, 0.3)',
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
