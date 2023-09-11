"use client";
import {
  asyncapplyinternshipemploye,
  asyncapplyjobemploye,
} from "@/store/Actions/employeAction";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const { employe, jobs, internships } = useSelector(
    (state) => state.employeReducer
  );

  const dispatch = useDispatch();

  const ApplyJobHandler = (id) => {
    dispatch(asyncapplyjobemploye(id));
  };

  const ApplyInternshipHandler = (id) => {
    dispatch(asyncapplyinternshipemploye(id));
  };

  useEffect(() => {}, [employe]);
  return (
    <div className="container mt-5">
      <h1>Welcome to Login</h1>
      <Link href="/employe/create/job">Create Jobs</Link> <br />
      <br />
      <Link href="/employe/create/internship">Create Internship</Link>
    </div>
  );
};

export default page;
