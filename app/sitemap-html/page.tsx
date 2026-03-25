import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Site Map | Arcade Games Houston Texas',
  description: 'Complete HTML sitemap for Arcade Games Houston Texas — all pages including Houston arcade games guides, VR games, blog posts, experiences, and booking information.',
  alternates: { canonical: 'https://arcadegameshoustontexas.com/sitemap-html' },
  robots: { index: true, follow: true },
};

const mainPages = [
  { label: 'Home', href: '/' },
  { label: 'Arcades in Houston', href: '/arcade-games-in-houston' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Games', href: '/games' },
  { label: 'What to Expect', href: '/what-to-expect' },
  { label: 'Private Events', href: '/private-events' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact Us', href: '/contact-us' },
];

const gamePages = [
  { label: 'Outbreak', href: '/games/outbreak' },
  { label: 'Outbreak 2: Mall Mayhem', href: '/games/outbreak-2-mall-mayhem' },
  { label: 'Space Marine VR', href: '/games/space-marine-vr' },
  { label: 'Far Cry VR: The Expedition', href: '/games/far-cry-vr' },
  { label: 'Sol Raiders', href: '/games/sol-raiders' },
  { label: 'Singularity', href: '/games/singularity' },
  { label: 'Undead Arena', href: '/games/undead-arena' },
  { label: 'Engineerium', href: '/games/engineerium' },
  { label: 'Haunted', href: '/games/haunted' },
];

const blogSlugs = [
  { label: 'Best Arcade Games in Houston Texas (2026)', slug: 'best-arcade-games-houston-texas' },
  { label: 'Cidercade Houston Arcade Games Review', slug: 'cidercade-houston-arcade-games-review' },
  { label: 'Game Preserve Houston Arcade Games Review', slug: 'game-preserve-houston-arcade-games-review' },
  { label: 'Retro Arcade Games Houston Texas', slug: 'retro-arcade-games-houston-texas' },
  { label: 'Arcade Bar Games Houston Texas', slug: 'arcade-bar-games-houston-texas' },
  { label: 'Arcade Games Houston Texas for Kids', slug: 'arcade-games-houston-texas-for-kids' },
  { label: 'Arcade Games Houston Texas for Adults', slug: 'arcade-games-houston-texas-for-adults' },
  { label: 'Free Play Arcade Games Houston Texas', slug: 'free-play-arcade-games-houston-texas' },
  { label: 'Arcade Game Party Venues Houston Texas', slug: 'arcade-game-party-venues-houston-texas' },
  { label: 'Bachelor & Bachelorette Party Arcade Games Houston', slug: 'bachelor-bachelorette-party-games-houston-texas' },
  { label: 'VR Arcade Games Houston Texas', slug: 'vr-games-houston-texas' },
  { label: 'Best VR Arcade Games in Houston Texas', slug: 'best-vr-games-houston-texas' },
  { label: 'Zero Latency Webster Houston VR Games Guide', slug: 'zero-latency-houston-vr-games-guide' },
  { label: 'Fun Things to Do in Houston Texas This Weekend', slug: 'fun-things-houston-texas-this-weekend' },
  { label: 'Activities in Clear Lake Houston TX', slug: 'activities-clear-lake-houston-tx' },
  { label: 'Things to Do in Webster Texas', slug: 'things-to-do-webster-texas' },
  { label: 'Arcade Game Birthday Party Houston', slug: 'arcade-game-birthday-party-houston' },
  { label: 'Houston Team Building Arcade Games', slug: 'houston-team-building-arcade-games' },
  { label: 'Houston Date Night Arcade Games', slug: 'houston-date-night-arcade-games' },
  { label: 'Arcade Games Group Activities Houston TX', slug: 'arcade-games-group-activities-houston' },
];

const legalPages = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'About Us', href: '/about' },
  { label: 'Editorial Guidelines', href: '/editorial-guidelines' },
];

export default function SitemapHtmlPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">

        <h1 className="font-orbitron font-black text-4xl md:text-5xl text-[#ECFEFF] mb-12">
          Site Map
        </h1>

        <div className="space-y-10">

          {/* Main Pages */}
          <div className="glass rounded-2xl p-6">
            <h2 className="font-orbitron font-black text-lg text-cyan-400 mb-5">
              Main Pages
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {mainPages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-sm text-[#7DD3FC]/80 hover:text-white transition-colors"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Games */}
          <div className="glass rounded-2xl p-6">
            <h2 className="font-orbitron font-black text-lg text-cyan-400 mb-5">
              Games
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {gamePages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-sm text-[#7DD3FC]/80 hover:text-white transition-colors"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div className="glass rounded-2xl p-6">
            <h2 className="font-orbitron font-black text-lg text-cyan-400 mb-5">
              Blog
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {blogSlugs.map(({ label, slug }) => (
                <li key={slug}>
                  <Link
                    href={`/blog/${slug}`}
                    className="text-sm text-[#7DD3FC]/80 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="glass rounded-2xl p-6">
            <h2 className="font-orbitron font-black text-lg text-cyan-400 mb-5">
              Legal
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {legalPages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-sm text-[#7DD3FC]/80 hover:text-white transition-colors"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
