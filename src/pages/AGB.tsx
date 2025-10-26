import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AGB = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Geltungsbereich</h2>
              <p className="mb-4">
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle 
                Geschäftsbeziehungen zwischen 1A Stolla (nachfolgend "Auftragnehmer") 
                und seinen Kunden (nachfolgend "Auftraggeber"). Abweichende Bedingungen 
                des Auftraggebers werden nicht anerkannt, es sei denn, der Auftragnehmer 
                stimmt ihrer Geltung ausdrücklich schriftlich zu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Vertragsabschluss</h2>
              <p className="mb-4">
                Der Vertrag kommt durch schriftliche Auftragsbestätigung oder durch 
                Beginn der Arbeiten zustande. Mündliche Nebenabreden bedürfen zu ihrer 
                Wirksamkeit der schriftlichen Bestätigung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Leistungsumfang</h2>
              <p className="mb-4">
                Der Umfang der zu erbringenden Leistungen ergibt sich aus der 
                Auftragsbestätigung. Zusätzliche Leistungen werden gesondert berechnet. 
                Der Auftragnehmer ist berechtigt, Teile der Leistungen durch qualifizierte 
                Dritte (Subunternehmer) ausführen zu lassen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Preise und Zahlungsbedingungen</h2>
              <p className="mb-4">
                Es gelten die in der Auftragsbestätigung genannten Preise. Alle Preise 
                verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer. Rechnungen sind 
                innerhalb von 30 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig.
              </p>
              <p className="mb-4">
                Bei Zahlungsverzug werden Verzugszinsen in Höhe von 5% über dem 
                jeweiligen Basiszinssatz berechnet. Die Geltendmachung weiterer 
                Verzugsschäden bleibt vorbehalten.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Ausführungsfristen</h2>
              <p className="mb-4">
                Vereinbarte Fristen und Termine sind nur dann verbindlich, wenn sie 
                ausdrücklich schriftlich als verbindlich vereinbart wurden. Der 
                Auftragnehmer ist zu Teilleistungen berechtigt, sofern dies für den 
                Auftraggeber zumutbar ist.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Pflichten des Auftraggebers</h2>
              <p className="mb-4">
                Der Auftraggeber verpflichtet sich:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Rechtzeitig für einen geeigneten Arbeitsplatz zu sorgen</li>
                <li>Strom- und Wasseranschlüsse sowie erforderliche Entsorgungsmöglichkeiten kostenlos zur Verfügung zu stellen</li>
                <li>Notwendige behördliche Genehmigungen einzuholen</li>
                <li>Bestehende Installationen und Bausubstanz offenzulegen</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Gewährleistung</h2>
              <p className="mb-4">
                Der Auftragnehmer gewährleistet, dass die Arbeiten fachgerecht und 
                entsprechend den anerkannten Regeln der Technik ausgeführt werden. Die 
                Gewährleistungsfrist beträgt 2 Jahre ab Abnahme. Bei berechtigten 
                Mängelrügen besteht zunächst ein Recht auf Nachbesserung.
              </p>
              <p className="mb-4">
                Offensichtliche Mängel sind innerhalb von 14 Tagen nach Abnahme 
                schriftlich zu rügen. Bei nicht rechtzeitiger Mängelrüge gilt die 
                Leistung als genehmigt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Haftung</h2>
              <p className="mb-4">
                Der Auftragnehmer haftet für Schäden nur bei Vorsatz und grober 
                Fahrlässigkeit. Die Haftung für leichte Fahrlässigkeit ist 
                ausgeschlossen, soweit nicht wesentliche Vertragspflichten verletzt oder 
                Schäden an Leben, Körper oder Gesundheit verursacht wurden.
              </p>
              <p className="mb-4">
                Der Auftragnehmer ist haftpflichtversichert. Im Schadensfall haftet der 
                Auftragnehmer nur im Rahmen seiner Haftpflichtversicherung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Eigentumsvorbehalt</h2>
              <p className="mb-4">
                Alle gelieferten und eingebauten Materialien bleiben bis zur 
                vollständigen Bezahlung aller Forderungen Eigentum des Auftragnehmers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Kündigung</h2>
              <p className="mb-4">
                Beide Parteien können den Vertrag aus wichtigem Grund jederzeit 
                schriftlich kündigen. Im Falle der Kündigung durch den Auftraggeber 
                werden bereits erbrachte Leistungen und angefallene Kosten in Rechnung 
                gestellt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Gerichtsstand und anwendbares Recht</h2>
              <p className="mb-4">
                Es gilt ausschließlich Schweizer Recht. Gerichtsstand ist der Sitz des 
                Auftragnehmers, sofern der Auftraggeber Kaufmann, juristische Person des 
                öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Salvatorische Klausel</h2>
              <p>
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, 
                wird die Wirksamkeit der übrigen Bestimmungen davon nicht berührt. Die 
                unwirksame Bestimmung ist durch eine wirksame zu ersetzen, die dem 
                wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.
              </p>
            </section>

            <section className="mt-12 pt-8 border-t border-border">
              <p className="text-sm">
                <strong className="text-foreground">Stand:</strong> Januar 2025<br />
                <strong className="text-foreground">1A Stolla</strong> - Mehmet Stella
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AGB;
