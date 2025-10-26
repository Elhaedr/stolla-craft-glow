import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">Datenschutzerklärung</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-xl font-semibold text-foreground mb-2">Allgemeine Hinweise</h3>
              <p className="mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit 
                Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. 
                Personenbezogene Daten sind alle Daten, mit denen Sie persönlich 
                identifiziert werden können.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Verantwortliche Stelle</h2>
              <p className="mb-2">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <p className="mb-2"><strong className="text-foreground">1A Stolla</strong></p>
              <p className="mb-2">Mehmet Stella</p>
              <p className="mb-2">[Ihre Geschäftsadresse]</p>
              <p className="mb-2">[PLZ] [Ort], Schweiz</p>
              <p className="mb-2">E-Mail: info@1a-stolla.ch</p>
              <p className="mb-2">Telefon: [Ihre Telefonnummer]</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">Kontaktformular</h3>
              <p className="mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre 
                Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen 
                Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von 
                Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne 
                Ihre Einwilligung weiter.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">Terminbuchung</h3>
              <p className="mb-4">
                Bei der Nutzung unseres Terminbuchungssystems werden Ihre Kontaktdaten 
                (Name, E-Mail, Telefonnummer) sowie Ihre Terminwünsche erfasst und 
                gespeichert. Diese Daten werden ausschließlich zur Terminkoordination 
                verwendet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Cookies</h2>
              <p className="mb-4">
                Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die 
                auf Ihrem Computer gespeichert werden und die Ihr Browser speichert. 
                Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine 
                Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver 
                und sicherer zu machen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Server-Log-Dateien</h2>
              <p className="mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen 
                in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns 
                übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="mb-4">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht 
                vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage unserer 
                berechtigten Interessen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Ihre Rechte</h2>
              <p className="mb-4">Sie haben folgende Rechte:</p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Recht auf Auskunft über Ihre gespeicherten Daten</li>
                <li>Recht auf Berichtigung unrichtiger Daten</li>
                <li>Recht auf Löschung Ihrer Daten</li>
                <li>Recht auf Einschränkung der Datenverarbeitung</li>
                <li>Recht auf Datenübertragbarkeit</li>
                <li>Recht auf Widerspruch gegen die Datenverarbeitung</li>
              </ul>
              <p>
                Wenden Sie sich hierzu bitte an: info@1a-stolla.ch
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Datensicherheit</h2>
              <p>
                Wir verwenden innerhalb des Website-Besuchs das verbreitete 
                SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils 
                höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. 
                Wir weisen Sie jedoch darauf hin, dass die Datenübertragung im Internet 
                Sicherheitslücken aufweisen kann.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
