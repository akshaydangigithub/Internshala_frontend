"use client";
import React, { useState, useEffect, useRef } from "react";
import "@/css/navbar.css";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  asynccurrentstudent,
  asynsignoutstudent,
} from "@/store/Actions/studentAction";
import { Dropdown } from "react-bootstrap";
import styles from "./navbar.module.css";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const dispatch = useDispatch();
  const Router = useRouter();
  const { isAuthenticate, student } = useSelector(
    (state) => state.studentReducer
  );
  useEffect(() => {
    dispatch(asynccurrentstudent());
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const [rotate, setRotate] = useState(false);
  const [rotate2, setRotate2] = useState(false);
  const [sidebarShow, setSidebarShow] = useState(false);

  const menuHandler = () => {
    setRotate(!rotate);
    setRotate2(!rotate2);
    setSidebarShow(!sidebarShow);
  };

  const menuIconRef = useRef(null);
  const sidebarRef = useRef(null);

  const handleClickOutside = (e) => {
    if (
      sidebarRef.current &&
      menuIconRef.current &&
      !sidebarRef.current.contains(e.target) &&
      !menuIconRef.current.contains(e.target)
    ) {
      setRotate(false);
      setRotate2(false);
      setSidebarShow(false);
    }
  };
  const SignOutHandler = () => {
    dispatch(asynsignoutstudent());
  };

  return (
    <>
      <div className="navbar bg-light shadow d-flex align-items-center">
        <div className="left d-flex align-items-center">
          {isAuthenticate ? (
            ""
          ) : (
            <div
              className="menu-icon me-5"
              ref={menuIconRef}
              onClick={menuHandler}
            >
              <div className={rotate ? "rotate" : ""}></div>
              <div className={rotate2 ? "rotate2" : ""}></div>
            </div>
          )}

          <Link href="/">
            <Image
              className="logo"
              src="/Internshala_company_logo.png"
              height={45}
              width={110}
              alt="logo"
            />
          </Link>
        </div>
        <div className="right d-none d-md-block">
          <div className="d-flex align-items-center ">
            {isAuthenticate ? (
              <div className="d-flex align-items-center ">
                <p className={`${styles.links_main} my-0 mx-3`}>
                  <Link
                    className={`${styles.links} text-decoration-none fs-6`}
                    href="/student/auth"
                  >
                    Home
                  </Link>
                </p>
                <p className={`${styles.links_main} my-0 mx-3`}>
                  <Link
                    className={`${styles.links} text-decoration-none fs-6`}
                    href=""
                  >
                    internships
                  </Link>
                </p>
                <p className={`${styles.links_main} my-0 mx-3`}>
                  <Link
                    className={`${styles.links} text-decoration-none fs-6`}
                    href=""
                  >
                    Jobs
                  </Link>
                </p>

                <Dropdown>
                  <Dropdown.Toggle
                    style={{
                      backgroundColor: "transparent",
                      color: "#333",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "3px",
                    }}
                    id="dropdown-basic"
                  >
                    <div
                      style={{
                        height: "25px",
                        width: "25px",
                        border: "1px solid black",
                        borderRadius: "50%",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* <Image src="/avatar.png" alt="alt" fill={true} /> */}
                      <Image src={student?.avatar.url} alt="alt" fill={true} />
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <p className={`${styles.links_main}`}>
                      {" "}
                      <Link
                        className={`${styles.links} text-decoration-none fs-6 mx-2`}
                        href="/student/auth/profile"
                      >
                        Profile
                      </Link>
                    </p>
                    <p className={`${styles.links_main}`}>
                      {" "}
                      <Link
                        className={`${styles.links} text-decoration-none fs-6 mx-2`}
                        href="/student/auth/applied"
                      >
                        My Application
                      </Link>
                    </p>
                    <p className={`${styles.links_main}`}>
                      <Link
                        className={`${styles.links} text-decoration-none fs-6 mx-2`}
                        href="/student/auth/resume"
                      >
                        My Resume
                      </Link>
                    </p>
                    <p className={`${styles.links_main} mb-1`}>
                      <Link
                        className={`${styles.links} text-decoration-none fs-6 mx-2`}
                        href=""
                        onClick={SignOutHandler}
                      >
                        Logout
                      </Link>
                    </p>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            ) : (
              <div>
                <button className="custome-btn me-4">Login</button>
                <button
                  style={{ backgroundColor: "#00A5EC" }}
                  className="custome-btn text-white"
                >
                  register
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* sidebar */}
      <div
        ref={sidebarRef}
        className={`sidebar bg-light shadow overflow-hidden ${
          sidebarShow ? "sidebar-active" : "sidebar-close"
        }`}
      >
        <div className="mt-5">
          <div className="d-flex flex-column px-4 border-bottom">
            <Link className="text-decoration-none text-black mb-3" href="/">
              Internships
            </Link>
            <Link className="text-decoration-none text-black mb-3" href="/">
              Jobs
            </Link>
            <Link className="text-decoration-none text-black mb-3" href="/">
              Contact Us
            </Link>
          </div>
          <div className="d-flex flex-column px-4 mt-3 border-bottom">
            <Link
              className="text-decoration-none text-black mb-3"
              href="/student/signup"
            >
              Register - As a Student
            </Link>
            <Link
              className="text-decoration-none text-black mb-3"
              href="/employe/signup"
            >
              Register - As a Employer
            </Link>
          </div>
          <div className="d-flex flex-column px-4 mt-3">
            <Link
              className="text-decoration-none text-black mb-3"
              href="/student/signin"
            >
              Login - As a Student
            </Link>
            <Link
              className="text-decoration-none text-black mb-3"
              href="/employe/signin"
            >
              Login - As a Employer
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
