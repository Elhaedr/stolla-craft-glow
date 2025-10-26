import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import AGB from "./pages/AGB";
import Hauswartung from "./pages/leistungen/Hauswartung";
import Installationen from "./pages/leistungen/Installationen";
import Renovationen from "./pages/leistungen/Renovationen";
import Service from "./pages/leistungen/Service";
import Innenausbau from "./pages/leistungen/Innenausbau";
import Montagen from "./pages/leistungen/Montagen";
import Malerarbeiten from "./pages/leistungen/Malerarbeiten";
import Kuechen from "./pages/leistungen/Kuechen";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="/leistungen/hauswartung" element={<Hauswartung />} />
          <Route path="/leistungen/installationen" element={<Installationen />} />
          <Route path="/leistungen/renovationen" element={<Renovationen />} />
          <Route path="/leistungen/service" element={<Service />} />
          <Route path="/leistungen/innenausbau" element={<Innenausbau />} />
          <Route path="/leistungen/montagen" element={<Montagen />} />
          <Route path="/leistungen/malerarbeiten" element={<Malerarbeiten />} />
          <Route path="/leistungen/kuechen" element={<Kuechen />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
