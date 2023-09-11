"use client";
import { asyneditedustudent } from "@/store/Actions/studentAction";
import React from "react";
import { useDispatch } from "react-redux";

const page = ({ params }) => {
  const dispatch = useDispatch();

  const EditEduhandler = (id) => {
    const edu = {
      school: "St. Thoams",
    };
    dispatch(asyneditedustudent(id, edu));
  };
  return (
    <div className="container mt-5">
      <button
        className="btn btn-danger"
        onClick={() => EditEduhandler(params.id)}
      >
        {" "}
        Edit Education
      </button>
    </div>
  );
};

export default page;
