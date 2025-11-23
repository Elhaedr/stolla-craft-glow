import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Trust from "@/components/Trust";
import SiNa from "@/components/SiNa";
import Testimonials from "@/components/Testimonials";
import AboutMe from "@/components/AboutMe";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.1a-stolla.ch/"
          }]
        })}
      </script>
      <main itemScope itemType="https://schema.org/WebPage">
        <Hero />
        <WhyUs />
        <Services />
        <Trust />
        <SiNa />
        <Testimonials />
        <AboutMe />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
