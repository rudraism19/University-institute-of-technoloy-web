import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, LogOut, User as UserIcon, Sparkles, Home, Calendar as CalendarIcon, Users, CheckSquare, Target, Image as ImageIcon, Rss, Briefcase, Building2, GraduationCap, Link, Phone, BookOpen, ChevronDown } from 'lucide-react';
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

const Layout = ({ children, currentSection, onSectionChange, user, bannerTitle, bannerDetails }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [bannerHeight, setBannerHeight] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile(); // Use the hook

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'faculty', label: 'Faculty', icon: Briefcase },
    { id: 'department', label: 'Department', icon: Building2 },
    { id: 'academic', label: 'Academic', icon: GraduationCap },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon },
    { id: 'quick-link', label: 'Quick Link', icon: Link },
    { id: 'contact-us', label: 'Contact Us', icon: Phone },
    { id: 'events', label: 'Events', icon: CalendarIcon },
  ];

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

  useEffect(() => {
    const calculateBannerHeight = () => {
      if (bannerRef.current) {
        setBannerHeight(bannerRef.current.offsetHeight);
      }
    };
    calculateBannerHeight();
    window.addEventListener('resize', calculateBannerHeight);
    return () => window.removeEventListener('resize', calculateBannerHeight);
  }, [bannerTitle, bannerDetails]);

  const hasBanner = Boolean(bannerTitle || bannerDetails);

  return (
    <div className="min-h-screen bg-beige flex flex-col">
      <div className="flex-grow">
        {/* Top Banner (optional) */}
        {(bannerTitle || bannerDetails) && (
          <div ref={bannerRef} className="fixed top-0 w-full glass-nav text-foreground z-50">
            <div className="container mx-auto px-4 py-3 flex flex-col items-center justify-center">
              <div className="max-w-4xl px-2">
                {bannerTitle && <div className="text-center font-extrabold text-lg md:text-2xl lg:text-3xl">{bannerTitle}</div>}
                {bannerDetails && <div className="mt-1 text-center text-sm md:text-base text-muted-foreground">{bannerDetails}</div>}
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav
          style={isMobile ? { top: hasBanner ? bannerHeight : 48 } : {}}
          className={`fixed w-full glass-nav text-gray-800 z-40 animate-in fade-in slide-in-from-top-4 duration-500 ${!isMobile && (hasBanner ? 'top-20' : 'top-12')}`}
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
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
                  <li key={item.id} className="animate-in fade-in slide-in-from-top-2" style={{ animationDelay: `${100 + index * 100}ms`}}>
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
                  <li className="animate-in fade-in slide-in-from-top-2" style={{ animationDelay: `${100 + 8 * 100}ms`}}>
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

              <div className="hidden md:flex items-center gap-4">
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

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden pb-4 animate-in slide-in-from-top-4 duration-300 bg-beige text-gray-800">
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
                      style={{ animationDelay: `${100 + index * 50}ms`}}
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
                                          style={{ animationDelay: `${100 + navItems.length * 50}ms`}}
                                        >
                                          <UserIcon className="w-4 h-4 mr-2" />
                                          My Profile
                                        </Button>
                                        <Button
                                          variant="ghost"
                                          onClick={handleLogout}
                                          className="justify-start text-red-500 hover:text-red-600 animate-in fade-in slide-in-from-left-4"
                                          style={{ animationDelay: `${150 + navItems.length * 50}ms`}}
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
                          </nav>
        {/* Main Content */}
        <main
          style={isMobile ? { paddingTop: bannerHeight + 64 } : {}}
          className={` ${!isMobile && (hasBanner ? 'pt-32' : 'pt-24')}`}
        >
          {children}
        </main>

        {/* Scroll Progress Indicator */}
        <div
          style={isMobile ? { top: bannerHeight } : {}}
          className={`fixed left-0 w-full h-1 bg-muted z-30 ${!isMobile && (hasBanner ? 'top-20' : 'top-12')}`}
        >
          <div 
            className="h-full bg-primary transition-transform duration-300 ease-out origin-left" 
            style={{ transform: `scaleX(${scrollProgress / 100})` }} 
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
