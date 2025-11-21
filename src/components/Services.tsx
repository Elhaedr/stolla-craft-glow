import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import elektroinstallationenImg from "@/assets/elektroinstallationen.jpg";
import sanitaerImg from "@/assets/sanitaer.jpg";
import handwerkerImg from "@/assets/handwerker.jpg";
import innenausbauImg from "@/assets/innenausbau.jpg";
import malerarbeitenImg from "@/assets/malerarbeiten.jpg";
import montagenImg from "@/assets/montagen.jpg";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
    image: handwerkerImg,
    href: "/leistungen/elektro",
  },
  {
    id: "beleuchtung",
    title: "Beleuchtung",
    description:
      "Innen- & Aussenbeleuchtung, LED-Umrüstung, Lampenmontage",
    image: innenausbauImg,
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
    image: sanitaerImg,
    href: "/leistungen/elektro",
  },
];

const Services = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  // Auto-play functionality
  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const autoPlay = setInterval(() => {
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext();
      } else {
        carouselApi.scrollTo(0);
      }
    }, 4000); // 4 seconds

    // Pause auto-play on user interaction
    const handleInteraction = () => {
      clearInterval(autoPlay);
    };

    carouselApi.on("pointerDown", handleInteraction);

    return () => {
      clearInterval(autoPlay);
      carouselApi.off("pointerDown", handleInteraction);
    };
  }, [carouselApi]);

  return (
    <section id="leistungen" className="py-32">
      <div className="container mx-auto">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Leistungen Elektro
            </h2>
            <p className="max-w-lg text-muted-foreground">
              Ich übernehme Montage, Vorinstallation, Reparaturen und Erweiterungen.
              Wo ein konzessionierter Abschluss nötig ist, erfolgt dieser über meinen Partner KFK Frutigen.
            </p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {services.map((service) => (
              <CarouselItem
                key={service.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <a href={service.href} className="group rounded-xl">
                  <article
                    className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]"
                    itemScope
                    itemType="https://schema.org/Service"
                  >
                    <img
                      src={service.image}
                      alt={`${service.title} - Professionelle Elektroarbeiten im Kanton Bern`}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.4),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        {service.title}
                      </div>
                      <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9" itemProp="description">
                        {service.description}
                      </div>
                      <div className="flex items-center text-sm">
                        Mehr erfahren{" "}
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Services;