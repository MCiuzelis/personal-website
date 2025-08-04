import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RobotPage from "./pages/RobotPage";
import NotFound from "./pages/NotFound";
import {PageWrapper} from './components/PageWrapper'
import { AnimatePresence } from 'framer-motion'

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div style={{ backgroundColor: '#000', minHeight: '100vh' }}> //1a1a2e
          <AnimatedRoutes />
        </div>
        {/*<Routes>*/}
        {/*  <Route path="/" element={<LandingPage />} />*/}
        {/*  <Route path="/details" element={<Details />} />*/}
        {/*  <Route path="/robot" element={<RobotPage />} />*/}
        {/*  /!* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE *!/*/}
        {/*  <Route path="*" element={<NotFound />} />*/}
        {/*</Routes>*/}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

function AnimatedRoutes() {
  const location = useLocation()
  return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <PageWrapper>
              <LandingPage />
            </PageWrapper>
          }/>
          <Route path="/robot" element={
            <PageWrapper>
              <RobotPage />
            </PageWrapper>
          }/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
  )
}
