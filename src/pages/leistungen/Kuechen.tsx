import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import kuechenImg from "@/assets/kuechen.jpg";

const Kuechen = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-28 pb-20">
        <section className="relative h-[400px] overflow-hidden">
          <img
            src={kuechenImg}
            alt="Küchen - Hochwertige Einbauküchen nach Maß"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Küchen
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Hochwertige Einbauküchen nach Maß – von der Planung über die Lieferung bis zur professionellen Montage
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Ihre Traumküche – Von der Planung bis zur Montage</h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground mb-6">
                Die Küche ist das Herzstück jeder Wohnung. Wir realisieren Ihre Traumküche mit modernsten 
                Materialien, durchdachtem Design und professioneller Montage – alles aus einer Hand.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Individuelle Küchenplanung</h3>
                  <p className="text-muted-foreground">
                    Maßgeschneiderte Planung nach Ihren Wünschen und räumlichen Gegebenheiten
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Hochwertige Materialien</h3>
                  <p className="text-muted-foreground">
                    Fronten, Arbeitsplatten und Beschläge in erstklassiger Qualität
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Moderne Einbaugeräte</h3>
                  <p className="text-muted-foreground">
                    Herd, Backofen, Kühlschrank und mehr von führenden Herstellern
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Professionelle Montage</h3>
                  <p className="text-muted-foreground">
                    Fachgerechter Aufbau und Anschluss aller Komponenten
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Beleuchtungskonzept</h3>
                  <p className="text-muted-foreground">
                    LED-Beleuchtung für optimale Ausleuchtung Ihrer Arbeitsflächen
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Komplettservice</h3>
                  <p className="text-muted-foreground">
                    Demontage der alten Küche und Entsorgung inklusive
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Unser Küchen-Service</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Kostenlose Beratung und 3D-Küchenplanung
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Große Auswahl an Designs, Farben und Materialien
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Elektro- und Sanitärarbeiten aus einer Hand
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Transparente Preise ohne versteckte Kosten
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Garantie und Kundenservice auch nach der Montage
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-primary text-white hover:bg-accent hover:text-dark" asChild>
                <a href="/#kalender">Jetzt Beratungstermin vereinbaren</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Kuechen;