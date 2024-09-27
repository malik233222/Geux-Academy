"use client";
import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import contentPhoto from "../../public/images/content-photo.png";
import Image from "next/image";

const Hero = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged() {
      console.log("slide changed");
    },
  });

  return (
    <div className="bg-blue-custom hidden md:block"> {/* Mobile view is hidden */}
      <div className="max-w-7xl px-4 mx-auto text-white flex justify-between items-center">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide">
            <div className="hero-content flex justify-between items-center">
              <div className="title-content w-1/4 gap-10 flex flex-col">
                <div className="header-title font-semibold text-3xl leading-9">
                  Məhsul Sahibi və Məhsul Meneceri üçün UX dərsləri
                </div>
                <div className="subtitle font-normal leading-4 tracking-tight">
                  Dünyanın istənilən yerindən təhsil almaq imkanı
                </div>
              </div>
              <div className="photo-wrapper w-1/2 flex justify-center">
                <Image className="" src={contentPhoto} alt="" />
              </div>
            </div>
          </div>
          <div className="keen-slider__slide">
            <div className="hero-content flex justify-between items-center">
              <div className="title-content w-1/4 gap-10 flex flex-col">
                <div className="header-title font-semibold text-3xl leading-9">
                  Məhsul Sahibi və Məhsul Meneceri üçün UX dərsləri
                </div>
                <div className="subtitle font-normal leading-4 tracking-tight">
                  Dünyanın istənilən yerindən təhsil almaq imkanı
                </div>
              </div>
              <div className="photo-wrapper w-1/2 flex justify-center">
                <Image className="" src={contentPhoto} alt="" />
              </div>
            </div>
          </div>
          <div className="keen-slider__slide">
            <div className="hero-content flex justify-between items-center">
              <div className="title-content w-1/4 gap-10 flex flex-col">
                <div className="header-title font-semibold text-3xl leading-9">
                  Məhsul Sahibi və Məhsul Meneceri üçün UX dərsləri
                </div>
                <div className="subtitle font-normal leading-4 tracking-tight">
                  Dünyanın istənilən yerindən təhsil almaq imkanı
                </div>
              </div>
              <div className="photo-wrapper w-1/2 flex justify-center">
                <Image className="" src={contentPhoto} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
