import React from "react";
import OurCareerLogos from "./OurCareerLogos";

const GraduateCareer = () => {
  return (
    <div className="py-16 bg-gray-career">
      <div className="max-w-7xl mx-auto bg-white px-8 text-white pt-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h4 className="title font-semibold text-black text-3xl text-center md:text-left mb-4 md:mb-0">
            Məzun karyerası
          </h4>
          <p className="description text-gray-400 w-full md:w-1/4 leading-5 tracking-tight text-center md:text-left">
            Sıfırdan öyrənərək tələbələrimiz böyük şirkətlərdə karyera qura bildilər.
          </p>
        </div>
        <div className="my-14">
          <div className="career-logos pb-12 pt-8 flex flex-wrap gap-5 justify-center">
            <OurCareerLogos photo="/images/uxkitabca.svg" />
            <OurCareerLogos photo="/images/bdc.svg" />
            <OurCareerLogos photo="/images/bdc.svg" />
            <OurCareerLogos photo="/images/uxkitabca.svg" />
            <OurCareerLogos photo="/images/bdc.svg" />
            <OurCareerLogos photo="/images/bdc.svg" />
            <OurCareerLogos photo="/images/uxkitabca.svg" />
            <OurCareerLogos photo="/images/bdc.svg" />
            <OurCareerLogos photo="/images/bdc.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraduateCareer;
