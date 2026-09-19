import Button from '@/components/ui/Button';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-b from-ckr-charcoal to-ckr-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ckr-gold/15 rounded-full blur-[150px]"></div>
      </div>
      
      <div className="relative z-10 max-w-ckr-container-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-ckr-gold text-sm font-semibold tracking-widest uppercase mb-4">
          Ready to Begin?
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ckr-ivory mb-6">
          Make Your Next Event Unforgettable
        </h2>
        <p className="text-ckr-light-gray max-w-2xl mx-auto mb-8">
          Bring the future of entertainment to your celebration with planned premium robot experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" href="#book">
            REQUEST QUOTE
          </Button>
          <Button size="lg" variant="outline" href="#contact">
            CONTACT CKR
          </Button>
        </div>
      </div>
    </section>
  );
}
