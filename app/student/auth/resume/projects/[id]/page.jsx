"use client";
import { asyneditprojectstudent } from "@/store/Actions/studentAction";
import React from "react";
import { useDispatch } from "react-redux";

const page = ({ params }) => {
  const dispatch = useDispatch();

  const EditProHandler = (id) => {
    const Pro = {
      school: "St. Thoams",
    };
    dispatch(asyneditprojectstudent(id, Pro));
  };
  return (
    <div className="container mt-5">
      <button
        className="btn btn-danger"
        onClick={() => EditProHandler(params.id)}
      >
        {" "}
        Edit Pro
      </button>
    </div>
  );
};

export default page;
