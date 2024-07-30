import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import TypingEffect from 'react-typing-effect';
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    // Show suggestions after a delay
    const timer = setTimeout(() => setShowSuggestions(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          <TypingEffect
            text={['for developers', 'for 3D artists', 'for VR creators','Interactive Experience Designers','Software Engineers']}
            speed={100} // typing speed
            eraseSpeed={50} // speed of erasing
            eraseDelay={2000} // delay before erasing
            typingDelay={500} // delay before starting typing
            cursorRenderer={cursor => <span className="text-orange-500">{cursor}</span>}
            displayTextRenderer={(text, i) => (
              <span className="text-orange-500">{text}</span>
            )}
          />
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 hover:scale-110 transition-transform duration-300 px-4 mx-3 hover:text-orange-200 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border hover:scale-110 transition-transform duration-300 hover:text-orange-300">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {showSuggestions && (
        <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Who Can Benefit from Virtual Reality?
        </h2>
        <ul className="list-disc list-inside text-lg text-neutral-700">
          <li>
            <strong>Game Developers:</strong> Craft immersive, interactive worlds.
          </li>
          <li>
            <strong>3D Artists:</strong> Visualize and create in a 3D space.
          </li>
          <li>
            <strong>Content Creators:</strong> Design engaging VR experiences.
          </li>
          <li>
            <strong>Engineers:</strong> Simulate and prototype complex designs.
          </li>
          <li>
            <strong>Experience Designers:</strong> Innovate with interactive VR prototypes.
          </li>
        </ul>
      </div>
      
      )}
    </div>
  );
};

export default HeroSection;
