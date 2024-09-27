import React from "react";

const JobsCard = ({ className }) => {
  return (
    <div className={`bg-gray-jobs rounded-lg md:my-3 py-6 px-4 ${className}`}>
      <span className="text-xs leading-5">Təməl biliklərlə</span>
      <h4 className="job-name text-2xl md:text-3xl leading-9 font-semibold mt-3 mb-2">
        UX/UI dizayn
      </h4>
      <p className="text-sm pb-5 w-full text-wrap">
        Müasır qrafik dizayn sahəsi üçün belə bir şansı əldən vermə.
      </p>
      <div className="flex justify-between flex-col md:flex-row">
        <p className="w-full md:w-1/2 uppercase font-semibold text-lg md:text-2xl leading-5">4 ay?</p>
        <button
          type="button"
          className="mt-4 md:mt-0 rounded-md font-semibold text-sm text-black px-3 py-2 bg-gray-custom-button shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          MÜRACİƏT ET
        </button>
      </div>
    </div>
  );
};

export default JobsCard;
