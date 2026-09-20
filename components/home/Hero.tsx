'use client';

import { useState, useEffect, useCallback } from 'react';
import Button from '@/components/ui/Button';
import ConfiguredMedia from '@/components/media/ConfiguredMedia';
import { homeMedia } from '@/lib/media';

export default function Hero() {
  const heroSlides = homeMedia.hero;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [mediaErrors, setMediaErrors] = useState<Set<number>>(new Set());

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const getNextValidIndex = useCallback((startIndex: number, direction: 1 | -1): number => {
    let index = startIndex;
    let attempts = 0;
    do {
      index = (index + direction + heroSlides.length) % heroSlides.length;
      attempts++;
    } while (mediaErrors.has(index) && attempts < heroSlides.length);
    return index;
  }, [heroSlides.length, mediaErrors]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => getNextValidIndex(prev, 1));
  }, [getNextValidIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => getNextValidIndex(prev, -1));
  }, [getNextValidIndex]);

  const goToSlide = useCallback((index: number) => {
    if (!mediaErrors.has(index)) {
      setCurrentIndex(index);
    }
  }, [mediaErrors]);

  const handleMediaError = useCallback((index: number) => {
    setMediaErrors(prev => new Set(prev).add(index));
    // Auto-advance to next slide if current one fails
    if (index === currentIndex) {
      nextSlide();
    }
  }, [currentIndex, nextSlide]);

  useEffect(() => {
    if (isReducedMotion) return;

    const currentSlide = heroSlides[currentIndex];
    const duration = currentSlide.type === 'video' ? 8000 : 5500;
    
    const timer = setTimeout(nextSlide, duration);
    return () => clearTimeout(timer);
  }, [currentIndex, nextSlide, heroSlides, isReducedMotion]);

  const currentMedia = heroSlides[currentIndex];
  const hasHeroMedia = Boolean(currentMedia.src) && !mediaErrors.has(currentIndex);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ckr-charcoal via-ckr-black to-ckr-black"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-ckr-gold/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-ckr-gold-light/8 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ckr-bronze/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-ckr-container-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <p className="text-ckr-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4">
              Premium Robot Entertainment
            </p>
            <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-ckr-ivory mb-4 sm:mb-6 leading-tight">
              Robotic Entertainment
              <span className="block text-ckr-light-gray mt-1 sm:mt-2">For Unforgettable Events</span>
            </h1>
            
            <p className="text-xs sm:text-sm text-ckr-light-gray mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Premium robot entertainment and interactive experiences for weddings, birthdays, corporate events, and celebrations across Anakapalle, Visakhapatnam and Andhra Pradesh.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
              <Button size="md" href="#book">
                REQUEST QUOTE
              </Button>
              <Button size="md" variant="outline" href="#experiences">
                EXPLORE EXPERIENCES
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-ckr-medium-gray">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-ckr-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Anakapalle • Visakhapatnam • Andhra Pradesh</span>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/3] lg:aspect-square rounded-xl lg:rounded-2xl border border-ckr-gold/20 bg-ckr-black overflow-hidden shadow-2xl shadow-ckr-gold/10">
              {heroSlides.map((slide, index) => {
                const slideHasMedia = Boolean(slide.src) && !mediaErrors.has(index);
                return (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <ConfiguredMedia 
                      asset={slide} 
                      className="absolute inset-0"
                      onError={() => handleMediaError(index)}
                    />
                    <div className={slideHasMedia ? 'absolute inset-0 bg-gradient-to-t from-ckr-black/55 via-ckr-black/10 to-ckr-black/25' : 'absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(212,175,55,0.22),transparent_34%),linear-gradient(145deg,rgba(45,45,45,0.95),rgba(10,10,10,1)_62%)]'}></div>
                  </div>
                );
              })}

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                <div className="rounded-xl border border-ckr-gold/30 bg-ckr-black/75 p-3 sm:p-4 backdrop-blur-md shadow-xl shadow-ckr-black/40">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-ckr-gold rounded-full shadow-lg shadow-ckr-gold/50"></div>
                    <p className="text-ckr-gold font-semibold text-xs sm:text-sm">Robot + Event Experience</p>
                  </div>
                  <p className="text-ckr-light-gray text-[10px] sm:text-xs">{currentMedia.credit ?? 'Premium robot entertainment for unforgettable events'}</p>
                </div>
              </div>

              {!isReducedMotion && (
                <>
                  <div className="absolute bottom-4 right-5 hidden sm:flex items-center gap-2">
                    {heroSlides.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          index === currentIndex ? 'w-8 bg-ckr-gold' : 'w-4 bg-ckr-gold/45'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-ckr-black/50 hover:bg-ckr-black/70 border border-ckr-gold/20 text-ckr-gold transition-all opacity-0 hover:opacity-100 focus:opacity-100"
                    aria-label="Previous slide"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-ckr-black/50 hover:bg-ckr-black/70 border border-ckr-gold/20 text-ckr-gold transition-all opacity-0 hover:opacity-100 focus:opacity-100"
                    aria-label="Next slide"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex sm:hidden items-center gap-2">
                    {heroSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === currentIndex ? 'w-6 bg-ckr-gold' : 'w-3 bg-ckr-gold/45'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-ckr-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-24 sm:h-24 bg-ckr-bronze/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
