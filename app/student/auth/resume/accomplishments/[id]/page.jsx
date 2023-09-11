"use client";
import { asyneditaccomplishmentstudent } from "@/store/Actions/studentAction";
import React from "react";
import { useDispatch } from "react-redux";

const page = ({ params }) => {
  const dispatch = useDispatch();

  const EditAccHandler = (id) => {
    const acc = {
      school: "St. Thoams",
    };
    dispatch(asyneditaccomplishmentstudent(id, acc));
  };
  return (
    <div className="container mt-5">
      <button
        className="btn btn-danger"
        onClick={() => EditAccHandler(params.id)}
      >
        {" "}
        Edit acc
      </button>
    </div>
  );
};

export default page;
