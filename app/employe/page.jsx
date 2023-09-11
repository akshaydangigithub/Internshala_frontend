"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const page = () => {
  const Router = useRouter();

  const { isAuthenticate } = useSelector((state) => state.employeReducer);

  useEffect(() => {
    if (isAuthenticate) Router.push("/employe/auth");
  }, [isAuthenticate]);

  return (
    <>
      <div className="container mt-5">
        <Link className="btn btn-primary me-4" href="/employe/signin">
          Sign In
        </Link>
        <Link className="btn btn-primary" href="/employe/signup">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default page;
