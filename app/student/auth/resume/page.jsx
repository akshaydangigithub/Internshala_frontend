"use client";
import {
  asyncdeleteAccstudent,
  asyncdeleteProstudent,
  asyncdeletecoursestudent,
  asyncdeletedustudent,
  asyncdeleteinternshipstudent,
  asyncdeletejobstudent,
  asyncdeleteresponsibilitystudent,
  asyncdeleteskillstudent,
} from "@/store/Actions/studentAction";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const { student } = useSelector((state) => state.studentReducer);

  const DeleteEduHandler = (id) => {
    dispatch(asyncdeletedustudent(id));
  };

  const DeleteJobHandler = (id) => {
    dispatch(asyncdeletejobstudent(id));
  };

  const DeleteinterHandler = (id) => {
    dispatch(asyncdeleteinternshipstudent(id));
  };

  const DeleteResHandler = (id) => {
    dispatch(asyncdeleteresponsibilitystudent(id));
  };

  const DeleteCourcesHandler = (id) => {
    dispatch(asyncdeletecoursestudent(id));
  };

  const DeleteSkillHandler = (id) => {
    dispatch(asyncdeleteskillstudent(id));
  };

  const DeleteProHandler = (id) => {
    dispatch(asyncdeleteProstudent(id));
  };

  const DeleteAccHandler = (id) => {
    dispatch(asyncdeleteAccstudent(id));
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-3">Here is your resume</h3>
      <h4>
        Education <Link href="/student/auth/resume/education">+</Link>{" "}
      </h4>
      <ul className="list-group">
        {student &&
          student.resume.education.map((edu) => (
            <div className="list-group-item" key={edu.id}>
              {JSON.stringify(edu)}

              <Link
                className="btn btn-sm btn-primary mx-4"
                href={`/student/auth/resume/education/${edu.id}`}
              >
                Edit
              </Link>

              <button
                onClick={() => DeleteEduHandler(edu.id)}
                className="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </div>
          ))}
      </ul>

      <hr />
      <h4>
        Jobs <Link href="/student/auth/resume/job">+</Link>{" "}
      </h4>
      <ul className="list-group">
        {student &&
          student.resume.jobs.map((job) => (
            <div className="list-group-item" key={job.id}>
              {JSON.stringify(job)}

              <Link
                className="btn btn-sm btn-primary mx-4"
                href={`/student/auth/resume/job/${job.id}`}
              >
                Edit
              </Link>

              <button
                onClick={() => DeleteJobHandler(job.id)}
                className="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </div>
          ))}
      </ul>
      <hr />

      <h4>
        Internship <Link href="/student/auth/resume/internship">+</Link>{" "}
      </h4>
      <ul className="list-group">
        {student &&
          student.resume.internships.map((intern) => (
            <div className="list-group-item" key={intern.id}>
              {JSON.stringify(intern)}

              <Link
                className="btn btn-sm btn-primary mx-4"
                href={`/student/auth/resume/internship/${intern.id}`}
              >
                Edit
              </Link>

              <button
                onClick={() => DeleteinterHandler(intern.id)}
                className="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </div>
          ))}
      </ul>
      <hr />

      <h4>
        responsibilities{" "}
        <Link href="/student/auth/resume/responsibilities">+</Link>{" "}
      </h4>
      <ul className="list-group">
        {student &&
          student.resume.responsibilities.map((res) => (
            <div className="list-group-item" key={res.id}>
              {JSON.stringify(res)}

              <Link
                className="btn btn-sm btn-primary mx-4"
                href={`/student/auth/resume/responsibilities/${res.id}`}
              >
                Edit
              </Link>

              <button
                onClick={() => DeleteResHandler(res.id)}
                className="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </div>
          ))}
      </ul>
      <hr />

      <h4>
        courses <Link href="/student/auth/resume/courses">+</Link>{" "}
      </h4>
      <ul className="list-group">
        {student &&
          student.resume.courses.map((courses) => (
            <div className="list-group-item" key={courses.id}>
              {JSON.stringify(courses)}

              <Link
                className="btn btn-sm btn-primary mx-4"
                href={`/student/auth/resume/courses/${courses.id}`}
              >
                Edit
              </Link>

              <button
                onClick={() => DeleteCourcesHandler(courses.id)}
                className="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </div>
          ))}
      </ul>
      <hr />

      <h4>
        skills <Link href="/student/auth/resume/skills">+</Link>{" "}
      </h4>
      <ul className="list-group">
        {student &&
          student.resume.skills.map((skill) => (
            <div className="list-group-item" key={skill.id}>
              {JSON.stringify(skill)}

              <Link
                className="btn btn-sm btn-primary mx-4"
                href={`/student/auth/resume/skills/${skill.id}`}
              >
                Edit
              </Link>

              <button
                onClick={() => DeleteSkillHandler(skill.id)}
                className="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </div>
          ))}
      </ul>
      <hr />

      <h4>
        projects <Link href="/student/auth/resume/projects">+</Link>{" "}
      </h4>
      <ul className="list-group">
        {student &&
          student.resume.projects.map((pro) => (
            <div className="list-group-item" key={pro.id}>
              {JSON.stringify(pro)}

              <Link
                className="btn btn-sm btn-primary mx-4"
                href={`/student/auth/resume/projects/${pro.id}`}
              >
                Edit
              </Link>

              <button
                onClick={() => DeleteProHandler(pro.id)}
                className="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </div>
          ))}
      </ul>
      <hr />

      <h4>
        accomplishments{" "}
        <Link href="/student/auth/resume/accomplishments">+</Link>{" "}
      </h4>
      <ul className="list-group">
        {student &&
          student.resume.accomplishments.map((acc) => (
            <div className="list-group-item" key={acc.id}>
              {JSON.stringify(acc)}

              <Link
                className="btn btn-sm btn-primary mx-4"
                href={`/student/auth/resume/accomplishments/${acc.id}`}
              >
                Edit
              </Link>

              <button
                onClick={() => DeleteAccHandler(acc.id)}
                className="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default page;
