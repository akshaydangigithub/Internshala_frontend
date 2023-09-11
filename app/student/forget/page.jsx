"use client";
import { asyncstudentforgetpassword } from "@/store/Actions/studentAction";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const page = () => {
  const Router = useRouter();
  const { errors } = useSelector((state) => state.studentReducer);
  const dispatch = useDispatch();
  const sendmailHandler = async () => {
    const email = {
      email: "hdangi224@gmail.com",
    };
    await dispatch(asyncstudentforgetpassword(email));
    if (errors.length === 0) {
      Router.push("/student/signin");
    } else {
      toast.error(JSON.stringify(errors));
      return;
    }
  };

  return (
    <div className="container mt-5">
      <button onClick={sendmailHandler} className="btn btn-danger">
        send mail
      </button>
    </div>
  );
};

export default page;
