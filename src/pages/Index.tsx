import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Trust from "@/components/Trust";
import SiNa from "@/components/SiNa";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const CalendarBooking = lazy(() => import("@/components/CalendarBooking"));

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Vertical yellow-black bar on the right side */}
      <div className="fixed right-0 top-0 bottom-0 w-3 z-30 pointer-events-none">
        <div className="h-1/2 bg-yellow-400" />
        <div className="h-1/2 bg-black" />
      </div>
      
      <Navigation />
      <main itemScope itemType="https://schema.org/WebPage">
        <Hero />
        <WhyUs />
        <Services />
        <Trust />
        <SiNa />
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
