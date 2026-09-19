import Navbar from '@/components/navigation/Navbar';
import Hero from '@/components/home/Hero';
import TrustStrip from '@/components/home/TrustStrip';
import WhyRobotEntertainment from '@/components/home/WhyRobotEntertainment';
import ExperienceCard from '@/components/home/ExperienceCard';
import EventTypeCard from '@/components/home/EventTypeCard';
import RobotsSection from '@/components/home/RobotsSection';
import PackageCard from '@/components/home/PackageCard';
import ProcessStep from '@/components/home/ProcessStep';
import ServiceArea from '@/components/home/ServiceArea';
import SafetySection from '@/components/home/SafetySection';
import GallerySection from '@/components/home/GallerySection';
import AboutSection from '@/components/home/AboutSection';
import ContactSection from '@/components/home/ContactSection';
import EnquirySection from '@/components/home/EnquirySection';
import CTASection from '@/components/layout/CTASection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <WhyRobotEntertainment />
        <ExperienceCard />
        <EventTypeCard />
        <RobotsSection />
        <PackageCard />
        <ProcessStep />
        <ServiceArea />
        <SafetySection />
        <GallerySection />
        <AboutSection />
        <ContactSection />
        <EnquirySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
