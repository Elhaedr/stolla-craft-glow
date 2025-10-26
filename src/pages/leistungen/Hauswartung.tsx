import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import handwerkerImg from "@/assets/handwerker.jpg";

const Hauswartung = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <img
            src={handwerkerImg}
            alt="Hauswartung - Professionelle Liegenschaftsbetreuung"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Hauswartung
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Professionelle Betreuung Ihrer Liegenschaft – von der regelmässigen Reinigung bis zur Gartenpflege
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Unsere Hauswartungs-Leistungen</h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground mb-6">
                Eine gepflegte Liegenschaft ist das Aushängeschild jeder Immobilie. Mit unserer professionellen 
                Hauswartung sorgen wir dafür, dass Ihr Gebäude stets in bestem Zustand bleibt.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Regelmässige Reinigung</h3>
                  <p className="text-muted-foreground">
                    Treppenhäuser, Eingangsbereiche und Gemeinschaftsräume
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Gartenpflege</h3>
                  <p className="text-muted-foreground">
                    Rasenmähen, Heckenschnitt und Pflanzenpflege
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Winterdienst</h3>
                  <p className="text-muted-foreground">
                    Schneeräumung und Streudienst für sichere Zugänge
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Kleinreparaturen</h3>
                  <p className="text-muted-foreground">
                    Schnelle Behebung kleinerer Schäden und Mängel
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Kontrolldienste</h3>
                  <p className="text-muted-foreground">
                    Regelmässige Begehungen und Zustandskontrollen
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Abfallentsorgung</h3>
                  <p className="text-muted-foreground">
                    Organisation und Durchführung der Müllentsorgung
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Warum 1A Stolla?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Zuverlässige und termingerechte Ausführung
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Erfahrene und geschulte Mitarbeiter
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Flexible Vereinbarungen nach Ihren Bedürfnissen
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Faire Preise und transparente Abrechnung
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

export default Hauswartung;