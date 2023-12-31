"use client";
import Register from "@/components/registerStudent/Register";
import { asynsignupstudent } from "@/store/Actions/studentAction";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();

  const Router = useRouter();

  const { isAuthenticate } = useSelector((state) => state.studentReducer);

  console.log(isAuthenticate);

  useEffect(() => {
    if (isAuthenticate) Router.push("/student/auth");
  }, [isAuthenticate]);

  const signupHandler = () => {
    const newStudent = {
      firstname: "akshay",
      lastname: "dangi",
      contact: "1234567890",
      city: "bhopal",
      email: "akshayd1233@gmail.com",
      password: "134567890",
    };
    dispatch(asynsignupstudent(newStudent));
  };


  return (
    <>
      <Register />
      {/* <div className="container mt-5">
        <button className="btn btn-success" onClick={signupHandler}>
          signup
        </button>
      </div> */}
    </>
  );
};

export default page;
