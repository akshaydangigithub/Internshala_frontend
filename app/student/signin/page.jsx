"use client";

import LoginStudent from "@/components/loginStudent/LoginStudent";
import { asynsigninstudent } from "@/store/Actions/studentAction";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();

  const Router = useRouter();

  const { isAuthenticate } = useSelector((state) => state.studentReducer);

  useEffect(() => {
    if (isAuthenticate) Router.push("/student/auth");
  }, [isAuthenticate]);

  const signinHandler = () => {
    const student = {
      email: "hdangi224@gmail.com",
      password: "12345678",
    };
    dispatch(asynsigninstudent(student));
  };

  return (
    <>
    <LoginStudent/>
      {/* <div className="container mt-5">
        <button className="btn btn-danger" onClick={signinHandler}>
          signin
        </button>
        <br />
        <Link href="/student/forget">Forget password</Link>
      </div> */}
    </>
  );
};

export default page;
