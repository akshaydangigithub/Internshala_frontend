"use client";
import { asyncaddjobstudent } from "@/store/Actions/studentAction";
import React from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();

  const AddjobHandler = () => {
    const job = {
      school: "St. paul bhopal",
      year: "2020",
      CGPA: "9.8",
      degree: "B.Tech",
      field: "CSE",
      description: "I am a good student",
    };
    dispatch(asyncaddjobstudent(job));
  };

  return (
    <div className="container mt-5">
      <button className="btn btn-warning" onClick={AddjobHandler}>
        Add Job
      </button>
    </div>
  );
};

export default page;
