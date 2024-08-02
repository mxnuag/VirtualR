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
import { auth } from './components/Firebase';
import { onAuthStateChanged } from 'firebase/auth';

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

    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        toast.success(`Welcome back, ${user.displayName || user.email}!`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {loading ? (
        <Preloader onLoaded={handlePreloaderLoaded} />
      ) : (
        <>
          <div className="animate-gradient h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 fixed w-full" ref={gradientRef}></div>
          <div className="relative z-10">
            <Navbar user={user} setUser={setUser} />
            <HeroSection user={user} />
            <FeatureSection />
            <Workflow />
            <Pricing />
            <Testimonials />
            <Footer />
          </div>
        </>
      )}
      <ToastContainer />
    </>
  );
};

export default App;
