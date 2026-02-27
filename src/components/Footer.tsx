'use client';

import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaTiktok } from 'react-icons/fa6';

export default function Footer() {
  const { colors } = useTheme();

  return (
    <footer
      className="site-footer"
      style={{
        background: `linear-gradient(180deg, ${colors.primaryDark} 0%, ${colors.primary} 100%)`,
        color: '#fff',
        padding: '80px 60px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.accent} 0%, transparent 70%)`,
          top: -200,
          right: -100,
        }}
      />
      <motion.div
        animate={{
          opacity: [0.05, 0.1, 0.05],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        style={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: `radial-gradient(circle, #fff 0%, transparent 70%)`,
          bottom: -100,
          left: -50,
          opacity: 0.1,
        }}
      />

      {/* Top accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: `linear-gradient(90deg, ${colors.accent}, ${colors.primaryLight})`,
        }}
      />

      <div
        className="footer-grid"
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr',
          gap: 60,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Brand */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <span
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: '1.5rem',
                fontWeight: 700,
                letterSpacing: '0.5px',
              }}
            >
              Texel Services
            </span>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '0.95rem',
              lineHeight: 1.7,
              opacity: 0.8,
              maxWidth: 280,
            }}
          >
            Professionele klusdiensten op Texel. Vakmanschap, betrouwbaarheid en kwaliteit staan bij ons voorop.
          </motion.p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: 20,
            opacity: 0.6,
          }}>
            Snelkoppelingen
          </h4>
          {['Over Ons', 'Diensten', 'Contact'].map((link, index) => (
            <motion.a
              key={link}
              href={`#${link === 'Over Ons' ? 'over-ons' : link === 'Diensten' ? 'diensten' : 'contact'}`}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ x: 8, opacity: 1 }}
              style={{
                display: 'block',
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: '0.95rem',
                color: '#fff',
                textDecoration: 'none',
                padding: '8px 0',
                opacity: 0.85,
                transition: 'all 0.3s',
              }}
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: 20,
            opacity: 0.6,
          }}>
            Contact
          </h4>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '0.95rem',
              opacity: 0.85,
              marginBottom: 8,
            }}
          >
            06 4370 8128
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '0.95rem',
              opacity: 0.85,
              marginBottom: 24,
            }}
          >
            info@texelservices.nl
          </motion.p>
          
          {/* Social */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', gap: 12 }}
          >
            {[
              { icon: FaFacebook, href: '#' },
              { icon: FaTiktok, href: '#' },
              { icon: FaLinkedin, href: '#' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: 40,
                  height: 40,
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transition: 'all 0.3s',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          maxWidth: 1100,
          margin: '60px auto 0',
          paddingTop: 24,
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <p style={{ 
          fontFamily: "'Source Sans 3', sans-serif", 
          fontSize: '0.85rem', 
          opacity: 0.5 
        }}>
          © 2024 Texel Services. Alle rechten voorbehouden.
        </p>
        <p style={{ 
          fontFamily: "'Source Sans 3', sans-serif", 
          fontSize: '0.8rem', 
          opacity: 0.4 
        }}>
          KvK: 99574039 | BTW: NL005395866B38
        </p>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .site-footer {
            padding: 48px 20px 32px !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            text-align: center !important;
            margin-top: 40px !important;
            padding-top: 24px !important;
          }
        }
      `}</style>
    </footer>
  );
}
