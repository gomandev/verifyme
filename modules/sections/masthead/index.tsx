import { Button } from "@modules/atom/button";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Masthead = () => {
  const history = useRouter();
  return (
    <>
      <div className="site-container">
        <div className="masthead-wrapper flex w-full justify-between">
          <div className="masthead-left relative">
            <div className="mini-seperator"></div>
            <h2
              className="text-5xl masthead-text font-medium text-secondary mt-12"
              style={{ lineHeight: "60px", fontSize: "50px" }}
            >
              Showcase Yourself
              <br />
              With Just A Link
            </h2>
            <p
              className="text-typoGray text-sm font-semibold leading-6 mt-8"
              style={{ fontSize: "15px", width: "328px" }}
            >
              Sell and buy goods with cryptocurrencies. No financial borders,
              extra fees and fake reviews anymore.
            </p>
            <div className="flex mt-11">
              <Button
                onClick={() => history.push("/auth/register")}
                variant="fill-primary"
              >
                Start Showcase
              </Button>
              <Button
                style={{ marginLeft: "20px" }}
                onClick={() => null}
                variant="outlined-secondary"
              >
                View Demo
              </Button>
            </div>
          </div>
          <div className="masthaed-right">
            <Image
              src="/masthead.svg"
              alt="Vercel Navbar"
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Masthead;
