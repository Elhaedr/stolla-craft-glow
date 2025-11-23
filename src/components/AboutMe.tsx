import { User } from "lucide-react";

const AboutMe = () => {
  return (
    <section id="ueber-uns" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Über mich
          </h2>
        </header>

        {/* Content Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] bg-muted rounded-lg flex items-center justify-center border-2 border-border">
              <div className="text-center">
                <User className="w-24 h-24 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground font-medium">Mehmet Stolla</p>
                <p className="text-sm text-muted-foreground">Foto folgt</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Ich bin Mehmet Stolla, Inhaber von 1A Stolla mit Standort Belp. Seit vielen Jahren bin ich in der Elektrobranche tätig und habe in zahlreichen Projekten – von Neubauten über Umbauten bis hin zu spezialisierten Installationen – umfassende praktische Erfahrung gesammelt.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Durch meine Einsätze bei verschiedenen Elektrofirmen im Kanton Bern habe ich gelernt, effizient, sauber und lösungsorientiert zu arbeiten. Ob Geräteanschluss, sichere Installation, Renovation oder präzise Montage – ich setze jeden Auftrag mit hoher Sorgfalt und persönlicher Verantwortung um.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Als Ein-Mann-Betrieb haben meine Kunden einen direkten Ansprechpartner, klare Kommunikation und Arbeiten aus einer Hand. Ich stehe für Zuverlässigkeit, Termintreue und fachgerechte Ausführung – von der ersten Besprechung bis zur finalen Übergabe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
