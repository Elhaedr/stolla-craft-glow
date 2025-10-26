import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import malerarbeitenImg from "@/assets/malerarbeiten.jpg";

const Malerarbeiten = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pb-20">
        <section className="relative h-[400px] overflow-hidden">
          <img
            src={malerarbeitenImg}
            alt="Malerarbeiten - Professionelle Malerarbeiten"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Malerarbeiten
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Professionelle Malerarbeiten für Innen- und Außenbereiche – saubere Ausführung und präzise Farbgestaltung
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Unsere Malerarbeiten</h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground mb-6">
                Mit hochwertigen Farben und professioneller Ausführung verwandeln wir Ihre Räume in 
                Wohlfühlorte. Innen wie außen – für ein perfektes Ergebnis.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Innenanstrich</h3>
                  <p className="text-muted-foreground">
                    Wände und Decken in allen Räumen professionell gestrichen
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Außenanstrich</h3>
                  <p className="text-muted-foreground">
                    Fassaden und Außenbereiche wetterfest gestrichen
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Tapezierarbeiten</h3>
                  <p className="text-muted-foreground">
                    Vliestapeten, Raufaser und Designtapeten fachgerecht verklebt
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Lackierarbeiten</h3>
                  <p className="text-muted-foreground">
                    Türen, Fenster und Heizkörper in neuem Glanz
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Spachtelarbeiten</h3>
                  <p className="text-muted-foreground">
                    Vorarbeiten für perfekte Oberflächen
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Farbberatung</h3>
                  <p className="text-muted-foreground">
                    Professionelle Unterstützung bei der Farbauswahl
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Qualität in jedem Pinselstrich</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Hochwertige Farben und Materialien
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Sorgfältige Abdeckung und Schutz Ihrer Möbel
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Saubere und präzise Ausführung
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Pünktliche Fertigstellung zum vereinbarten Termin
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

export default Malerarbeiten;