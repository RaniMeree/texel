'use client';

import { useTheme } from '@/context/ThemeContext';
import { FaFacebook, FaLinkedin, FaTiktok } from 'react-icons/fa6';

export default function Footer() {
  const { colors, theme } = useTheme();

  return (
    <footer
      style={{
        background: theme === 'industrial' ? colors.background : theme === 'friendly' ? colors.text : colors.primary,
        color: '#fff',
        padding: '60px 40px',
        textAlign: 'center',
      }}
    >
      <h3
        style={{
          fontFamily: theme === 'industrial' ? 'Oswald, sans-serif' : 'inherit',
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: 24,
          textTransform: theme === 'industrial' ? 'uppercase' : 'none',
          letterSpacing: theme === 'industrial' ? '2px' : 'normal',
        }}
      >
        Texel Services
      </h3>

      <div
        style={{
          fontSize: '0.85rem',
          marginBottom: 24,
          opacity: theme === 'industrial' ? 0.7 : 0.8,
        }}
      >
        KvK-nummer: 99574039 | BTW-ID: NL005395866B38
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 32 }}>
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
              width: 44,
              height: 44,
              background: theme === 'industrial' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.2)',
              borderRadius: theme === 'friendly' ? 12 : '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              transition: 'all 0.3s',
            }}
          >
            <social.icon size={18} />
          </a>
        ))}
      </div>

      <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>
        &copy; 2024 Texel Services. Alle rechten voorbehouden.
      </p>
    </footer>
  );
}
