import React from "react";
import "@/css/footer.css";

const Footer = () => {
  return (
    <div className="bg-light overflow-hidden">
      <div className="footer-top">
        <div className="row">
          <div className="col-6 d-flex align-items-center justify-content-center">
            <h3 className="fw-bold text-white mt-5">
              Empower your career with <br /> Internshala today
            </h3>
          </div>
          <div className="col-6 d-flex align-items-center justify-content-center">
            <button className="cutm-btn mt-5">Register Now</button>
          </div>
        </div>
      </div>
      <div style={{backgroundColor:"#333333"}} >
        <div className="container position-relative">
        <div className="row py-5">
          <div className="col-md-3">
            <h5 className="text-light fw-bold">COMPANY</h5>
            <p className="text-light mb-2">About Us</p>
            <p className="text-light mb-2">Careers</p>
            <p className="text-light mb-2">Blog</p>
            <p className="text-light mb-2">Press</p>
            <p className="text-light mb-2">Contact Us</p>
          </div>
          <div className="col-md-3">
            <h5 className="text-light fw-bold">RESOURCES</h5>
            <p className="text-light mb-2">Resources</p>
            <p className="text-light mb-2">Knowledge Base</p>
            <p className="text-light mb-2">Download</p>
          </div>
          <div className="col-md-3">
            <h5 className="text-light fw-bold">FOR STUDENTS</h5>
            <p className="text-light mb-2">How it works</p>
            <p className="text-light mb-2">Testimonials</p>
            <p className="text-light mb-2">Forums</p>
            <p className="text-light mb-2">Scholarship</p>
            <p className="text-light mb-2">Student Ambassador</p>
          </div>
          <div className="col-md-3">
            <h5 className="text-light fw-bold">FOR EMPLOYERS</h5>
            <p className="text-light mb-2">How it works</p>
            <p className="text-light mb-2">Testimonials</p>
            <p className="text-light mb-2">Forums</p>
            <p className="text-light mb-2">Scholarship</p>
            <p className="text-light mb-2">Student Ambassador</p>
          </div>
        </div >
        <hr className="text-white" />
        <div className="row py-2">
          <div className="col-md-6">
            <p className="text-light mb-2">
              © 2023 Internshala. All rights reserved
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
