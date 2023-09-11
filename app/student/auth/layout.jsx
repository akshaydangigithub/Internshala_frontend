"use client";
import {
  asycallinternships,
  asycalljobs,
} from "@/store/Actions/studentAction";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const StudentAuth = ({ children }) => {
  const Router = useRouter();
  const dispatch = useDispatch();

  const { isAuthenticate } = useSelector((state) => state.studentReducer);


  useEffect(() => {
    if (!isAuthenticate) Router.push("/student");
    if (isAuthenticate) {
      dispatch(asycalljobs())
      dispatch(asycallinternships())
    }
  }, [isAuthenticate]);
  return children;
};

export default StudentAuth;
