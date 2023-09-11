"use client";
import {  asyncaddresponsibilitystudent } from "@/store/Actions/studentAction";
import React from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();

  const AddResHandler = () => {
    const Res = {
      school: "St. paul bhopal",
      year: "2020",
      CGPA: "9.8",
      degree: "B.Tech",
      field: "CSE",
      description: "I am a good student",
    };
    dispatch(asyncaddresponsibilitystudent(Res));
  };

  return (
    <div className="container mt-5">
      <button className="btn btn-warning" onClick={AddResHandler}>
        Add Res
      </button>
    </div>
  );
};

export default page;
