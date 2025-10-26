import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import innenausbauImg from "@/assets/innenausbau.jpg";

const Innenausbau = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pb-20">
        <section className="relative h-[400px] overflow-hidden">
          <img
            src={innenausbauImg}
            alt="Innenausbau - Professioneller Ausbau"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Innenausbau
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Professioneller Innenausbau mit Trockenbau, Holzarbeiten und individueller Raumgestaltung
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Unsere Innenausbau-Leistungen</h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground mb-6">
                Vom Trockenbau bis zur individuellen Raumgestaltung – wir schaffen funktionale und 
                ästhetische Innenräume nach Ihren Vorstellungen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Trockenbau</h3>
                  <p className="text-muted-foreground">
                    Raumteilung, Vorsatzschalen und abgehängte Decken
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Holzarbeiten</h3>
                  <p className="text-muted-foreground">
                    Einbauschränke, Regale und maßgefertigte Holzelemente
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Bodenverlegung</h3>
                  <p className="text-muted-foreground">
                    Parkett, Laminat, Vinyl und weitere Bodenbeläge
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Akustikdecken</h3>
                  <p className="text-muted-foreground">
                    Schallschutz und optimale Raumakustik
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Dachausbau</h3>
                  <p className="text-muted-foreground">
                    Umbau von Dachböden zu Wohnräumen
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Innenputz</h3>
                  <p className="text-muted-foreground">
                    Glatt- und Strukturputz für perfekte Wandoberflächen
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Warum 1A Stolla für Ihren Innenausbau?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Individuelle Beratung und kreative Lösungen
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Hochwertige Materialien und präzise Verarbeitung
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Alle Gewerke koordiniert aus einer Hand
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Termintreue und saubere Arbeitsweise
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

export default Innenausbau;