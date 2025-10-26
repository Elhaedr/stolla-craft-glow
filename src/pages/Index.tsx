import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Trust from "@/components/Trust";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const CalendarBooking = lazy(() => import("@/components/CalendarBooking"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main itemScope itemType="https://schema.org/WebPage">
        <Hero />
        <Services />
        <Trust />
        <Testimonials />
        <Suspense fallback={<div className="min-h-screen" />}>
          <CalendarBooking />
        </Suspense>
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
