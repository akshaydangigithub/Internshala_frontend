"use client";
import { asyncaddcoursestudent } from "@/store/Actions/studentAction";
import React from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();

  const AddCourceHandler = () => {
    const cource = {
      school: "St. paul bhopal",
      year: "2020",
      CGPA: "9.8",
      degree: "B.Tech",
      field: "CSE",
      description: "I am a good student",
    };
    dispatch(asyncaddcoursestudent(cource));
  };

  return (
    <div className="container mt-5">
      <button className="btn btn-warning" onClick={AddCourceHandler}>
        Add cource
      </button>
    </div>
  );
};

export default page;
