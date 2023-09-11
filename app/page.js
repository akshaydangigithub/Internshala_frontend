"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import HomeHero from "@/components/homeHero/HomeHero";
import WorkCards from "@/components/workcards/WorkCards";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";

const page = () => {
  return (
    <>
      <div className="bg-white">
        {/* <Navbar />
        <HomeHero />
        <WorkCards head="Latest internships on Internshala" />
        <WorkCards head="Latest Jobs on Internshala" />
        <About />
        <Footer /> */}
        <div className="container mt-5">
          <Link href="/student">Student</Link> <br /><br />
          <Link href="/employe">Employe</Link>
        </div>
      </div>
    </>
  );
};

export default page;
