import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/trainers/*.{jpg,png}',
  { eager: true }
);

function img(file: string): ImageMetadata {
  const match = images[`../assets/trainers/${file}`];
  if (!match) throw new Error(`Trainerbild fehlt: ${file}`);
  return match.default;
}

export const TRAINER_TAGS = [
  'BJJ',
  'Grappling',
  'Thaiboxen',
  'Kids-BJJ',
  'Kids-Kickboxen',
  'MMA',
  'Fitness & Kondition',
  'Frauen-BJJ',
  'Frauen-Kickboxen',
  'Kelheim',
] as const;

export type TrainerTag = (typeof TRAINER_TAGS)[number];

export interface Trainer {
  name: string;
  image: ImageMetadata;
  tags: TrainerTag[];
}

export const TRAINERS: Trainer[] = [
  { name: 'Maximilian Alkofer', image: img('maximilian-alkofer.jpg'), tags: ['BJJ','Grappling','Thaiboxen','Kids-BJJ','Kids-Kickboxen','MMA','Kelheim'] },
  { name: 'Patricia Materne', image: img('patricia-materne.jpg'), tags: ['Thaiboxen'] },
  { name: 'Henry Cuffy', image: img('henry-cuffy.jpg'), tags: ['BJJ','Grappling','Kelheim'] },
  { name: 'Marian Bauer', image: img('marian-bauer.jpg'), tags: ['Grappling'] },
  { name: 'Ahmet Ocak', image: img('ahmet-ocak.png'), tags: ['Kids-BJJ','Kids-Kickboxen','BJJ','MMA'] },
  { name: 'Robin Hau', image: img('robin-hau.jpg'), tags: ['BJJ'] },
  { name: 'Stefan Schönhärl', image: img('stefan-schoenhaerl.jpg'), tags: ['MMA'] },
  { name: 'Milos Radosavljevic', image: img('milos.jpg'), tags: ['Thaiboxen'] },
  { name: 'Blend Ajazi', image: img('blend-ajazi.png'), tags: ['BJJ','Grappling','Kelheim'] },
  { name: 'Samuel Blöchl', image: img('samuel-bloechl.png'), tags: ['Kids-Kickboxen','Kids-BJJ'] },
  { name: 'Adrian Caprariu', image: img('adrian-caprariu.jpg'), tags: ['MMA'] },
  { name: 'Carla Luttmann', image: img('carla-luttmann.jpg'), tags: ['Fitness & Kondition'] },
  { name: 'Flo Gmeinwieser', image: img('flo-gmeinwieser.jpg'), tags: ['BJJ','Grappling'] },
  { name: 'Andreas Völkl', image: img('andreas-voelkl.png'), tags: ['Kids-BJJ','Kids-Kickboxen'] },
  { name: 'Onur Kavucoglu', image: img('onur-kavucoglu.jpg'), tags: ['BJJ','Grappling'] },
  { name: 'Niklas Jurek', image: img('niklas-jurek.png'), tags: ['Kids-Kickboxen','Kids-BJJ'] },
  { name: 'Franziska Völkl', image: img('franziska-voelkl.jpg'), tags: ['Kids-BJJ','Kids-Kickboxen'] },
  { name: 'Julia Radeczky', image: img('julia-radeczky.png'), tags: ['Kids-BJJ','Kids-Kickboxen'] },
  { name: 'Arian Emini', image: img('arian-emini.png'), tags: ['Kids-Kickboxen'] },
  { name: 'Alexandra Hammerl', image: img('alexandra-hammerl.jpg'), tags: ['Frauen-BJJ','BJJ','Grappling'] },
  { name: 'Maximilian Köppl', image: img('maximilian-koeppl.jpg'), tags: ['BJJ','Grappling','Kelheim'] },
  { name: 'Lea Smolarczyk', image: img('lea-smolarczyk.jpg'), tags: ['Frauen-BJJ','BJJ'] },
  { name: 'Nico Sperger', image: img('nico-sperger.jpg'), tags: ['BJJ','Grappling'] },
  { name: 'Stefan Kuhn', image: img('stefan-kuhn.jpg'), tags: ['Grappling'] },
  { name: 'Tilo Lützner', image: img('tilo-luetzner.jpg'), tags: ['BJJ','Grappling'] },
  { name: 'Johannes Nägelsbach', image: img('johannes-naegelsbach.jpg'), tags: ['Thaiboxen'] },
  { name: 'Jakob Penzenstadler', image: img('jakob-penzenstadler.jpg'), tags: ['Thaiboxen'] },
];

export const HEADCOACH = {
  name: 'Maximilian Alkofer',
  role: 'Inhaber & Headcoach',
  shortName: 'Max Alkofer',
  bio: 'Max gründete EJJ 2018 mit einer klaren Vision: Ein Ort, an dem Technik wichtiger ist als Politik, an dem jeder willkommen ist und an dem Athleten echte Fortschritte machen.',
  credentials: [
    'BJJ Blackbelt',
    'Mehrfacher Deutscher & Süddeutscher Meister',
    'Fitnesstrainer C-Lizenz',
  ],
  brand: {
    label: 'Inhaber von Choke & Chill',
    code: 'Code: MAX10 — 10% Rabatt',
    url: 'https://chokeandchill.com/de',
  },
} as const;
