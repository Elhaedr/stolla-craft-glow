import { Mail, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import kuechenImg from "@/assets/hero/kuechen-vorher-nachher.png";
import renovation1Img from "@/assets/hero/renovation-1.jpg";
import renovation2Img from "@/assets/hero/renovation-2.jpg";
import renovation3Img from "@/assets/hero/renovation-3.jpg";
import bauarbeitenImg from "@/assets/hero/bauarbeiten.jpg";
import sanitaerImg from "@/assets/hero/sanitaer.jpg";
import elektroImg from "@/assets/hero/elektro.jpg";
import malerImg from "@/assets/hero/maler.jpg";

const Hero = () => {
  const heroImages = [
    kuechenImg,
    renovation1Img,
    renovation2Img,
    renovation3Img,
    bauarbeitenImg,
    sanitaerImg,
    elektroImg,
    malerImg
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-[calc(100vh+100px)] flex items-center justify-center overflow-hidden bg-white pt-28 md:pt-32 lg:pt-20 pb-32 md:pb-40">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl hero-bg-animated animate-in fade-in duration-1000" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl hero-bg-animated animate-in fade-in duration-1000 delay-300" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left w-full">
              {/* Badge */}
              <div className="hero-animate inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-primary/30 bg-primary/10 mb-8">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-primary">
                  Einzelunternehmen · Kanton Bern
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="hero-animate-delay-1 text-5xl sm:text-6xl lg:text-7xl font-bold text-dark mb-6">
                <span className="text-primary">Nähe</span>, <span className="text-accent">Zuverlässigkeit</span>, 1A-Arbeit.
              </h1>

              {/* Subline */}
              <p className="hero-animate-delay-2 text-xl sm:text-2xl text-dark/80 mb-8 max-w-2xl mx-auto lg:mx-0">
                Hauswartung, Installationen, Renovationen – zuverlässig, termintreu,
                sauber
              </p>

              {/* CTA Buttons */}
              <div className="hero-animate-delay-3 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 lg:mb-16">
                <Button variant="default" size="lg" className="bg-primary text-white hover:bg-accent hover:text-dark transition-colors" asChild>
                  <a href="#kalender">Angebot anfordern</a>
                </Button>
                <Button variant="secondary" size="lg" className="bg-accent text-dark border-accent hover:bg-accent/80" asChild>
                  <a href="#kalender">Besichtigung buchen</a>
                </Button>
              </div>

              {/* Contact Info - Desktop only */}
              <div className="hidden lg:flex hero-animate-delay-4 flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-dark/70">
                <a
                  href="mailto:info@1a-stolla.ch"
                  className="flex items-center gap-2 hover:text-primary transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">info@1a-stolla.ch</span>
                </a>
                <div className="hidden sm:block w-1 h-1 bg-dark/70 rounded-full" />
                <a
                  href="tel:+41796509117"
                  className="flex items-center gap-2 hover:text-primary transition-colors group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">+41 79 650 91 17</span>
                </a>
                <div className="hidden sm:block w-1 h-1 bg-dark/70 rounded-full" />
                <a
                  href="https://www.1a-stolla.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors group"
                >
                  <Globe className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">www.1a-stolla.ch</span>
                </a>
              </div>
            </div>

            {/* Image Slideshow - appears after buttons on mobile, on right side on desktop */}
            <div className="flex justify-center lg:justify-end w-full">
              <div className="hero-animate w-full max-w-[480px] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[600px] relative">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                  {heroImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Renovation project ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                  {/* Indicator dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {heroImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'bg-white w-8' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info - Mobile only, appears after animation */}
            <div className="lg:hidden hero-animate-delay-4 flex flex-col sm:flex-row items-center justify-center gap-6 text-dark/70 order-3 w-full">
              <a
                href="mailto:info@1a-stolla.ch"
                className="flex items-center gap-2 hover:text-primary transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">info@1a-stolla.ch</span>
              </a>
              <div className="hidden sm:block w-1 h-1 bg-dark/70 rounded-full" />
              <a
                href="tel:+41796509117"
                className="flex items-center gap-2 hover:text-primary transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">+41 79 650 91 17</span>
              </a>
              <div className="hidden sm:block w-1 h-1 bg-dark/70 rounded-full" />
              <a
                href="https://www.1a-stolla.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors group"
              >
                <Globe className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">www.1a-stolla.ch</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
