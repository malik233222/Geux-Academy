import React from "react";

const JobsCard = () => {
  return (
    <div className="bg-gray-jobs  rounded-lg my-7 py-3 px-7">
      <span className="text-xs leading-5">Təməl biliklərlə</span>
      <h4 className=" job-name text-3xl leading-9 font-semibold mt-5 mb-3  w-1/12     ">
        UX/UI dizayn
      </h4>
      <p className="text-sm pb-5  w-64 text-wrap">
        Müasır qrafik dizayn sahəsi üçün belə bir şansı əldən vermə.
      </p>
      <div className="flex justify-between">
        <p class="w-1/2 uppercase font-semibold text-2xl leading-5">4 ay?</p>
        <button
          type="button"
          className="rounded-md Class
            Properties
            font-semibold
            leading-5font-size: 0.75rem; /* 12px */
            line-height: 1rem; /* 16px */
            text-sm  text-black px-3 py-2 bg-gray-custom-button  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          MÜRACİƏT ET
        </button>
      </div>
    </div>
  );
};

export default JobsCard;
