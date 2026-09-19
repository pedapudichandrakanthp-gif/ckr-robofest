export default function WhyRobotEntertainment() {
  const reasons = [
    {
      title: 'Memorable Experience',
      description: 'Create lasting memories with cutting-edge robotic entertainment that guests will talk about for years.',
    },
    {
      title: 'Unique Appeal',
      description: 'Stand out from traditional entertainment options with futuristic technology and interactive experiences.',
    },
    {
      title: 'Professional Presentation',
      description: 'Planned operator-supported performances ensure seamless experiences that enhance your event without disrupting the flow.',
    },
    {
      title: 'Customizable',
      description: 'Tailor the experience to match your event theme, from weddings to corporate galas.',
    },
  ];

  return (
    <section className="py-20 bg-ckr-black">
      <div className="max-w-ckr-container-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-ckr-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ckr-ivory mb-4">
            Why Robot Entertainment?
          </h2>
          <p className="text-ckr-light-gray max-w-2xl mx-auto">
            Discover how robotic entertainment transforms ordinary events into extraordinary experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-ckr-charcoal rounded-xl p-6 border border-ckr-gold/10 hover:border-ckr-gold/30 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-ckr-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-ckr-gold/20 transition-colors">
                  <svg className="w-5 h-5 text-ckr-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ckr-ivory mb-2 group-hover:text-ckr-gold transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-ckr-light-gray text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
