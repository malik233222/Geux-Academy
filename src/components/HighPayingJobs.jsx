import React from "react";
import JobsCard from "./JobsCard";

const HighPayingJobs = () => {
  return (
    <div className=" pb-10 py-28">
      <div className="max-w-7xl px-4 mx-auto">
        <h4 className="text-3xl font-semibold text-left mb-10">Yüksək maaşlı peşələr</h4>
        {/* Senin grid algoritmanla */}
        <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-[repeat(6,auto)]">

          {(new Array(5)).fill("test").map((item, index) => (
            <JobsCard
              key={index}
              className={(index % 5) < 3 ? "col-span-2" : "col-span-3"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighPayingJobs;
