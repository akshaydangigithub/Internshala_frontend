"use client";
import { asyneditjobstudent } from "@/store/Actions/studentAction";
import React from "react";
import { useDispatch } from "react-redux";

const page = ({ params }) => {
  const dispatch = useDispatch();

  const Editjobhandler = (id) => {
    const job = {
      school: "St. Thoams",
    };
    dispatch(asyneditjobstudent(id, job));
  };
  return (
    <div className="container mt-5">
      <button
        className="btn btn-danger"
        onClick={() => Editjobhandler(params.id)}
      >
        {" "}
        Edit Job
      </button>
    </div>
  );
};

export default page;
