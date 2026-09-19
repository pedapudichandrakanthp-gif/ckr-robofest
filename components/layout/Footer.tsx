import BrandMark from '@/components/brand/BrandMark';
import { serviceAreas } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ckr-black border-t border-ckr-gold/10">
      <div className="max-w-ckr-container-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <BrandMark variant="full" showTagline={false} className="mb-4" />
            <p className="text-ckr-light-gray text-sm mb-4">
              Premium robot entertainment and event experiences for unforgettable celebrations.
            </p>
          </div>

          <div>
            <h3 className="text-ckr-gold font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-ckr-light-gray hover:text-ckr-gold text-sm transition-colors">Home</a></li>
              <li><a href="#robots" className="text-ckr-light-gray hover:text-ckr-gold text-sm transition-colors">Robots</a></li>
              <li><a href="#experiences" className="text-ckr-light-gray hover:text-ckr-gold text-sm transition-colors">Experiences</a></li>
              <li><a href="#events" className="text-ckr-light-gray hover:text-ckr-gold text-sm transition-colors">Events</a></li>
              <li><a href="#packages" className="text-ckr-light-gray hover:text-ckr-gold text-sm transition-colors">Packages</a></li>
              <li><a href="#how-it-works" className="text-ckr-light-gray hover:text-ckr-gold text-sm transition-colors">How It Works</a></li>
              <li><a href="#gallery" className="text-ckr-light-gray hover:text-ckr-gold text-sm transition-colors">Gallery</a></li>
              <li><a href="#about" className="text-ckr-light-gray hover:text-ckr-gold text-sm transition-colors">About</a></li>
              <li><a href="#contact" className="text-ckr-light-gray hover:text-ckr-gold text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-ckr-gold font-semibold mb-4">Service Area</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area.id} className="text-ckr-light-gray text-sm">
                  {area.name}
                  {area.primary && <span className="text-ckr-gold ml-2">•</span>}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-ckr-gold font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-ckr-light-gray text-sm">
                <span className="block text-ckr-medium-gray text-xs">Location</span>
                Anakapalle, Andhra Pradesh
              </li>
              <li className="text-ckr-light-gray text-sm">
                <span className="block text-ckr-medium-gray text-xs">Email</span>
                <a href="mailto:info@ckrrobofest.com" className="hover:text-ckr-gold transition-colors">
                  info@ckrrobofest.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ckr-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ckr-medium-gray text-sm">
            © {currentYear} Chandrakanth Robofest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
