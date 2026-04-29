import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutCineku from '@/components/AboutCineku';
import ProblemSection from '@/components/ProblemSection';
import TargetUsers from '@/components/TargetUsers';
import FeatureSection from '@/components/FeatureSection';
import HowItWorks from '@/components/HowItWorks';
import PlatformPreview from '@/components/PlatformPreview';
import AdvantageSection from '@/components/AdvantageSection';
import RoadmapSection from '@/components/RoadmapSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full bg-slate-950">
      <Navbar />
      <HeroSection />
      <AboutCineku />
      <ProblemSection />
      <TargetUsers />
      <FeatureSection />
      <HowItWorks />
      <PlatformPreview />
      <AdvantageSection />
      <RoadmapSection />
      <CTASection />
      <Footer />
    </main>
  );
}
  