"use client";
import { asynsignupstudent } from "@/store/Actions/studentAction";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

const Register = () => {
  const [validated, setValidated] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(true);
      const newStudent = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
      };
      dispatch(asynsignupstudent(newStudent));
    }
  };

  return (
    <>
      <div className="container mt-5 pb-5">
        <div className="mb-0">
          <h1 style={{ color: "#333" }} className="text-center fw-bold">
            Sign-up and apply for free
          </h1>
          <Image
            src="/underline.png"
            width={300}
            height={30}
            className="mx-auto d-block ps-5"
            alt="underline"
          />
        </div>
        <h5 className="text-center">
          1,50,000+ companies hiring on Internshala
        </h5>

        <Form
          className="bg-white z-2 shadow p-4 rounded mt-5 w-50 mx-auto"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Row className="mb-4">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="john@example.com"
                className="py-2"
                onChange={(e) => setemail(e.target.value)}
                value={email}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Must be atleast 6 characters long"
                className="py-2"
                onChange={(e) => setpassword(e.target.value)}
                value={password}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="John"
                className="py-2"
                onChange={(e) => setfirstName(e.target.value)}
                value={firstName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Doe"
                className="py-2"
                onChange={(e) => setlastName(e.target.value)}
                value={lastName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <div className="row">
              <p className="mb-0">
                By signing up, you agree to our{" "}
                <span style={{ color: "#00A5EC" }}>Terms and Conditions.</span>
              </p>
            </div>
          </Form.Group>
          <Button
            className="w-100 border-0"
            style={{ backgroundColor: "#00A5EC" }}
            type="submit"
          >
            Sign up
          </Button>
          <p className="mt-1">
            Already registered?{" "}
            <Link style={{ color: "#00A5EC" }} href="/student/signin">
              Login
            </Link>
          </p>
        </Form>
      </div>
    </>
  );
};

export default Register;
