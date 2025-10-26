import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-white.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#leistungen", label: "Leistungen" },
    { href: "/#ueber-uns", label: "Über uns" },
    { href: "/#kalender", label: "Termin buchen" },
    { href: "/#faq", label: "FAQ" },
    { href: "/#kontakt", label: "Kontakt" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/20 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="1A Stolla Logo"
              width="68"
              height="48"
              fetchPriority="high"
              decoding="async"
              className="h-12 w-auto transition-transform group-hover:scale-105"
            />
            <div className="text-2xl font-bold text-white transition-colors group-hover:text-yellow-400">
              1A Stolla
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-white hover:text-yellow-400 transition-colors duration-300 font-medium after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <Button variant="default" size="default" className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-yellow-400 hover:text-dark hover:border-yellow-400 transition-colors" asChild>
              <a href="/#kalender">Angebot anfordern</a>
            </Button>
          </div>

          {/* Mobile/Tablet Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white hover:text-yellow-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 animate-in slide-in-from-top duration-300 bg-black/90 backdrop-blur-lg rounded-lg shadow-lg mt-4">
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium py-2 border-l-4 border-transparent hover:border-yellow-400 pl-4"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="default" size="default" className="mt-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-yellow-400 hover:text-dark hover:border-yellow-400 transition-colors" asChild>
                <a href="/#kalender">Angebot anfordern</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
