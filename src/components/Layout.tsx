import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, LogOut, User as UserIcon, Sparkles, Home, Calendar as CalendarIcon, Users, CheckSquare, Target, Image as ImageIcon, Rss, Briefcase, Building2, GraduationCap, Link, Phone, BookOpen, ChevronDown, TrendingUp } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { User } from '@supabase/supabase-js';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useIsMobile } from '@/hooks/use-mobile'; // Import the hook

interface LayoutProps {
  children: React.ReactNode;
  currentSection: string;
  onSectionChange: (section: string) => void;
  user: User | undefined;
  bannerTitle?: string;
  bannerDetails?: string;
}


import Footer from './Footer';
import { InfiniteTextCarousel } from './InfiniteTextCarousel';
import Chatbot from './Chatbot';


const Layout = ({ children, currentSection, onSectionChange, user, bannerTitle, bannerDetails }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isMobile = useIsMobile(); // Use the hook

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'faculty', label: 'Faculty', icon: Briefcase },
    { id: 'department', label: 'Department', icon: Building2 },
    { id: 'academic', label: 'Academic', icon: GraduationCap },
    { id: 'placement', label: 'Placement', icon: TrendingUp },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon },
    { id: 'events', label: 'Events', icon: CalendarIcon },
    { id: 'clubs', label: 'Clubs', icon: Users },
  ];

  /* Removed headerHeight state logic as we are switching to Sticky Nav */

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    setScrollProgress((window.scrollY / totalHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentSection]);

  return (
    <div className="min-h-screen bg-beige flex flex-col">
      {/* 1. Infinite Text Carousel (Static - Scrolls away) */}
      <InfiniteTextCarousel />

      {/* 2. Top Banner (Static - Scrolls away) */}
      {(bannerTitle || bannerDetails) && (
        <div className="w-full glass-nav text-foreground border-b border-white/20 z-50">
          <div className="container mx-auto px-4 py-2 flex flex-col items-center justify-center">
            <div className="max-w-4xl px-2">
              {bannerTitle && <div className="text-center font-bold text-sm md:text-xl lg:text-2xl tracking-tight">{bannerTitle}</div>}
              {bannerDetails && <div className="mt-0.5 text-center text-[10px] md:text-sm text-muted-foreground">{bannerDetails}</div>}
            </div>
          </div>
        </div>
      )}

      {/* 3. Navigation (Sticky - Stays at top) */}
      <nav className="w-full glass-nav text-gray-800 z-40 sticky top-0 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110">
                <img src="/rgpv-logo.webp" alt="FestHub Logo" className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="text-2xl font-bold text-primary">UIT RGPV</span>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-2">
              {navItems.slice(0, 8).map((item, index) => (
                <li key={item.id} className="animate-in fade-in slide-in-from-top-2" style={{ animationDelay: `${100 + index * 100}ms` }}>
                  <Button
                    variant={currentSection === item.id ? "default" : "ghost"}
                    onClick={() => onSectionChange(item.id)}
                    className="font-medium transition-transform hover:scale-105"
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                </li>
              ))}
              {navItems.length > 8 && (
                <li className="animate-in fade-in slide-in-from-top-2" style={{ animationDelay: `${100 + 8 * 100}ms` }}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="font-medium transition-transform hover:scale-105"
                      >
                        More
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {navItems.slice(8).map((item) => (
                        <DropdownMenuItem key={item.id} onClick={() => onSectionChange(item.id)}>
                          <item.icon className="w-4 h-4 mr-2" />
                          {item.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              )}
            </ul>

            <div className="hidden md:flex items-center gap-2">
              {user && (
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full transition-transform hover:scale-110">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>
                          {user.email ? user.email.charAt(0).toUpperCase() : <UserIcon />}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {user.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => onSectionChange('user-info')}>
                      <UserIcon className="mr-2 h-4 w-4" />
                      <span>My Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="transition-transform hover:scale-110"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation - Scrollable with max-height */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 animate-in slide-in-from-top-4 duration-300 bg-beige text-gray-800 border-t border-gray-200 max-h-[80vh] overflow-y-auto shadow-inner">
              <div className="flex flex-col gap-2 px-4 py-2">
                {navItems.map((item, index) => (
                  <Button
                    key={item.id}
                    variant={currentSection === item.id ? "default" : "ghost"}
                    onClick={() => {
                      onSectionChange(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className="justify-start animate-in fade-in slide-in-from-left-4"
                    style={{ animationDelay: `${100 + index * 50}ms` }}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                ))}
                {user && (
                  <>
                    <DropdownMenuSeparator />
                    <Button
                      variant="ghost"
                      onClick={() => {
                        onSectionChange('user-info');
                        setMobileMenuOpen(false);
                      }}
                      className="justify-start animate-in fade-in slide-in-from-left-4"
                      style={{ animationDelay: `${100 + navItems.length * 50}ms` }}
                    >
                      <UserIcon className="w-4 h-4 mr-2" />
                      My Profile
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={handleLogout}
                      className="justify-start text-red-500 hover:text-red-600 animate-in fade-in slide-in-from-left-4"
                      style={{ animationDelay: `${150 + navItems.length * 50}ms` }}
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Log out
                    </Button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Scroll Progress Indicator - Attached to bottom of Sticky Nav */}
        <div className="w-full h-1 bg-muted relative">
          <div
            className="h-full bg-primary transition-transform duration-300 ease-out origin-left absolute top-0 left-0 w-full"
            style={{ transform: `scaleX(${scrollProgress / 100})` }}
          />
        </div>
      </nav>

      {/* Main Content - No extra padding needed as header is not fixed over it (except sticky nav which is in flow) */}
      <div className="flex-grow">
        <main className="transition-all duration-300">
          {children}
        </main>
      </div>

      <Footer />
      <Chatbot />
    </div>
  );
};
export default Layout;
