import React, { useState, useEffect, useRef } from "react";
import "@/css/navbar.css";
import Image from "next/image";
import Link from "next/link";

const NavbarTwo = () => {
  return (
    <>
      <div className="navbar bg-light shadow d-flex align-items-center">
        <div className="left d-flex align-items-center">
          <Image
            className="logo"
            src="/Internshala_company_logo.png"
            height={40}
            width={110}
          />
        </div>
      </div>
    </>
  );
};

export default NavbarTwo;
