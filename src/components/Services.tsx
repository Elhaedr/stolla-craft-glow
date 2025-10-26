import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import fliesenlegerImg from "@/assets/fliesenleger.jpg";
import sanitaerImg from "@/assets/sanitaer.jpg";
import handwerkerImg from "@/assets/handwerker.jpg";
import installationenImg from "@/assets/installationen.jpg";
import innenausbauImg from "@/assets/innenausbau.jpg";
import montagenImg from "@/assets/montagen.jpg";
import malerarbeitenImg from "@/assets/malerarbeiten.jpg";
import kuechenImg from "@/assets/kuechen.jpg";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const services = [
  {
    id: "hauswartung",
    title: "Hauswartung",
    description:
      "Professionelle Betreuung Ihrer Liegenschaft – von der regelmässigen Reinigung bis zur Gartenpflege.",
    image: handwerkerImg,
    href: "/leistungen/hauswartung",
  },
  {
    id: "installationen",
    title: "Installationen",
    description:
      "Fachgerechte Montage und Installation von Sanitär, Elektro und weiteren Gebäudetechniken.",
    image: installationenImg,
    href: "/leistungen/installationen",
  },
  {
    id: "renovationen",
    title: "Renovationen",
    description:
      "Komplette Sanierungen oder Teilrenovationen – wir setzen Ihre Wünsche präzise um.",
    image: fliesenlegerImg,
    href: "/leistungen/renovationen",
  },
  {
    id: "service",
    title: "Service",
    description:
      "Schnelle Reparaturen und Wartungsarbeiten – damit alles reibungslos funktioniert.",
    image: sanitaerImg,
    href: "/leistungen/service",
  },
  {
    id: "innenausbau",
    title: "Innenausbau",
    description:
      "Professioneller Innenausbau mit Trockenbau, Holzarbeiten und individueller Raumgestaltung.",
    image: innenausbauImg,
    href: "/leistungen/innenausbau",
  },
  {
    id: "montagen",
    title: "Montagen",
    description:
      "Fachgerechte Montage von Möbeln, Geräten und allen Einrichtungsgegenständen.",
    image: montagenImg,
    href: "/leistungen/montagen",
  },
  {
    id: "malerarbeiten",
    title: "Malerarbeiten",
    description:
      "Professionelle Malerarbeiten für Innen- und Außenbereiche – saubere Ausführung und präzise Farbgestaltung.",
    image: malerarbeitenImg,
    href: "/leistungen/malerarbeiten",
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
              Unsere Leistungen
            </h2>
            <p className="max-w-lg text-muted-foreground">
              Alles aus einer Hand – für Ihr Zuhause oder Ihre Liegenschaft
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
                      alt={`${service.title} - Professionelle ${service.title} im Kanton Bern`}
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
        <div className="mt-8 flex justify-center gap-2">
          {services.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Küchen Section - Separate Card */}
      <div className="container mx-auto mt-20 px-4">
        <div className="max-w-4xl mx-auto">
          <a href="/leistungen/kuechen" className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <article className="grid md:grid-cols-2 gap-0 bg-card" itemScope itemType="https://schema.org/Service">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={kuechenImg}
                  alt="Küchen - Hochwertige Einbauküchen und Küchenplanung im Kanton Bern"
                  className="absolute h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-primary mb-4">Küchen</h3>
                <p className="text-lg text-muted-foreground mb-6" itemProp="description">
                  Hochwertige Einbauküchen nach Maß – von der Planung über die Lieferung bis zur professionellen Montage. 
                  Wir realisieren Ihre Traumküche mit modernsten Materialien und durchdachtem Design.
                </p>
                <div className="flex items-center text-primary font-medium">
                  Mehr erfahren
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
