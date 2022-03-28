import { InputComponent } from "@modules/atom/input";
import { Label } from "@modules/atom/label";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

interface IProps {
  setGithub: (e: string) => void;
  setTwitter: (e: string) => void;
  setLinkedin: (e: string) => void;
  github: string;
  twitter: string;
  linkedin: string;
}

const Social = ({
  github,
  setGithub,
  twitter,
  setTwitter,
  linkedin,
  setLinkedin,
}: IProps) => {
  return (
    <div className="">
      <div className="flex flex-col">
        <div className="mb-3">
          <Label>Linkedin</Label>
          <InputComponent
            variant="primary"
            onChange={(e) => setLinkedin(e.target.value)}
            plain
            icon={<FiLinkedin color="#2B2B39" />}
            value={linkedin}
          />
        </div>
        <div className="mb-3">
          <Label>Github</Label>
          <InputComponent
            variant="primary"
            onChange={(e) => setGithub(e.target.value)}
            plain
            icon={<FiGithub color="#2B2B39" />}
            value={github}
          />
        </div>
        <div className="mb-3">
          <Label>Twitter</Label>
          <InputComponent
            variant="primary"
            onChange={(e) => setTwitter(e.target.value)}
            plain
            icon={<FiTwitter color="#2B2B39" />}
            value={twitter}
          />
        </div>
      </div>
    </div>
  );
};

export default Social;
