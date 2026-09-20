export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-ckr-charcoal scroll-mt-20">
      <div className="max-w-ckr-container-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-ckr-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ckr-ivory mb-4">
            Get In Touch
          </h2>
          <p className="text-ckr-light-gray max-w-2xl mx-auto">
            Have questions about robot entertainment for your event? We're here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-ckr-black rounded-xl p-6 border border-ckr-gold/10 hover:border-ckr-gold/30 transition-all duration-300">
            <div className="w-12 h-12 bg-ckr-gold/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-ckr-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-ckr-ivory mb-2">Location</h3>
            <p className="text-ckr-light-gray text-sm">
              Anakapalle<br />
              Andhra Pradesh<br />
              India
            </p>
          </div>

          <div className="bg-ckr-black rounded-xl p-6 border border-ckr-gold/10 hover:border-ckr-gold/30 transition-all duration-300">
            <div className="w-12 h-12 bg-ckr-gold/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-ckr-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-ckr-ivory mb-2">Email</h3>
            <a
              href="mailto:info@ckrrobofest.com"
              className="text-ckr-light-gray text-sm hover:text-ckr-gold transition-colors"
            >
              info@ckrrobofest.com
            </a>
          </div>

          <div className="bg-ckr-black rounded-xl p-6 border border-ckr-gold/10 hover:border-ckr-gold/30 transition-all duration-300">
            <div className="w-12 h-12 bg-ckr-gold/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-ckr-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-ckr-ivory mb-2">Phone</h3>
            <p className="text-ckr-medium-gray text-sm">
              Contact details to be announced
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="#book"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-ckr-gold text-ckr-black font-semibold rounded-lg hover:bg-ckr-gold/90 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Send Enquiry
            </a>
            <a
              href="mailto:info@ckrrobofest.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-ckr-gold text-ckr-gold font-semibold rounded-lg hover:bg-ckr-gold/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
