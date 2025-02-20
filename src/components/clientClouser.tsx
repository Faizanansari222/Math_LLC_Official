"use client"
import React from "react";
import Image from "next/image";
import befilerLG from "../../public/logos/clients_Logo/logos.png";
import tirsol from "../../public/logos/clients_Logo/tirsol.png";
import acca from "../../public/logos/clients_Logo/Acca_logo.png";
import abacus from "../../public/logos/clients_Logo/abacus.png";
import sm from "../../public/logos/clients_Logo/salman-and-raheel-logo.png";

function LogoCarousel() {
  const images = [befilerLG, tirsol, acca, abacus, sm]; // Original set of logos

  return (
    <div className="relative overflow-hidden mx-auto w-[70%] p-10 my-10 mb-10">
      <h1 className="font-bold text-3xl md:text-5xl text-center mb-5 text-[#0c406e]">
        Our Partners & Collaborators
      </h1>
      <div className="flex animate-scroll">
        {[...images, ...images].map((image, index) => (
          // Double the array for seamless looping
          <div
            key={index}
            className="min-w-[60%] sm:min-w-[25%] md:min-w-[20%] lg:min-w-[15%] mx-8 flex justify-center items-center"
          >
            <Image
              src={image}
              alt={`Logo ${index + 1}`}
              className="w-28 h-32 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoCarousel;