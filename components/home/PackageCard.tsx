import { packages } from '@/lib/constants';
import Button from '@/components/ui/Button';

export default function PackageCard() {
  return (
    <section id="packages" className="py-20 bg-ckr-charcoal scroll-mt-20">
      <div className="max-w-ckr-container-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-ckr-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ckr-ivory mb-4">
            Packages
          </h2>
          <p className="text-ckr-light-gray max-w-2xl mx-auto">
            Proposed CKR starting packages for planning purposes.
          </p>
          <p className="text-ckr-medium-gray text-sm mt-4">
            * Final pricing depends on selected robot, event duration, location, travel, setup and customization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-ckr-black rounded-xl p-6 border ${
                pkg.popular ? 'border-ckr-gold shadow-lg shadow-ckr-gold/10' : 'border-ckr-gold/10'
              } transition-all duration-300 hover:border-ckr-gold/30 hover:transform hover:-translate-y-1`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-ckr-gold text-ckr-black text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </span>
                </div>
              )}
              
              <h3 className="text-xl font-semibold text-ckr-ivory mb-2">
                {pkg.name}
              </h3>
              
              <div className="mb-4">
                {pkg.price ? (
                  <div className="text-3xl font-bold text-ckr-ivory">
                    INR {pkg.price.toLocaleString()}
                  </div>
                ) : (
                  <div className="text-3xl font-bold text-ckr-ivory">
                    Custom Quote
                  </div>
                )}
                <div className="text-ckr-light-gray text-sm">
                  {pkg.duration}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-ckr-light-gray">
                    <svg className="w-5 h-5 text-ckr-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg.popular ? 'primary' : 'outline'}
                size="sm"
                fullWidth
                href="#book"
              >
                REQUEST QUOTE
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
