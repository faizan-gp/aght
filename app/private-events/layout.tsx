import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Houston Arcade Games Party Venue | Birthday, Corporate, Groups | Arcade Games Houston Texas',
  description: 'Book private arcade games parties in Houston. VR arena sessions for birthdays, corporate team building, bachelor parties, and groups of 2-8. Private arena access at Arcade Games Houston Texas in Webster TX.',
  keywords: [
    'arcade game birthday party houston texas',
    'houston party venue arcade games',
    'corporate team building houston arcade games',
    'bachelor party arcade games houston',
    'private arcade game events houston',
    'group arcade game activities houston tx',
    'vr party houston',
    'arcade games houston private events',
    'arcade games houston texas',
  ],
  alternates: { canonical: 'https://arcadegameshoustontexas.com/private-events' },
  openGraph: {
    title: 'Houston Arcade Games Party Venue | Birthday, Corporate, Groups | Arcade Games Houston Texas',
    description: 'Book private arcade game parties in Houston. VR arena for birthdays, corporate events, bachelor parties. 2-8 players. Webster TX.',
    url: 'https://arcadegameshoustontexas.com/private-events',
    siteName: 'Arcade Games Houston Texas',
    type: 'website',
    images: [{ url: 'https://arcadegameshoustontexas.com/og-private-events.webp', width: 1200, height: 630, alt: 'Private Arcade Games Party Venue at Arcade Games Houston Texas' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Houston Arcade Games Party Venue | Birthday, Corporate, Groups | Arcade Games Houston Texas',
    description: 'Private VR arena for birthdays, team building, and bachelor arcade game parties in Houston TX.',
  },
};

export default function PrivateEventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
