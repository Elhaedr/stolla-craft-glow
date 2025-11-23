import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Welche Regionen bedienen Sie?",
    answer:
      "Standort Belp · Einsatzgebiet: Grossraum Kanton Bern",
  },
  {
    question: "Wie schnell können Sie starten?",
    answer:
      "In der Regel kann ich zeitnah beginnen. Kleine Arbeiten oft noch in derselben Woche, je nach Auftragslage sogar früher.",
  },
  {
    question: "Bieten Sie auch Notfalleinsätze an?",
    answer:
      "Je nach Verfügbarkeit bin ich kurzfristig für dringende Reparaturen oder sichere provisorische Lösungen im Einsatz. Einfach telefonisch melden – ich reagiere so schnell wie möglich.",
  },
  {
    question: "Wie erfolgt die Preisgestaltung?",
    answer:
      "Meine Preisgestaltung ist transparent, nachvollziehbar und fair. Abgerechnet wird nach Stundensatz, zuzüglich Anfahrt und – falls nötig – Materialkosten. Für kleine Arbeiten gibt es klare Pauschalen, damit Sie schon vorab wissen, womit Sie rechnen können.",
  },
  {
    question: "Sind Sie versichert?",
    answer:
      "Ich bin über eine Betriebshaftpflichtversicherung der Zurich versichert, mit einer Deckung von CHF 5 Mio. pro Ereignis.",
  },
  {
    question: "Übernehmen Sie auch kleine Aufträge?",
    answer:
      "Ja, auch kleine Aufträge werden von mir zuverlässig und sauber ausgeführt. Für mich zählt die Qualität, nicht die Grösse des Projekts.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-muted/30" itemScope itemType="https://schema.org/FAQPage">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Häufige Fragen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Alles, was Sie wissen müssen – transparent und ehrlich
          </p>
        </header>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <article
              key={index}
              className="bg-card rounded-lg border-2 border-border overflow-hidden hover:border-accent/50 transition-colors duration-300"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors duration-200"
              >
                <span className="text-lg font-bold text-foreground pr-4" itemProp="name">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-accent flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className="px-6 pb-5 text-muted-foreground border-l-4 border-accent ml-6" itemProp="text">
                  {faq.answer}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
