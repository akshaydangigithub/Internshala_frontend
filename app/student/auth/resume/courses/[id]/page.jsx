"use client";
import { asyneditcoursestudent } from "@/store/Actions/studentAction";
import React from "react";
import { useDispatch } from "react-redux";

const page = ({ params }) => {
  const dispatch = useDispatch();

  const EditCourceHandler = (id) => {
    const cource = {
      school: "St. Thoams",
    };
    dispatch(asyneditcoursestudent(id, cource));
  };
  return (
    <div className="container mt-5">
      <button
        className="btn btn-danger"
        onClick={() => EditCourceHandler(params.id)}
      >
        {" "}
        Edit cource
      </button>
    </div>
  );
};

export default page;
