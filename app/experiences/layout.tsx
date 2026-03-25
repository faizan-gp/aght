import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VR Arcade Games Experiences Houston | 6 Categories, 8 Games | Arcade Games Houston Texas',
  description: "Houston's only free-roam VR arcade offers 6 experience categories and 8 multiplayer games. Zombie survival, sci-fi, PvP esports, family adventures, tropical action, and horror. 2-8 players per session.",
  keywords: [
    'VR arcade experiences Houston',
    'arcade houston vr',
    'free roam VR Houston',
    'virtual reality arcade Houston TX',
    'arcade Houston experiences',
    'group VR Houston',
    'zombie VR Houston',
    'VR horror Houston',
    'team VR Houston',
    'arcade houston',
  ],
  alternates: { canonical: 'https://arcadegameshoustontexas.com/experiences' },
  openGraph: {
    title: 'VR Arcade Games Experiences Houston | 6 Categories, 8 Games | Arcade Games Houston Texas',
    description: "Houston's only free-roam VR arcade: 6 experience categories, 8 multiplayer games, 2-8 players per session.",
    url: 'https://arcadegameshoustontexas.com/experiences',
    siteName: 'Arcade Games Houston Texas',
    type: 'website',
    images: [{ url: 'https://arcadegameshoustontexas.com/og-experiences.webp', width: 1200, height: 630, alt: 'VR Arcade Games Experiences at Arcade Games Houston Texas' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VR Arcade Games Experiences Houston | 6 Categories, 8 Games | Arcade Games Houston Texas',
    description: "6 VR experience categories at Houston's only free-roam VR arcade. 2-8 players.",
  },
};

export default function ExperiencesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
