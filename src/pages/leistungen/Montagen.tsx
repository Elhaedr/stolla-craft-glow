import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import montagenImg from "@/assets/montagen.jpg";

const Montagen = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pb-20">
        <section className="relative h-[400px] overflow-hidden">
          <img
            src={montagenImg}
            alt="Montagen - Fachgerechte Montagearbeiten"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Montagen
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Fachgerechte Montage von Möbeln, Geräten und allen Einrichtungsgegenständen
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Unsere Montage-Leistungen</h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground mb-6">
                Egal ob Möbel, Lampen oder komplexe Einrichtungsgegenstände – wir montieren alles 
                fachgerecht, sicher und zuverlässig.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Möbelmontage</h3>
                  <p className="text-muted-foreground">
                    Schränke, Regale, Betten und andere Möbelstücke professionell aufgebaut
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Küchenmontage</h3>
                  <p className="text-muted-foreground">
                    Kompletter Aufbau und Anschluss Ihrer Einbauküche
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Lampen & Leuchten</h3>
                  <p className="text-muted-foreground">
                    Installation von Decken-, Wand- und Stehleuchten
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">TV & Multimedia</h3>
                  <p className="text-muted-foreground">
                    Wandmontage von Fernsehern und Soundsystemen
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Bilder & Spiegel</h3>
                  <p className="text-muted-foreground">
                    Sichere Befestigung auch schwerer Gegenstände
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Gardinenstangen</h3>
                  <p className="text-muted-foreground">
                    Montage von Vorhangschienen und Jalousien
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Unser Montage-Service</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Schnelle und zuverlässige Terminvereinbarung
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Professionelles Werkzeug für jede Herausforderung
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Sorgfältiger Umgang mit Ihren Einrichtungsgegenständen
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Entsorgung von Verpackungsmaterial auf Wunsch
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-primary text-white hover:bg-accent hover:text-dark" asChild>
                <a href="/#kalender">Jetzt Montage buchen</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Montagen;