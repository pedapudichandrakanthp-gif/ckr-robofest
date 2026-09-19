import { robotsUnderConsideration } from '@/lib/constants';

export default function RobotsSection() {
  return (
    <section id="robots" className="py-20 bg-ckr-black">
      <div className="max-w-ckr-container-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-ckr-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Technology
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ckr-ivory mb-4">
            Robots Under Consideration
          </h2>
          <p className="text-ckr-light-gray max-w-2xl mx-auto">
            Advanced robotic platforms being evaluated for CKR event experiences. Robot selection is based on event requirements and capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {robotsUnderConsideration.map((robot) => (
            <div
              key={robot.id}
              className="group relative bg-ckr-charcoal rounded-xl p-6 border border-ckr-gold/10 hover:border-ckr-gold/30 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ckr-gold/0 via-ckr-gold/50 to-ckr-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="mb-4">
                <div className="w-16 h-16 bg-ckr-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-ckr-gold/20 transition-colors">
                  <svg className="w-8 h-8 text-ckr-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-ckr-ivory mb-2 group-hover:text-ckr-gold transition-colors">
                  {robot.name}
                </h3>
                <div className="inline-block px-3 py-1 rounded-full bg-ckr-gold/10 border border-ckr-gold/30 text-ckr-gold text-xs font-medium mb-4">
                  {robot.status}
                </div>
              </div>

              <p className="text-ckr-light-gray text-sm leading-relaxed mb-4">
                {robot.description}
              </p>

              <div className="space-y-3">
                <div>
                  <p className="text-ckr-medium-gray text-xs uppercase tracking-wider mb-1">Suitable Experiences</p>
                  <div className="flex flex-wrap gap-2">
                    {robot.suitableExperiences.map((exp) => (
                      <span
                        key={exp}
                        className="px-2 py-1 bg-ckr-black/50 rounded text-xs text-ckr-light-gray border border-ckr-gold/10"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-ckr-medium-gray text-xs uppercase tracking-wider mb-1">Key Capabilities</p>
                  <p className="text-ckr-light-gray text-sm">{robot.capabilities}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-ckr-medium-gray text-sm max-w-2xl mx-auto">
            Robot availability and final selection depend on event requirements, venue conditions, and technical feasibility. CKR will recommend the most suitable robot for your specific event.
          </p>
        </div>
      </div>
    </section>
  );
}
