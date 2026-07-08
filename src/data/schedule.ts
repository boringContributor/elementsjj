export interface ScheduleSlot {
  time: string;
  name: string;
  audience: string;
  parallel?: boolean;
}

export interface ScheduleDay {
  day: string;
  slots: ScheduleSlot[];
}

export interface GymSchedule {
  id: 'blue' | 'red' | 'kelheim';
  label: string;
  short: string;
  schedule: ScheduleDay[];
}

const blue: ScheduleDay[] = [
  {
    day: 'Montag',
    slots: [
      { time: '08:30 – 09:30', name: 'NoGi – Fundamentals', audience: 'Alle' },
      { time: '15:30 – 16:15', name: 'Youngling – BJJ', audience: 'Kids 4–7' },
      { time: '16:30 – 17:00', name: 'Padawan – BJJ', audience: 'Kids 7–12' },
      { time: '17:30 – 19:00', name: 'NoGi – Frauen', audience: 'Frauen BJJ / Alle' },
      { time: '19:00 – 20:30', name: 'BJJ – All Levels', audience: 'Alle' },
    ],
  },
  {
    day: 'Dienstag',
    slots: [
      { time: '08:30 – 09:30', name: 'BJJ – Fundamentals', audience: 'Alle' },
      { time: '09:30 – 10:30', name: 'Thaiboxen – Fundamentals', audience: 'Alle' },
      { time: '19:00 – 20:00', name: 'Thaiboxen – Fundamentals I', audience: 'Alle' },
      { time: '20:00 – 21:00', name: 'Thaiboxen – Fundamentals II', audience: 'Alle' },
    ],
  },
  {
    day: 'Mittwoch',
    slots: [
      { time: '07:30 – 08:30', name: 'BJJ – Fundamentals', audience: 'Alle' },
      { time: '09:30 – 10:30', name: 'Thaiboxen – Fundamentals', audience: 'Alle' },
      { time: '16:30 – 17:30', name: 'Padawan – Kickboxen', audience: 'Kids 7–12' },
      { time: '18:00 – 19:30', name: 'NoGi – All Levels', audience: 'Alle' },
      { time: '19:30 – 21:00', name: 'BJJ – All Levels', audience: 'Alle' },
    ],
  },
  {
    day: 'Donnerstag',
    slots: [
      { time: '08:30 – 09:30', name: 'BJJ – Fundamentals', audience: 'Alle' },
      { time: '09:30 – 10:30', name: 'Thaiboxen – Fundamentals', audience: 'Alle' },
      { time: '16:30 – 17:00', name: 'Padawan BJJ', audience: 'Kids 7–12' },
      { time: '17:30 – 19:00', name: 'BJJ – Fundamentals', audience: 'Alle' },
      { time: '19:00 – 20:30', name: 'BJJ – Frauen', audience: 'Frauen BJJ / Alle', parallel: true },
      { time: '19:00 – 20:00', name: 'Thaiboxen – Fundamentals', audience: 'Alle', parallel: true },
      { time: '20:00 – 21:30', name: 'Thaiboxen – Advanced', audience: 'Alle' },
    ],
  },
  {
    day: 'Freitag',
    slots: [
      { time: '08:30 – 09:30', name: 'NoGi – Fundamentals', audience: 'Alle' },
      { time: '09:30 – 10:30', name: 'Thaiboxen – Fundamentals', audience: 'Alle' },
      { time: '15:30 – 16:15', name: 'Youngling – Kickboxen', audience: 'Kids 4–7' },
      { time: '16:30 – 17:30', name: 'Padawan – Kickboxen', audience: 'Kids 7–12' },
      { time: '17:30 – 19:00', name: 'NoGi – All Levels', audience: 'Alle' },
      { time: '19:00 – 20:30', name: 'BJJ – All Levels', audience: 'Alle' },
    ],
  },
  {
    day: 'Samstag',
    slots: [
      { time: '10:00 – 11:00', name: 'Fitness', audience: 'Alle' },
      { time: '11:00 – 13:00', name: 'Open Mat', audience: 'Alle' },
      { time: '13:15 – 14:45', name: 'Thaiboxen – All Levels', audience: 'Alle' },
    ],
  },
  {
    day: 'Sonntag',
    slots: [
      { time: '10:30 – 12:00', name: 'Thaiboxen – All Levels', audience: 'Alle' },
      { time: '16:00 – 18:00', name: 'BJJ – Competition', audience: 'Alle' },
    ],
  },
];

const red: ScheduleDay[] = [
  {
    day: 'Montag',
    slots: [
      { time: '17:30 – 18:00', name: 'BJJ – Advanced', audience: 'Ab Blaugurt' },
      { time: '18:30 – 20:00', name: 'MMA – All Levels', audience: 'Alle' },
      { time: '20:00 – 21:00', name: 'Thaiboxen – Fundamentals', audience: 'Alle' },
    ],
  },
  {
    day: 'Dienstag',
    slots: [
      { time: '17:30 – 19:00', name: 'K-1 Kickboxen – Competition', audience: 'Advanced', parallel: true },
      { time: '17:30 – 19:00', name: 'NoGi – Advanced', audience: 'Advanced', parallel: true },
      { time: '19:15 – 20:45', name: 'MMA – All Levels', audience: 'Alle' },
    ],
  },
  {
    day: 'Mittwoch',
    slots: [
      { time: '18:00 – 19:30', name: 'Kickboxen – Frauen', audience: 'Frauen Kickboxen / Alle' },
      { time: '19:45 – 21:15', name: 'K-1 Kickboxen – Advanced', audience: 'Advanced' },
    ],
  },
  {
    day: 'Donnerstag',
    slots: [{ time: '17:30 – 19:00', name: 'NoGi – Advanced', audience: 'Advanced' }],
  },
  {
    day: 'Freitag',
    slots: [
      { time: '17:30 – 19:00', name: 'MMA – All Levels', audience: 'Alle' },
      { time: '19:00 – 20:00', name: 'Thaiboxen – Competition', audience: 'Advanced' },
    ],
  },
  {
    day: 'Samstag',
    slots: [{ time: '13:30 – 15:00', name: 'MMA – Fundamentals', audience: 'Alle' }],
  },
  { day: 'Sonntag', slots: [] },
];

const kelheim: ScheduleDay[] = [
  { day: 'Montag', slots: [] },
  {
    day: 'Dienstag',
    slots: [
      { time: '18:45 – 19:45', name: 'BJJ – All Levels', audience: 'Alle' },
      { time: '20:00 – 21:00', name: 'NoGi – All Levels', audience: 'Alle' },
    ],
  },
  { day: 'Mittwoch', slots: [] },
  {
    day: 'Donnerstag',
    slots: [
      { time: '18:45 – 19:45', name: 'NoGi – All Levels', audience: 'Alle' },
      { time: '20:00 – 21:00', name: 'BJJ – All Levels', audience: 'Alle' },
    ],
  },
  { day: 'Freitag', slots: [] },
  { day: 'Samstag', slots: [] },
  { day: 'Sonntag', slots: [] },
];

export const GYMS: GymSchedule[] = [
  { id: 'blue', label: 'Blue Gym', short: 'Blue', schedule: blue },
  { id: 'red', label: 'Red Gym', short: 'Red', schedule: red },
  { id: 'kelheim', label: 'Kelheim', short: 'Kelheim', schedule: kelheim },
];

/** Kompakte Wochenübersicht für die Startseite (wie im Original manuell zusammengefasst). */
export const HOME_SCHEDULE_SUMMARY = [
  {
    location: 'Regensburg — Blue',
    accent: 'blue',
    days: [
      ['MO', 'NoGi · BJJ (Kids & Frauen) · BJJ All Levels'],
      ['DI', 'BJJ · Thaiboxen'],
      ['MI', 'BJJ · Thaiboxen · Padawan-Kickboxen · NoGi'],
      ['DO', 'BJJ (inkl. Frauen) · Thaiboxen'],
      ['FR', 'NoGi · Thaiboxen · Kickboxen (Kids) · BJJ All Levels'],
      ['SA', 'Fitness · Open Mat · Thaiboxen'],
      ['SO', 'Thaiboxen · BJJ Competition'],
    ],
  },
  {
    location: 'Regensburg — Red',
    accent: 'red',
    days: [
      ['MO', 'BJJ Advanced · MMA · Thaiboxen'],
      ['DI', 'K-1 Kickboxen · NoGi · MMA'],
      ['MI', 'Kickboxen (Frauen) · K-1 Kickboxen Advanced'],
      ['DO', 'NoGi Advanced'],
      ['FR', 'MMA · Thaiboxen Competition'],
      ['SA', 'MMA'],
    ],
  },
  {
    location: 'Kelheim',
    accent: 'gold',
    days: [
      ['DI', 'BJJ · NoGi'],
      ['DO', 'NoGi · BJJ'],
    ],
  },
] as const;
