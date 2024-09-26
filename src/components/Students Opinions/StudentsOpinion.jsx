import Image from "next/image";
import React from "react";

const StudentsOpinion = () => {
  return (
    <div className="bg-gray-students ">
      <div className="max-w-7xl mx-auto text-white  justify-between items-center">
        <div className="flex pt-20 justify-between w-full">
          <h4 className="text-3xl text-black font-semibold">
            Tələbələrin fikirləri
          </h4>
          <button
            type="button"
            className="rounded-md bg-gray-students px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-black hover:bg-white"
          >
            Bütün videolara bax
          </button>
        </div>
        <div className="students my-10">
          <div className="card flex gap-6">
            <div className="relative">
              <Image
                src="/images/nurcahan.svg"
                alt="student photo"
                width={300}
                height={400}
              />
              <p
                className="rounded-md absolute bottom-14 left-10
              font-semibold
              text-sm  text-black px-3 py-2 bg-white  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
               Nur Cahan
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/jhondoe.svg"
                alt="student photo"
                width={300}
                height={400}
              />
              <p
                className="rounded-md absolute bottom-14 left-10
              font-semibold
              text-sm  text-black px-3 py-2 bg-white  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
              Jon Doe
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/agaagayev.svg"
                alt="student photo"
                width={300}
                height={400}
              />
              <p
                className="rounded-md absolute bottom-14 left-10
              font-semibold
              text-sm  text-black px-3 py-2 bg-white  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
              Ağa Ağayev
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/sirin.svg"
                alt="student photo"
                width={300}
                height={400}
              />
              <p
                className="rounded-md absolute bottom-14 left-10
              font-semibold
              text-sm  text-black px-3 py-2 bg-white  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
               Şirin Zəkəriyya
              </p>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsOpinion;
