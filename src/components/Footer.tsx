'use client';

import { useTheme } from '@/context/ThemeContext';
import { FaFacebook, FaLinkedin, FaTiktok } from 'react-icons/fa6';

export default function Footer() {
  const { colors } = useTheme();

  return (
    <footer
      style={{
        background: `linear-gradient(180deg, ${colors.primaryDark} 0%, ${colors.primary} 100%)`,
        color: '#fff',
        padding: '80px 60px 40px',
        position: 'relative',
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 4,
        background: `linear-gradient(90deg, ${colors.accent}, ${colors.primaryLight})`,
      }} />

      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr 1fr',
        gap: 60,
      }}>
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div
              style={{
                width: 48,
                height: 48,
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <span
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '1.5rem',
                fontWeight: 700,
                letterSpacing: '0.5px',
              }}
            >
              Texel Services
            </span>
          </div>
          <p style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '0.95rem',
            lineHeight: 1.7,
            opacity: 0.8,
            maxWidth: 280,
          }}>
            Professionele klusdiensten op Texel. Vakmanschap, betrouwbaarheid en kwaliteit staan bij ons voorop.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: 20,
            opacity: 0.6,
          }}>
            Snelkoppelingen
          </h4>
          {['Over Ons', 'Diensten', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link === 'Over Ons' ? 'over-ons' : link === 'Diensten' ? 'diensten' : 'contact'}`}
              style={{
                display: 'block',
                fontFamily: 'Outfit, sans-serif',
                fontSize: '0.95rem',
                color: '#fff',
                textDecoration: 'none',
                padding: '8px 0',
                opacity: 0.85,
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.85'}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: 20,
            opacity: 0.6,
          }}>
            Contact
          </h4>
          <p style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '0.95rem',
            opacity: 0.85,
            marginBottom: 8,
          }}>
            06 4370 8128
          </p>
          <p style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '0.95rem',
            opacity: 0.85,
            marginBottom: 24,
          }}>
            info@texelservices.nl
          </p>
          
          {/* Social */}
          <div style={{ display: 'flex', gap: 12 }}>
            {[
              { icon: FaFacebook, href: '#' },
              { icon: FaTiktok, href: '#' },
              { icon: FaLinkedin, href: '#' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
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
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{
        maxWidth: 1100,
        margin: '60px auto 0',
        paddingTop: 24,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 16,
      }}>
        <p style={{ 
          fontFamily: 'Outfit, sans-serif', 
          fontSize: '0.85rem', 
          opacity: 0.5 
        }}>
          &copy; 2024 Texel Services. Alle rechten voorbehouden.
        </p>
        <p style={{ 
          fontFamily: 'Outfit, sans-serif', 
          fontSize: '0.8rem', 
          opacity: 0.4 
        }}>
          KvK: 99574039 | BTW: NL005395866B38
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1.5fr 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          div[style*="display: flex"]:has(div[style*="width: 40px"]) {
            justify-content: center !important;
          }
          footer > div:first-of-type {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
