import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BetaBanner from "./components/BetaBanner";
import HowItWorks from "./components/HowItWorks";
import FeaturedIn from "./components/FeaturedIn";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F2EE]">
      <Navbar />
      <Hero />
      <BetaBanner />
      <HowItWorks />
      <FeaturedIn />
      <Footer />
    </div>
  );
}
