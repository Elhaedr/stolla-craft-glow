import { Shield, Heart, Network, Award } from "lucide-react";

const WhyUs = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Ehrlich, sauber & zuverlässig",
      description: "Sie erhalten ehrliche, saubere und zuverlässige Arbeit zu fairen Preisen."
    },
    {
      icon: Heart,
      title: "Persönlich & flexibel",
      description: "Ich arbeite persönlich, flexibel und mit großer Sorgfalt – egal ob kleine Reparatur oder größere Installation."
    },
    {
      icon: Network,
      title: "Erfahrung & Netzwerk",
      description: "Durch meine Erfahrung und mein Netzwerk mit Partnerfirmen kann ich Aufträge effizient und ohne unnötige Umwege ausführen."
    },
    {
      icon: Award,
      title: "Kundenzufriedenheit first",
      description: "Kundenzufriedenheit und sauberes Handwerk stehen bei mir an erster Stelle."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Warum <span className="text-primary">1A Stolla</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Qualität, Zuverlässigkeit und persönlicher Service – das sind meine Versprechen an Sie.
            </p>
          </div>

          {/* Advantages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {advantage.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
