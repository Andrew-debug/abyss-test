import { ReactNode } from "react";
interface INavButton {
  content: string | ReactNode;
  handleClick?: () => void;
  bgColor?: string;
}
const NavButton = ({ content, handleClick, bgColor }: INavButton) => {
  return (
    <div
      style={{ backgroundColor: bgColor, color: bgColor && "#fff" }}
      className="nav-button"
      onClick={handleClick}
    >
      {content}
    </div>
  );
};

export default NavButton;
