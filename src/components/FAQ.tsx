import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Welche Regionen bedienen Sie?",
    answer:
      "Ich bin hauptsächlich im Kanton Bern tätig. Für grössere Projekte komme ich auch in angrenzende Regionen. Kontaktieren Sie mich gerne für eine Abklärung.",
  },
  {
    question: "Wie schnell können Sie starten?",
    answer:
      "Bei Notfällen bin ich in der Regel innerhalb von 24 Stunden vor Ort. Für geplante Projekte vereinbaren wir gemeinsam einen passenden Termin – oft bereits innerhalb weniger Tage.",
  },
  {
    question: "Bieten Sie auch Notfalleinsätze an?",
    answer:
      "Ja, ich bin für dringende Reparaturen und Notfälle erreichbar. Rufen Sie mich direkt an unter +41 79 650 91 17, und wir finden eine schnelle Lösung.",
  },
  {
    question: "Wie erfolgt die Preisgestaltung?",
    answer:
      "Nach einer kostenlosen Besichtigung erhalten Sie eine detaillierte Offerte. Ich arbeite transparent – keine versteckten Kosten, faire Preise. Bei kleineren Arbeiten rechne ich nach Aufwand ab.",
  },
  {
    question: "Sind Sie versichert?",
    answer:
      "Ja, ich bin vollständig haftpflichtversichert. Ihre Sicherheit und die meiner Arbeit haben höchste Priorität.",
  },
  {
    question: "Übernehmen Sie auch kleine Aufträge?",
    answer:
      "Absolut! Ob kleine Reparatur oder grosses Renovationsprojekt – jeder Auftrag ist mir wichtig. Ich nehme mir für jedes Anliegen die nötige Zeit.",
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
