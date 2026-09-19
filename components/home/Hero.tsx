import Button from '@/components/ui/Button';
import ConfiguredMedia from '@/components/media/ConfiguredMedia';
import { homeMedia } from '@/lib/media';

export default function Hero() {
  const heroMedia = homeMedia.hero;
  const hasHeroMedia = Boolean(heroMedia.src);

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
              <ConfiguredMedia asset={heroMedia} className="absolute inset-0" />
              <div className={hasHeroMedia ? 'absolute inset-0 bg-gradient-to-t from-ckr-black/55 via-ckr-black/10 to-ckr-black/25' : 'absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(212,175,55,0.22),transparent_34%),linear-gradient(145deg,rgba(45,45,45,0.95),rgba(10,10,10,1)_62%)]'}></div>
              {!hasHeroMedia && (
                <>
                  <div className="absolute inset-x-8 top-8 h-24 rounded-full bg-ckr-gold/15 blur-3xl"></div>
                  <div className="absolute inset-x-10 bottom-12 h-24 rounded-[50%] bg-ckr-gold/10 blur-2xl"></div>
                  <div className="absolute left-1/2 top-10 h-[72%] w-px -translate-x-1/2 bg-gradient-to-b from-ckr-gold/35 via-ckr-gold/10 to-transparent"></div>

                  <div className="absolute inset-0 flex items-center justify-center px-8">
                    <div className="relative w-full max-w-[360px]">
                      <div className="absolute -inset-8 rounded-full bg-ckr-gold/10 blur-3xl"></div>
                      <div className="relative mx-auto h-48 w-36 sm:h-60 sm:w-44 lg:h-72 lg:w-52 rounded-t-full rounded-b-[2.25rem] border border-ckr-gold/30 bg-gradient-to-b from-ckr-light-gray/12 via-ckr-charcoal to-ckr-black shadow-2xl shadow-ckr-black">
                        <div className="absolute left-1/2 top-8 h-12 w-20 -translate-x-1/2 rounded-full border border-ckr-gold/30 bg-ckr-black/70 shadow-inner shadow-ckr-gold/10"></div>
                        <div className="absolute left-1/2 top-11 flex -translate-x-1/2 gap-5">
                          <div className="h-2.5 w-2.5 rounded-full bg-ckr-gold shadow-lg shadow-ckr-gold/60"></div>
                          <div className="h-2.5 w-2.5 rounded-full bg-ckr-gold shadow-lg shadow-ckr-gold/60"></div>
                        </div>
                        <div className="absolute left-1/2 top-28 h-20 w-24 -translate-x-1/2 rounded-2xl border border-ckr-gold/20 bg-gradient-to-br from-ckr-gold/10 to-transparent"></div>
                        <div className="absolute -left-10 top-24 h-20 w-3 rotate-[-18deg] rounded-full bg-gradient-to-b from-ckr-gold/40 to-ckr-gold/5"></div>
                        <div className="absolute -right-10 top-24 h-20 w-3 rotate-[18deg] rounded-full bg-gradient-to-b from-ckr-gold/40 to-ckr-gold/5"></div>
                      </div>

                      <div className="absolute -bottom-8 left-1/2 h-10 w-64 -translate-x-1/2 rounded-[50%] border border-ckr-gold/20 bg-ckr-black/60 shadow-2xl shadow-ckr-gold/10"></div>
                      <div className="absolute -left-4 bottom-6 h-16 w-16 rounded-full border border-ckr-gold/15 bg-ckr-gold/5 blur-[1px]"></div>
                      <div className="absolute -right-6 top-16 h-20 w-20 rounded-full border border-ckr-gold/10 bg-ckr-bronze/10 blur-[1px]"></div>
                    </div>
                  </div>
                </>
              )}

              <div className="absolute left-4 right-4 top-4 flex items-center justify-between text-[10px] sm:text-xs text-ckr-medium-gray">
                <div className="rounded-full border border-ckr-gold/20 bg-ckr-black/55 px-3 py-1 backdrop-blur-sm">
                  {heroMedia.label ?? 'Cinematic media showcase'}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                <div className="rounded-xl border border-ckr-gold/30 bg-ckr-black/75 p-3 sm:p-4 backdrop-blur-md shadow-xl shadow-ckr-black/40">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-ckr-gold rounded-full shadow-lg shadow-ckr-gold/50"></div>
                    <p className="text-ckr-gold font-semibold text-xs sm:text-sm">Robot + Event Experience</p>
                  </div>
                  <p className="text-ckr-light-gray text-[10px] sm:text-xs">{heroMedia.credit ?? 'Premium robot entertainment for unforgettable events'}</p>
                </div>
              </div>

              <div className="absolute bottom-4 right-5 hidden sm:flex items-center gap-2">
                <div className="h-1 w-8 rounded-full bg-ckr-gold"></div>
                <div className="h-1 w-4 rounded-full bg-ckr-gold/45"></div>
                <div className="h-1 w-4 rounded-full bg-ckr-gold/25"></div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-ckr-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-24 sm:h-24 bg-ckr-bronze/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
