export interface FaqItem {
  question: string;
  answer: string;
}

export const PROBETRAINING_FAQS: FaqItem[] = [
  {
    question: 'Brauche ich Vorerfahrung für ein Probetraining?',
    answer:
      'Nein. Unsere Kurse sind anfängerfreundlich und die Trainer erklären dir die Grundlagen Schritt für Schritt. Sag uns einfach vor der Einheit, dass du zum ersten Mal da bist.',
  },
  {
    question: 'Was soll ich zum Probetraining mitbringen?',
    answer:
      'Bequeme Sportkleidung, eine Wasserflasche, ein Handtuch sowie Hausschuhe oder Badeschlappen für Wege abseits der Matte (z. B. Umkleide) reichen aus. Für BJJ kannst du beim ersten Training ohne Gi starten; wenn ein Gi benötigt wird, helfen wir dir vor Ort weiter.',
  },
  {
    question: 'Ist das Probetraining wirklich kostenlos?',
    answer:
      'Ja, dein erstes Probetraining ist kostenlos und unverbindlich. Danach beraten wir dich gerne, welcher Kurs und welche Mitgliedschaft zu deinen Zielen passen.',
  },
  {
    question: 'Welche Einheit eignet sich am besten für Anfänger?',
    answer:
      'Du kannst grundsätzlich in jede passende Anfänger- oder reguläre Einheit einsteigen. Wenn du unsicher bist, wähle beim Probetraining deine Wunschdisziplin aus oder kontaktiere uns kurz per WhatsApp.',
  },
  {
    question: 'Kann ich auch trainieren, wenn ich nicht besonders fit bin?',
    answer:
      'Ja. Du bestimmst dein Tempo und kannst Pausen machen, wenn du sie brauchst. Viele Mitglieder starten genau deshalb mit Kampfsport: um fitter, beweglicher und selbstbewusster zu werden.',
  },
  {
    question: 'Gibt es Probetrainings für Kinder?',
    answer:
      'Ja, wir bieten Kindertraining für verschiedene Altersgruppen an. Bitte buche das Probetraining für dein Kind vorab, damit wir Alter, Standort und passende Trainingszeit einplanen können.',
  },
  {
    question: 'Müssen Eltern beim Kinder-Probetraining dabei sein?',
    answer:
      'Beim ersten Training sollte ein Erziehungsberechtigter vor Ort sein. Für Minderjährige muss vor dem Probetraining ein Haftungsausschluss unterschrieben werden.',
  },
  {
    question: 'Kann ich mehrere Sportarten ausprobieren?',
    answer:
      'Sprich uns gerne darauf an. Wir helfen dir einzuschätzen, ob BJJ, NoGi/Grappling, MMA, Thaiboxen oder Kindertraining am besten zu dir passt und wie du sinnvoll startest.',
  },
  {
    question: 'Wo findet das Training statt?',
    answer:
      'Wir trainieren in Regensburg und bieten in Kelheim Brazilian Jiu Jitsu sowie NoGi Grappling an. Die genaue Trainingszeit und den Standort findest du im Stundenplan oder direkt bei der Buchung deines Probetrainings.',
  },
  {
    question: 'Wie melde ich mich zum Probetraining an?',
    answer:
      'Am einfachsten buchst du online über die Probetraining-Seite. Wenn du vorher eine Frage hast, erreichst du uns telefonisch oder per WhatsApp.',
  },
];

export function faqJsonLd(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
