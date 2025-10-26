import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import installationenImg from "@/assets/installationen.jpg";

const Installationen = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-28 pb-20">
        <section className="relative h-[400px] overflow-hidden">
          <img
            src={installationenImg}
            alt="Installationen - Professionelle Installationsarbeiten"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Installationen
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Fachgerechte Montage und Installation von Sanitär, Elektro und weiteren Gebäudetechniken
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Unsere Installations-Leistungen</h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground mb-6">
                Von der Sanitärinstallation bis zur Elektrik – wir realisieren Ihre technischen 
                Anforderungen fachgerecht und zuverlässig.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Sanitärinstallationen</h3>
                  <p className="text-muted-foreground">
                    Wasserrohre, Abflüsse und Armaturen fachgerecht verlegt
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Elektroinstallationen</h3>
                  <p className="text-muted-foreground">
                    Steckdosen, Schalter und Beleuchtung professionell installiert
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Heizungsinstallation</h3>
                  <p className="text-muted-foreground">
                    Montage von Heizkörpern und Heizungssystemen
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Lüftungsanlagen</h3>
                  <p className="text-muted-foreground">
                    Installation und Wartung von Lüftungssystemen
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Smart Home</h3>
                  <p className="text-muted-foreground">
                    Moderne Hausautomation und intelligente Steuerung
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Netzwerkinstallation</h3>
                  <p className="text-muted-foreground">
                    LAN-Verkabelung und WLAN-Infrastruktur
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Unser Installationsversprechen</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Fachgerechte Ausführung nach aktuellen Normen
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Qualifizierte und zertifizierte Fachkräfte
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Hochwertige Materialien und Komponenten
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Saubere Arbeitsweise und Termintreue
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

export default Installationen;