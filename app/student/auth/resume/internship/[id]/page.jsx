"use client";
import { asyneditinternshipstudent } from "@/store/Actions/studentAction";
import React from "react";
import { useDispatch } from "react-redux";

const page = ({ params }) => {
  const dispatch = useDispatch();

  const EditInternHandler = (id) => {
    const job = {
      school: "St. Thoams",
    };
    dispatch(asyneditinternshipstudent(id, job));
  };
  return (
    <div className="container mt-5">
      <button
        className="btn btn-danger"
        onClick={() => EditInternHandler(params.id)}
      >
        {" "}
        Edit Job
      </button>
    </div>
  );
};

export default page;
