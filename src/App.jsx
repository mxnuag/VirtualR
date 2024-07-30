import { useState } from 'react';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Preloader from "./components/Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);

  const handlePreloaderLoaded = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Preloader onLoaded={handlePreloaderLoaded} />
      ) : (
        <div className="max-w-7xl mx-auto pt-20 px-6 transition-opacity duration-1000">
          <Navbar />
          <HeroSection />
          <FeatureSection />
          <Workflow />
          <Pricing />
          <Testimonials />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
