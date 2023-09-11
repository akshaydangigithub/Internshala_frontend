"use client";
import {
  asynavataremploye,
  asyncemployeresetpassword,
  asynupdateemploye,
} from "@/store/Actions/employeAction";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.employeReducer.employe);

  const employeUpdateHandler = () => {
    const newemploye = {
      firstname: "hariom",
      lastname: "dangi jiiiiiii",
    };
    dispatch(asynupdateemploye(newemploye));
  };

  const AvatarHandler = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    formdata.set("organizationLogo", e.target.organizationLogo.files[0]);
    dispatch(asynavataremploye(formdata));
  };

  const ResetPasswordHandler = () => {
    const pwd = {
      password: "12345678",
    };
    dispatch(asyncemployeresetpassword(pwd));
  };

  return (
    <div className="container mt-4">
      <img height={200} src={data && data.organizationLogo.url} alt="" /> <br />
      <br />
      <form encType="multipart/form-data" onSubmit={AvatarHandler}>
        <input type="file" name="organizationLogo" />
        <button>submit</button>
      </form>
      <br />
      <button className="btn btn-warning me-4" onClick={employeUpdateHandler}>
        Update
      </button>
      <button className="btn btn-danger" onClick={ResetPasswordHandler}>
        Reset employe Password
      </button>
    </div>
  );
};

export default page;
