import React from "react";
import HeroCarImage from "public/nedladdning2.jpg";
import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-6">
      <div className="z-10 relative top-12 w-full flex flex-col items-center px-10">
        <h1 className="text-white font-bold text-4xl mb-5 text-center tracking-wide lg:text-5xl">
          Explore Dubai in style with Open Road
        </h1>
        <p className="lg:w-1/2 lg:text-lg text-base tracking-wide text-center text-white opacity-80">
          Elevate your Dubai experience with our premium car rental service,
          providing top-notch vehicles and exceptional service.
        </p>

        <div className="flex items-center mt-10 justify-center w-full gap-x-5">
          <Link
            className="bg-primary py-1.5 px-5 text-base font-semibold rounded-lg hover:bg-white transition-colors md:text-lg md:py-2.5"
            href={"/register"}
          >
            Sign Up
          </Link>

          <Link
            className="text-white flex items-center gap-x-2 text-base md:text-lg tracking-wider font-light hover:ml-2 transition-all border-b"
            href={"/cars"}
          >
            Our Car Collection
            <HiArrowNarrowRight size={28} />
          </Link>
        </div>
      </div>

      <div className="opacity-100">
        <Image
          src={HeroCarImage}
          width={900}
          height={0}
          alt="Brandless car in the dark"
          className="relative bottom-10 md:bottom-16"
        />
      </div>
    </div>
  );
};

export default HeroSection;
