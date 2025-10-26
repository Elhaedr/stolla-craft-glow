import { useEffect } from "react";
import { Calendar } from "lucide-react";

const CalendarBooking = () => {
  useEffect(() => {
    // Cal.com Embed Script
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    (window as any).Cal("init", "termin-buchen", {
      origin: "https://app.cal.com",
    });

    (window as any).Cal.ns["termin-buchen"]("inline", {
      elementOrSelector: "#my-cal-inline-termin-buchen",
      config: { layout: "month_view", theme: "light" },
      calLink: "1a-stolla/termin-buchen",
    });

    (window as any).Cal.ns["termin-buchen"]("ui", {
      theme: "light",
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <section id="kalender" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Calendar className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Termin buchen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wählen Sie einen passenden Termin für eine kostenlose Besichtigung
            oder Beratung
          </p>
        </div>

        {/* Cal.com Embed */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-lg border-2 border-border overflow-hidden">
            <div
              style={{ width: "100%", height: "700px", overflow: "scroll" }}
              id="my-cal-inline-termin-buchen"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarBooking;
