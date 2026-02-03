import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Methodology from "./pages/Methodology";
import GlobalTrends from "./pages/GlobalTrends";
import Correlation from "./pages/Correlation";
import CountryComparison from "./pages/CountryComparison";
import ExpertUncertainty from "./pages/ExpertUncertainty";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/global-trends" element={<GlobalTrends />} />
          <Route path="/correlation" element={<Correlation />} />
          <Route path="/country-comparison" element={<CountryComparison />} />
          <Route path="/expert-uncertainty" element={<ExpertUncertainty />} />
          <Route path="/team" element={<Team />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
