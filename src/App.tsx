import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import { lazy, Suspense } from 'react';
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import {PageWrapper} from './components/PageWrapper'
import { LoadingSpinner } from './components/LoadingSpinner'
import { AnimatePresence } from 'framer-motion'

// Lazy load pages for better performance
const VLR_Page = lazy(() => import("./pages/VLR_Page"));
const SwervePage = lazy(() => import("./pages/SwervePage"));
const FLL_Page = lazy(() => import("./pages/FLL_Page"));
const FirstGlobalPage = lazy(() => import("./pages/FirstGlobalPage"));
const CombustionEngine = lazy(() => import("./pages/CombustionEngine"));
const KineticLaunchPlatform = lazy(() => import("./pages/KineticLaunchPlatform"));
const RubensTube = lazy(() => import("./pages/RubensTube"));
const Contact = lazy(() => import("./pages/Contact"));
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
              <Suspense fallback={<LoadingSpinner />}>
                <VLR_Page />
              </Suspense>
            </PageWrapper>
          }/>
          <Route path="/Swerve" element={
            <PageWrapper>
              <Suspense fallback={<LoadingSpinner />}>
                <SwervePage />
              </Suspense>
            </PageWrapper>
          }/>
          <Route path="/FLL" element={
            <PageWrapper>
              <Suspense fallback={<LoadingSpinner />}>
                <FLL_Page />
              </Suspense>
            </PageWrapper>
          }/>
          <Route path="/FirstGlobal" element={
            <PageWrapper>
              <Suspense fallback={<LoadingSpinner />}>
                <FirstGlobalPage />
              </Suspense>
            </PageWrapper>
          }/>
          <Route path="/CombustionEngine" element={
            <PageWrapper>
              <Suspense fallback={<LoadingSpinner />}>
                <CombustionEngine />
              </Suspense>
            </PageWrapper>
          }/>
          <Route path="/KineticLaunchPlatform" element={
            <PageWrapper>
              <Suspense fallback={<LoadingSpinner />}>
                <KineticLaunchPlatform />
              </Suspense>
            </PageWrapper>
          }/>
          <Route path="/RubensTube" element={
            <PageWrapper>
              <Suspense fallback={<LoadingSpinner />}>
                <RubensTube />
              </Suspense>
            </PageWrapper>
          }/>
          <Route path="/contact" element={
            <PageWrapper>
              <Suspense fallback={<LoadingSpinner />}>
                <Contact />
              </Suspense>
            </PageWrapper>
          }/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
  )
}
