import React from "react";
import JobsCard from "./JobsCard";

const HighPayingJobs = () => {
  return (
    <div className="container  pb-10 py-28">
      <div className="max-w-7xl mx-auto">
        <h4 className="text-3xl font-semibold">Yüksək maaşlı peşələr</h4>
        <div className="flex flex-wrap gap-5">
          <JobsCard />
          <JobsCard />
          <JobsCard />
          <JobsCard />
          <JobsCard />
        </div>
      </div>
    </div>
  );
};

export default HighPayingJobs;
