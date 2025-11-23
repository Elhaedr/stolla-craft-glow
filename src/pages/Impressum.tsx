import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">Impressum</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Angaben gemäß Schweizer Recht</h2>
              <p className="mb-2"><strong className="text-foreground">Firmenname:</strong> 1A Stolla</p>
              <p className="mb-2"><strong className="text-foreground">Inhaber:</strong> Mehmet Stella</p>
              <p className="mb-2"><strong className="text-foreground">Standort:</strong> Belp, Kanton Bern</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Kontakt</h2>
              <p className="mb-2"><strong className="text-foreground">E-Mail:</strong> info@1a-stolla.ch</p>
              <p className="mb-2"><strong className="text-foreground">Telefon:</strong> +41 79 650 91 17</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Registereintrag</h2>
              <p className="mb-2"><strong className="text-foreground">Rechtsform:</strong> Einzelunternehmen</p>
              <p className="mb-2"><strong className="text-foreground">UID:</strong> CHE-461.037.939</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Haftungsausschluss</h2>
              <h3 className="text-xl font-semibold text-foreground mb-2">Inhalt des Onlineangebotes</h3>
              <p className="mb-4">
                Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, 
                Vollständigkeit oder Qualität der bereitgestellten Informationen. 
                Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller 
                oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der 
                dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und 
                unvollständiger Informationen verursacht wurden, sind grundsätzlich 
                ausgeschlossen.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">Verweise und Links</h3>
              <p className="mb-4">
                Bei direkten oder indirekten Verweisen auf fremde Webseiten 
                ("Hyperlinks"), die außerhalb des Verantwortungsbereiches des Autors 
                liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in 
                Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm 
                technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger 
                Inhalte zu verhindern.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">Urheberrecht</h3>
              <p>
                Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der 
                verwendeten Bilder, Grafiken, Tondokumente, Videosequenzen und Texte zu 
                beachten, von ihm selbst erstellte Bilder, Grafiken, Tondokumente, 
                Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken, 
                Tondokumente, Videosequenzen und Texte zurückzugreifen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
