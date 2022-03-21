import { useCallback, useEffect, useState } from "react";
import {
  FiImage,
  FiBookmark,
  FiTool,
  FiThumbsUp,
  FiUserCheck,
  FiGithub,
  FiUsers,
  FiPlus,
} from "react-icons/fi";

import { FaStackOverflow } from "react-icons/fa";
import { Button } from "@modules/atom/button";

const Services = () => {
  const [services, setServices] = useState("portfolio");
  useEffect(() => {}, []);
  return (
    <div className="site-container">
      <h2
        className="text-5xl font-medium text-secondary mt-12"
        style={{ lineHeight: "40px", fontSize: "35px" }}
      >
        In The Box
      </h2>
      <div className="mini-liner my-5"></div>
      <div className="service grid grid-cols-2 w-full mt-10">
        <div className="service-left grid grid-cols-4 gap-3 w-full h-3/6">
          <div
            onClick={() => setServices("portfolio")}
            className={`p-4 flex flex-col items-center justify-center service-card rounded-six bg-accent ${
              services === "portfolio" ? "active" : ""
            }`}
          >
            <FiImage size={25} color="#2B2B39" className="mb-4" />
            <h4 className="text-secondary font-bold text-xl">Portfolio</h4>
          </div>
          <div
            onClick={() => setServices("articles")}
            className={`p-4 flex flex-col items-center justify-center service-card rounded-six bg-accent ${
              services === "articles" ? "active" : ""
            }`}
          >
            <FiBookmark size={25} color="#2B2B39" className="mb-4" />
            <h4 className="text-secondary font-bold text-xl">Articles</h4>
          </div>
          <div
            onClick={() => setServices("skills")}
            className={`p-4 flex flex-col items-center justify-center service-card rounded-six bg-accent ${
              services === "skills" ? "active" : ""
            }`}
          >
            <FiTool size={25} color="#2B2B39" className="mb-4" />
            <h4 className="text-secondary font-bold text-xl">Skills</h4>
          </div>
          <div
            onClick={() => setServices("testmonials")}
            className={`p-4 flex flex-col items-center justify-center service-card rounded-six bg-accent ${
              services === "testmonials" ? "active" : ""
            }`}
          >
            <FiThumbsUp size={25} color="#2B2B39" className="mb-4" />
            <h4 className="text-secondary font-bold text-xl">Testmonials</h4>
          </div>
          <div
            onClick={() => setServices("profile")}
            className={`p-4 flex flex-col items-center justify-center service-card rounded-six bg-accent ${
              services === "profile" ? "active" : ""
            }`}
          >
            <FiUserCheck size={25} color="#2B2B39" className="mb-4" />
            <h4 className="text-secondary font-bold text-xl">Profile</h4>
          </div>
          <div
            onClick={() => setServices("stackoverflow")}
            className={`p-4 flex flex-col items-center justify-center service-card rounded-six bg-accent ${
              services === "stackoverflow" ? "active" : ""
            }`}
          >
            <FaStackOverflow size={25} color="#2B2B39" className="mb-4" />
            <h4 className="text-secondary font-bold text-xl">Stackoverflow</h4>
          </div>
          <div
            onClick={() => setServices("repositories")}
            className={`p-4 flex flex-col items-center justify-center service-card rounded-six bg-accent ${
              services === "repositories" ? "active" : ""
            }`}
          >
            <FiGithub size={25} color="#2B2B39" className="mb-4" />
            <h4 className="text-secondary font-bold text-xl">Repositories</h4>
          </div>
          <div
            onClick={() => setServices("social")}
            className={`p-4 flex flex-col items-center justify-center service-card rounded-six bg-accent ${
              services === "social" ? "active" : ""
            }`}
          >
            <FiUsers size={25} color="#2B2B39" className="mb-4" />
            <h4 className="text-secondary font-bold text-xl">Social</h4>
          </div>
          <div
            onClick={() => setServices("new")}
            className={`p-4 flex flex-col items-center justify-center service-card rounded-six bg-accent ${
              services === "new" ? "active" : ""
            }`}
          >
            <FiPlus size={45} color="#2B2B39" className="mb-4" />
            <h4 className="text-secondary font-bold text-xl">Add New</h4>
          </div>
        </div>
        <div className="service-right w-full">
          {(() => {
            switch (services) {
              case "portfolio":
                return (
                  <div className="w-full">
                    <div className="service-thumb rounded-six mb-5"></div>
                    <h4 className="text-secondary font-bold text-xl mb-5">
                      Portfolio
                    </h4>
                    <p
                      className="text-typoGray text-sm font-semibold leading-6"
                      style={{ fontSize: "15px", width: "528px" }}
                    >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sed iusto nulla ipsa quibusdam amet voluptatibus
                      voluptatem soluta suscipit libero ab.
                    </p>
                  </div>
                );
              case "articles":
                return (
                  <div className="w-full">
                    <div className="service-thumb rounded-six mb-5"></div>
                    <h4 className="text-secondary font-bold text-xl mb-5">
                      Articles
                    </h4>
                    <p
                      className="text-typoGray text-sm font-semibold leading-6"
                      style={{ fontSize: "15px", width: "528px" }}
                    >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sed iusto nulla ipsa quibusdam amet voluptatibus
                      voluptatem soluta suscipit libero ab.
                    </p>
                  </div>
                );
              case "skills":
                return (
                  <div className="w-full">
                    <div className="service-thumb rounded-six mb-5"></div>
                    <h4 className="text-secondary font-bold text-xl mb-5">
                      Skills
                    </h4>
                    <p
                      className="text-typoGray text-sm font-semibold leading-6"
                      style={{ fontSize: "15px", width: "528px" }}
                    >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sed iusto nulla ipsa quibusdam amet voluptatibus
                      voluptatem soluta suscipit libero ab.
                    </p>
                  </div>
                );
              case "testmonials":
                return (
                  <div className="w-full">
                    <div className="service-thumb rounded-six mb-5"></div>
                    <h4 className="text-secondary font-bold text-xl mb-5">
                      Testmonials
                    </h4>
                    <p
                      className="text-typoGray text-sm font-semibold leading-6"
                      style={{ fontSize: "15px", width: "528px" }}
                    >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sed iusto nulla ipsa quibusdam amet voluptatibus
                      voluptatem soluta suscipit libero ab.
                    </p>
                  </div>
                );
              case "profile":
                return (
                  <div className="w-full">
                    <div className="service-thumb rounded-six mb-5"></div>
                    <h4 className="text-secondary font-bold text-xl mb-5">
                      Profile
                    </h4>
                    <p
                      className="text-typoGray text-sm font-semibold leading-6"
                      style={{ fontSize: "15px", width: "528px" }}
                    >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sed iusto nulla ipsa quibusdam amet voluptatibus
                      voluptatem soluta suscipit libero ab.
                    </p>
                  </div>
                );
              case "stackoverflow":
                return (
                  <div className="w-full">
                    <div className="service-thumb rounded-six mb-5"></div>
                    <h4 className="text-secondary font-bold text-xl mb-5">
                      Stackoverflow
                    </h4>
                    <p
                      className="text-typoGray text-sm font-semibold leading-6"
                      style={{ fontSize: "15px", width: "528px" }}
                    >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sed iusto nulla ipsa quibusdam amet voluptatibus
                      voluptatem soluta suscipit libero ab.
                    </p>
                  </div>
                );
              case "repositories":
                return (
                  <div className="w-full">
                    <div className="service-thumb rounded-six mb-5"></div>
                    <h4 className="text-secondary font-bold text-xl mb-5">
                      Repositories
                    </h4>
                    <p
                      className="text-typoGray text-sm font-semibold leading-6"
                      style={{ fontSize: "15px", width: "528px" }}
                    >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sed iusto nulla ipsa quibusdam amet voluptatibus
                      voluptatem soluta suscipit libero ab.
                    </p>
                  </div>
                );
              case "social":
                return (
                  <div className="w-full">
                    <div className="service-thumb rounded-six mb-5"></div>
                    <h4 className="text-secondary font-bold text-xl mb-5">
                      Social
                    </h4>
                    <p
                      className="text-typoGray text-sm font-semibold leading-6"
                      style={{ fontSize: "15px", width: "528px" }}
                    >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sed iusto nulla ipsa quibusdam amet voluptatibus
                      voluptatem soluta suscipit libero ab.
                    </p>
                  </div>
                );
              case "new":
                return (
                  <div className="w-full">
                    <h2
                      className="text-5xl font-medium text-secondary mb-5"
                      style={{ lineHeight: "30px", fontSize: "25px" }}
                    >
                      Help us showcase any appropriate data you think of
                    </h2>

                    <p
                      className="text-typoGray text-sm font-semibold leading-6 mb-5"
                      style={{ fontSize: "15px", width: "528px" }}
                    >
                      Please fill out this form and we will get back to you
                    </p>
                    <div className="form-wrapper">
                      <div className="">
                        <label
                          className="text-secondary font-bold text-xl"
                          htmlFor=""
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          className="mb-5 px-3 text-secondary text-xl"
                        />
                      </div>
                      <div className="">
                        <label
                          className="text-secondary font-bold text-xl"
                          htmlFor=""
                        >
                          Message
                        </label>
                        <textarea
                          name=""
                          id=""
                          className=" p-3 text-secondary text-xl"
                        ></textarea>
                      </div>
                      <Button onClick={() => null} variant="fill-primary">
                        Send
                      </Button>
                    </div>
                  </div>
                );

              default:
                break;
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default Services;
