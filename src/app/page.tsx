import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import WhyChoose from "@/components/WhyChoose";


export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">

    <HeroSection/>
<FeaturedSection/>
<WhyChoose/>
<TestimonialCards/>
   </main>
  );
}
