import { useState, useEffect, lazy, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Session } from "@supabase/supabase-js";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Components
import Layout from "./components/Layout";
import SEOHead from "./components/SEOHead";
const Chatbot = lazy(() => import("./components/Chatbot"));

// Pages (Lazy Loaded)
const Home = lazy(() => import("./pages/Home"));
const UserInfo = lazy(() => import("./pages/UserInfo"));
const Faculty = lazy(() => import("./pages/Faculty"));
const Department = lazy(() => import("./pages/Department"));
const Academic = lazy(() => import("./pages/Academic"));

const Events = lazy(() => import("./pages/Events"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Placement = lazy(() => import("./pages/Placement"));
const Clubs = lazy(() => import("./pages/Clubs"));
const Resources = lazy(() => import("./pages/Resources"));

const queryClient = new QueryClient();

const VALID_SECTIONS = [
  'home',
  'faculty',
  'department',
  'academic',
  'placement',
  'gallery',
  'events',
  'clubs',
  'resources',
  'user-info'
];

const App = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  // Synchronize section state with URL hash for search engine indexing and browser back/forward buttons
  const getInitialSection = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    return VALID_SECTIONS.includes(hash) ? hash : 'home';
  };

  const [currentSection, setCurrentSection] = useState(getInitialSection);
  const [, setActiveAttendanceMethod] = useState('code');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Sync state when user navigates using browser back / forward buttons or clicks anchor links
  useEffect(() => {
    const handleNavigation = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (VALID_SECTIONS.includes(hash)) {
        setCurrentSection(hash);
      } else if (!hash) {
        setCurrentSection('home');
      }
    };

    window.addEventListener('hashchange', handleNavigation);
    window.addEventListener('popstate', handleNavigation);
    return () => {
      window.removeEventListener('hashchange', handleNavigation);
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  const handleSectionChange = (section: string, subSection?: string) => {
    setCurrentSection(section);
    const targetHash = section === 'home' ? '' : `#${section}`;
    if (window.location.hash !== targetHash) {
      if (section === 'home') {
        window.history.pushState(null, '', window.location.pathname);
      } else {
        window.history.pushState(null, '', `#${section}`);
      }
    }
    if (section === 'attendance' && subSection) {
      setActiveAttendanceMethod(subSection);
    }
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'home': return <Home onSectionChange={handleSectionChange} />;
      case 'user-info': return <UserInfo />;
      case 'faculty': return <Faculty />;
      case 'department': return <Department />;
      case 'academic': return <Academic />;
      case 'events': return <Events user={session?.user} />;
      case 'gallery': return <Gallery />;
      case 'placement': return <Placement />;
      case 'clubs': return <Clubs />;
      case 'resources': return <Resources />;
      default: return <Home onSectionChange={handleSectionChange} />;
    }
  };

  // Banner content (shown on all sections)
  const bannerForSection = {
    title: 'UNIVERSITY INSTITUTE OF TECHNOLOGY, SHIVPURI',
    details: '(A constituent institute of Rajiv Gandhi Proudyogiki Vishwavidyalaya) • Government of Madhya Pradesh'
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto animate-pulse">
            <img
              src="/rgpv-logo.webp"
              alt="UIT RGPV Shivpuri Crest"
              width={48}
              height={48}
              className="w-12 h-12"
            />
          </div>
          <p className="text-muted-foreground font-medium">Loading UIT RGPV Shivpuri...</p>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <TooltipProvider>
          <SEOHead section={currentSection} />
          <Toaster />
          <Sonner />

          <Layout
            user={session?.user}
            currentSection={currentSection}
            onSectionChange={handleSectionChange}
            bannerTitle={bannerForSection?.title}
            bannerDetails={bannerForSection?.details}
          >
            <Suspense fallback={
              <div className="min-h-[50vh] flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            }>
              {renderCurrentSection()}
            </Suspense>
          </Layout>

          <Suspense fallback={null}>
            <Chatbot />
          </Suspense>

          <SpeedInsights />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
