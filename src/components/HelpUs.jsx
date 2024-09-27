import React from "react";

const HelpUs = () => {
  return (
    <div className="bg-black-helpUs1 py-16 ">
      <div className="max-w-7xl mx-auto py-10 text-white rounded-md px-6 bg-gray-helpUs2 flex justify-between ">
        <div className="w-1/2">
          <h4 className="title font-semibold text-white text-3xl ">
            Seçim etməkdə sizə köməklik göstərəcəyik!
          </h4>
          <p className="subtitle text-gray-400">
            Dünyanın istənilən yerindən təhsil almaq imkanı
          </p>
        </div>
        <div className="w-1/2">
          <form className="flex flex-col gap-5">
            <input
              className="bg-transparent border border-gray-600 px-2 py-3 rounded-lg"
              type="text"
              name=""
              id=""
              placeholder="Ad Soyad*"
              required
            />
            <input
              className="bg-transparent border border-gray-600 px-2 py-3 rounded-lg"
              type="text"
              name=""
              id=""
              placeholder="Mobil Nömrə*"
              required
            />
            <input
              className="bg-transparent border border-gray-600 px-2 py-3 rounded-lg"
              type="text"
              name=""
              id=""
              placeholder="Elektron Poçt*"
              required
            />

            <button
              type="button"
              className="rounded-md 
              font-semibold
              leading-5font-size: 0.75rem; /* 12px */
              line-height: 1rem; /* 16px */ 
              w-full
              text-black px-3 py-2 bg-yellow-custom py-4  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Mənə zəng edin
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default HelpUs;
