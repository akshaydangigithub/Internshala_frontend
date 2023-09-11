"use client";
import { asyncaddskillstudent } from "@/store/Actions/studentAction";
import React from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();

  const AddSkillsHandler = () => {
    const Skill = {
      school: "St. paul bhopal",
      year: "2020",
      CGPA: "9.8",
      degree: "B.Tech",
      field: "CSE",
      description: "I am a good student",
    };
    dispatch(asyncaddskillstudent(Skill));
  };

  return (
    <div className="container mt-5">
      <button className="btn btn-warning" onClick={AddSkillsHandler}>
        Add Skill
      </button>
    </div>
  );
};

export default page;
