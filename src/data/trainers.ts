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

export interface Trainer {
  name: string;
  image: ImageMetadata;
}

export const TRAINERS: Trainer[] = [
  { name: 'Maximilian Alkofer', image: img('maximilian-alkofer.jpg') },
  { name: 'Patricia Materne', image: img('patricia-materne.jpg') },
  { name: 'Henry Cuffy', image: img('henry-cuffy.jpg') },
  { name: 'Marian Bauer', image: img('marian-bauer.jpg') },
  { name: 'Ahmet Ocak', image: img('ahmet-ocak.png') },
  { name: 'Robin Hau', image: img('robin-hau.jpg') },
  { name: 'Stefan Schönhärl', image: img('stefan-schoenhaerl.jpg') },
  { name: 'Milos', image: img('milos.jpg') },
  { name: 'Blend Ajazi', image: img('blend-ajazi.png') },
  { name: 'Samuel Blöchl', image: img('samuel-bloechl.png') },
  { name: 'Adrian Caprariu', image: img('adrian-caprariu.jpg') },
  { name: 'Carla Luttmann', image: img('carla-luttmann.jpg') },
  { name: 'Flo Gmeinwieser', image: img('flo-gmeinwieser.jpg') },
  { name: 'Andreas Völkl', image: img('andreas-voelkl.png') },
  { name: 'Onur Kavucoglu', image: img('onur-kavucoglu.jpg') },
  { name: 'Niklas Jurek', image: img('niklas-jurek.png') },
  { name: 'Franziska Völkl', image: img('franziska-voelkl.jpg') },
  { name: 'Julia Radeczky', image: img('julia-radeczky.png') },
  { name: 'Arian Emini', image: img('arian-emini.png') },
  { name: 'Alexandra Hammerl', image: img('alexandra-hammerl.jpg') },
  { name: 'Maximilian Köppl', image: img('maximilian-koeppl.jpg') },
  { name: 'Lea Smolarczyk', image: img('lea-smolarczyk.jpg') },
  { name: 'Nico Sperger', image: img('nico-sperger.jpg') },
  { name: 'Stefan Kuhn', image: img('stefan-kuhn.jpg') },
  { name: 'Tilo Lützner', image: img('tilo-luetzner.jpg') },
  { name: 'Johannes Nägelsbach', image: img('johannes-naegelsbach.jpg') },
  { name: 'Jakob Penzenstadler', image: img('jakob-penzenstadler.jpg') },
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
