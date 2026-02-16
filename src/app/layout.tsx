import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Texel Services | Onderhoud, Elektra & Klusbedrijf",
  description: "Texel Services biedt onderhoud en reparatiediensten aan zowel particulieren als bedrijven. Kleine klussen die het verschil maken.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@400;600;700&family=Oswald:wght@400;500;700&family=Space+Mono:wght@400;700&family=Nunito:wght@400;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
