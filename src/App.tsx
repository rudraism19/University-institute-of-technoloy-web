import { useState, useEffect, lazy, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Session } from "@supabase/supabase-js";

// Components
import Layout from "./components/Layout";
const Chatbot = lazy(() => import("./components/Chatbot"));

// Pages (Lazy Loaded)
const Home = lazy(() => import("./pages/Home"));
const UserInfo = lazy(() => import("./pages/UserInfo"));
const Faculty = lazy(() => import("./pages/Faculty"));
const Department = lazy(() => import("./pages/Department"));
const Academic = lazy(() => import("./pages/Academic"));
const QuickLink = lazy(() => import("./pages/QuickLink"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Nptel = lazy(() => import("./pages/Nptel"));
const Gallery = lazy(() => import("./pages/Gallery"));

const queryClient = new QueryClient();

const App = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');
  const [activeAttendanceMethod, setActiveAttendanceMethod] = useState('code');

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

  const handleSectionChange = (section: string, subSection?: string) => {
    setCurrentSection(section);
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
      case 'quick-link': return <QuickLink />;
      case 'contact-us': return <ContactUs />;
      case 'nptel': return <Nptel />;
      case 'gallery': return <Gallery />;
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
            <img src="/rgpv-logo.webp" alt="Loading Logo" className="w-12 h-12" />
          </div>
          <p className="text-muted-foreground">Loading FestHub...</p>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        <Layout 
          user={session?.user}
          currentSection={currentSection} 
          onSectionChange={handleSectionChange}
          bannerTitle={bannerForSection?.title}
          bannerDetails={bannerForSection?.details}
        >
          <Suspense fallback={<div>Loading...</div>}>
            {renderCurrentSection()}
          </Suspense>
        </Layout>
        <Suspense fallback={null}>
          <Chatbot />
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
