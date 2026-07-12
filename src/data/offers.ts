import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/offers/*.jpg',
  { eager: true }
);

function img(slug: string): ImageMetadata {
  const match = images[`../assets/offers/${slug}.jpg`];
  if (!match) throw new Error(`Angebotsbild fehlt: ${slug}`);
  return match.default;
}

export interface Offer {
  name: string;
  slug: string;
  /** Eigene Detailseite unter /angebot/[slug]; Schnuppertraining verlinkt auf /probetraining */
  href: string;
  desc: string;
  image: ImageMetadata;
}

export const OFFERS: Offer[] = [
  {
    name: 'Brazilian Jiu Jitsu',
    slug: 'brazilian-jiu-jitsu',
    href: '/angebot/brazilian-jiu-jitsu',
    desc: 'Bodenkampf-Spezialist. Technik, Hebel und Kontrolle besiegen Stärke.',
    image: img('brazilian-jiu-jitsu'),
  },
  {
    name: 'MMA',
    slug: 'mma',
    href: '/angebot/mma',
    desc: 'Mixed Martial Arts — die komplette Kampfkunst: Schlagen, Werfen, Bodenkampf.',
    image: img('mma'),
  },
  {
    name: 'Thaiboxen',
    slug: 'thaiboxen',
    href: '/angebot/thaiboxen',
    desc: 'Muay Thai — die Kunst der acht Gliedmaßen.',
    image: img('thaiboxen'),
  },
  {
    name: 'BJJ & Kickboxen Frauen',
    slug: 'bjj-frauen',
    href: '/angebot/bjj-frauen',
    desc: 'Brazilian Jiu Jitsu speziell für Frauen – Technik, Selbstverteidigung und Empowerment in einer starken Gemeinschaft.',
    image: img('bjj-frauen'),
  },
  {
    name: 'Grappling / NoGi',
    slug: 'grappling-nogi',
    href: '/angebot/grappling-nogi',
    desc: 'Kampfsport ohne Gi. Würfe, Kontrolle und Submissions.',
    image: img('grappling-nogi'),
  },
  {
    name: 'Kindertraining BJJ',
    slug: 'kindertraining-bjj',
    href: '/angebot/kindertraining-bjj',
    desc: 'Spielerisch Selbstbewusstsein, Respekt und Disziplin.',
    image: img('kindertraining-bjj'),
  },
  {
    name: 'Kindertraining Kickboxen',
    slug: 'kindertraining-kickboxen',
    href: '/angebot/kindertraining-kickboxen',
    desc: 'Koordination, Fitness und Selbstsicherheit.',
    image: img('kindertraining-kickboxen'),
  },
  {
    name: 'Schnuppertraining',
    slug: 'schnuppertraining',
    href: '/probetraining',
    desc: 'Kostenloses Probetraining für alle.',
    image: img('schnuppertraining'),
  },
];
