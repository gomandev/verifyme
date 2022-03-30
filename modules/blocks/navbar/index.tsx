import { Button } from "@modules/atom/button";
import { Logo } from "@modules/atom/logo";
import Image from "next/image";
import { useRouter } from "next/router";
import { FiMenu } from "react-icons/fi";

const Navbar = ({
  hamburger,
  setHamburger,
}: {
  hamburger: boolean;
  setHamburger: (e: boolean) => void;
}) => {
  const history = useRouter();
  return (
    <div className="site-navbar">
      <div className="inner-navbar flex justify-between items-center h-full">
        {/* <Image src="/loveicon.svg" alt="Vercel Navbar" width={41} height={55} /> ***/}
        <div className="flex">
          <Logo />
          <div className="site-menu lg:ml-11 xl:ml-11 lg:block xl:block hidden ml-10">
            <ul className="flex">
              <li className="text-secondary xl:text-sixteen lg:text-sixteen text-ultraXl">
                <a href="#">Top profiles</a>
              </li>
              <li className="text-secondary xl:text-sixteen lg:text-sixteen text-ultraXl mx-5">
                <a href="#">Community</a>
              </li>
              <li className="text-secondary xl:text-sixteen lg:text-sixteen text-ultraXl">
                <a href="#">Team</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:flex xl:flex">
          <Button
            onClick={() => history.push("/auth/login")}
            variant="fill-primary"
          >
            Login
          </Button>
        </div>
        <div className="flex lg:hidden xl:hidden">
          <FiMenu
            className="cursor-pointer"
            size={20}
            color="#2B2B39"
            onClick={() => setHamburger(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
