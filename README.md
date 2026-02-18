# Texel Services Website

Modern Next.js website with 3 switchable theme variants.

## Features

- **Next.js 14** with App Router
- **React 18** with TypeScript
- **Framer Motion** animations
- **Theme Switcher** - Coastal, Industrial, or Friendly
- **Fully Responsive**

## Themes

| Theme | Description |
|-------|-------------|
| **Coastal** | Minimalist with sea blue tones, Playfair Display + DM Sans fonts |
| **Industrial** | Bold dark theme with rust orange accents, Oswald + Space Mono fonts |
| **Friendly** | Warm terracotta/sage colors, Nunito rounded font |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
│   ├── Navbar.tsx   # Navigation with theme switcher
│   ├── Hero.tsx     # Hero section
│   ├── About.tsx    # About section
│   ├── Services.tsx # Services grid
│   ├── Contact.tsx  # Contact form
│   └── Footer.tsx   # Footer
├── context/          # React Context providers
│   └── ThemeContext.tsx
└── lib/              # Utilities
    └── theme.ts      # Theme tokens
```

## Theme Switching

Click the theme dropdown in the navigation to switch between:
- Coastal (default)
- Industrial
- Friendly

Each theme has unique colors, typography, and visual styling while maintaining the same content and layout.

## Deployment

Ready to deploy on Vercel, Netlify, or any Node.js host.

```bash
npm run build
```
