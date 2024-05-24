import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs/WhyUs";
import WhatWeOffer from "./components/WhatWeOffer/WhatWeOffer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <HeroSection />
      <WhyChooseUs />
      <WhatWeOffer />
    </main>
  );
}
