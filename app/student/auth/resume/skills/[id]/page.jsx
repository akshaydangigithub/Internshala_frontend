"use client";
import { asyneditskillstudent } from "@/store/Actions/studentAction";
import React from "react";
import { useDispatch } from "react-redux";

const page = ({ params }) => {
  const dispatch = useDispatch();

  const EditSkillsHandler = (id) => {
    const Skill = {
      school: "St. Thoams",
    };
    dispatch(asyneditskillstudent(id, Skill));
  };
  return (
    <div className="container mt-5">
      <button
        className="btn btn-danger"
        onClick={() => EditSkillsHandler(params.id)}
      >
        {" "}
        Edit Skill
      </button>
    </div>
  );
};

export default page;
