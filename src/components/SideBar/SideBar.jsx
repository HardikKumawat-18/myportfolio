import "./sidebar.scss";
import {
  AiOutlineInstagram,
  // AiOutlineBehance,
  AiFillLinkedin,
} from "react-icons/ai";

export const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="socials">
        <a href="https://www.instagram.com">
          <AiOutlineInstagram className="logo" />
        </a>
        {/* <AiOutlineBehance /> */}
        <a href="https://www.linkedin.com/in/hardik-kumawat-32a5811aa/">
          <AiFillLinkedin className="logo" />
        </a>
      </div>
    </div>
  );
};
