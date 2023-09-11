"use client";
import { asynccreateinternshipemploye } from "@/store/Actions/employeAction";
import React from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const CreateInternshipHandler = () => {
    const internship = {
      profile: "Data Science",
      skill: "Python, BI, Maths",
      internshiptype: "remote",
      openings: 2,
      from: "01-09-23",
      to: "30-09-23",
      duration: "1 month",
      reponsibility: "To handle the data science team",
      stipend: {
        status: "performance based",
        amount: 12000,
      },
      perks: "Good Salary, Good Environment",
      assessment: "Why shuld I hire you?",
    };
    dispatch(asynccreateinternshipemploye(internship));
  };

  return (
    <div className="container mt-5">
      <button className="btn btn-danger" onClick={CreateInternshipHandler}>
        Create Internship
      </button>
    </div>
  );
};

export default page;
