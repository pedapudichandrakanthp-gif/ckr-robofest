import ConfiguredMedia from '@/components/media/ConfiguredMedia';
import { homeMedia } from '@/lib/media';

export default function GallerySection() {
  const galleryItems = [
    {
      media: homeMedia.experiences.robotDance,
      title: 'Robot Dance Performance',
      category: 'Experience',
    },
    {
      media: homeMedia.experiences.grandEntrance,
      title: 'Grand Entrance',
      category: 'Experience',
    },
    {
      media: homeMedia.events.weddings,
      title: 'Wedding Entertainment',
      category: 'Event',
    },
    {
      media: homeMedia.experiences.photoExperience,
      title: 'Photo Experience',
      category: 'Experience',
    },
    {
      media: homeMedia.events.corporate,
      title: 'Corporate Event',
      category: 'Event',
    },
    {
      media: homeMedia.experiences.interactive,
      title: 'Interactive Demonstration',
      category: 'Experience',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-ckr-charcoal">
      <div className="max-w-ckr-container-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-ckr-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Gallery
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ckr-ivory mb-4">
            Visual Showcase
          </h2>
          <p className="text-ckr-light-gray max-w-2xl mx-auto">
            A glimpse into the robot entertainment experiences and event concepts.
          </p>
          <p className="text-ckr-medium-gray text-sm mt-3">
            Media shown is illustrative. Actual CKR event footage will be added as performances are completed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => {
            const hasMedia = Boolean(item.media.src);

            return (
              <div
                key={index}
                className="group relative bg-ckr-black rounded-xl overflow-hidden border border-ckr-gold/10 hover:border-ckr-gold/30 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-ckr-charcoal via-ckr-black to-ckr-charcoal relative overflow-hidden">
                  <ConfiguredMedia asset={item.media} className="absolute inset-0" />
                  <div className={hasMedia ? 'absolute inset-0 bg-gradient-to-t from-ckr-black/55 via-ckr-black/10 to-transparent' : 'absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(212,175,55,0.16),transparent_35%)]'}></div>

                  <div className="absolute left-4 top-4 rounded-full border border-ckr-gold/20 bg-ckr-black/55 px-2.5 py-1 text-[10px] uppercase tracking-widest text-ckr-gold/90 backdrop-blur-sm">
                    {item.category}
                  </div>

                  {item.media.label && (
                    <div className="absolute right-4 bottom-4 rounded-full border border-ckr-gold/15 bg-ckr-black/55 px-2.5 py-1 text-[10px] uppercase tracking-widest text-ckr-gold/90 backdrop-blur-sm">
                      {item.media.label}
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-ckr-ivory mb-2 group-hover:text-ckr-gold transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
