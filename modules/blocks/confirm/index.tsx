import { InputComponent } from "@modules/atom/input";
import { Label } from "@modules/atom/label";
import { FiTwitter, FiGithub, FiLinkedin, FiX } from "react-icons/fi";

interface IProps {
  title: string;
  about: string;
  linkedin: string;
  twitter: string;
  github: string;
  skills: Array<string>;
  handleDelete: (index: number) => void;
}

const Confirm = ({
  title,
  about,
  skills,
  linkedin,
  twitter,
  github,
  handleDelete,
}: IProps) => {
  return (
    <div className="">
      <div className="flex flex-col">
        <div className="first mb-5 info flex justify-between">
          <div className="h-full flex items-center">
            <Label>Profile Photo</Label>
          </div>
          <div
            style={{ width: "100px", height: "100px" }}
            className="avatar flex justify-center items-center flex-col"
          >
            <p>M</p>
          </div>
        </div>
        <div className="first mb-5">
          <div className="mb-2">
            <p className="text-secondary text-sixteen font-bold">{title}</p>
          </div>
          <div className="mb-2">
            <p className="text-secondary text-sixteen font-bold">{about}</p>
          </div>
        </div>
        <div className="skills mb-5">
          <div className="flex mb-5 flex-wrap">
            {skills.map((skill, index) => (
              <div
                className="flex justify-between items-center skill-chip text-accent bg-primary rounded px-2 mr-2 mb-2"
                style={{ fontSize: "13px" }}
              >
                {skill}
                <FiX
                  color="#ffffff"
                  onClick={() => handleDelete(index)}
                  size={10}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="social">
          <div className="mb-3">
            <Label>Linkedin</Label>
            <InputComponent
              disabled
              variant="primary"
              onChange={() => null}
              plain
              icon={<FiLinkedin color="#2B2B39" />}
              value={linkedin}
            />
          </div>
          <div className="mb-3">
            <Label>Github</Label>
            <InputComponent
              disabled
              variant="primary"
              onChange={() => null}
              plain
              icon={<FiGithub color="#2B2B39" />}
              value={github}
            />
          </div>
          <div className="mb-3">
            <Label>Twitter</Label>
            <InputComponent
              disabled
              variant="primary"
              onChange={() => null}
              plain
              value={twitter}
              icon={<FiTwitter color="#2B2B39" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
