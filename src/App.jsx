import { useState, useEffect, useRef } from 'react';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Preloader from "./components/Preloader";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const gradientRef = useRef(null); // Create a ref for the gradient background

  const handlePreloaderLoaded = () => {
    setLoading(false);
  };

  useEffect(() => {
    const gradientElement = gradientRef.current; // Access the element via ref

    if (gradientElement) {
      let keyframes = [
        { backgroundPosition: '0% 0%' },
        { backgroundPosition: '100% 100%' },
        { backgroundPosition: '0% 0%' }
      ];

      const timing = {
        duration: 15000,
        iterations: Infinity,
        easing: 'ease'
      };

      gradientElement.animate(keyframes, timing); // Apply the animation
    }
  }, []);

  // Inline styles for the gradient background with light color
  const gradientBackgroundStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(45deg, rgba(0,0,0,0.8), rgba(34,34,34,0.8), rgba(255,255,255,0.2), rgba(34,34,34,0.8), rgba(0,0,0,0.8))',
    backgroundSize: '400% 400%',
    zIndex: -1, // Place behind other content
    overflow: 'hidden'
  };

  return (
    <>
      <ToastContainer />
      {loading ? (
        <Preloader onLoaded={handlePreloaderLoaded} />
      ) : (
        <div className="max-w-7xl mx-auto pt-20 px-6 transition-opacity duration-1000">
          {/* Gradient Background */}
          <div className="gradient-background" style={gradientBackgroundStyle} ref={gradientRef}></div>
          <Navbar user={user} setUser={setUser} />
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
