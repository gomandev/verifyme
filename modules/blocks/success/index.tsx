import { Button } from "@modules/atom/button";
import { FiCheckCircle } from "react-icons/fi";

const Success = () => {
  return (
    <div className="">
      <div className="flex flex-col">
        <FiCheckCircle color="#2B2B39" className="mb-3" size={40} />
        <h1
          style={{ fontSize: "30px" }}
          className="text-secondary font-extrabold"
        >
          Success! Your profile has been updated.
        </h1>
        <p className="text-secondar text-sixteen">
          Do you want to add a Portfolio?
        </p>
        <div className="flex mt-3">
          <Button onClick={() => null} variant="outlined-secondary">
            Will add later
          </Button>
          <Button onClick={() => null} variant="fill-primary">
            Let's go!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;
