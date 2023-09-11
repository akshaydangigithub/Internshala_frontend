import React, { useState, useEffect, useRef } from "react";
import "@/css/navbar.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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
      !sidebarRef.current.contains(e.target) &&
      !menuIconRef.current.contains(e.target)
    ) {
      setRotate(false);
      setRotate2(false);
      setSidebarShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="navbar bg-light shadow d-flex align-items-center">
        <div className="left d-flex align-items-center">
          <div
            className="menu-icon me-5"
            ref={menuIconRef}
            onClick={menuHandler}
          >
            <div className={rotate ? "rotate" : ""}></div>
            <div className={rotate2 ? "rotate2" : ""}></div>
          </div>
          <Image
            className="logo"
            src="/Internshala_company_logo.png"
            height={45}
            width={110}
          />
        </div>
        <div className="right d-none d-md-block">
          <button className="custome-btn me-4">Login</button>
          <button
            style={{ backgroundColor: "#00A5EC" }}
            className="custome-btn text-white"
          >
            register
          </button>
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
          <div className="d-flex flex-column px-4 mt-3">
            <Link className="text-decoration-none text-black mb-3" href="/">
              Register - As a Student
            </Link>
            <Link className="text-decoration-none text-black mb-3" href="/">
            Register - As a Employer
            </Link>
            <Link className="text-decoration-none text-black mb-3" href="/">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
