import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo & Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
            <img 
              src={logo} 
              alt="1A Stolla Logo"
              width="57"
              height="40"
              loading="lazy"
              decoding="async"
              className="h-10 w-auto"
            />
              <h3 className="text-2xl font-bold">1A Stolla</h3>
            </div>
            <p className="text-background/70 mb-4">
              Handwerk, das hält – seit über 15 Jahren Ihr zuverlässiger Partner
              im Kanton Bern.
            </p>
          </div>

          {/* Column 2: Kontakt */}
          <div>
            <h4 className="text-lg font-bold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@1a-stolla.ch"
                className="flex items-center gap-2 text-background/70 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@1a-stolla.ch</span>
              </a>
              <a
                href="tel:+41796509117"
                className="flex items-center gap-2 text-background/70 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+41 79 650 91 17</span>
              </a>
              <div className="flex items-center gap-2 text-background/70">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Kanton Bern, Belp</span>
              </div>
            </div>
          </div>

          {/* Column 3: Schnellzugriff */}
          <div>
            <h4 className="text-lg font-bold mb-4">Schnellzugriff</h4>
            <nav className="space-y-2">
              <a
                href="#leistungen"
                className="block text-background/70 hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                Leistungen
              </a>
              <a
                href="#ueber-uns"
                className="block text-background/70 hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                Über uns
              </a>
              <a
                href="#faq"
                className="block text-background/70 hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                FAQ
              </a>
              <a
                href="#kontakt"
                className="block text-background/70 hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                Kontakt
              </a>
            </nav>
          </div>

          {/* Column 4: Rechtliches */}
          <div>
            <h4 className="text-lg font-bold mb-4">Rechtliches</h4>
            <nav className="space-y-2">
              <a
                href="/impressum"
                className="block text-background/70 hover:text-accent transition-colors"
              >
                Impressum
              </a>
              <a
                href="/datenschutz"
                className="block text-background/70 hover:text-accent transition-colors"
              >
                Datenschutz
              </a>
              <a
                href="/agb"
                className="block text-background/70 hover:text-accent transition-colors"
              >
                AGB
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t-2 border-accent">
          <p className="text-center text-background/70 text-sm">
            © {new Date().getFullYear()} 1A Stolla – Mehmet Stella. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
