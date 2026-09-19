export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-ckr-black">
      <div className="max-w-ckr-container-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-ckr-gold text-sm font-semibold tracking-widest uppercase mb-3">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ckr-ivory mb-4">
            About Chandrakanth Robofest
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-ckr-charcoal rounded-xl p-8 sm:p-12 border border-ckr-gold/10">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-ckr-ivory mb-3">Who We Are</h3>
                <p className="text-ckr-light-gray leading-relaxed">
                  Chandrakanth Robofest (CKR) is an emerging robot entertainment and event-experience business based in Anakapalle, Andhra Pradesh. We are building a platform to bring advanced robotic entertainment to weddings, birthdays, corporate events, and celebrations across the region.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ckr-ivory mb-3">What We Do</h3>
                <p className="text-ckr-light-gray leading-relaxed">
                  CKR provides robotic entertainment experiences through carefully selected humanoid and quadruped robots. Our services include robot dance performances, greetings, grand entrances, photo experiences, interactive demonstrations, and hosting duties. Each experience is designed to create memorable moments for your event.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ckr-ivory mb-3">Our Mission</h3>
                <p className="text-ckr-light-gray leading-relaxed">
                  To bring cutting-edge robotic entertainment to events in Andhra Pradesh, creating unforgettable experiences that combine technology with celebration. We aim to make robot entertainment accessible, safe, and exciting for all types of events.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ckr-ivory mb-3">Our Vision</h3>
                <p className="text-ckr-light-gray leading-relaxed">
                  To become the leading robot entertainment provider in South India, known for safety, professionalism, and creating extraordinary event experiences. We envision a future where robotic entertainment is a standard feature of memorable celebrations and corporate events.
                </p>
              </div>

              <div className="pt-6 border-t border-ckr-gold/10">
                <p className="text-ckr-medium-gray text-sm">
                  CKR is currently in the development phase, evaluating robot platforms and building partnerships. We are working towards launching our first robot entertainment experiences in the Anakapalle and Visakhapatnam region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
