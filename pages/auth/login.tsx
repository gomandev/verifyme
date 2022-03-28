import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  FiMail,
  FiLock,
  FiChevronLeft,
  FiFacebook,
  FiGithub,
} from "react-icons/fi";
import { InputComponent } from "@modules/atom/input";
import { Logo } from "@modules/atom/logo";
import { Button } from "@modules/atom/button";
import { Divider } from "@modules/atom/divider";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  loginUser,
  logout,
  signInGoogle,
  userSelector,
} from "store/ducks/auth";

const Login: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const newObj = {
    email,
    password,
  };
  const dispatch = useDispatch();
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);
  const handleSubmit = () => {
    dispatch(loginUser(newObj));
  };
  const handleGooglesignIn = () => {
    dispatch(signInGoogle());
  };
  const history = useRouter();

  useEffect(() => {
    if (isSuccess) {
      history.push("/auth/onboarding");
    }
  }, [isSuccess]);

  return (
    <>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Verify Me Login" />
      </Head>
      <div className="flex h-screen login">
        <div className="left-login px-36 py-14 w-1/2 h-full flex flex-col justify-center">
          <div className="login-header flex justify-center w-full mb-5">
            <Logo />
          </div>
          <h2
            className="text-5xl font-medium text-secondary my-10"
            style={{ lineHeight: "30px", fontSize: "30px" }}
          >
            Welcome Back !
          </h2>
          <form className="form">
            <InputComponent
              variant="primary"
              onChange={(e) => setEmail(e.target.value)}
              icon={<FiMail color="#2b2b39" />}
              placeholder="Enter Your Email"
            />
            <Divider className="my-3" />
            <InputComponent
              variant="primary"
              onChange={(e) => setPassword(e.target.value)}
              icon={<FiLock color="#2b2b39" />}
              placeholder="Enter Your Password"
              type="password"
            />
          </form>
          <Divider className="my-3" />
          <Button
            variant="fill-primary"
            style={{ width: "100%", border: "none" }}
            onClick={handleSubmit}
          >
            Login
          </Button>
          <Divider className="mt-2" />
          <Button
            variant="fill-accent"
            style={{ width: "100%", border: "none" }}
            onClick={handleGooglesignIn}
            icon={<FiFacebook color="#2b2b39" size={25} />}
            shadow
          >
            Login with google
          </Button>
          <Divider className="mt-2" />
          <Button
            variant="fill-secondary"
            style={{ width: "100%", border: "none" }}
            onClick={() => null}
            icon={<FiGithub color="#ffffff" size={25} />}
            shadow
          >
            Login with github
          </Button>
          <div className="already w-full flex justify-center mt-3">
            <p className="text-secondary text-sixteen">
              Don&apos;t have an account?{" "}
              <Link href="/auth/register">Signup.</Link>
            </p>
          </div>
        </div>
        <div className="right-login w-1/2"></div>
      </div>
    </>
  );
};

export default Login;
