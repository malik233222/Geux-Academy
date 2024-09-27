import React from "react";
import WhyUsCard from "./WhyUsCard";

const WhyUs = () => {
  return (
    <div className=" bg-gray-custom pb-10 py-28"> 
      <div className="max-w-7xl px-4 mx-auto">
        <div className="title flex mb-10 ">
          <p className="lg:w-1/2 font-semibold text-3xl leading-9">
            Niyə GEUX Dizayn Akademiyasını seçirsiniz?
          </p>
        </div>
        <div className="cards flex flex-wrap lg:flex-nowrap gap-10 xl:gap-24">
          <WhyUsCard />
          <WhyUsCard />
          <WhyUsCard />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
