import { useEffect, useState } from 'react';
import { FaRocket, FaGamepad, FaCode, FaCogs, FaGlasses } from 'react-icons/fa';

const Preloader = ({ onLoaded }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [showWhiteFade, setShowWhiteFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setShowWhiteFade(true);
      setTimeout(() => {
        onLoaded();
      }, 1000); // Match with white fade duration
    }, 4000); // Preloader display duration

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <>
      <div className={`fixed inset-0 flex items-center justify-center bg-neutral-900 z-50 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
        <div className="flex flex-col items-center space-y-6">
          {/* Animated icons */}
          <div className="flex space-x-4">
          <div className="icon-container animate-icon1">
            <FaRocket className="text-4xl text-orange-500" />
          </div>
          <div className="icon-container animate-icon2">
            <FaGamepad className="text-4xl text-orange-500" />
          </div>
          <div className="icon-container animate-icon3">
            <FaCode className="text-4xl text-orange-500" />
          </div>
          <div className="icon-container animate-icon4">
            <FaCogs className="text-4xl text-orange-500" />
          </div>
          <div className="icon-container animate-icon5">
            <FaGlasses className="text-4xl text-orange-500" />
          </div>
        </div>
          {/* Pop-up text */}
          <p className="text-lg text-orange-300 animate-fade-in-out">
            "Building your VR playground, just a few more moments!"
            <br />
            <br />
            "Loading your virtual dreams... please hold onto your reality!"
          </p>
        </div>
      </div>
      {/* White fade effect */}
      {showWhiteFade && (
        <div className="fixed inset-0 bg-white z-40 transition-opacity duration-2000 opacity-100"></div>
      )}
    </>
  );
};

export default Preloader;
