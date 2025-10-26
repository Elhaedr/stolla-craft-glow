import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import sanitaerImg from "@/assets/sanitaer.jpg";

const Service = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-28 pb-20">
        <section className="relative h-[400px] overflow-hidden">
          <img
            src={sanitaerImg}
            alt="Service - Schnelle Reparaturen und Wartung"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Service & Reparaturen
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Schnelle Reparaturen und Wartungsarbeiten – damit alles reibungslos funktioniert
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Unsere Service-Leistungen</h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground mb-6">
                Defekte Geräte, tropfende Wasserhähne oder andere Probleme? Wir sind schnell vor Ort 
                und beheben Schäden zuverlässig und professionell.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Sanitärreparaturen</h3>
                  <p className="text-muted-foreground">
                    Behebung von Lecks, verstopften Abflüssen und defekten Armaturen
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Elektroreparaturen</h3>
                  <p className="text-muted-foreground">
                    Fehlersuche und Reparatur elektrischer Anlagen und Geräte
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Heizungswartung</h3>
                  <p className="text-muted-foreground">
                    Regelmäßige Wartung und Reparatur Ihrer Heizungsanlage
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Türen & Fenster</h3>
                  <p className="text-muted-foreground">
                    Reparatur und Justierung von Türen, Fenstern und Schlössern
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Notdienst</h3>
                  <p className="text-muted-foreground">
                    24/7 Notfalleinsätze bei dringenden Reparaturen
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Wartungsverträge</h3>
                  <p className="text-muted-foreground">
                    Regelmäßige Kontrollen und vorbeugende Wartung
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Unser Service-Versprechen</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Schnelle Reaktionszeiten und flexible Terminvereinbarung
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Erfahrene Techniker mit umfassendem Know-how
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Faire Preise und transparente Kostenvoranschläge
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Garantie auf durchgeführte Reparaturen
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-primary text-white hover:bg-accent hover:text-dark" asChild>
                <a href="/#kalender">Jetzt Service anfragen</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Service;