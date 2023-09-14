"use client";
import Navbar from "@/components/navbar/Navbar";
import HomeHero from "@/components/homeHero/HomeHero";
import WorkCards from "@/components/workcards/WorkCards";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const page = () => {
  const Router = useRouter();

  const { isAuthenticate } = useSelector((state) => state.studentReducer);
  
  useEffect(() => {
    if (isAuthenticate) Router.push("/student/auth");
  }, [isAuthenticate]);
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <HomeHero />
        <WorkCards head="Latest internships on Internshala" />
        <WorkCards head="Latest Jobs on Internshala" />
        <About />
        <Footer />
      </div>
    </>
  );
};

export default page;
