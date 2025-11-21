import { Shield, Heart, Network, Award } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const WhyUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const advantages = [
    {
      icon: Shield,
      title: "Ehrlich, sauber & zuverlässig",
      description: "Sie erhalten ehrliche, saubere und zuverlässige Arbeit zu fairen Preisen.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Persönlich & flexibel",
      description: "Ich arbeite persönlich, flexibel und mit großer Sorgfalt – egal ob kleine Reparatur oder größere Installation.",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: Network,
      title: "Erfahrung & Netzwerk",
      description: "Durch meine Erfahrung und mein Netzwerk mit Partnerfirmen kann ich Aufträge effizient und ohne unnötige Umwege ausführen.",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: Award,
      title: "Kundenzufriedenheit first",
      description: "Kundenzufriedenheit und sauberes Handwerk stehen bei mir an erster Stelle.",
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto" ref={sectionRef}>
          {/* Header */}
          <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
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
                  className={`group relative bg-card border border-border rounded-2xl p-8 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 overflow-hidden min-h-[240px] flex flex-col ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
                  }}
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col items-center text-center flex-1">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {advantage.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-base">
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
