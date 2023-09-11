"use client";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const { employe } = useSelector((state) => state.employeReducer);
  console.log(employe);
  return (
    <div className="container mt-5">
      <h3>
        Created Internship <strong>{employe?.firstname}</strong>{" "}
      </h3>
      <ul className="list-group">
        {employe &&
          employe.internships.map((intern) => (
            <div className="list-group-item mb-4" key={intern._id}>
              {JSON.stringify(intern)} <br /> <br />
            </div>
          ))}
      </ul>

      <h3>
        Created jobs <strong>{employe?.firstname}</strong>{" "}
      </h3>
      <ul className="list-group">
        {employe &&
          employe.jobs.map((job) => (
            <div className="list-group-item mb-4" key={job._id}>
              {JSON.stringify(job)} <br /> <br />
            </div>
          ))}
      </ul>
    </div>
  );
};

export default page;
