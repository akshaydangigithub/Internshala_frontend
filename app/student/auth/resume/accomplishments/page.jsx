"use client";
import { asyncaddaccomplishmentstudent } from "@/store/Actions/studentAction";
import React from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();

  const AddAccHandler = () => {
    const acc = {
      school: "St. paul bhopal",
      year: "2020",
      CGPA: "9.8",
      degree: "B.Tech",
      field: "CSE",
      description: "I am a good student",
    };
    dispatch(asyncaddaccomplishmentstudent(acc));
  };

  return (
    <div className="container mt-5">
      <button className="btn btn-warning" onClick={AddAccHandler}>
        Add acc
      </button>
    </div>
  );
};

export default page;
