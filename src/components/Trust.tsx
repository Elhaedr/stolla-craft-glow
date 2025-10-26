import { useEffect, useRef, useState } from "react";
import { Award, Star, Clock } from "lucide-react";

const Trust = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats = [
    { icon: Clock, value: 15, suffix: "+", label: "Jahre Erfahrung" },
    { icon: Award, value: 200, suffix: "+", label: "Projekte" },
    { icon: Star, value: 5, suffix: "★", label: "Bewertung" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target") || "0");
      const duration = 2000;
      const startTime = performance.now();

      const updateCounter = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(progress * target);
        
        counter.textContent = current.toString();
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toString();
        }
      };

      requestAnimationFrame(updateCounter);
    });
  };

  return (
    <section id="ueber-uns" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Vertrauen Sie auf{" "}
              <span className="text-primary">Qualität</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Als Einzelunternehmen im Kanton Bern stehe ich persönlich für
              jedes Projekt ein. Mein Name – Mehmet Stella – ist mein
              Versprechen: Zuverlässigkeit, Termintreue und saubere Arbeit.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Mit über 15 Jahren Erfahrung in Hauswartung, Installationen und
              Renovationen weiss ich genau, worauf es ankommt. Ich nehme mir
              Zeit für Ihre Anliegen und setze Ihre Wünsche präzise um – vom
              ersten Beratungsgespräch bis zur finalen Abnahme.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-muted rounded-lg border-2 border-border">
                <span className="text-sm font-medium text-foreground">
                  ✓ Haftpflichtversichert
                </span>
              </div>
              <div className="px-4 py-2 bg-muted rounded-lg border-2 border-border">
                <span className="text-sm font-medium text-foreground">
                  ✓ Kanton Bern
                </span>
              </div>
              <div className="px-4 py-2 bg-muted rounded-lg border-2 border-border">
                <span className="text-sm font-medium text-foreground">
                  ✓ Einzelunternehmen
                </span>
              </div>
            </div>
          </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-lg p-8 text-center border-2 border-border hover:border-accent transition-colors duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-5xl font-bold text-accent mb-2 counter-animate">
                    <span
                      className="counter"
                      data-target={stat.value}
                    >
                      0
                    </span>
                    {stat.suffix}
                  </div>
                  <p className="text-lg text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
