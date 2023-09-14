"use client";

import Register from "@/components/registerEmploye/Register";
import { asynsignupemploye } from "@/store/Actions/employeAction";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();

  const Router = useRouter();

  const { isAuthenticate } = useSelector((state) => state.employeReducer);

  useEffect(() => {
    if (isAuthenticate) Router.push("/employe/auth");
  }, [isAuthenticate]);

  const signupHandler = () => {
    const newemploye = {
      firstname: "hariom",
      lastname: "dangi",
      contact: "1234567890",
      email: "akshayd1233@gmail.com",
      organizationName: "Dangi PVT LTD",
      password: "123456",
    };
    dispatch(asynsignupemploye(newemploye));
  };

  return (
    <>
      <Register />
      <div className="container mt-5">
        {/* <button className="btn btn-success" onClick={signupHandler}>
        signup
      </button> */}
      </div>
    </>
  );
};

export default page;
