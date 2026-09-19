import { safetyFeatures } from '@/lib/constants';

export default function SafetySection() {
  return (
    <section className="py-20 bg-ckr-charcoal">
      <div className="max-w-ckr-container-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-ckr-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Safety First
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ckr-ivory mb-4">
            Safety & Professional Operation
          </h2>
          <p className="text-ckr-light-gray max-w-2xl mx-auto">
            Your safety and satisfaction are our top priorities. Performances will use a trained operator and controlled performance area. Final safety requirements depend on the selected robot, venue and performance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyFeatures.map((feature) => (
            <div
              key={feature.id}
              className="group bg-ckr-black rounded-xl p-6 border border-ckr-gold/10 hover:border-ckr-gold/30 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-ckr-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-ckr-gold/20 transition-colors">
                <svg className="w-5 h-5 text-ckr-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-ckr-ivory mb-2 group-hover:text-ckr-gold transition-colors">
                {feature.title}
              </h3>
              <p className="text-ckr-light-gray text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
