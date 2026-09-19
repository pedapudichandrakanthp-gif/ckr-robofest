export default function TrustStrip() {
  const features = [
    'Robot Entertainment',
    'Event Experiences',
    'Professional Setup',
    'Flexible Packages',
  ];

  return (
    <section className="py-12 bg-ckr-charcoal border-y border-ckr-gold/10">
      <div className="max-w-ckr-container-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-12 h-12 mx-auto mb-3 bg-ckr-gold/10 rounded-full flex items-center justify-center group-hover:bg-ckr-gold/20 transition-colors">
                <svg className="w-6 h-6 text-ckr-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-ckr-ivory font-medium group-hover:text-ckr-gold transition-colors">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
