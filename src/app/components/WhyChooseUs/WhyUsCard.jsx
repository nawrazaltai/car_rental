import React from "react";
import { Card } from "@/components/ui/card";

const WhyUsCard = ({ Icon, title, description }) => {
  return (
    <article className="flex flex-col items-center w-52">
      <Card className="flex flex-col rounded-2xl border-none items-center justify-center w-40 h-36 bg-black lg:w-44 lg:h-40 shadow-md shadow-orange-400">
        <Icon size={75} color="#F1F1F1" />
      </Card>

      <p className="font-semibold text-xl mt-3 text-center">{title}</p>
      <p className="text-base tracking-wide text-center text-gray-500 font-medium mt-2.5">
        {description}
      </p>
    </article>
  );
};

export default WhyUsCard;
