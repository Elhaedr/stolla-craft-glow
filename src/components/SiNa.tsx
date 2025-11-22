import { Shield, CheckCircle2, FileText, ClipboardCheck, Send } from "lucide-react";
import electricianIsometric from "@/assets/electrician-isometric.png";

const SiNa = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      text: "Messungen nach NIV (Isolationsmessung, Schleifenmessung, RCD-Prüfung etc.)"
    },
    {
      icon: FileText,
      text: "Dokumentation der Installation"
    },
    {
      icon: CheckCircle2,
      text: "Vorbereitung aller Unterlagen für den SiNa"
    },
    {
      icon: Shield,
      text: "Offizielle Ausstellung des Sicherheitsnachweises durch KFK Frutigen"
    },
    {
      icon: Send,
      text: "Zustellung an Eigentümer und/oder Netzbetreiber"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Sicherheitsnachweis (SiNa) nach NIV – <br className="hidden sm:block" />
              mit Fachverantwortung durch <span className="text-primary">KFK Frutigen</span>
            </h2>
          </div>

          {/* Main Content Card */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8 items-center">
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-lg">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                1A Stolla führt sämtliche Elektroarbeiten fachgerecht aus und erstellt für jede abgeschlossene Installation die notwendigen Messungen und Prüfungen gemäss Niederspannungs-Installationsverordnung (NIV).
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Der offizielle Sicherheitsnachweis (SiNa) wird in Zusammenarbeit mit dem konzessionierten Elektroinstallationsbetrieb KFK Frutigen ausgestellt. Dadurch erhalten Sie einen rechtsgültigen, normgerechten Nachweis für jede Installation – egal ob Neubau, Umbau oder Reparatur.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src={electricianIsometric} 
                alt="Professioneller Elektriker bei der Installation eines Sicherungskastens" 
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>

          {/* Steps List */}
          <div className="space-y-4 mb-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed pt-1.5">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Conclusion */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 lg:p-8">
            <p className="text-foreground font-medium text-center leading-relaxed">
              Durch diese Zusammenarbeit sind Kunden rechtlich vollständig abgesichert und erhalten einen anerkannten Sicherheitsnachweis gemäss gesetzlichen Vorgaben.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiNa;
