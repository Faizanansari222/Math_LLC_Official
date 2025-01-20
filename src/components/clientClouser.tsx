"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import befilerLG from "../../public/logos/clients_Logo/logos.png";
import tirsol from "../../public/logos/clients_Logo/tirsol.png";
import acca from "../../public/logos/clients_Logo/Acca_logo.png";
import abacus from "../../public/logos/clients_Logo/abacus.png";
import sm from "../../public/logos/clients_Logo/salman-and-raheel-logo.png";

function LogoCarousel() {
  const images = [befilerLG, tirsol, acca, abacus, sm]; // Original set of logos
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prev) => prev - 20); // Move by 20% for each logo
    }, 1000); // 1 second interval

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Reset position for infinite loop
  useEffect(() => {
    if (translateX <= -100) {
      setTranslateX(0); // Reset to the beginning for seamless looping
    }
  }, [translateX]);

  return (
    <div className="relative overflow-hidden mx-auto my-10 mb-10">
      <h1 className="font-bold text-3xl md:text-5xl text-center mb-5 text-[#0c406e]">
        Our Partners & Collaborators
      </h1>
      <div
        className="flex transition-transform duration-700 ease-linear"
        style={{
          transform: `translateX(${translateX}%)`,
        }}
      >
        {[...images, ...images].map((image, index) => (
          // Double the array for seamless looping
          <div key={index} className="min-w-[30%] sm:min-w-[25%] md:min-w-[20%] lg:min-w-[15%] flex justify-center items-center">
            <Image
              src={image}
              alt={`Logo ${index + 1}`}
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoCarousel;
