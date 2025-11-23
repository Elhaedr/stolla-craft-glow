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
      {/* Vertical bar across entire website - yellow left, black right */}
      <div className="fixed left-0 top-0 bottom-0 w-[50px] z-30 pointer-events-none flex">
        <div className="w-1/2 bg-yellow-400" />
        <div className="w-1/2 bg-black" />
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
