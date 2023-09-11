"use client"
import { asynccreatejobemploye } from "@/store/Actions/employeAction";
import React from "react";
import { useDispatch } from "react-redux";

const page = () => {
    const dispatch = useDispatch();
  const CreateJobHandler = () => {
    const job = {
        jobtittle: "Data Science",
        skill: "Python, BI, Maths",
        jobtype: "remote",
        openings: 12,
        decription: "Data Science Job",
        preferences: "Good Communication Skills, Good in Maths",
        salary: 1200000,
        perks: "Good Salary, Good Environment",
        assessment: "Why shuld I hire you?",
    };
    dispatch(asynccreatejobemploye(job));
  };

  return (
    <div className="container mt-5">
      <button className="btn btn-primary" onClick={CreateJobHandler}>
        Create Job
      </button>
    </div>
  );
};

export default page;
