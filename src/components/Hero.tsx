import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import avatar1 from "@/assets/avatars/avatar-1.png";
import avatar2 from "@/assets/avatars/avatar-2.png";
import avatar3 from "@/assets/avatars/avatar-3.png";
import avatar4 from "@/assets/avatars/avatar-4.png";
import avatar5 from "@/assets/avatars/avatar-5.png";
import circuitBreakersImg from "@/assets/hero/circuit-breakers.jpg";
import electricianCeiling1Img from "@/assets/hero/electrician-ceiling-1.jpg";
import electricianCeiling2Img from "@/assets/hero/electrician-ceiling-2.jpg";
import electricalPanelImg from "@/assets/hero/electrical-panel.jpg";
import outletInstallationImg from "@/assets/hero/outlet-installation.jpg";
import cableManagementImg from "@/assets/hero/cable-management.jpg";
import distributionPanelImg from "@/assets/hero/distribution-panel.jpg";

const Hero = () => {
  const heroImages = [
    circuitBreakersImg,
    electricianCeiling1Img,
    electricianCeiling2Img,
    electricalPanelImg,
    outletInstallationImg,
    cableManagementImg,
    distributionPanelImg
  ];

  const avatars = [
    {
      imageUrl: avatar1,
    },
    {
      imageUrl: avatar2,
    },
    {
      imageUrl: avatar3,
    },
    {
      imageUrl: avatar4,
    },
    {
      imageUrl: avatar5,
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-[calc(100vh+100px)] flex items-center justify-center overflow-hidden pt-[165px] pb-32 md:pb-40">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentImageIndex 
                ? 'translate-x-0' 
                : index < currentImageIndex
                ? '-translate-x-full'
                : 'translate-x-full'
            }`}
          >
            <img
              src={image}
              alt={`Renovation project ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Text Content */}
            <div className="w-full max-w-4xl">
              {/* Badge */}
              <div className="hero-animate inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm mb-8">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white">
                  Einzelunternehmen
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="hero-animate-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                1A Stolla<br />
                <span className="text-yellow-400">Elektroinstallationen</span> & Service<br />
                <span className="text-base sm:text-lg lg:text-xl font-normal">unter Fachverantwortung</span>
              </h1>

              {/* Subline */}
              <p className="hero-animate-delay-2 text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto drop-shadow-md">
                Montage und Vorinstallation elektrischer Komponenten – Anschluss und Sicherheitsnachweis (SiNa) erfolgen durch konzessionierten Partner.
              </p>

              {/* CTA Buttons */}
              <div className="hero-animate-delay-3 flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button variant="default" size="lg" className="bg-yellow-400 text-dark hover:bg-yellow-500 transition-colors shadow-xl" asChild>
                  <a href="#kontakt">Offerte anfragen</a>
                </Button>
                <Button variant="secondary" size="lg" className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-dark transition-colors shadow-xl" asChild>
                  <a href="tel:+41796509117">Anrufen: +41 79 650 91 17</a>
                </Button>
              </div>

              {/* Contact Info */}
              <div className="hero-animate-delay-5 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white/90 backdrop-blur-sm bg-black/20 rounded-full px-6 py-4">
                <a
                  href="mailto:info@1a-stolla.ch"
                  className="flex items-center gap-2 hover:text-yellow-400 transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">info@1a-stolla.ch</span>
                </a>
                <div className="hidden sm:block w-px h-5 bg-white/70" />
                <a
                  href="tel:+41796509117"
                  className="flex items-center gap-2 hover:text-yellow-400 transition-colors group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">+41 79 650 91 17</span>
                </a>
                <div className="hidden sm:block w-px h-5 bg-white/70" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Belp,+Bern,+Switzerland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-yellow-400 transition-colors group"
                >
                  <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">Kanton Bern | Belp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:block absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
