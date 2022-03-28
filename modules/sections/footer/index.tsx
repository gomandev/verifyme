import {
  FiYoutube,
  FiFacebook,
  FiTwitter,
  FiGithub,
  FiSlack,
} from "react-icons/fi";
import { Logo } from "@modules/atom/logo";

const Footer = () => {
  return (
    <footer className="mt-10 py-5 xl:p-10 lg:p-10">
      <div className="site-container">
        <div className="flex flex-col xl:justify-center xl:items-center lg:justify-center lg:items-center h-full w-full">
          <div className="inner-footer flex grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3">
            <div className="footer-list">
              <h4 className="text-secondary font-bold text-extra mb-5">
                Follow us
              </h4>
              <ul>
                <li className="text-secondary font-normal text-sixteen flex mb-3">
                  <FiGithub size={20} color="#2B2B39" className="mr-2" /> Github
                </li>
                <li className="text-secondary font-normal text-sixteen flex mb-3">
                  <FiTwitter size={20} color="#2B2B39" className="mr-2" />{" "}
                  Twitter
                </li>
                <li className="text-secondary font-normal text-sixteen flex mb-3">
                  <FiFacebook size={20} color="#2B2B39" className="mr-2" />{" "}
                  Facebook
                </li>
                <li className="text-secondary font-normal text-sixteen flex mb-3">
                  <FiYoutube size={20} color="#2B2B39" className="mr-2" />{" "}
                  Youtube
                </li>
              </ul>
            </div>
            <div className="footer-list">
              <h4 className="text-secondary font-bold text-extra mb-5">
                Open Source
              </h4>
              <ul>
                <li className="text-secondary font-normal text-sixteen flex mb-3">
                  Demo
                </li>
                <li className="text-secondary font-normal text-sixteen flex mb-3">
                  Contributng
                </li>
                <li className="text-secondary font-normal text-sixteen flex mb-3">
                  Privacy
                </li>
                <li className="text-secondary font-normal text-sixteen flex mb-3">
                  Terms and condition
                </li>
              </ul>
            </div>
            <div className="footer-list">
              <h4 className="text-secondary font-bold text-extra mb-5">
                Community
              </h4>
              <ul>
                <li className="text-secondary font-normal text-sixteen flex mb-3">
                  <FiSlack size={20} color="#2B2B39" className="mr-2" /> Slack
                </li>
                <li className="text-secondary font-normal text-sixteen flex mb-3">
                  Discussion
                </li>
                <li className="text-secondary font-normal text-sixteen flex mb-3">
                  Issues
                </li>
              </ul>
            </div>
          </div>
          <div className="flex mt-5">
            <Logo />
            <p className="copyright text-secondary font-normal text-sixteen mx-3">
              &copy; {new Date().getFullYear().toString()} Softwere Home
            </p>
            <p>Privacy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
