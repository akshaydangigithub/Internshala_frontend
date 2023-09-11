"use client";
import { asyncstudentotppassword } from "@/store/Actions/studentAction";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const sendotpHandler = async () => {
    const Router = useRouter();
    const dispatch = useDispatch();
    const { errors } = useSelector((state) => state.studentReducer);
    const newpwd = {
      email: "hdangi224@gmail.com",
      otp: "",
      password: "123456",
    };
    await dispatch(asyncstudentotppassword(newpwd));
    if (errors.length === 0) {
      Router.push("/student/forget/otp");
    } else {
      toast.error(JSON.stringify(errors));
      return;
    }
  };
  return (
    <div className="container mt-5">
      <button onClick={sendotpHandler} className="btn btn-success">
        Change Password
      </button>
    </div>
  );
};

export default page;
