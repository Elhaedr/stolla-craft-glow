import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Zap, Lightbulb, Settings, Wrench, Home, Cable, CheckCircle } from "lucide-react";
import installationenImg from "@/assets/installationen.jpg";

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
      "Messungen und Fehlersuche",
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

const Elektro = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pb-20">
        <section className="relative h-[400px] overflow-hidden">
          <img
            src={installationenImg}
            alt="Leistungen Elektro - Professionelle Elektroinstallationen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Leistungen Elektro
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Professionelle Elektroinstallationen, Reparaturen und Modernisierungen
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-accent/10 rounded-lg p-8 mb-12">
              <p className="text-lg text-muted-foreground mb-4">
                Ich übernehme Montage, Vorinstallation, Reparaturen und Erweiterungen.
              </p>
              <p className="text-lg text-muted-foreground">
                Wo ein konzessionierter Abschluss nötig ist, erfolgt dieser über meinen Partner{" "}
                <span className="font-semibold text-foreground">KFK Frutigen</span> – inklusive rechtsgültigem Sicherheitsnachweis.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-8">Unsere Elektro-Leistungen</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-card rounded-lg p-6 shadow-md border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex gap-2 text-muted-foreground">
                          <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="bg-accent/10 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Warum 1A Stolla für Ihre Elektroarbeiten?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Fachgerechte Ausführung nach aktuellen Normen
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Zuverlässiger Service und schnelle Reaktionszeiten
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Konzessionierter Abschluss über Partner KFK Frutigen
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Faire Preise und transparente Kostenvoranschläge
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-primary text-white hover:bg-accent hover:text-dark" asChild>
                <a href="/#kalender">Jetzt Angebot anfordern</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Elektro;