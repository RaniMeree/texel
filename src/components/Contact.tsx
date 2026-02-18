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
        padding: '140px 60px',
        background: colors.surface,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: 80,
          alignItems: 'start',
        }}
      >
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span
            style={{
              display: 'inline-block',
              fontFamily: "'Source Sans 3', sans-serif",
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
            Contact
          </span>
          
          <h2
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '2.75rem',
              fontWeight: 700,
              color: colors.text,
              marginBottom: 20,
              letterSpacing: '-0.3px',
            }}
          >
            Neem contact op
          </h2>
          
          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              color: colors.textSecondary,
              marginBottom: 40,
              fontSize: '1.05rem',
              lineHeight: 1.7,
            }}
          >
            Heeft u een klus? Wij staan voor u klaar om u te helpen. 
            Neem vrijblijvend contact met ons op.
          </p>

          {contactInfo.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 8 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                marginBottom: 28,
                textDecoration: 'none',
                padding: '16px 20px',
                background: colors.background,
                borderRadius: 12,
                transition: 'all 0.3s ease',
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`,
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  flexShrink: 0,
                  boxShadow: `0 4px 16px ${colors.shadow}`,
                }}
              >
                <item.icon size={20} />
              </div>
              <span
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  color: colors.text,
                  fontWeight: 500,
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
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          style={{
            background: colors.surface,
            padding: 48,
            boxShadow: `0 24px 64px ${colors.shadowHover}, 0 12px 24px ${colors.shadow}`,
            borderRadius: 24,
            border: `1px solid ${colors.border}`,
          }}
        >
          <h3
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '1.6rem',
              fontWeight: 700,
              color: colors.text,
              marginBottom: 32,
            }}
          >
            Stuur ons een bericht
          </h3>
          
          <input
            type="text"
            name="name"
            placeholder="Uw naam"
            required
            style={{
              width: '100%',
              padding: '18px 24px',
              marginBottom: 20,
              border: `1px solid ${colors.border}`,
              background: colors.background,
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '0.95rem',
              color: colors.text,
              borderRadius: 10,
              transition: 'all 0.3s',
              outline: 'none',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = colors.primary;
              e.currentTarget.style.boxShadow = `0 0 0 3px ${colors.primary}10`;
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = colors.border;
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Uw e-mailadres"
            required
            style={{
              width: '100%',
              padding: '18px 24px',
              marginBottom: 20,
              border: `1px solid ${colors.border}`,
              background: colors.background,
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '0.95rem',
              color: colors.text,
              borderRadius: 10,
              transition: 'all 0.3s',
              outline: 'none',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = colors.primary;
              e.currentTarget.style.boxShadow = `0 0 0 3px ${colors.primary}10`;
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = colors.border;
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Beschrijf uw klus of vraag..."
            required
            style={{
              width: '100%',
              padding: '18px 24px',
              marginBottom: 24,
              border: `1px solid ${colors.border}`,
              background: colors.background,
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '0.95rem',
              color: colors.text,
              borderRadius: 10,
              resize: 'vertical',
              minHeight: 140,
              transition: 'all 0.3s',
              outline: 'none',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = colors.primary;
              e.currentTarget.style.boxShadow = `0 0 0 3px ${colors.primary}10`;
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = colors.border;
              e.currentTarget.style.boxShadow = 'none';
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
              gap: 10,
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
              color: '#fff',
              padding: '18px 36px',
              border: 'none',
              borderRadius: 10,
              fontFamily: "'Source Sans 3', sans-serif",
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer',
              boxShadow: `0 8px 24px ${colors.shadow}`,
              letterSpacing: '0.3px',
            }}
          >
            Verstuur bericht
            <Send size={18} />
          </motion.button>
        </motion.form>
      </div>

      <style>{`
        @media (max-width: 900px) {
          div[style*="grid-template-columns: 1fr 1.2fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
