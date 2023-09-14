"use client";
import {
  asynavatarstudent,
  asyncstudentresetpassword,
  asynupdatestudent,
} from "@/store/Actions/studentAction";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./profile.css";
import { RxUpdate } from "react-icons/rx";
import { Button, Card, Form } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineEdit,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

const page = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.studentReducer.student);
  const [avatar, setavatar] = useState("");

  const studentUpdateHandler = () => {
    const newStudent = {
      firstname: "akshay",
      lastname: "dangi jiiiiiii",
    };
    dispatch(asynupdatestudent(newStudent));
  };

  const AvatarHandler = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    formdata.set("avatar", e.target.avatar.files[0]);
    dispatch(asynavatarstudent(formdata));
    setavatar("");
  };

  const ResetPasswordHandler = () => {
    const pwd = {
      password: "12345678",
    };
    dispatch(asyncstudentresetpassword(pwd));
  };

  return (
    <div className="container-fluid">
      {/* <img height={200} src={data && data.avatar.url} alt="" /> <br />
      <br />
      <form encType="multipart/form-data" onSubmit={AvatarHandler}>
        <input type="file" name="avatar" />
        <button>submit</button>
      </form>
      <br />
      <button className="btn btn-warning me-4" onClick={studentUpdateHandler}>
        Update
      </button>
      <button className="btn btn-danger" onClick={ResetPasswordHandler}>
        Reset Student Password
      </button> */}

      <div className="row">
        <div className="col-md-3 pt-5 px-3">
          <div className="image_div shadow ">
            <img height={200} src={data && data.avatar.url} alt="" />
          </div>
          <h5 className="mt-3">Akshay Dangi</h5>
          <div className="mt-3">
            <h6 className="mb-3">Update your avatar - </h6>
            <Form
              encType="multipart/form-data"
              onSubmit={AvatarHandler}
              className="d-flex align-items-center gap-2 "
            >
              <Form.Group controlId="avatar">
                <Form.Control
                  type="file"
                  name="avatar"
                  onChange={(e) => setavatar(e.target.value)}
                  value={avatar}
                />
              </Form.Group>
              <Button variant="warning" type="submit" className="btn-sm">
                <RxUpdate />
              </Button>
            </Form>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#E8F5FF" }}
          className="col-md-9 py-5 px-5 fw-bold"
        >
          <div>
            <h4>IDENTITY</h4>
            <Card
              className="shadow bg-white mb-4"
              style={{ borderRadius: "15px" }}
            >
              <Card.Body>
                <span
                  style={{
                    position: "absolute",
                    top: "5px",
                    right: "10px",
                    fontSize: "25px",
                    color: "#444",
                  }}
                >
                  <AiOutlineEdit />
                </span>
                <div className="row align-items-center">
                  <div className="col-4 d-flex align-items-center justify-content-between mt-2">
                    <p className="fw-light">Name</p>
                    <span>
                      <p>:</p>
                    </span>
                  </div>
                  <div className="col-8">
                    <h6>Akshay Dangi</h6>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-4 d-flex align-items-center justify-content-between mt-2">
                    <p className="fw-light">Email</p>
                    <span>
                      <p>:</p>
                    </span>
                  </div>
                  <div className="col-8">
                    <h6>hdangi224@gmail.com</h6>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-4 d-flex align-items-center justify-content-between mt-2">
                    <p className="fw-light">Address</p>
                    <span>
                      <p>:</p>
                    </span>
                  </div>
                  <div className="col-8">
                    <h6>Bali, Indonesia</h6>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-4 d-flex align-items-center justify-content-between mt-2">
                    <p className="fw-light">Job</p>
                    <span>
                      <p>:</p>
                    </span>
                  </div>
                  <div className="col-8">
                    <h6>Web Developer</h6>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-4 d-flex align-items-center justify-content-between mt-2">
                    <p className="fw-light">Skill</p>
                    <span>
                      <p>:</p>
                    </span>
                  </div>
                  <div className="col-8">
                    <h6> PHP, HTML, CSS, Java</h6>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div>
            <h4>SOCILA MEDIA</h4>
            <Card
              className="shadow bg-white mb-4"
              style={{ borderRadius: "15px" }}
            >
              <Card.Body>
                <div className="d-flex">
                  <div>
                    <span className="links">
                      <AiOutlineInstagram />
                    </span>
                  </div>
                  <div>
                    <span className="links">
                      <AiFillGithub />
                    </span>
                  </div>
                  <div>
                    <span className="links">
                      <BiLogoLinkedin />
                    </span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
