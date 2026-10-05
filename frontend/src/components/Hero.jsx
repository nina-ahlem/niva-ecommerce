import React, { useState, useEffect } from "react";
import assets from "../assets/assets";

// Put all the images of the slideshow here (replace with your own names from assets.js)
const heroImages = [assets.hero5, assets.hero2, assets.hero3];

const SLIDE_DURATION = 3000; // 3 seconds

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Every time `current` changes, schedule the next change in 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, SLIDE_DURATION);

    // cleanup: cancel the timer if the component unmounts or `current` changes
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="flex mt-1 flex-col sm:flex-row border border-gray-400 rounded-xl">
      {/* Hero left */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed prata-regular">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* Hero right: slideshow */}
      {/* Fixed height: change these values to make the hero taller or shorter */}
      <div className="relative w-full sm:w-1/2 min-w-0 overflow-hidden h-[300px] sm:h-[380px] lg:h-[480px] rounded-xl">
        {/* All images are stacked on top of each other, only the active one is visible */}
        <div className="h-full ">
          {heroImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`hero image ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ease-in-out ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to image ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current ? "w-6 bg-white" : "w-2 bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;