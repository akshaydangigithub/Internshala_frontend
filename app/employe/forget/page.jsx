"use client";
import { asyncemployeforgetpassword } from "@/store/Actions/employeAction";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const page = () => {
  const Router = useRouter();
  const { errors } = useSelector((state) => state.employeReducer);
  const dispatch = useDispatch();
  const sendmailHandler = async () => {
    const email = {
      email: "hdangi224@gmail.com",
    };
    await dispatch(asyncemployeforgetpassword(email));
    if (errors.length === 0) {
      Router.push("/employe/signin");
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
