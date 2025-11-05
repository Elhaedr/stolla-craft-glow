"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Hadis Coloman",
    text: "Ufgstellte Typ und super Arbeit gleistet danke dir !"
  },
  {
    name: "Diana Schwarz",
    text: "Von Anfang bis Ende eine hervorragende Leistung! Sehr zuverlässig, pünktlich und sehr kompetent. Arbeiten wurden termingerecht und in bester Qualität ausgeführt. Absolut empfehlenswert!"
  },
  {
    name: "Gazmend Haliti",
    text: "Schnelle Reaktion, zuverlässig und sehr saubere Arbeit. Kann ich nur weiterempfehlen"
  },
  {
    name: "Edouard Tremblais",
    text: "Solution oriented and great service! I was very happy with the whole experience. Definitely recommended"
  },
  {
    name: "Gjyrevci Alban",
    text: "Sehr kompetenter Fachmann, mit herz und blut bei der Sache. Bin sehr zufrieden mit der Arbeit👍🏼"
  },
  {
    name: "Kamberi Armend",
    text: "Sehr gutes preisleistungsverhältnis, pünktlich, und zuvorkommend kann man nur weiter empfehlen!"
  },
  {
    name: "Elisabeth Nikaj",
    text: "Schnell, zuverlässig und sehr saubere Arbeit. Absolut empfehlenswert!"
  },
  {
    name: "Gabriel Burri",
    text: "Sehr zufrieden mit der Arbeit und sehr Empfehlenswert!"
  },
  {
    name: "Silas Lippuner",
    text: "Zueverlässig und sehr sympathisch! Tolli arbeit gleistet!"
  },
  {
    name: "Edison Shala",
    text: "Ich bin sehr zufrieden mit dem Service von 1A Stolla! Die LED-Lampen in unserer Autowerkstatt wurden schnell, sauber und fachgerecht montiert."
  },
  {
    name: "Visar Haziri",
    text: "best out there and I would most likely recommend."
  },
  {
    name: "Ricky Wills",
    text: "Wir baten Luxi, eine zusätzliche Beleuchtung auf unserem Balkon zu installieren. Luxi bot auch die Installation einer Steckdose an. Innerhalb einer Stunde waren beide installiert und funktionierten. Wir waren sehr dankbar, denn jetzt haben wir Licht (und Strom)!!!!"
  },
  {
    name: "Adrian Spatar",
    text: "top! alles reibungslos geklappt"
  },
  {
    name: "Joel Weber",
    text: "Die Kommunikation war von Anfang an sehr Freundlich und zuverlässig. Sehr professionell und termingerecht gearbeitet. Vielen Dank!"
  },
  {
    name: "Benjamin Raka",
    text: "Sehr kompetente Beratung & Umsetzung danke!"
  },
  {
    name: "Shala Leo",
    text: "Sehr guter Service und super Arbeit."
  },
  {
    name: "RAKI MC",
    text: "Arbeit wurde präzise und perfekt abgeschlossen, der Junge ist sehr Respektvoll. Er ist einfach gemacht für seinen Job."
  },
  {
    name: "Benjamin Rutz",
    text: "Bei 1a Stolla merkt man sofort: Die wissen, was sie tun. Saubere Arbeit, faire Preise, keine leeren Versprechen."
  },
];

const firstColumn = testimonials.slice(0, 7);
const secondColumn = testimonials.slice(7, 14);
const thirdColumn = testimonials.slice(14, 20);

interface Testimonial {
  name: string;
  text: string;
}

const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 20,
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ name, text }, i) => (
              <div
                className="p-6 md:p-10 rounded-3xl border border-border bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-xs w-full"
                key={i}
              >
                <div className="text-sm md:text-base text-foreground/90 leading-relaxed mb-4">
                  "{text}"
                </div>
                <div className="font-semibold tracking-tight text-foreground">
                  {name}
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Überzeugen Sie sich von der Qualität unserer Arbeit durch die
            Erfahrungen zufriedener Kunden
          </p>
        </div>

        <div className="flex justify-center gap-6 max-h-[600px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
