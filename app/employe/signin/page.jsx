"use client";

import { asynsigninemploye } from "@/store/Actions/employeAction";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();

  const Router = useRouter();

  const { isAuthenticate } = useSelector((state) => state.employeReducer);

  console.log(isAuthenticate);

  useEffect(() => {
    if (isAuthenticate) Router.push("/employe/auth");
  }, [isAuthenticate]);

  const signinHandler = () => {
    const employe = {
      email: "hdangi224@gmail.com",
      password: "123456",
    };
    dispatch(asynsigninemploye(employe));
  };

  return (
    <div className="container mt-5">
      <button className="btn btn-danger" onClick={signinHandler}>
        signin
      </button>
      <br />
      <Link href="/employe/forget">Forget password</Link>
    </div>
  );
};

export default page;
