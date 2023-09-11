"use client";
import {
  asynavatarstudent,
  asyncstudentresetpassword,
  asynupdatestudent,
} from "@/store/Actions/studentAction";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.studentReducer.student);

  const studentUpdateHandler = () => {
    const newStudent = {
      firstname: "akshay",
      lastname: "dangi jiiiiiii",
    };
    dispatch(asynupdatestudent(newStudent));
  };

  const AvatarHandler = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    formdata.set("avatar", e.target.avatar.files[0]);
    dispatch(asynavatarstudent(formdata));
  };

  const ResetPasswordHandler = () => {
    const pwd = {
      password: "12345678",
    };
    dispatch(asyncstudentresetpassword(pwd));
  };

  return (
    <div className="container mt-4">
      <img height={200} src={data && data.avatar.url} alt="" /> <br />
      <br />
      <form encType="multipart/form-data" onSubmit={AvatarHandler}>
        <input type="file" name="avatar" />
        <button>submit</button>
      </form>
      <br />
      <button className="btn btn-warning me-4" onClick={studentUpdateHandler}>
        Update
      </button>
      <button className="btn btn-danger" onClick={ResetPasswordHandler}>
        Reset Student Password
      </button>
    </div>
  );
};

export default page;
