import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import VLR_Page from "./pages/VLR_Page.tsx";
import NotFound from "./pages/NotFound";
import {PageWrapper} from './components/PageWrapper'
import { AnimatePresence } from 'framer-motion'
import SwervePage from "@/pages/SwervePage.tsx";
import FLL_Page from "@/pages/FLL_Page.tsx";
import FirstGlobalPage from "@/pages/FirstGlobalPage.tsx";
import CombustionEngine from "@/pages/CombustionEngine.tsx";
import KineticLaunchPlatform from "@/pages/KineticLaunchPlatform.tsx";
import RubensTube from "@/pages/RubensTube.tsx";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div style={{ backgroundColor: '#000', minHeight: '100vh' }}>
          <AnimatedRoutes />
        </div>
        {/*<Routes>*/}
        {/*  <Route path="/" element={<LandingPage />} />*/}
        {/*  <Route path="/details" element={<Details />} />*/}
        {/*  <Route path="/robot" element={<VLR_Page />} />*/}
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
          <Route path="/VLR" element={
            <PageWrapper>
              <VLR_Page />
            </PageWrapper>
          }/>
          <Route path="/Swerve" element={
            <PageWrapper>
              <SwervePage />
            </PageWrapper>
          }/>
          <Route path="/FLL" element={
            <PageWrapper>
              <FLL_Page />
            </PageWrapper>
          }/>
          <Route path="/FirstGlobal" element={
            <PageWrapper>
              <FirstGlobalPage />
            </PageWrapper>
          }/>
          <Route path="/CombustionEngine" element={
            <PageWrapper>
              <CombustionEngine />
            </PageWrapper>
          }/>
          <Route path="/KineticLaunchPlatform" element={
            <PageWrapper>
              <KineticLaunchPlatform />
            </PageWrapper>
          }/>
          <Route path="/RubensTube" element={
            <PageWrapper>
              <RubensTube />
            </PageWrapper>
          }/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
  )
}
