"use client";

import Navbar from "@/components/navbar/Navbar";
import {
  asynccurrentstudent,
  asynsignoutstudent,
} from "@/store/Actions/studentAction";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Studentlayout = ({ children }) => {
  const dispatch = useDispatch();
  const Router = useRouter();

  const { isAuthenticate } = useSelector((state) => state.studentReducer);

  useEffect(() => {
    dispatch(asynccurrentstudent());

    if (isAuthenticate) Router.push("/student/auth");
  }, [isAuthenticate]);

  const SignOutHandler = () => {
    dispatch(asynsignoutstudent());
  };
  return (
    <>
      <Navbar />
      {/* <nav className="container">
        <Link href={isAuthenticate ? "/student/auth" : "/student"}>Home</Link>{" "}
        <br />
        {isAuthenticate ? (
          <>
            <Link href="/student/auth/profile">
              Profile
            </Link><br />
            <Link href="/student/auth/resume">
              Resume
            </Link><br />
            <Link href="/student/auth/applied">
              My Applications
            </Link><br />
            <Link href="" onClick={SignOutHandler}>
              Signout
            </Link>
          </>
        ) : (
          <>
            <Link href="/student/signin">SignIn</Link>
            <br />
            <Link href="/student/signup">Signup</Link>
          </>
        )}
      </nav> */}

      <div className="bg-white">{children}</div>
    </>
  );
};

export default Studentlayout;
