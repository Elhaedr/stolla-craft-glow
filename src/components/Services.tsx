import elektroinstallationenImg from "@/assets/elektroinstallationen.jpg";
import sicherungskastenImg from "@/assets/sicherungskasten.webp";
import beleuchtungImg from "@/assets/beleuchtung.webp";
import serviceImg from "@/assets/service-reparaturen.png";
import montagenImg from "@/assets/montagen.jpg";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "elektroinstallationen",
    title: "Elektroinstallationen",
    description:
      "Steckdosen & Schalter installieren / erneuern, Leitungen ziehen (AP/UP), Erweiterungen von Stromkreisen",
    image: elektroinstallationenImg,
    href: "/leistungen/elektro",
  },
  {
    id: "verteilungen",
    title: "Verteilungen & Sicherungskasten",
    description:
      "Sicherungen ersetzen, FI/RCD nachrüsten, Verteiler umbauen, Beschriftung erneuern, Messungen und Fehlersuche",
    image: sicherungskastenImg,
    href: "/leistungen/elektro",
  },
  {
    id: "beleuchtung",
    title: "Beleuchtung",
    description:
      "Innen- & Aussenbeleuchtung, LED-Umrüstung, Lampenmontage",
    image: beleuchtungImg,
    href: "/leistungen/elektro",
  },
  {
    id: "hausinstallationen",
    title: "Wohnungs- & Hausinstallationen",
    description:
      "Neuinstallationen, Umbauten, Renovationen, Sanierungen",
    image: montagenImg,
    href: "/leistungen/elektro",
  },
  {
    id: "service",
    title: "Service & Reparaturen",
    description:
      "Störungen beheben, Fehlerstrom & Kurzschlüsse, Geräteanschluss, Modernisierungen",
    image: serviceImg,
    href: "/leistungen/elektro",
  },
];

const Services = () => {
  return (
    <section id="leistungen" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Leistungen Elektro
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Ich übernehme Montage, Vorinstallation, Reparaturen und Erweiterungen.
              Wo ein konzessionierter Abschluss nötig ist, erfolgt dieser über meinen Partner KFK Frutigen – inklusive rechtsgültigem Sicherheitsnachweis.
            </p>
          </div>

          {/* Services Grid */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* First Row - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.slice(0, 3).map((service) => (
                <a 
                  key={service.id} 
                  href={service.href} 
                  className="group block"
                >
                  <article
                    className="relative h-full min-h-[400px] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                    itemScope
                    itemType="https://schema.org/Service"
                  >
                    <img
                      src={service.image}
                      alt={`${service.title} - Professionelle Elektroarbeiten im Kanton Bern`}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 h-full bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 md:p-8 text-white">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors" itemProp="name">
                        {service.title}
                      </h3>
                      <p className="mb-6 text-white/90 leading-relaxed" itemProp="description">
                        {service.description}
                      </p>
                      <div className="flex items-center text-sm font-medium text-primary group-hover:translate-x-2 transition-transform duration-300">
                        Mehr erfahren
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </div>
                    </div>
                  </article>
                </a>
              ))}
            </div>

            {/* Second Row - 2 cards centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 lg:max-w-[66%] lg:mx-auto">
              {services.slice(3, 5).map((service) => (
                <a 
                  key={service.id} 
                  href={service.href} 
                  className="group block"
                >
                  <article
                    className="relative h-full min-h-[400px] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                    itemScope
                    itemType="https://schema.org/Service"
                  >
                    <img
                      src={service.image}
                      alt={`${service.title} - Professionelle Elektroarbeiten im Kanton Bern`}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 h-full bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 md:p-8 text-white">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors" itemProp="name">
                        {service.title}
                      </h3>
                      <p className="mb-6 text-white/90 leading-relaxed" itemProp="description">
                        {service.description}
                      </p>
                      <div className="flex items-center text-sm font-medium text-primary group-hover:translate-x-2 transition-transform duration-300">
                        Mehr erfahren
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </div>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;