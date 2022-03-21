import { Button } from "@modules/atom/button";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="site-navbar">
      <div className="inner-navbar flex justify-between items-center h-full">
        {/* <Image src="/loveicon.svg" alt="Vercel Navbar" width={41} height={55} /> */}
        <div className="flex">
          <h2 className="mr-11 font-extrabold">ViewMe</h2>
          <div className="site-menu">
            <ul className="flex">
              <li className="text-secondary text-sixteen">
                <a href="#">Top profiles</a>
              </li>
              <li className="text-secondary text-sixteen mx-5">
                <a href="#">Community</a>
              </li>
              <li className="text-secondary text-sixteen">
                <a href="#">Team</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex">
          <Button onClick={() => null} variant="fill-primary">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
