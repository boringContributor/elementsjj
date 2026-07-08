/**
 * Stundenplan — Rohdaten als einzige Quelle der Wahrheit.
 * Alle Ansichten (Stundenplan-Seite, Startseiten-Übersicht) werden daraus abgeleitet.
 */

export type Track = 'Blue' | 'Red';

export interface ClassSession {
  track: Track;
  day: string;
  start: string;
  end: string;
  discipline: string;
  level: string | null;
}

export const SESSIONS: ClassSession[] = [
  { track: 'Red', day: 'Monday', start: '17:30', end: '18:30', discipline: 'Brazilian Jiu Jitsu', level: 'Advanced' },
  { track: 'Red', day: 'Monday', start: '18:30', end: '20:00', discipline: 'MMA', level: 'All Levels' },
  { track: 'Red', day: 'Monday', start: '20:00', end: '21:00', discipline: 'Thaiboxen', level: 'Fundamentals' },
  { track: 'Red', day: 'Tuesday', start: '17:30', end: '19:00', discipline: 'Grappling', level: 'Advanced' },
  { track: 'Red', day: 'Tuesday', start: '19:15', end: '20:45', discipline: 'MMA', level: 'All Levels' },
  { track: 'Red', day: 'Wednesday', start: '17:00', end: '18:00', discipline: 'MMA', level: 'All Levels' },
  { track: 'Red', day: 'Wednesday', start: '18:00', end: '19:30', discipline: 'Frauen Kickboxen', level: null },
  { track: 'Red', day: 'Wednesday', start: '19:45', end: '21:15', discipline: 'Thaiboxen', level: 'Advanced' },
  { track: 'Red', day: 'Thursday', start: '17:30', end: '19:00', discipline: 'Grappling', level: 'Advanced' },
  { track: 'Red', day: 'Thursday', start: '19:00', end: '20:30', discipline: 'Frauen Brazilian Jiu Jitsu', level: null },
  { track: 'Red', day: 'Friday', start: '17:30', end: '19:00', discipline: 'MMA', level: 'All Levels' },
  { track: 'Red', day: 'Friday', start: '19:00', end: '20:00', discipline: 'Thaiboxen', level: 'Competition' },
  { track: 'Red', day: 'Saturday', start: '13:30', end: '15:00', discipline: 'MMA', level: 'All Levels' },

  { track: 'Blue', day: 'Monday', start: '08:30', end: '09:30', discipline: 'Grappling', level: 'Fundamentals' },
  { track: 'Blue', day: 'Monday', start: '15:30', end: '16:15', discipline: 'Youngling Brazilian Jiu Jitsu', level: null },
  { track: 'Blue', day: 'Monday', start: '16:30', end: '17:30', discipline: 'Padawan Brazilian Jiu Jitsu', level: null },
  { track: 'Blue', day: 'Monday', start: '17:30', end: '19:00', discipline: 'Frauen Grappling', level: null },
  { track: 'Blue', day: 'Monday', start: '19:00', end: '20:30', discipline: 'Brazilian Jiu Jitsu', level: 'All Levels' },
  { track: 'Blue', day: 'Tuesday', start: '08:30', end: '09:30', discipline: 'Brazilian Jiu Jitsu', level: 'Fundamentals' },
  { track: 'Blue', day: 'Tuesday', start: '09:30', end: '10:30', discipline: 'Thaiboxen', level: 'Fundamentals' },
  { track: 'Blue', day: 'Tuesday', start: '17:30', end: '19:00', discipline: 'Thaiboxen', level: 'Competition' },
  { track: 'Blue', day: 'Tuesday', start: '19:00', end: '20:00', discipline: 'Thaiboxen I', level: 'Fundamentals' },
  { track: 'Blue', day: 'Tuesday', start: '20:00', end: '21:00', discipline: 'Thaiboxen II', level: 'Fundamentals' },
  { track: 'Blue', day: 'Wednesday', start: '07:30', end: '08:30', discipline: 'Brazilian Jiu Jitsu', level: 'Fundamentals' },
  { track: 'Blue', day: 'Wednesday', start: '09:30', end: '10:30', discipline: 'Thaiboxen', level: 'Fundamentals' },
  { track: 'Blue', day: 'Wednesday', start: '16:30', end: '17:30', discipline: 'Padawan Kickboxen', level: null },
  { track: 'Blue', day: 'Wednesday', start: '18:00', end: '19:30', discipline: 'Grappling', level: 'All Levels' },
  { track: 'Blue', day: 'Wednesday', start: '19:30', end: '21:00', discipline: 'Brazilian Jiu Jitsu', level: 'All Levels' },
  { track: 'Blue', day: 'Thursday', start: '08:30', end: '09:30', discipline: 'Brazilian Jiu Jitsu', level: 'Fundamentals' },
  { track: 'Blue', day: 'Thursday', start: '09:30', end: '10:30', discipline: 'Thaiboxen', level: 'Fundamentals' },
  { track: 'Blue', day: 'Thursday', start: '16:30', end: '17:30', discipline: 'Padawan Brazilian Jiu Jitsu', level: null },
  { track: 'Blue', day: 'Thursday', start: '17:30', end: '19:00', discipline: 'Brazilian Jiu Jitsu', level: 'Fundamentals' },
  { track: 'Blue', day: 'Thursday', start: '19:00', end: '20:00', discipline: 'Thaiboxen', level: 'Fundamentals' },
  { track: 'Blue', day: 'Thursday', start: '20:00', end: '21:30', discipline: 'Thaiboxen', level: 'Advanced' },
  { track: 'Blue', day: 'Friday', start: '08:30', end: '09:30', discipline: 'Grappling', level: 'Fundamentals' },
  { track: 'Blue', day: 'Friday', start: '09:30', end: '10:30', discipline: 'Thaiboxen', level: 'Fundamentals' },
  { track: 'Blue', day: 'Friday', start: '15:30', end: '16:15', discipline: 'Youngling Kickboxen', level: null },
  { track: 'Blue', day: 'Friday', start: '16:30', end: '17:30', discipline: 'Padawan Kickboxen', level: null },
  { track: 'Blue', day: 'Friday', start: '17:30', end: '19:00', discipline: 'Grappling', level: 'All Levels' },
  { track: 'Blue', day: 'Friday', start: '19:00', end: '20:30', discipline: 'Brazilian Jiu Jitsu', level: 'All Levels' },
  { track: 'Blue', day: 'Saturday', start: '10:00', end: '11:00', discipline: 'Fitness', level: null },
  { track: 'Blue', day: 'Saturday', start: '11:00', end: '13:00', discipline: 'Open Mat', level: null },
  { track: 'Blue', day: 'Saturday', start: '13:15', end: '14:45', discipline: 'Thaiboxen', level: 'All Levels' },
  { track: 'Blue', day: 'Sunday', start: '10:30', end: '12:00', discipline: 'Thaiboxen', level: 'All Levels' },
  { track: 'Blue', day: 'Sunday', start: '16:00', end: '18:00', discipline: 'Brazilian Jiu Jitsu', level: 'Competition' },
];

const DAY_ORDER = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const DAYS_DE: Record<string, string> = {
  Monday: 'Montag',
  Tuesday: 'Dienstag',
  Wednesday: 'Mittwoch',
  Thursday: 'Donnerstag',
  Friday: 'Freitag',
  Saturday: 'Samstag',
  Sunday: 'Sonntag',
};
const DAYS_DE_SHORT: Record<string, string> = {
  Monday: 'MO',
  Tuesday: 'DI',
  Wednesday: 'MI',
  Thursday: 'DO',
  Friday: 'FR',
  Saturday: 'SA',
  Sunday: 'SO',
};

/** Kinderklassen erkennen und Altersgruppe ausweisen */
function kidsTag(discipline: string): string | undefined {
  if (discipline.startsWith('Youngling')) return 'Kids 4–7';
  if (discipline.startsWith('Padawan')) return 'Kids 7–12';
  return undefined;
}

function toMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return (hours ?? 0) * 60 + (minutes ?? 0);
}

function overlaps(a: ClassSession, b: ClassSession): boolean {
  return toMinutes(a.start) < toMinutes(b.end) && toMinutes(b.start) < toMinutes(a.end);
}

export interface ScheduleSlot {
  time: string;
  name: string;
  kids?: string | undefined;
  parallel: boolean;
}

export interface ScheduleDay {
  day: string;
  slots: ScheduleSlot[];
}

export interface GymSchedule {
  id: string;
  label: string;
  schedule: ScheduleDay[];
}

const TRACKS: { track: Track; id: string; label: string }[] = [
  { track: 'Blue', id: 'blue', label: 'Blue Gym' },
  { track: 'Red', id: 'red', label: 'Red Gym' },
];

function sessionsFor(track: Track, day: string): ClassSession[] {
  return SESSIONS.filter((session) => session.track === track && session.day === day).sort(
    (a, b) => toMinutes(a.start) - toMinutes(b.start)
  );
}

export const GYMS: GymSchedule[] = TRACKS.map(({ track, id, label }) => ({
  id,
  label,
  schedule: DAY_ORDER.map((day) => {
    const sessions = sessionsFor(track, day);
    return {
      day: DAYS_DE[day]!,
      slots: sessions.map((session) => ({
        time: `${session.start} – ${session.end}`,
        name: session.level ? `${session.discipline} – ${session.level}` : session.discipline,
        kids: kidsTag(session.discipline),
        parallel: sessions.some((other) => other !== session && overlaps(session, other)),
      })),
    };
  }).filter((day) => day.slots.length > 0),
}));

/** Kompakte Wochenübersicht für die Startseite, aus den Rohdaten abgeleitet. */
function shortName(session: ClassSession): string {
  let name = session.discipline.replace('Brazilian Jiu Jitsu', 'BJJ');
  if (session.level === 'Advanced' || session.level === 'Competition') {
    name += ` ${session.level}`;
  }
  return name;
}

export const HOME_SCHEDULE_SUMMARY = TRACKS.map(({ track }) => ({
  location: `Regensburg — ${track}`,
  accent: track.toLowerCase() as 'blue' | 'red',
  days: DAY_ORDER.flatMap((day) => {
    const sessions = sessionsFor(track, day);
    if (sessions.length === 0) return [];
    const names = [...new Set(sessions.map(shortName))];
    return [[DAYS_DE_SHORT[day]!, names.join(' · ')] as [string, string]];
  }),
}));
