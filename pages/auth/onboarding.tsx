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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "store/ducks/auth";
import Info from "@modules/blocks/info";
import Skills from "@modules/blocks/skills";
import Social from "@modules/blocks/social";
import { useEffect } from "react";
import Confirm from "@modules/blocks/confirm";
import { useRouter } from "next/router";

const Onboarding: NextPage = () => {
  const [step, setStep] = useState<number>(1);
  const [confirm, setConfirm] = useState<boolean>(false);
  // const newObj = {
  //   email,
  //   password,
  // };
  // const dispatch = useDispatch();
  // const handleSubmit = () => {
  //   dispatch(loginUser(newObj));
  // };
  const handlePrevious = () => {
    setStep((current) => current - 1);
  };
  const handleNext = () => {
    setStep((current) => current + 1);
  };
  const history = useRouter();
  const handleProfile = () => {
    history.push("/dashboard");
  };
  // useEffect(() => {

  // }, [confirm]);
  return (
    <>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Verify Me Login" />
      </Head>
      <div className="flex h-screen onboard">
        <div className="left-onboard px-36 py-14 w-1/2 h-full flex flex-col justify-center">
          {(() => {
            switch (step) {
              case 1:
                return <Info />;
              case 2:
                return <Skills />;
              case 3:
                return <Social />;
              case 4:
                return <Confirm />;
              default:
                break;
            }
          })()}
          <div className="flex w-full">
            {step > 1 && (
              <Button
                variant="outlined-secondary"
                style={{ marginRight: "20px" }}
                onClick={handlePrevious}
              >
                Back
              </Button>
            )}
            <Button
              variant="fill-primary"
              onClick={() => {
                if (step === 4) {
                  handleProfile();
                } else {
                  handleNext();
                }
              }}
            >
              {step === 3 ? "Confirm" : step === 4 ? "Finish" : "Continue"}
            </Button>
          </div>
        </div>
        <div className="right-onboard w-1/2"></div>
      </div>
    </>
  );
};

export default Onboarding;
