import NavbarTransparent from "./section/NavbarTransparent";
import HeroVideo from "./section/HeroVideo";
import ValuesMarquee from "./components/ValuesMarquee";
import StatsStrip from "./components/StatsStrip";
import Mission from "./components/Mission";
import Services from "./components/Services";
import HowItWorks from "./components/Howitworks";
import Membership from "./components/Membership";
import Testimonials from "./components/Testimonial";
import Locations from "./components/Location";
import Faq from "./components/Faq";
import CtaBanner from "./components/Ctabanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    // overflow-x saja: overflow-hidden penuh bisa ke-detect framer-motion
    // sebagai scroll container dan bikin useScroll di hero mati.
    <main id="top" className="overflow-x-clip bg-white text-karsa-ink">
      <NavbarTransparent />
      <HeroVideo />
      <ValuesMarquee />
      <StatsStrip />
      <Mission />
      <Services />
      <HowItWorks />
      <Membership />
      <Testimonials />
      <Locations />
      <Faq />
      <CtaBanner />
      <Footer />
    </main>
  );
}