"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const LoginEmploye = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="container mt-5 pb-5">
      <div className="mb-0">
        <h1 style={{ color: "#333" }} className="text-center fw-bold">
          Hire interns & freshers faster
        </h1>
        <Image
          src="/underline.png"
          width={300}
          height={30}
          className="mx-auto d-block ps-5"
          alt="underline"
        />
      </div>
      <h5 className="text-center">Post jobs for free now</h5>

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
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-4">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Must be atleast 6 characters long"
              className="py-2"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <div className="row">
          <Link style={{ color: "#00A5EC" }} className="mb-3" href="">
            Forgot Password?
          </Link>
        </div>
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
          Login
        </Button>
        <p className="mt-2">
          If you don't have a account?{" "}
          <Link style={{ color: "#00A5EC" }} href="/student/signin">
            Sign up
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default LoginEmploye;
