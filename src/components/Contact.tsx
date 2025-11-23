import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

// Validation schema
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name ist erforderlich" })
    .max(100, { message: "Name darf maximal 100 Zeichen lang sein" })
    .regex(/^[\p{L}\p{M}\s.'-]+$/u, { message: "Name darf nur Buchstaben, Leerzeichen und .'-  enthalten" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "E-Mail ist erforderlich" })
    .email({ message: "Ungültige E-Mail-Adresse" })
    .max(255, { message: "E-Mail darf maximal 255 Zeichen lang sein" }),
  phone: z
    .string()
    .trim()
    .regex(/^(\+41|0)[0-9\s]{7,18}$/, { message: "Bitte geben Sie eine gültige Schweizer Telefonnummer ein" })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(1, { message: "Nachricht ist erforderlich" })
    .max(2000, { message: "Nachricht darf maximal 2000 Zeichen lang sein" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validate form data
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      // Extract validation errors
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      });
      setErrors(fieldErrors);
      
      toast({
        title: "Validierungsfehler",
        description: "Bitte überprüfen Sie Ihre Eingaben.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: result.data.name,
          email: result.data.email,
          phone: result.data.phone || "Nicht angegeben",
          message: result.data.message,
        },
      });

      if (error) throw error;

      toast({
        title: "Anfrage gesendet!",
        description:
          "Vielen Dank für Ihre Nachricht. Ich melde mich schnellstmöglich bei Ihnen.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch (error) {
      toast({
        title: "Fehler beim Senden",
        description: "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Kontakt aufnehmen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ich freue mich auf Ihre Anfrage – per Formular, Telefon oder E-Mail
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Form */}
          <div className="bg-card rounded-lg p-8 border-2 border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Angebot anfordern
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength={100}
                  className={`w-full px-4 py-3 bg-muted border-2 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-200 ${
                    errors.name ? "border-destructive" : "border-border"
                  }`}
                  placeholder="Ihr Name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-destructive">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={255}
                  className={`w-full px-4 py-3 bg-muted border-2 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-200 ${
                    errors.email ? "border-destructive" : "border-border"
                  }`}
                  placeholder="ihre.email@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={20}
                  className={`w-full px-4 py-3 bg-muted border-2 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-200 ${
                    errors.phone ? "border-destructive" : "border-border"
                  }`}
                  placeholder="+41 79 123 45 67"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1 text-sm text-destructive">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={2000}
                  rows={5}
                  className={`w-full px-4 py-3 bg-muted border-2 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-200 resize-none ${
                    errors.message ? "border-destructive" : "border-border"
                  }`}
                  placeholder="Beschreiben Sie Ihr Anliegen..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                    Wird gesendet...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Anfrage senden
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="space-y-8">
            <div className="bg-card rounded-lg p-8 border-2 border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-accent pb-3">
                Direkt kontaktieren
              </h3>

              <div className="space-y-6">
                <a
                  href="mailto:info@1a-stolla.ch"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">E-Mail</p>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">
                      info@1a-stolla.ch
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+41796509117"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Telefon</p>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">
                      +41 79 650 91 17
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Belp,+Bern,+Switzerland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Standort</p>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">Kanton Bern / Belp</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-card rounded-lg p-8 border-2 border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Erreichbarkeit
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Montag - Freitag</span>
                  <span className="font-medium text-foreground">
                    07:00 - 18:00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Samstag</span>
                  <span className="font-medium text-foreground">
                    08:00 - 12:00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Notfälle</span>
                  <span className="font-medium text-accent">24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
