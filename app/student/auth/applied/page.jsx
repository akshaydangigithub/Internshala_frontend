"use client";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const { student } = useSelector((state) => state.studentReducer);
  console.log(student);
  return (
    <div className="container mt-5">
      <h3>
        Applied Internship <strong>{student?.firstname}</strong>{" "}
      </h3>
      <ul className="list-group">
        {student &&
          student.internships.map((intern) => (
            <div className="list-group-item mb-4" key={intern._id}>
              {JSON.stringify(intern)} <br /> <br />
                <button className="btn btn-success">Applied</button>
            </div>
          ))}
      </ul>

      <h3>
        Applied jobs <strong>{student?.firstname}</strong>{" "}
      </h3>
      <ul className="list-group">
        {student &&
          student.jobs.map((job) => (
            <div className="list-group-item mb-4" key={job._id}>
              {JSON.stringify(job)} <br /> <br />
                <button className="btn btn-success">Applied</button>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default page;
