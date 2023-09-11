import Image from "next/image";
import React from "react";
import "@/css/about.css";

function About() {
  return (
    <div className="bg-white">
      <div className="container py-5">
        <h3 style={{ color: "#333" }} className="text-center fw-bold">
          Top companies trust us
        </h3>
        <div className="mt-5 position-relative d-flex overflow-hidden border-bottom pb-4">
          <Image
            src="/companies.png"
            alt="companies"
            height={100}
            width={2000}
            className="object-fit-cover comp"
          />
          <Image
            src="/companies.png"
            alt="companies"
            height={100}
            width={2000}
            className="object-fit-cover comp"
          />
        </div>
        <div className="row px-5 mt-5">
          <div style={{borderRight:"1px solid gray"}} className="col-md-3 text-center">
            <h1 style={{color:"#008BDC"}} className="fw-bold">300K+</h1>
            <p className="fs-5 text-black-50">companies hiring</p>
          </div>
          <div style={{borderRight:"1px solid #bcbcbc"}} className="col-md-3 text-center">
            <h1 style={{color:"#008BDC"}} className="fw-bold">10K+</h1>
            <p className="fs-5 text-black-50">new openings everyday</p>
          </div>
          <div style={{borderRight:"1px solid gray"}} className="col-md-3 text-center">
            <h1 style={{color:"#008BDC"}} className="fw-bold">21Mn+</h1>
            <p className="fs-5 text-black-50">active students</p>
          </div>
          <div className="col-md-3 text-center">
            <h1 style={{color:"#008BDC"}} className="fw-bold">600K+</h1>
            <p className="fs-5 text-black-50">learners</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
