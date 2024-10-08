import Image from "next/image";
import React from "react";

const ForeignStudents = () => {
  return (
    <div className="bg-gray-students pb-16">
      <div className="max-w-7xl mx-auto text-white py-10 justify-between items-center">
        <div className="title flex justify-center">
          <h4 className="font-semibold text-3xl w-full text-black text-center">
            Digət ölkələrdən dərslərimizə qatılan tələbələrimiz
          </h4>
        </div>
      </div>
      <div className="foreign-students flex flex-wrap items-center justify-center gap-6">
        <div className="left flex flex-wrap gap-3 justify-center">
          {Array(5).fill(0).map((_, index) => (
            <div className="relative" key={index}>
              <Image
                src="/images/ekstremaduragirl.svg"
                width={120}
                height={120}
              />
              <div>
                <Image
                  src="/images/ekstremaduraflag.svg"
                  className="absolute top-5 right-0"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="center w-40 h-40 rounded-full border-dashed border flex justify-center items-center border-gray-400">
          <Image src="/images/star1.svg" width={120} height={120} />
        </div>
        <div className="right flex flex-wrap gap-3 justify-center">
          {Array(5).fill(0).map((_, index) => (
            <div className="relative" key={index}>
              <Image
                src="/images/ekstremaduragirl.svg"
                width={120}
                height={120}
              />
              <div>
                <Image
                  src="/images/ekstremaduraflag.svg"
                  className="absolute top-5 right-0"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForeignStudents;
