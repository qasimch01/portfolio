import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseus from "@/components/WhyChooseus";


export default function Home() {
  return (
    //100 psnt hight 
<main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

<HeroSection/>
<FeaturedCourses/>
<WhyChooseus/>
<TestimonialCards/>
<UpcomingWebinars/>
<Instructors/>
<Footer/>

</main>
   
  );
}
