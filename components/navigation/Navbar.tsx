'use client';

import { useState, useEffect, useCallback } from 'react';
import BrandMark from '@/components/brand/BrandMark';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const navLinks = [
    { href: '#', label: 'Home', id: 'home' },
    { href: '#robots', label: 'Robots', id: 'robots' },
    { href: '#experiences', label: 'Experiences', id: 'experiences' },
    { href: '#events', label: 'Events', id: 'events' },
    { href: '#packages', label: 'Packages', id: 'packages' },
    { href: '#how-it-works', label: 'How It Works', id: 'how-it-works' },
    { href: '#gallery', label: 'Gallery', id: 'gallery' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleScroll = useCallback(() => {
    if (isReducedMotion) return;

    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Check if at top of page
    if (scrollPosition < windowHeight * 0.3) {
      setActiveSection('home');
      return;
    }

    // Get all sections
    const sections = navLinks
      .filter(link => link.id !== 'home')
      .map(link => document.getElementById(link.id))
      .filter(Boolean) as HTMLElement[];

    // Find which section is most visible
    let maxVisibility = 0;
    let mostVisibleSection = 'home';

    sections.forEach(section => {
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      const sectionHeight = rect.height;

      // Calculate how much of the section is visible in the viewport
      const visibleTop = Math.max(0, sectionTop);
      const visibleBottom = Math.min(windowHeight, sectionBottom);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      
      const visibilityRatio = visibleHeight / sectionHeight;

      if (visibilityRatio > maxVisibility && visibilityRatio > 0.1) {
        maxVisibility = visibilityRatio;
        mostVisibleSection = section.id;
      }
    });

    setActiveSection(mostVisibleSection);
  }, [navLinks, isReducedMotion]);

  useEffect(() => {
    if (isReducedMotion) {
      // For reduced motion, use simpler scroll detection
      const handleScrollSimple = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        
        if (scrollPosition < windowHeight * 0.3) {
          setActiveSection('home');
          return;
        }

        const sections = navLinks
          .filter(link => link.id !== 'home')
          .map(link => document.getElementById(link.id))
          .filter(Boolean) as HTMLElement[];

        for (const section of sections) {
          if (!section) continue;
          const rect = section.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
            setActiveSection(section.id);
            break;
          }
        }
      };

      window.addEventListener('scroll', handleScrollSimple, { passive: true });
      return () => window.removeEventListener('scroll', handleScrollSimple);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, navLinks, isReducedMotion]);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: isReducedMotion ? 'auto' : 'smooth' });
      setActiveSection('home');
      setMobileMenuOpen(false);
      return;
    }

    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: isReducedMotion ? 'auto' : 'smooth'
      });
      
      setActiveSection(targetId);
      setMobileMenuOpen(false);
      
      // Update URL hash without scrolling
      history.pushState(null, '', href);
    }
  }, [isReducedMotion]);

  // Handle initial hash on page load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const targetElement = document.getElementById(hash);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: isReducedMotion ? 'auto' : 'smooth'
          });
          setActiveSection(hash);
        }, 100);
      }
    }
  }, [isReducedMotion]);

  const getNavLinkClassName = (isActive: boolean) => {
    const baseClasses = "text-sm font-medium transition-all duration-300 relative";
    if (isActive) {
      return `${baseClasses} text-ckr-ivory`;
    }
    return `${baseClasses} text-ckr-light-gray hover:text-ckr-gold`;
  };

  const getMobileNavLinkClassName = (isActive: boolean) => {
    const baseClasses = "block py-2 text-base font-medium transition-all duration-300";
    if (isActive) {
      return `${baseClasses} text-ckr-ivory`;
    }
    return `${baseClasses} text-ckr-light-gray hover:text-ckr-gold`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ckr-black/95 backdrop-blur-sm border-b border-ckr-gold/10">
      <div className="max-w-ckr-container-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <BrandMark variant="short" />
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={getNavLinkClassName(isActive)}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-ckr-gold shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Button size="sm" href="#book">
              REQUEST QUOTE
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-ckr-ivory"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-ckr-charcoal border-t border-ckr-gold/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={getMobileNavLinkClassName(isActive)}
                >
                  {link.label}
                  {isActive && (
                    <span className="ml-2 text-ckr-gold text-xs">●</span>
                  )}
                </a>
              );
            })}
            <Button 
              fullWidth 
              size="md" 
              href="#book" 
              className="mt-4"
            >
              REQUEST QUOTE
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
