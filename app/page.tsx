import Navbar from '@/components/navigation/Navbar';
import Hero from '@/components/home/Hero';
import TrustStrip from '@/components/home/TrustStrip';
import WhyRobotEntertainment from '@/components/home/WhyRobotEntertainment';
import EventTypeCard from '@/components/home/EventTypeCard';
import ExperienceCard from '@/components/home/ExperienceCard';
import PackageCard from '@/components/home/PackageCard';
import ProcessStep from '@/components/home/ProcessStep';
import ServiceArea from '@/components/home/ServiceArea';
import SafetySection from '@/components/home/SafetySection';
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
        <EventTypeCard />
        <ExperienceCard />
        <PackageCard />
        <ProcessStep />
        <ServiceArea />
        <SafetySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
