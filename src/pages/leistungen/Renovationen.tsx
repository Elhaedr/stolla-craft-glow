import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import fliesenlegerImg from "@/assets/fliesenleger.jpg";

const Renovationen = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pb-20">
        <section className="relative h-[400px] overflow-hidden">
          <img
            src={fliesenlegerImg}
            alt="Renovationen - Professionelle Sanierungen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Renovationen
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Komplette Sanierungen oder Teilrenovationen – wir setzen Ihre Wünsche präzise um
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Unsere Renovations-Leistungen</h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground mb-6">
                Ob Totalsanierung oder gezielte Teilrenovation – wir bringen Ihre Räume auf den neuesten Stand 
                und schaffen Wohlfühlatmosphäre mit hoher Qualität.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Badsanierung</h3>
                  <p className="text-muted-foreground">
                    Komplette Modernisierung von Badezimmern mit neuen Fliesen und Sanitär
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Küchensanierung</h3>
                  <p className="text-muted-foreground">
                    Erneuerung von Böden, Wänden und Installationen
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Wohnungsrenovation</h3>
                  <p className="text-muted-foreground">
                    Komplette Erneuerung von Wohnräumen inkl. Böden und Malerarbeiten
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Fassadenrenovation</h3>
                  <p className="text-muted-foreground">
                    Erneuerung und Dämmung von Außenfassaden
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Bodenbeläge</h3>
                  <p className="text-muted-foreground">
                    Parkett, Laminat, Fliesen oder Teppich – fachgerecht verlegt
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Dachsanierung</h3>
                  <p className="text-muted-foreground">
                    Dacherneuerung und -dämmung für optimalen Schutz
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Ihr Renovationspartner</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Umfassende Beratung und detaillierte Planung
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Koordination aller Gewerke aus einer Hand
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Hochwertige Materialien und moderne Techniken
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Saubere Baustelle und pünktliche Fertigstellung
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

export default Renovationen;