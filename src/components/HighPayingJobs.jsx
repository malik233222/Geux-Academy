import React from "react";
import JobsCard from "./JobsCard";

const HighPayingJobs = () => {
  return (
    <div className="container  pb-10 py-28">
      <div className="max-w-7xl mx-auto">
        <h4 className="text-3xl font-semibold">Yüksək maaşlı peşələr</h4>
        <div className="w-full grid grid-cols-[repeat(6,auto)] gap-5">
          {(new Array(10)).fill("test").map((item, index) => (
            <JobsCard key={index} className={(index % 5) < 3 ?  "col-span-2" : "col-span-3"} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighPayingJobs;