"use client";
import { asyncaddinternshipstudent } from "@/store/Actions/studentAction";
import React from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();

  const AddInternHandler = () => {
    const Intern = {
      school: "St. paul bhopal",
      year: "2020",
      CGPA: "9.8",
      degree: "B.Tech",
      field: "CSE",
      description: "I am a good student",
    };
    dispatch(asyncaddinternshipstudent(Intern));
  };

  return (
    <div className="container mt-5">
      <button className="btn btn-warning" onClick={AddInternHandler}>
        Add Intern
      </button>
    </div>
  );
};

export default page;
