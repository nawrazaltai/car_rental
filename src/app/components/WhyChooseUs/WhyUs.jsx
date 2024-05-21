import React from "react";
import { IoCarSportOutline, IoCalendar } from "react-icons/io5";
import { GiCarKey } from "react-icons/gi";
import WhyUsCard from "./WhyUsCard";

const CardSeparator = () => {
  return (
    <div className="relative border-r-[3px] h-24 bg-transparent border-dashed border-black md:border-t-[3px] md:border-r-0 md:top-20 md:h-1 md:w-52 md:flex"></div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className=" flex flex-col py-10 w-full bg-[#F7F7F8] h-auto items-center justify-center">
      <p className="uppercase text-gray-400 text-sm font-bold py-4 tracking-wider">
        why choose us?
      </p>
      <h2 className="text-2xl font-semibold lg:text-4xl mt-2.5">
        Get your dream ride in 3 <span className="text-primary">easy</span>{" "}
        steps.
      </h2>

      <div className="flex flex-col w-full items-center justify-center mt-10 px-4 gap-x-8 gap-y-8 md:flex-row md:gap-y-0 md:mt-20 md:items-start">
        <WhyUsCard
          Icon={IoCarSportOutline}
          title={"Select Car"}
          description={"Select your desired ride from our wide range of cars."}
        />

        <CardSeparator />

        <WhyUsCard
          Icon={IoCalendar}
          title={"Select Date"}
          description={"Select your pick-up and return date."}
        />
        <CardSeparator />

        <WhyUsCard
          Icon={GiCarKey}
          title={"Pick Up Your Ride"}
          description={
            "Experience the joy of effortless driving with our rental cars."
          }
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
