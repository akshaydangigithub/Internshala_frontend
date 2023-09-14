"use client";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import HomeHero from "@/components/homeHero/HomeHero";
import Navbar from "@/components/navbar/Navbar";
import WorkCards from "@/components/workcards/WorkCards";
import {
  asyncapplyinternshipstudent,
  asyncapplyjobstudent,
} from "@/store/Actions/studentAction";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const { student, jobs, internships } = useSelector(
    (state) => state.studentReducer
  );

  const dispatch = useDispatch();

  const ApplyJobHandler = (id) => {
    dispatch(asyncapplyjobstudent(id));
  };

  const ApplyInternshipHandler = (id) => {
    dispatch(asyncapplyinternshipstudent(id));
  };

  useEffect(() => {}, [student]);
  return (
    <>
      <HomeHero />
      <WorkCards head="Latest internships on Internshala" />
      <WorkCards head="Latest Jobs on Internshala" />
      <About />
      <Footer />

      <div className="container mt-5">
        <h3>
          Available jobs for <strong>{student?.firstname}</strong>{" "}
        </h3>
        <ul className="list-group">
          {jobs &&
            jobs.map((job) => (
              <div className="list-group-item mb-4" key={job._id}>
                {JSON.stringify(job)} <br /> <br />
                {!job.students.includes(student?._id) ? (
                  <button
                    onClick={() => ApplyJobHandler(job._id)}
                    className="btn btn-primary"
                  >
                    Apply Job
                  </button>
                ) : (
                  <button className="btn btn-success">Applied</button>
                )}
              </div>
            ))}
        </ul>

        <hr />
        <h3>
          Available Internships for <strong>{student?.firstname}</strong>{" "}
        </h3>
        <ul className="list-group">
          {internships &&
            internships.map((intern) => (
              <div className="list-group-item mb-4" key={intern._id}>
                {JSON.stringify(intern)} <br /> <br />
                {!intern.students.includes(student?._id) ? (
                  <button
                    onClick={() => ApplyInternshipHandler(intern._id)}
                    className="btn btn-primary"
                  >
                    Apply intern
                  </button>
                ) : (
                  <button className="btn btn-success">Applied</button>
                )}
              </div>
            ))}
        </ul>
      </div>
    </>
  );
};

export default page;
