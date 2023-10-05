import { MousePointer2 } from "lucide-react";
import NavButton from "./NavButton";
import Dropdown from "./Dropdown";
import { useDispatch } from "react-redux";
import { centerBgPosition } from "../redux/features/bgPositionSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <header className="navbar">
      <div className="nav-logo">
        <h1>Services</h1>
        <div>0</div>
      </div>
      <nav>
        <NavButton bgColor="#7371ec" content="list view" />
        <NavButton
          handleClick={() => dispatch(centerBgPosition())}
          content={<MousePointer2 color="gray" />}
        />
        <Dropdown />
      </nav>
    </header>
  );
};

export default Navbar;
