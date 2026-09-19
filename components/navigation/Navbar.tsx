'use client';

import { useState } from 'react';
import BrandMark from '@/components/brand/BrandMark';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#robots', label: 'Robots' },
    { href: '#experiences', label: 'Experiences' },
    { href: '#events', label: 'Events' },
    { href: '#packages', label: 'Packages' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ckr-black/95 backdrop-blur-sm border-b border-ckr-gold/10">
      <div className="max-w-ckr-container-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <BrandMark variant="short" />
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-ckr-light-gray hover:text-ckr-gold transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-ckr-light-gray hover:text-ckr-gold transition-colors py-2 text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button fullWidth size="md" href="#book" className="mt-4">
              REQUEST QUOTE
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
