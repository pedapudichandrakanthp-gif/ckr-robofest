import { processSteps } from '@/lib/constants';

export default function ProcessStep() {
  return (
    <section id="how-it-works" className="py-20 bg-ckr-black">
      <div className="max-w-ckr-container-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-ckr-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ckr-ivory mb-4">
            How It Works
          </h2>
          <p className="text-ckr-light-gray max-w-2xl mx-auto">
            A simple process to bring robotic entertainment to your event.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <div key={step.step} className="relative group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-ckr-charcoal border-2 border-ckr-gold/30 rounded-full flex items-center justify-center text-ckr-gold font-bold text-lg group-hover:border-ckr-gold group-hover:bg-ckr-gold/10 transition-all duration-300">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-ckr-ivory mb-2 group-hover:text-ckr-gold transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-ckr-light-gray text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {step.step < processSteps.length && (
                <div className="hidden lg:block absolute top-6 left-12 w-full h-0.5 bg-gradient-to-r from-ckr-gold/20 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
