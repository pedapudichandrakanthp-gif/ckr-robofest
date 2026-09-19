import { serviceAreas } from '@/lib/constants';

export default function ServiceArea() {
  return (
    <section className="py-20 bg-ckr-black">
      <div className="max-w-ckr-container-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-ckr-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Location
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ckr-ivory mb-4">
            Service Area
          </h2>
          <p className="text-ckr-light-gray max-w-2xl mx-auto">
            Planned service area with primary focus on Anakapalle and Visakhapatnam, expanding across Andhra Pradesh.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {serviceAreas.map((area) => (
            <div
              key={area.id}
              className={`px-6 py-3 rounded-full border transition-all duration-300 hover:transform hover:-translate-y-1 ${
                area.primary 
                  ? 'bg-ckr-gold/10 border-ckr-gold text-ckr-gold hover:bg-ckr-gold/20' 
                  : 'bg-ckr-charcoal border-ckr-gold/20 text-ckr-light-gray hover:border-ckr-gold/40 hover:text-ckr-ivory'
              }`}
            >
              {area.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
