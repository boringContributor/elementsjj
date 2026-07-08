export const SITE = {
  name: 'Elements Jiu Jitsu Regensburg',
  shortName: 'Elements Jiu Jitsu',
  abbreviation: 'EJJ',
  foundingYear: 2018,
  tagline: 'Kampfsport. Disziplin. Fortschritt.',
  description:
    'Brazilian Jiu-Jitsu, MMA, Thaiboxen & Grappling in Regensburg. Kostenloses Probetraining bei EJJ — Kampfsport. Disziplin. Fortschritt.',
  phone: '+49 171 7864061',
  phoneHref: 'tel:+491717864061',
  email: 'info@elementsjj.de',
  address: {
    street: 'D.-Martin-Luther-Str. 14',
    zip: '93047',
    city: 'Regensburg',
    country: 'DE',
  },
  social: {
    instagram: 'https://instagram.com/elementsjj',
    facebook: 'https://facebook.com',
    smoothcomp: 'https://smoothcomp.com',
  },
  shopUrl: 'https://chokeandchill.com/de',
  matoolFormUrl: 'https://ext.matool.de/ptformdyn/?hash=1efa6cdbbca0a677',
  whatsapp: {
    base: 'https://wa.me/491717864061',
    kindergeburtstag:
      'https://wa.me/491717864061?text=Hallo,%20ich%20möchte%20einen%20Kindergeburtstag%20anfragen!',
    seminar:
      'https://wa.me/491717864061?text=Hallo,%20ich%20interessiere%20mich%20für%20ein%20Seminar!',
    privatstunde:
      'https://wa.me/491717864061?text=Hallo,%20ich%20interessiere%20mich%20für%20eine%20Privatstunde!',
  },
} as const;

export interface Location {
  slug: string;
  name: string;
  address: string;
  street: string;
  zip: string;
  city: string;
  coords: [number, number];
  accent: 'blue' | 'gold' | 'red';
}

export const LOCATIONS: Location[] = [
  {
    slug: 'blue',
    name: 'Regensburg — Blue',
    address: 'D.-Martin-Luther-Str. 14, 93047 Regensburg',
    street: 'D.-Martin-Luther-Str. 14',
    zip: '93047',
    city: 'Regensburg',
    coords: [49.0151, 12.1012],
    accent: 'blue',
  },
  {
    slug: 'kelheim',
    name: 'Kelheim',
    address: 'Sportinsel, Am Pflegerspitz 1, 93309 Kelheim',
    street: 'Sportinsel, Am Pflegerspitz 1',
    zip: '93309',
    city: 'Kelheim',
    coords: [48.9142, 11.8745],
    accent: 'gold',
  },
  {
    slug: 'red',
    name: 'Regensburg — Red',
    address: 'Maximilianstr. 27, 93047 Regensburg',
    street: 'Maximilianstr. 27',
    zip: '93047',
    city: 'Regensburg',
    coords: [49.01514, 12.10033],
    accent: 'red',
  },
];
