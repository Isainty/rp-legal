import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CorporateLaw from "./pages/services/CorporateLaw";
import CivilDefense from "./pages/services/CivilDefense";
import CriminalDefense from "./pages/services/CriminalDefense";
import FamilyLaw from "./pages/services/FamilyLaw";
import RealEstateLaw from "./pages/services/RealEstateLaw";
import OurTeam from "./pages/OurTeam";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/corporate-law" element={<CorporateLaw />} />
          <Route path="/services/civil-defense" element={<CivilDefense />} />
          <Route path="/services/criminal-defense" element={<CriminalDefense />} />
          <Route path="/services/family-law" element={<FamilyLaw />} />
          <Route path="/services/real-estate-law" element={<RealEstateLaw />} />
          <Route path="/our-team" element={<OurTeam />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;