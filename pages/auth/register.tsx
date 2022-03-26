import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  FiMail,
  FiLock,
  FiChevronLeft,
  FiFacebook,
  FiGithub,
  FiUser,
} from "react-icons/fi";
import { InputComponent } from "@modules/atom/input";
import { Logo } from "@modules/atom/logo";
import { Button } from "@modules/atom/button";
import { Divider } from "@modules/atom/divider";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser, signInGithub, signInGoogle } from "@store/ducks/auth";

const Register: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const newObj = {
    email,
    password,
    firstname,
    lastname,
  };
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(registerUser(newObj));
  };
  const handleGooglesignIn = () => {
    dispatch(signInGoogle());
  };
  const handleGithub = () => {
    dispatch(signInGithub());
  };
  return (
    <>
      <Head>
        <title>SignUp Page</title>
        <meta name="description" content="Verify Me Signup" />
      </Head>
      <div className="flex h-screen register">
        <div className="left-register px-36 py-14 w-1/2 h-full flex flex-col justify-center">
          <div className="login-header flex justify-center w-full mb-5">
            <Logo />
          </div>
          <h2
            className="text-5xl font-medium text-secondary my-10"
            style={{ lineHeight: "30px", fontSize: "30px" }}
          >
            Register Now
          </h2>
          <form className="form">
            <div className="flex w-full">
              <InputComponent
                variant="primary"
                onChange={(e) => setFirstname(e.target.value)}
                icon={<FiUser color="#2b2b39" />}
                placeholder="Firstname"
              />
              <Divider className="mx-2" />
              <InputComponent
                variant="primary"
                onChange={(e) => setLastname(e.target.value)}
                icon={<FiUser color="#2b2b39" />}
                placeholder="Lastname"
              />
            </div>
            <Divider className="my-3" />
            <InputComponent
              variant="primary"
              onChange={(e) => setEmail(e.target.value)}
              icon={<FiMail color="#2b2b39" />}
              placeholder="Email"
            />
            <Divider className="my-3" />
            <InputComponent
              variant="primary"
              onChange={(e) => setPassword(e.target.value)}
              icon={<FiLock color="#2b2b39" />}
              placeholder="Password"
              type="password"
            />
          </form>
          <Divider className="my-3" />
          <Button
            variant="fill-primary"
            style={{ width: "100%", border: "none" }}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Divider className="mt-2" />
          <Button
            variant="fill-accent"
            style={{ width: "100%", border: "none" }}
            onClick={handleGooglesignIn}
            icon={<FiFacebook color="#2b2b39" size={25} />}
            shadow
          >
            Sign Up with google
          </Button>
          <Divider className="mt-2" />
          <Button
            variant="fill-secondary"
            style={{ width: "100%", border: "none" }}
            onClick={handleGithub}
            icon={<FiGithub color="#ffffff" size={25} />}
            shadow
          >
            Sign Up with github
          </Button>
          <div className="already w-full flex justify-center mt-3">
            <p className="text-secondary text-sixteen">
              Already have an account? <Link href="/auth/login">Login.</Link>
            </p>
          </div>
        </div>
        <div className="right-register w-1/2"></div>
      </div>
    </>
  );
};

export default Register;
