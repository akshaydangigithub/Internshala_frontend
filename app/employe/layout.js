"use client";

import NavbarTwo from "@/components/navbarTwo/NavbarTwo";
import {
  asynccurrentemploye,
  asynsignoutemploye,
} from "@/store/Actions/employeAction";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const employelayout = ({ children }) => {
  const dispatch = useDispatch();
  const Router = useRouter();

  const { isAuthenticate } = useSelector((state) => state.employeReducer);

  useEffect(() => {
    dispatch(asynccurrentemploye());

    if (isAuthenticate) Router.push("/employe/auth");
  }, [isAuthenticate]);

  const SignOutHandler = () => {
    dispatch(asynsignoutemploye());
  };
  return (
    <>
      <NavbarTwo />
      {/* <nav className="container">
        <Link href={isAuthenticate ? "/employe/auth" : "/employe"}>Home</Link>{" "}
        <br />
        {isAuthenticate ? (
          <>
            <Link href="/employe/auth/profile">Profile</Link>
            <br />
            <Link href="/employe/auth/applied">My Applications</Link>
            <br />
            <Link href="" onClick={SignOutHandler}>
              Signout
            </Link>
          </>
        ) : (
          <>
            <Link href="/employe/signin">SignIn</Link>
            <br />
            <Link href="/employe/signup">Signup</Link>
          </>
        )}
      </nav> */}

      <div className="bg-white">{children}</div>
    </>
  );
};

export default employelayout;
