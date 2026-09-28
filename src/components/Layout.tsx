import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, LogOut, User as UserIcon, Home, Calendar as CalendarIcon, Users, Image as ImageIcon, Briefcase, Building2, GraduationCap, ChevronDown, TrendingUp, BookOpen } from 'lucide-react';
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
import Footer from './Footer';
import { InfiniteTextCarousel } from './InfiniteTextCarousel';

interface LayoutProps {
  children: React.ReactNode;
  currentSection: string;
  onSectionChange: (section: string) => void;
  user: User | undefined;
  bannerTitle?: string;
  bannerDetails?: string;
}

const Layout = ({ children, currentSection, onSectionChange, user, bannerTitle, bannerDetails }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'faculty', label: 'Faculty', icon: Briefcase },
    { id: 'department', label: 'Department', icon: Building2 },
    { id: 'academic', label: 'Academic', icon: GraduationCap },
    { id: 'placement', label: 'Placement', icon: TrendingUp },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon },
    { id: 'events', label: 'Events', icon: CalendarIcon },
    { id: 'clubs', label: 'Clubs', icon: Users },
    { id: 'resources', label: 'Resources', icon: BookOpen },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  // High performance scroll progress using requestAnimationFrame and direct DOM transform
  // Avoids triggering React component re-renders on every scroll tick (prevents INP degradation & jank)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          if (totalHeight > 0 && progressBarRef.current) {
            const progress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1);
            progressBarRef.current.style.transform = `scaleX(${progress})`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentSection]);

  return (
    <div className="min-h-screen bg-beige flex flex-col">
      {/* 1. Infinite Text Carousel */}
      <InfiniteTextCarousel />

      {/* 2. Top Banner Header */}
      {(bannerTitle || bannerDetails) && (
        <header className="w-full glass-nav text-foreground border-b border-white/20 z-50">
          <div className="container mx-auto px-4 py-2 flex flex-col items-center justify-center">
            <div className="max-w-4xl px-2">
              {bannerTitle && <h2 className="text-center font-bold text-sm md:text-xl lg:text-2xl tracking-tight">{bannerTitle}</h2>}
              {bannerDetails && <p className="mt-0.5 text-center text-[10px] md:text-sm text-muted-foreground">{bannerDetails}</p>}
            </div>
          </div>
        </header>
      )}

      {/* 3. Navigation Bar (Sticky) */}
      <nav aria-label="Main Navigation" className="w-full glass-nav text-gray-800 z-40 sticky top-0 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onSectionChange('home');
              }}
              className="flex items-center gap-3 cursor-pointer group"
              aria-label="UIT RGPV Shivpuri Home"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <img
                  src="/rgpv-logo.webp"
                  alt="UIT RGPV Shivpuri Official Crest"
                  width={40}
                  height={40}
                  loading="eager"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-2xl font-bold text-primary">UIT RGPV</span>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-1 lg:gap-2">
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
                        variant={navItems.slice(8).some(i => i.id === currentSection) ? "default" : "ghost"}
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
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full transition-transform hover:scale-110" aria-label="User Account Menu">
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
                aria-label="Toggle navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
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

        {/* Scroll Progress Indicator - GPU hardware accelerated scaleX */}
        <div className="w-full h-1 bg-muted relative overflow-hidden" aria-hidden="true">
          <div
            ref={progressBarRef}
            className="h-full bg-primary origin-left absolute top-0 left-0 w-full will-change-transform"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-grow">
        <main className="transition-all duration-300">
          {children}
        </main>
      </div>

      <Footer onSectionChange={onSectionChange} />
    </div>
  );
};

export default Layout;
