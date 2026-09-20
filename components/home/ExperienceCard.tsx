import ConfiguredMedia from '@/components/media/ConfiguredMedia';
import { experiences } from '@/lib/constants';

const experienceMediaStyles = {
  'performance-stage': {
    beam: 'left-1/2 top-0 h-full w-24 -translate-x-1/2 bg-ckr-gold/12',
    accent: 'left-8 bottom-8 h-20 w-20 rounded-full border border-ckr-gold/25',
    line: 'rotate-[-12deg]',
  },
  'welcome-entrance': {
    beam: 'left-6 top-0 h-full w-24 bg-ckr-gold/10',
    accent: 'right-8 top-8 h-24 w-16 rounded-t-full border border-ckr-gold/25',
    line: 'rotate-[18deg]',
  },
  'motion-show': {
    beam: 'right-8 top-0 h-full w-28 bg-ckr-bronze/12',
    accent: 'left-7 top-10 h-16 w-28 rounded-full border border-ckr-gold/20',
    line: 'rotate-[-28deg]',
  },
  'photo-moment': {
    beam: 'left-1/2 top-0 h-full w-32 -translate-x-1/2 bg-ckr-gold/10',
    accent: 'right-7 bottom-7 h-16 w-20 rounded-lg border border-ckr-gold/25',
    line: 'rotate-[0deg]',
  },
  'guest-interaction': {
    beam: 'left-10 top-0 h-full w-32 bg-ckr-gold/8',
    accent: 'right-8 top-10 h-20 w-20 rounded-full border border-ckr-gold/20',
    line: 'rotate-[30deg]',
  },
  'grand-reveal': {
    beam: 'left-1/2 top-0 h-full w-40 -translate-x-1/2 bg-ckr-gold/14',
    accent: 'left-6 bottom-6 h-12 w-28 rounded-full border border-ckr-gold/25',
    line: 'rotate-[-18deg]',
  },
  'host-spotlight': {
    beam: 'right-10 top-0 h-full w-28 bg-ckr-gold/10',
    accent: 'left-8 top-8 h-24 w-20 rounded-2xl border border-ckr-gold/20',
    line: 'rotate-[14deg]',
  },
} as const;

export default function ExperienceCard() {
  return (
    <section id="experiences" className="py-20 bg-ckr-black scroll-mt-20">
      <div className="max-w-ckr-container-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-ckr-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Experiences
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ckr-ivory mb-4">
            Robot Experiences
          </h2>
          <p className="text-ckr-light-gray max-w-2xl mx-auto">
            Discover the range of interactive robot experiences designed to make your event extraordinary. Available experiences depend on the selected robot and event setup.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((experience) => {
            const mediaStyle = experienceMediaStyles[experience.media.mood];
            const hasMedia = Boolean(experience.media.asset.src);

            return (
              <div
                key={experience.id}
                className="group relative bg-ckr-charcoal rounded-xl overflow-hidden border border-ckr-gold/10 hover:border-ckr-gold/30 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ckr-gold/0 via-ckr-gold/50 to-ckr-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="aspect-video bg-gradient-to-br from-ckr-black via-ckr-charcoal to-ckr-black relative overflow-hidden">
                  <ConfiguredMedia asset={experience.media.asset} className="absolute inset-0" />
                  <div className={hasMedia ? 'absolute inset-0 bg-gradient-to-t from-ckr-black/55 via-ckr-black/10 to-transparent' : 'absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(212,175,55,0.16),transparent_35%)]'}></div>
                  {!hasMedia && (
                    <>
                      <div className={`absolute blur-2xl ${mediaStyle.beam}`}></div>
                      <div className={`absolute ${mediaStyle.accent}`}></div>
                      <div className={`absolute left-1/2 top-1/2 h-px w-44 -translate-x-1/2 bg-gradient-to-r from-transparent via-ckr-gold/40 to-transparent ${mediaStyle.line}`}></div>
                      <div className="absolute bottom-4 left-6 right-6 h-8 rounded-[50%] border border-ckr-gold/15 bg-ckr-black/40"></div>

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative h-20 w-20">
                          <div className="absolute inset-0 rounded-full bg-ckr-gold/15 blur-xl group-hover:bg-ckr-gold/20 transition-colors"></div>
                          <div className="relative flex h-full w-full items-center justify-center rounded-full border border-ckr-gold/35 bg-ckr-black/55 backdrop-blur-sm">
                            <svg className="w-8 h-8 text-ckr-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l2.5 2" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-ckr-ivory mb-3 group-hover:text-ckr-gold transition-colors">
                    {experience.title}
                  </h3>
                  <p className="text-ckr-light-gray text-sm leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
