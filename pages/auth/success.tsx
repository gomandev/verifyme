import { Button } from "@modules/atom/button";
import { Divider } from "@modules/atom/divider";
import { FiCheckCircle } from "react-icons/fi";

const Success = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col w-full h-full justify-center items-center">
        <FiCheckCircle color="#2B2B39" className="mb-3" size={100} />
        <h1
          style={{ fontSize: "30px" }}
          className="text-secondary font-extrabold"
        >
          Success! Your profile has been updated.
        </h1>
        <p className="text-secondar text-sixteen">
          Do you want to add a Portfolio?
        </p>
        <div className="flex mt-5">
          <Button onClick={() => null} variant="outlined-secondary">
            Will add later
          </Button>
          <Divider className="mx-2" />
          <Button onClick={() => null} variant="fill-primary">
            Let&apos;s go!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;
