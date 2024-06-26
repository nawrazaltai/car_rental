import React from "react";
// import OrangeCar from "public/orange.png";
import OrangeCar from "public/cars.png";
import Image from "next/image";
import {
  BsClipboard2Check,
  BsCalendar2Check,
  BsCurrencyDollar,
  BsCarFront,
} from "react-icons/bs";

const data = [
  {
    icon: BsClipboard2Check,
    title: "Easy Booking Process",
    description:
      "Browse, select and reserve your vehicle in just a few clicks.",
  },
  {
    icon: BsCalendar2Check,
    title: "Flexible Rental Options",
    description: "Rent by the day, week or month - whatever works for you. ",
  },
  {
    icon: BsCurrencyDollar,
    title: "Transparent Pricing",
    description:
      "No hidden fees - know exactly what you are paying for upfront.",
  },
  {
    icon: BsCarFront,
    title: "Wide Range of Vehicles",
    description: "Choose from a diverse selection of top-quality vehicles.",
  },
];

const WhatWeOfferCard = ({ Icon, title, description }) => {
  return (
    <div className="flex w-full items-center py-2.5">
      <div className="bg-white rounded-lg p-5 xl:p-3.5 shadow-md shadow-gray-400">
        <Icon size={30} color="#3D3B40" />
      </div>

      <div className="ml-2.5 md:ml-5">
        <p className="font-bold text-base lg:text-lg">{title}</p>
        <p className="font-medium text-gray-500 text-sm lg:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

const WhatWeOffer = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full bg-[#F0F0F2] pt-10 pb-5 px-5">
      <p className="uppercase  text-gray-400 text-sm font-bold py-4 tracking-wider">
        what we offer
      </p>
      <h2 className="text-2xl text-center font-semibold mt-2.5 lg:text-3xl xl:text-4xl ">
        Get the best experience of rental cars
      </h2>

      <div className="flex flex-col-reverse items-center mt-10 xl:mt-20 w-full xl:flex-row xl:gap-x-5">
        <div className="justify-center items-center my-5 xl:flex xl:w-1/2">
          {/* <Image src={OrangeCar} width={800} /> */}
          <Image src={OrangeCar} width={750} />
        </div>

        <div className="flex flex-col gap-y-2.5 lg:gap-y-4">
          {data.map((item) => {
            return (
              <WhatWeOfferCard
                key={item.title}
                title={item.title}
                Icon={item.icon}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
