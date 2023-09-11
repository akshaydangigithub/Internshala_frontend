"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const employeAuth = ({ children }) => {
  const Router = useRouter();

  const { isAuthenticate } = useSelector((state) => state.employeReducer);


  useEffect(() => {
    if (!isAuthenticate) Router.push("/employe");
  }, [isAuthenticate]);
  return children;
};

export default employeAuth;
