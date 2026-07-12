import type { ImageMetadata } from 'astro';
import { SITE } from './site';

const images = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/specials/*.jpg',
  { eager: true }
);

function img(file: string): ImageMetadata {
  const match = images[`../assets/specials/${file}.jpg`];
  if (!match) throw new Error(`Special-Bild fehlt: ${file}`);
  return match.default;
}

export interface Special {
  slug: string;
  name: string;
  /** Zeilenumbruch-Hinweis für lange Titel auf der Detailseite */
  desc: string;
  image: ImageMetadata;
  /** SEO */
  title: string;
  metaDescription: string;
  /** Fließtext-Absätze der Detailseite */
  intro: string[];
  audienceHeading: string;
  audienceIntro: string;
  audienceItems: string[];
  processIntro: string[];
  processItems: string[];
  termine: string[];
  scheduleLink?: boolean;
  cta: { label: string };
  locationLabel?: string;
}


export const SPECIALS: Special[] = [
  {
    slug: 'kampfsport-kindergeburtstag',
    name: 'Kampfsport-Kindergeburtstag',
    desc: 'Unvergessliche 3 Stunden Action auf der Matte – exklusives Training und coole Spiele mit Freunden.',
    image: img('kindergeburtstag'),
    title: 'Kampfsport-Kindergeburtstag in Regensburg — EJJ',
    metaDescription:
      'Unvergesslicher Kampfsport-Kindergeburtstag in Regensburg: 3 Stunden exklusiv auf der Matte, altersgerechte Spiele, Technik & Teambuilding. Jetzt anfragen.',
    intro: [
      'Ein Kindergeburtstag bei Elements Jiu Jitsu in Regensburg ist mehr als nur eine Feier – er ist ein echtes Erlebnis. Drei Stunden lang gehört unsere Matte exklusiv dem Geburtstagskind und seinen Freundinnen und Freunden. Unter professioneller Anleitung unserer Trainer dürfen die Kinder spielerisch in die Welt von Brazilian Jiu-Jitsu, Kickboxen, Grappling und kindgerechter Selbstverteidigung eintauchen.',
      'Das Programm ist altersgerecht aufgebaut und wechselt zwischen aktiven Spielen, Technik-Stationen, Teambuilding-Aufgaben und freier Bewegung. So bleibt es während des gesamten Geburtstags abwechslungsreich, spannend und kein Kind wird über- oder unterfordert. Eltern, die einen sportlichen, sicheren und gleichzeitig coolen Geburtstag in Regensburg suchen, finden bei uns genau das richtige Format.',
      'Im Vordergrund stehen Spaß, Bewegung und das gemeinsame Erlebnis. Ganz nebenbei lernen die Kinder Respekt, Disziplin und ein gesundes Selbstvertrauen kennen – Werte, die wir in jedem unserer Kurse leben.',
    ],
    audienceHeading: 'Für wen ist der Kampfsport-Geburtstag geeignet?',
    audienceIntro:
      'Unser Geburtstags-Special ist für Kinder im Alter von 4 bis 12 Jahren konzipiert. Vorkenntnisse im Kampfsport sind nicht nötig – wir holen jedes Kind genau dort ab, wo es steht. Das Programm wird flexibel an die Gruppe angepasst, damit jüngere Kinder genauso ihren Spaß haben wie ältere.',
    audienceItems: [
      'Younglings (4–7 Jahre): spielerischer Einstieg, Bewegung, Koordination und einfache Bodenkampf-Spiele.',
      'Padawans (7–12 Jahre): mehr Technik, kleine Selbstverteidigungs-Drills, Teamspiele und kontrolliertes Kräftemessen.',
      'Geeignet für gemischte Gruppen aus Jungs und Mädchen.',
      'Empfohlene Gruppengröße: ca. 6 bis 12 Kinder.',
    ],
    processIntro: [
      'Ein typischer Geburtstag dauert ca. 3 Stunden: Begrüßung & Aufwärmen, Technik-Block mit Spielen, freie Bewegungs- und Teamspiele auf der Matte, kurze Pause für Kuchen oder Snacks (mitgebracht) und ein gemeinsames Abschluss-Spiel. Auf Wunsch erhält das Geburtstagskind eine kleine Überraschung.',
      'Ausrüstung wird keine benötigt – bequeme Sportkleidung reicht völlig aus. Geschlossene Hallen-Schuhe für den Hin- und Rückweg, lange Haare bitte zusammenbinden. Schmuck wird vor dem Training abgelegt.',
    ],
    processItems: [
      'Dauer: ca. 3 Stunden exklusiv auf der Matte.',
      'Standort: Regensburg, je nach Verfügbarkeit.',
      'Mitzubringen: Sportkleidung, Getränke und ggf. Kuchen/Snacks.',
      'Buchung: einfach per WhatsApp anfragen, freie Termine werden direkt durchgegeben.',
    ],
    termine: ['Termine nach individueller Vereinbarung.'],
    cta: { label: 'Jetzt Anfrage senden' },
    locationLabel: 'Regensburg',
  },
  {
    slug: 'seminare-workshops',
    name: 'Seminare & Workshops',
    desc: 'Exklusive Intensiv-Seminare in BJJ, MMA, Thaiboxen und Selbstverteidigung mit maximalem Praxisbezug.',
    image: img('seminare'),
    title: 'Seminare & Workshops in Regensburg & Kelheim — EJJ',
    metaDescription:
      'BJJ-, MMA-, Muay-Thai- und Selbstverteidigungs-Seminare in Regensburg & Kelheim. Inkl. Corporate Fitness und Teambuilding für Firmen.',
    intro: [
      'In unseren Seminaren und Workshops in Regensburg und Kelheim geben wir komprimiertes Kampfsport-Wissen weiter, das wir in über zehn Jahren aktiver Trainings- und Wettkampfpraxis gesammelt haben. Ob Brazilian Jiu-Jitsu, No-Gi/Grappling, MMA, Muay Thai oder gezielte Selbstverteidigung – jedes Format ist intensiv, praxisnah und auf konkrete Lernziele ausgerichtet.',
      'Seminare sind ideal, wenn du in kurzer Zeit einen echten Sprung in deinem Können machen möchtest. In der Regel arbeiten wir an einem klaren Themenkomplex (z. B. „Half Guard von A bis Z", „Clinch im Muay Thai" oder „Selbstverteidigung für Frauen"), den wir Schritt für Schritt aufbauen, drillen und live anwenden.',
      'Unsere Workshops richten sich an Mitglieder, Gäste aus anderen Schulen sowie Einsteigerinnen und Einsteiger ohne Vorerfahrung. Termine werden in unseren Kanälen angekündigt – auf Wunsch organisieren wir auch geschlossene Seminare für Gruppen, Vereine oder Firmen.',
    ],
    audienceHeading: 'Für wen sind unsere Seminare gedacht?',
    audienceIntro:
      'Die meisten unserer Seminare sind so aufgebaut, dass sowohl Anfänger als auch Fortgeschrittene profitieren. Wir trennen bei Bedarf in Levels und stellen sicher, dass jeder Teilnehmer aktiv mitarbeiten kann.',
    audienceItems: [
      'Kampfsportler, die ein bestimmtes Thema vertiefen wollen.',
      'Einsteiger, die in einem kompakten Format reinschnuppern möchten.',
      'Frauen, die gezielt Selbstverteidigung lernen wollen.',
      'Gruppen, Vereine, Firmen und private Anlässe (geschlossene Seminare).',
    ],
    processIntro: [
      'Ein typisches Seminar dauert etwa drei Stunden und folgt einem klaren Aufbau: Warm-up, Technikteil mit detaillierten Erklärungen, Drilling, Live-Anwendung im sicheren Rahmen, Cool-down mit Mobility/Yoga sowie eine offene Q&A-Runde am Ende.',
      'Die benötigte Ausrüstung hängt vom Thema ab: BJJ-Gi (Kimono) oder Rashguard/Shorts für No-Gi, Boxhandschuhe und Schienbeinschoner für Stand-up. Falls du etwas nicht hast – sag einfach Bescheid, wir finden eine Lösung.',
    ],
    processItems: [
      'Dauer: i. d. R. ca. 3 Stunden pro Seminar.',
      'Format: offene Termine oder geschlossene Buchungen.',
      'Teilnehmer: kleine Gruppen für viel persönliches Feedback.',
      'Anfragen: einfach per WhatsApp oder über das Kontaktformular.',
    ],
    termine: ['Termine nach individueller Vereinbarung.'],
    cta: { label: 'Jetzt Anfrage senden' },
  },
  {
    slug: 'privatstunden-personal-training',
    name: 'Privatstunden / Personal Training',
    desc: 'Individuelles 1-zu-1 Training für maximalen technischen Fortschritt und flexible Terminplanung.',
    image: img('privatstunden'),
    title: 'Privatstunden & Personal Training in Regensburg & Kelheim — EJJ',
    metaDescription:
      '1-zu-1 Personal Training in BJJ, MMA, Muay Thai und Selbstverteidigung in Regensburg & Kelheim. Individuelle Termine und maximaler Fortschritt.',
    intro: [
      'Privatstunden bei Elements Jiu Jitsu sind die schnellste Möglichkeit, dein Können auf das nächste Level zu bringen. In einem 1-zu-1-Setting arbeiten wir genau an deinen Themen – ohne Kompromisse, ohne Wartezeit und in einem Tempo, das exakt zu dir passt. Egal ob du absoluter Anfänger bist, dich auf einen Wettkampf vorbereitest oder eine bestimmte Position auseinandernehmen willst.',
      'Wir buchen Privatstunden flexibel in den Bereichen BJJ (Gi & No-Gi), Grappling, MMA, Muay Thai/Kickboxen, Boxen, Fitness sowie Selbstverteidigung. Auch Paar- oder Kleingruppen-Trainings (2–4 Personen) sind möglich, wenn ihr lieber gemeinsam trainieren möchtet.',
      'Jede Einheit basiert auf einem klaren Konzept. Wir analysieren deinen aktuellen Stand, definieren konkrete Lernziele und bauen darauf ein Trainingsprogramm auf. Im Anschluss erhältst du auf Wunsch ein digitales Handout mit den behandelten Techniken, damit du das Gelernte zwischen den Stunden wiederholen und festigen kannst.',
    ],
    audienceHeading: 'Für wen ist Personal Training sinnvoll?',
    audienceIntro:
      'Personal Training lohnt sich besonders, wenn du strukturiert vorankommen möchtest oder feste Zeiten in regulären Klassen schwer einplanen kannst.',
    audienceItems: [
      'Einsteiger, die ohne Hemmschwelle starten möchten.',
      'Fortgeschrittene mit klaren technischen Baustellen.',
      'Wettkämpfer, die gezielt auf ein Turnier hinarbeiten.',
      'Berufstätige mit unregelmäßigen Arbeitszeiten.',
      'Frauen und Männer, die Selbstverteidigung diskret lernen wollen.',
    ],
    processIntro: [
      'Eine Einheit dauert standardmäßig 60 oder 90 Minuten. Wir starten mit einem kurzen Briefing, dann folgt ein gezieltes Warm-up, der Technik- und Anwendungsteil sowie ein Cool-down. Auf Wunsch nehmen wir kurze Videos zur Bewegungsanalyse auf.',
      'Die nötige Ausrüstung hängt vom Trainingsfokus ab – wir besprechen das im Vorfeld. Für reine Selbstverteidigungs- oder Fitness-Einheiten reicht meist normale Sportkleidung.',
    ],
    processItems: [
      'Dauer: 60 oder 90 Minuten pro Einheit.',
      'Buchbar als Einzelstunden oder als Paket (z. B. 5er- oder 10er-Block).',
      'Standort: Regensburg Blue, Regensburg Red oder Kelheim.',
      'Termine flexibel nach Absprache – auch vormittags möglich.',
    ],
    termine: ['Termine nach individueller Vereinbarung.'],
    cta: { label: 'Jetzt Anfrage senden' },
  },
  {
    slug: 'fitness-kondition',
    name: 'Fitness & Kondition',
    desc: 'Ganzheitliches Kraft- und Ausdauertraining, speziell optimiert für die Anforderungen im Kampfsport.',
    image: img('fitness'),
    title: 'Fitness & Kondition für Kampfsport in Regensburg & Kelheim — EJJ',
    metaDescription:
      'Funktionelles Kraft-, Kondi- und HIIT-Training für Kampfsportler in Regensburg. Samstags im Blue Gym – auch ohne Vorkenntnisse.',
    intro: [
      'Fitness & Kondition ist bei Elements Jiu Jitsu kein „Beiwerk", sondern ein eigenständiges Trainingsformat, das speziell auf die Anforderungen von Kampfsportlern zugeschnitten ist. Du bekommst die Mischung, die du wirklich brauchst: funktionelle Kraft, explosive Schnelligkeit, anaerobe Ausdauer, eine starke Rumpfmuskulatur und gezielte Mobility-Arbeit – alles in einem Workout.',
      'Das Training kombiniert Übungen wie Kniebeugen, Klimmzüge, Kettlebell-Komplexe, Sprung- und Sprintvarianten mit hochintensiven Intervalleinheiten (HIIT). So baust du nicht nur Muskeln auf, sondern verbesserst ganz konkret deine Leistung auf der Matte, im Ring und im Käfig.',
      'Auch wenn du (noch) keinen Kampfsport machst, ist unser Fitness-Format eine starke Wahl. Du trainierst in einer motivierten Gruppe, lernst saubere Technik und entwickelst eine Grundfitness, mit der dir der Einstieg in BJJ, MMA oder Muay Thai später deutlich leichter fällt.',
    ],
    audienceHeading: 'Für wen ist das Fitness-Training geeignet?',
    audienceIntro:
      'Das Format ist für aktive Erwachsene jedes Levels offen – ob als reines Fitness-Workout oder als perfekte Ergänzung zu deinem Kampfsport-Training.',
    audienceItems: [
      'Kampfsportler, die ihre Athletik gezielt verbessern wollen.',
      'Einsteiger, die erst einmal Grundfitness aufbauen möchten.',
      'Frauen und Männer, die ein effektives Workout in der Gruppe suchen.',
      'Wettkämpfer in der Vorbereitungsphase.',
    ],
    processIntro: [
      'Jede Einheit folgt einem klaren Schema: dynamisches Warm-up und Mobility, Kraftblock mit sauberer Technik, hochintensives Konditionsfinish und gezieltes Cool-down. Wir achten konsequent auf saubere Ausführung und passen die Intensität bei Bedarf an dein Level an.',
      'Du brauchst lediglich bequeme Sportkleidung, Hallenschuhe und ein Handtuch. Trinkflasche nicht vergessen – es wird intensiv. Geräte und Equipment stellen wir.',
    ],
    processItems: [
      'Dauer: ca. 60 Minuten pro Einheit.',
      'Level: alle, Übungen werden skaliert.',
      'Standort: regelmäßig im Blue Gym Regensburg.',
      'Mitglieder können das Fitness-Training im Rahmen ihrer Mitgliedschaft besuchen.',
    ],
    termine: [
      'Regensburg Blue: Samstag – Fitness & Konditionstraining (siehe Stundenplan).',
      'Termine und Ausnahmen findest du immer aktuell in unserem Online-Stundenplan.',
    ],
    scheduleLink: true,
    cta: { label: 'Jetzt Probetraining vereinbaren' },
  },
  {
    slug: 'open-mat',
    name: 'Open Mat',
    desc: 'Freies Training ohne festen Ablauf – die perfekte Möglichkeit für Sparring, Technik-Drills und extra Fortschritt.',
    image: img('openmat'),
    title: 'Open Mat in Regensburg — Freies Grappling- & BJJ-Training',
    metaDescription:
      'Open Mat im Blue Gym Regensburg: freies BJJ-/No-Gi-Training, Sparring und Technik-Drills. Termine im Stundenplan.',
    intro: [
      'Bei der Open Mat handelt es sich um keine geführte Einheit. In diesem Zeitraum kann frei trainiert werden. Je nach Belieben könnt ihr mit eurem Trainingspartner Techniken üben, an eurer Fitness arbeiten, euch dehnen oder einfach nur Sparring betreiben.',
      'Wenn ihr schneller Fortschritte machen wollt und euch der reguläre Stundenplan nicht reicht, ist die Open Mat die perfekte Möglichkeit dafür.',
    ],
    audienceHeading: 'Für wen ist die Open Mat gedacht?',
    audienceIntro:
      'Die Open Mat richtet sich an alle Mitglieder und befreundete Grappler aus der Region. Vorerfahrung in BJJ oder No-Gi ist Voraussetzung, das Level selbst spielt keine Rolle – Anfänger, Fortgeschrittene und Wettkämpfer trainieren regelmäßig gemeinsam.',
    audienceItems: [
      'Alle EJJ-Mitglieder ab Anfänger-Level.',
      'Gäste aus anderen Schulen sind nach kurzer Absprache willkommen.',
      'Wettkampf-Vorbereitung mit gezieltem Sparring.',
      'Technik-Sessions zu zweit oder in kleinen Gruppen.',
    ],
    processIntro: [
      'Es gibt keinen festen Ablauf – das ist der Sinn. Du wärmst dich selbstständig auf, suchst dir Trainingspartner und arbeitest an dem, was dich gerade weiterbringt. Bring eigene Ideen, Fragen und „Probleme" aus deinem Spiel mit – genau dafür ist die Open Mat da.',
      'Ausrüstung: Gi oder Rashguard/Shorts, je nachdem ob du Gi oder No-Gi rollen willst. Handtuch, Trinkflasche und saubere Mattenhygiene sind selbstverständlich.',
    ],
    processItems: [
      'Freies Training, keine feste Anleitung.',
      'Trainer meist anwesend, aber ohne strukturierte Klasse.',
      'Standort: Blue Gym Regensburg.',
      'Im Mitgliedschaftsbeitrag enthalten.',
    ],
    termine: [
      'Regensburg Blue: Samstag – Open Mat (siehe Stundenplan).',
      'Aktuelle Zeiten und kurzfristige Änderungen findest du im Online-Stundenplan.',
    ],
    scheduleLink: true,
    cta: { label: 'Jetzt Probetraining vereinbaren' },
    locationLabel: 'Regensburg',
  },
];

export function specialWhatsAppUrl(slug: string): string {
  switch (slug) {
    case 'kampfsport-kindergeburtstag':
      return SITE.whatsapp.kindergeburtstag;
    case 'seminare-workshops':
      return SITE.whatsapp.seminar;
    case 'privatstunden-personal-training':
      return SITE.whatsapp.privatstunde;
    default:
      return SITE.whatsapp.base;
  }
}
