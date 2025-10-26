"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Sehr sympäthisch u pünktlech. D Renovation im Bad isch tipptopp worde – sauber gschaffet u fairi Preise. Chum gern wieder.",
    image: new URL("@/assets/testimonials/fabian-schmid.jpg", import.meta.url).href,
    name: "Fabian Schmid",
    role: "Hausbesitzer"
  },
  {
    text: "Händ üs bim Umbaue vo dr Chuchi super berootä. Alles us ei Hand, nid es Gnusch. Merci viu mau!",
    image: new URL("@/assets/testimonials/selina-aeschlimann.jpg", import.meta.url).href,
    name: "Selina Aeschlimann",
    role: "Wohnungseigentümerin"
  },
  {
    text: "Ds Team isch zuverlässig u schnäu gsi. D Hauswartig lauft jetz rund, vom Winterdienscht bis zu chlini Reparature.",
    image: new URL("@/assets/testimonials/jonas-gerber.jpg", import.meta.url).href,
    name: "Jonas Gerber",
    role: "Geschäftsführer"
  },
  {
    text: "Sehr kundenfreundlich. D Elektro-Installatioune sind fachmässig gmacht u sauber dokumentiert. So mueses si.",
    image: new URL("@/assets/testimonials/celine-dubois.jpg", import.meta.url).href,
    name: "Céline Dubois",
    role: "Kundin"
  },
  {
    text: "Mega professionell, top Kommunikation. Abriss und Neuaufbau vom Bad ohni Stress, alles im Ziitplan. Wär i jedem Fall wieder.",
    image: new URL("@/assets/testimonials/noemie-favre.jpg", import.meta.url).href,
    name: "Noémie Favre",
    role: "Hausbesitzerin"
  },
  {
    text: "Schnäll, sauber, zuverlässig. Hämmer d'Heizig wartet und paar Sache gflickt – grad us eenem Guss. Eifach guet.",
    image: new URL("@/assets/testimonials/luca-bernasconi.jpg", import.meta.url).href,
    name: "Luca Bernasconi",
    role: "Hausbesitzer"
  },
  {
    text: "Sehr angenehm im Umgang. Si händ d'Wohnig usgmalt und es Parkett repariert – gseht wie neu uus. Preis-Leistung stimmt.",
    image: new URL("@/assets/testimonials/flurina-cavegn.jpg", import.meta.url).href,
    name: "Flurina Cavegn",
    role: "Kundin"
  },
  {
    text: "Verlässig und gradus. Si händ s'Treppenhuus gmacht und d'Lampe neu zoge – kei Wenn und Aber. Sehr empfehlenswert.",
    image: new URL("@/assets/testimonials/pascal-wicki.jpg", import.meta.url).href,
    name: "Pascal Wicki",
    role: "Geschäftsführer"
  },
  {
    text: "Top Sache. Termin iihalte, alles tiptop hinterlaa. D Wasser-Armatur isch jetz endlich dicht.",
    image: new URL("@/assets/testimonials/sandro-buehler.jpg", import.meta.url).href,
    name: "Sandro Bühler",
    role: "Hausbesitzer"
  },
  {
    text: "Gueti Lüüt, packe aa. Hämmer d'Fassade gwasche und chlii Silikonarbeit – gseh mer grad. Merci!",
    image: new URL("@/assets/testimonials/martina-luescher.jpg", import.meta.url).href,
    name: "Martina Lüscher",
    role: "Kundin"
  },
  {
    text: "Sehr effizient, nulä Theater. Offerti klar, Abrechnung fair. Dichtungen ersetzt, Boiler gwartet – läuft.",
    image: new URL("@/assets/testimonials/arben-krasniqi.jpg", import.meta.url).href,
    name: "Arben Krasniqi",
    role: "Hausbesitzer"
  },
  {
    text: "Sehr zfriide. Si sind uf Zack gsi, hend ruhig erklärt und säuber ufbaut. Gäng wieder so.",
    image: new URL("@/assets/testimonials/mehmet-kaya.jpg", import.meta.url).href,
    name: "Mehmet Kaya",
    role: "Geschäftsführer"
  },
  {
    text: "Härzlech u bodäständig. D Terrasse isch neu versiegelt worde – nüt drüber z mäckere. Würd sie witer empfehle.",
    image: new URL("@/assets/testimonials/pedro-ferreira.jpg", import.meta.url).href,
    name: "Pedro Ferreira",
    role: "Hausbesitzer"
  },
  {
    text: "Kurzfristig e Notfall becho – si sind cho, Problem gelöst, fertig. So stell ich mir Service vor.",
    image: new URL("@/assets/testimonials/ana-maria-popescu.jpg", import.meta.url).href,
    name: "Ana-Maria Popescu",
    role: "Kundin"
  },
  {
    text: "Preis ehrlich, Arbeet suuber. D'Rollläde gängig gmacht und d'Scharniere gschmiert. Perfekt.",
    image: new URL("@/assets/testimonials/aisha-khan.jpg", import.meta.url).href,
    name: "Aisha Khan",
    role: "Hausbesitzerin"
  },
  {
    text: "Ufgstellti Truppe. Si händ s'Geländer neu montiert u d'Kellerbeleuchtung erneuert – sicher u hübsch.",
    image: new URL("@/assets/testimonials/amir-al-hassan.jpg", import.meta.url).href,
    name: "Amir Al-Hassan",
    role: "Geschäftsführer"
  },
  {
    text: "Händ guet mitgdenkt und Lösige vorgschlage statt nume mache, was gseit worde isch. Das schätzt mer.",
    image: new URL("@/assets/testimonials/nikola-jovanovic.jpg", import.meta.url).href,
    name: "Nikola Jovanović",
    role: "Hausbesitzer"
  },
  {
    text: "Flexibel bi de Termine, sauber abdeckt, kei Staubchaos. S'Resultat stimmt bis i d'Fuge.",
    image: new URL("@/assets/testimonials/joao-martins.jpg", import.meta.url).href,
    name: "João Martins",
    role: "Kunde"
  },
  {
    text: "Sehr angenehm im Kontakt. Dä Sanitär-Job isch sauber und stabil – nüt knarrt, nüt tropft. Gratias!",
    image: new URL("@/assets/testimonials/dimitri-petrov.jpg", import.meta.url).href,
    name: "Dimitri Petrov",
    role: "Hausbesitzer"
  },
  {
    text: "Ufgstellti Truppe. Si händ s'Geländer neu montiert u d'Kellerbeleuchtung erneuert – sicher u hübsch.",
    image: new URL("@/assets/testimonials/giulia-romano.jpg", import.meta.url).href,
    name: "Giulia Romano",
    role: "Kundin"
  },
];

const firstColumn = testimonials.slice(0, 7);
const secondColumn = testimonials.slice(7, 14);
const thirdColumn = testimonials.slice(14, 20);

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
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
            {testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="p-6 md:p-10 rounded-3xl border border-border bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-xs w-full"
                key={i}
              >
                <div className="text-sm md:text-base text-foreground/90 leading-relaxed">
                  "{text}"
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="font-semibold tracking-tight leading-5 text-foreground">
                      {name}
                    </div>
                    <div className="text-sm leading-5 text-muted-foreground tracking-tight">
                      {role}
                    </div>
                  </div>
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
