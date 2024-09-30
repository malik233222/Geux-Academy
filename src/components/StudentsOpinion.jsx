'use client'
import Image from "next/image";
import React from "react";

const StudentsOpinion = () => {
  return (
    <div className="bg-gray-students">
      <div className="max-w-7xl mx-auto text-white justify-between items-center px-4">
        <div className="flex pt-20 justify-between items-center">
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
          <div className="card flex flex-wrap justify-center gap-6">
            {[
              { name: "Nur Cahan", image: "/images/nurcahan.svg" },
              { name: "Jon Doe", image: "/images/jhondoe.svg" },
              { name: "Ağa Ağayev", image: "/images/agaagayev.svg" },
              { name: "Şirin Zəkəriyya", image: "/images/sirin.svg" },
            ].map((student, index) => (
              <div key={index} className="relative w-64">
                <Image
                  src={student.image}
                  alt={`${student.name} photo`}
                  width={300}
                  height={400}
                  className="w-full h-auto"
                />
                <p
                  className="rounded-md absolute bottom-14 left-10
                  font-semibold text-sm text-black px-3 py-2 bg-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {student.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .card {
            justify-content: space-around;
          }
          .card > div {
            flex: 0 0 calc(50% - 1rem);
          }
        }
      `}</style>
    </div>
  );
};

export default StudentsOpinion;
