import { Zap, Lightbulb, Settings, Wrench, Home, Cable } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Zap,
    title: "Elektroinstallationen",
    items: [
      "Steckdosen & Schalter installieren / erneuern",
      "Leitungen ziehen (AP/UP)",
      "Erweiterungen von Stromkreisen",
    ],
  },
  {
    icon: Lightbulb,
    title: "Lichtinstallationen",
    items: [
      "Neue Endstromkreise erstellen",
      "Installation von Gerätezuleitungen",
      "Herd, Backofen, Boiler, Waschmaschine etc. fix anschliessen",
    ],
  },
  {
    icon: Settings,
    title: "Verteilungen & Sicherungskasten",
    items: [
      "Sicherungen ersetzen",
      "FI/RCD nachrüsten",
      "Verteiler umbauen",
      "Beschriftung erneuern",
    ],
  },
  {
    icon: Cable,
    title: "Beleuchtung",
    items: [
      "Innen- & Aussenbeleuchtung",
      "LED-Umrüstung",
      "Lampenmontage",
    ],
  },
  {
    icon: Home,
    title: "Wohnungs- & Hausinstallationen",
    items: [
      "Neuinstallationen",
      "Umbauten",
      "Renovationen",
      "Sanierungen",
    ],
  },
  {
    icon: Wrench,
    title: "Service & Reparaturen",
    items: [
      "Störungen beheben",
      "Fehlerstrom & Kurzschlüsse",
      "Geräteanschluss",
      "Modernisierungen",
    ],
  },
];

const Services = () => {
  return (
    <section id="leistungen" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Leistungen Elektro
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-4">
              Ich übernehme Montage, Vorinstallation, Reparaturen und Erweiterungen.
            </p>
            <p className="text-lg text-muted-foreground">
              Wo ein konzessionierter Abschluss nötig ist, erfolgt dieser über meinen Partner 
              <span className="font-semibold text-foreground"> KFK Frutigen</span> – inklusive rechtsgültigem Sicherheitsnachweis.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-2 text-muted-foreground">
                      <span className="text-primary shrink-0 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-primary text-white hover:bg-accent hover:text-dark" asChild>
            <a href="/#kalender">Jetzt Angebot anfordern</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;