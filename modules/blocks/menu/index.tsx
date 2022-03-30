import { Button } from "@modules/atom/button";
import { Logo } from "@modules/atom/logo";
import { useRouter } from "next/router";
import { FiMenu, FiX } from "react-icons/fi";

const Menu = ({ setHamburger }: { setHamburger: (e: boolean) => void }) => {
  const history = useRouter();
  return (
    <div className="burger-menu h-screen">
      <div className="flex flex-col items-start py-6 px-5">
        <div className="flex mb-5 w-full justify-between">
          <Logo />
          <FiX
            className="cursor-pointer"
            size={20}
            color="#2B2B39"
            onClick={() => setHamburger(false)}
          />
        </div>
        <ul className="block">
          <li className="text-secondary xl:text-sixteen lg:text-sixteen text-ultraXl mb-3">
            <a href="#">Top profiles</a>
          </li>
          <li className="text-secondary xl:text-sixteen lg:text-sixteen text-ultraXl mb-3">
            <a href="#">Community</a>
          </li>
          <li className="text-secondary xl:text-sixteen lg:text-sixteen text-ultraXl mb-3">
            <a href="#">Team</a>
          </li>
        </ul>
        <div className="flex mt-5">
          <Button
            onClick={() => history.push("/auth/login")}
            variant="fill-primary"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
