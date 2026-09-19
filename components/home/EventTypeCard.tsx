import { eventTypes } from '@/lib/constants';

const eventMediaStyles = {
  'mandap-glow': {
    focal: 'left-1/2 top-8 h-20 w-28 -translate-x-1/2 rounded-t-full',
    ornament: 'left-6 bottom-7 h-12 w-12 rounded-full',
  },
  'celebration-orbit': {
    focal: 'right-6 top-8 h-20 w-20 rounded-full',
    ornament: 'left-7 bottom-8 h-10 w-24 rounded-full',
  },
  'stage-grid': {
    focal: 'left-7 top-7 h-20 w-28 rounded-lg',
    ornament: 'right-8 bottom-8 h-14 w-14 rounded-full',
  },
  'learning-arc': {
    focal: 'left-1/2 top-7 h-24 w-24 -translate-x-1/2 rounded-full',
    ornament: 'left-8 bottom-8 h-10 w-20 rounded-full',
  },
  'public-showcase': {
    focal: 'right-7 top-7 h-24 w-16 rounded-2xl',
    ornament: 'left-6 bottom-7 h-12 w-28 rounded-full',
  },
  'brand-reveal': {
    focal: 'left-7 top-9 h-16 w-32 rounded-lg',
    ornament: 'right-7 bottom-7 h-12 w-12 rounded-full',
  },
  'ribbon-spotlight': {
    focal: 'left-1/2 top-8 h-24 w-20 -translate-x-1/2 rounded-t-full',
    ornament: 'left-6 bottom-8 h-10 w-28 rounded-full',
  },
} as const;

export default function EventTypeCard() {
  return (
    <section className="py-20 bg-ckr-charcoal">
      <div className="max-w-ckr-container-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-ckr-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Events
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ckr-ivory mb-4">
            Events We Serve
          </h2>
          <p className="text-ckr-light-gray max-w-2xl mx-auto">
            From intimate celebrations to grand corporate functions, our robot entertainment creates memorable experiences for every occasion.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {eventTypes.map((event) => {
            const mediaStyle = eventMediaStyles[event.media.composition];

            return (
              <div
                key={event.id}
                className="group relative bg-ckr-black rounded-xl overflow-hidden border border-ckr-gold/10 hover:border-ckr-gold/30 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ckr-gold/0 via-ckr-gold/50 to-ckr-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="aspect-square bg-gradient-to-br from-ckr-charcoal via-ckr-black to-ckr-charcoal relative overflow-hidden">
                  {/* Future: render approved media from event.media.imageUrl here. */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(212,175,55,0.14),transparent_34%)]"></div>
                  <div className={`absolute border border-ckr-gold/20 bg-ckr-gold/8 shadow-xl shadow-ckr-gold/5 ${mediaStyle.focal}`}></div>
                  <div className={`absolute border border-ckr-gold/15 bg-ckr-black/35 ${mediaStyle.ornament}`}></div>
                  <div className="absolute left-1/2 top-1/2 h-20 w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-ckr-gold/35 to-transparent"></div>
                  <div className="absolute bottom-5 left-5 right-5 h-7 rounded-[50%] border border-ckr-gold/15 bg-ckr-black/45"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-ckr-black/55 rounded-xl flex items-center justify-center border border-ckr-gold/25 backdrop-blur-sm group-hover:border-ckr-gold/45 transition-colors">
                      <svg className="w-7 h-7 text-ckr-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute left-4 top-4 h-1.5 w-10 rounded-full bg-ckr-gold/45"></div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-ckr-ivory mb-2 group-hover:text-ckr-gold transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-ckr-light-gray text-sm leading-relaxed">
                    {event.description}
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
