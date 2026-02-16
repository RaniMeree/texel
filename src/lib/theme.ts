export type Theme = 'coastal' | 'industrial' | 'friendly';

export interface ThemeColors {
  primary: string;
  accent: string;
  background: string;
  backgroundAlt: string;
  text: string;
  textMuted: string;
  cardBg: string;
  border: string;
}

export const themes: Record<Theme, ThemeColors> = {
  coastal: {
    primary: '#2D5A6B',
    accent: '#4A7C8A',
    background: '#FAF8F5',
    backgroundAlt: '#E8E4DD',
    text: '#2C2C2C',
    textMuted: '#8B8680',
    cardBg: '#FFFFFF',
    border: 'rgba(139, 134, 128, 0.1)',
  },
  industrial: {
    primary: '#1A1A1A',
    accent: '#D4652F',
    background: '#1A1A1A',
    backgroundAlt: '#2D2D2D',
    text: '#F5F0E8',
    textMuted: '#8B8680',
    cardBg: '#2D2D2D',
    border: '#4A4A4A',
  },
  friendly: {
    primary: '#3D3632',
    accent: '#C4785A',
    background: '#FDF8F4',
    backgroundAlt: '#F5EBE3',
    text: '#3D3632',
    textMuted: '#8B8580',
    cardBg: '#FFFFFF',
    border: 'rgba(61, 54, 50, 0.1)',
  },
};

export const themeFonts = {
  coastal: {
    heading: 'Playfair Display',
    body: 'DM Sans',
  },
  industrial: {
    heading: 'Oswald',
    body: 'Space Mono',
  },
  friendly: {
    heading: 'Nunito',
    body: 'Nunito',
  },
};
