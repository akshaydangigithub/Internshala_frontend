"use client";
import { asyneditresponsibilitystudent } from "@/store/Actions/studentAction";
import React from "react";
import { useDispatch } from "react-redux";

const page = ({ params }) => {
  const dispatch = useDispatch();

  const EditReshandler = (id) => {
    const job = {
      school: "St. Thoams",
    };
    dispatch(asyneditresponsibilitystudent(id, job));
  };
  return (
    <div className="container mt-5">
      <button
        className="btn btn-danger"
        onClick={() => EditReshandler(params.id)}
      >
        {" "}
        Edit Job
      </button>
    </div>
  );
};

export default page;
