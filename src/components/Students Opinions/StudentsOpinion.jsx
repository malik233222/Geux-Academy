import React from "react";
// import { FaArrowRight } from "react-icons/fa";
import  "./style.css"

const StudentsOpinion = () => {
  const teamMembers = [
    {
      id: 1,
      imgSrc: "https://i.imgur.com/kqx6qV7.jpg",
      name: "Full Name",
      role: "Designer",
      delay: 0.1,
    },
    {
      id: 2,
      imgSrc: "https://i.imgur.com/npaEYj4.jpg",
      name: "Full Name",
      role: "Designer",
      delay: 0.3,
    },
    {
      id: 3,
      imgSrc: "https://i.imgur.com/7YRGiQP.jpg",
      name: "Full Name",
      role: "Designer",
      delay: 0.5,
    },
  ];

  return (
    <div className="container-xxl py-6 pb-5" id="team">
      <div className="container">
        <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-lg-6">
            <h1 className="display-5 mb-0">Team Members</h1>
          </div>
          <div className="col-lg-6 text-lg-end">
            <a className="btn btn-primary py-3 px-5" href="">
              Contact Us
            </a>
          </div>
        </div>
        <div className="row g-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`col-lg-4 col-md-6 wow fadeInUp`}
              data-wow-delay={member.delay}
            >
              <div className="team-item position-relative">
                <img className="img-fluid rounded" src={member.imgSrc} alt="" />
                <div className="team-text bg-white rounded-end p-4">
                  <div>
                    <h5>{member.name}</h5>
                    <span>{member.role}</span>
                  </div>
                  {/* <FaArrowRight className="text-primary" size={40} /> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentsOpinion;