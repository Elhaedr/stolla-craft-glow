import { Mail, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/hero-animation.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <section className="relative min-h-[calc(100vh+100px)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-[hsl(211,92%,35%)] pt-28 md:pt-32 lg:pt-20 pb-32 md:pb-40">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl hero-bg-animated animate-in fade-in duration-1000" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl hero-bg-animated animate-in fade-in duration-1000 delay-300" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left w-full">
              {/* Badge */}
              <div className="hero-animate inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-white/30 bg-white/10 mb-8">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white">
                  Einzelunternehmen · Kanton Bern
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="hero-animate-delay-1 text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                <span className="text-white">Nähe</span>, <span className="text-accent">Zuverlässigkeit</span>, 1A-Arbeit.
              </h1>

              {/* Subline */}
              <p className="hero-animate-delay-2 text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
                Hauswartung, Installationen, Renovationen – zuverlässig, termintreu,
                sauber
              </p>

              {/* CTA Buttons */}
              <div className="hero-animate-delay-3 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 lg:mb-16">
                <Button variant="default" size="lg" className="bg-white text-primary hover:bg-accent hover:text-dark transition-colors" asChild>
                  <a href="#kalender">Angebot anfordern</a>
                </Button>
                <Button variant="secondary" size="lg" className="bg-white/20 text-white border-white/30 hover:bg-white/30" asChild>
                  <a href="#kalender">Besichtigung buchen</a>
                </Button>
              </div>

              {/* Contact Info - Desktop only */}
              <div className="hidden lg:flex hero-animate-delay-4 flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-white/80">
                <a
                  href="mailto:info@1a-stolla.ch"
                  className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">info@1a-stolla.ch</span>
                </a>
                <div className="hidden sm:block w-1 h-1 bg-white/80 rounded-full" />
                <a
                  href="tel:+41796509117"
                  className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">+41 79 650 91 17</span>
                </a>
                <div className="hidden sm:block w-1 h-1 bg-white/80 rounded-full" />
                <a
                  href="https://www.1a-stolla.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <Globe className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">www.1a-stolla.ch</span>
                </a>
              </div>
            </div>

            {/* Lottie Animation - appears after buttons on mobile, on right side on desktop */}
            <div className="flex justify-center lg:justify-end w-full">
              <div className="hero-animate w-full max-w-[480px] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[600px] relative">
                {/* Feste Kreise hinter Lottie Animation */}
                <div className="absolute top-1/4 right-0 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-accent rounded-full opacity-75 transition-transform duration-500 hover:scale-110 z-0 cursor-pointer" />
                <div className="absolute bottom-1/4 right-1/4 w-56 h-56 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] bg-white rounded-full opacity-[0.88] transition-transform duration-500 hover:scale-110 z-0 cursor-pointer" />
                
                {animationData && (
                  <Lottie 
                    animationData={animationData} 
                    loop={true}
                    autoplay={true}
                    className="w-full h-auto scale-125 relative z-20 pointer-events-none"
                  />
                )}
              </div>
            </div>

            {/* Contact Info - Mobile only, appears after animation */}
            <div className="lg:hidden hero-animate-delay-4 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 order-3 w-full">
              <a
                href="mailto:info@1a-stolla.ch"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">info@1a-stolla.ch</span>
              </a>
              <div className="hidden sm:block w-1 h-1 bg-white/80 rounded-full" />
              <a
                href="tel:+41796509117"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">+41 79 650 91 17</span>
              </a>
              <div className="hidden sm:block w-1 h-1 bg-white/80 rounded-full" />
              <a
                href="https://www.1a-stolla.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors group"
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
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
