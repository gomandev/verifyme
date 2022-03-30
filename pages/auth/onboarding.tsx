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
import {
  addToInfo,
  addToSkills,
  addToSocial,
  loginUser,
  userSelector,
} from "store/ducks/auth";
import Info from "@modules/blocks/info";
import Skills from "@modules/blocks/skills";
import Social from "@modules/blocks/social";
import { useEffect } from "react";
import Confirm from "@modules/blocks/confirm";
import { useRouter } from "next/router";

const Onboarding: NextPage = () => {
  const [step, setStep] = useState<number>(1);
  const [confirm, setConfirm] = useState<boolean>(false);

  // Info
  const { isFetching, isSuccess, isError, errorMessage, profile } =
    useSelector(userSelector);
  const [title, setTitle] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const dispatch = useDispatch();
  const onTitle = ({ target: { value } }: { target: { value: string } }) => {
    setTitle(value);
    dispatch(addToInfo({ title, about }));
  };
  const onAbout = ({ target: { value } }: { target: { value: string } }) => {
    setAbout(value);
    dispatch(addToInfo({ title, about }));
  };

  // SKILLS
  const [text, setText] = useState<string>("");
  const [skillsArray, setSkillsArray] = useState<Array<string>>([]);
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const newArray = [...skillsArray];
      newArray.push(text);
      setSkillsArray(newArray);
      setText("");
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleDelete = (index: number) => {
    const newArray = [...skillsArray];
    newArray.splice(index, 1);
    setSkillsArray(newArray);
  };
  // social
  const [linkedin, setLinkedin] = useState<string>("");
  const [github, setGithub] = useState<string>("");
  const [twitter, setTwitter] = useState<string>("");

  // const newObj = {
  //   email,
  //   password,
  // };

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
    const newObject1 = {
      title,
      about,
    };
    const newObject2 = {
      linkedin,
      github,
      twitter,
    };
    dispatch(addToInfo(newObject1));
    dispatch(addToSocial(newObject2));
    dispatch(addToSkills(skillsArray));
    history.push("/auth/success");
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
        <div className="left-onboard lg:px-36 xl:px-36 lg:py-14 xl:py-14 lg lg:w-1/2 xl:w-1/2 px-5 h-full flex flex-col justify-center">
          {(() => {
            switch (step) {
              case 1:
                return (
                  <Info
                    onAbout={onAbout}
                    onTitle={onTitle}
                    title={title}
                    about={about}
                  />
                );
              case 2:
                return (
                  <Skills
                    handleDelete={handleDelete}
                    handleChange={handleChange}
                    handleKeyPress={handleKeyPress}
                    skillsArray={skillsArray}
                    text={text}
                  />
                );
              case 3:
                return (
                  <Social
                    github={github}
                    linkedin={linkedin}
                    twitter={twitter}
                    setGithub={setGithub}
                    setLinkedin={setLinkedin}
                    setTwitter={setTwitter}
                  />
                );
              case 4:
                return (
                  <Confirm
                    handleDelete={handleDelete}
                    title={title}
                    about={about}
                    skills={skillsArray}
                    twitter={twitter}
                    linkedin={linkedin}
                    github={github}
                  />
                );
              default:
                break;
            }
          })()}
          <div className="flex w-full mt-5">
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
        <div className="right-onboard lg:block xl:block hidden xl:w-1/2 lg:w-1/2"></div>
      </div>
    </>
  );
};

export default Onboarding;
