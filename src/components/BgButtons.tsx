import {
  moveBgBottom,
  moveBgLeft,
  moveBgRight,
  moveBgTop,
} from "../redux/features/bgPositionSlice";
import BgButton from "./BgButton";
import { useDispatch } from "react-redux";

const BgButtons = () => {
  const dispatch = useDispatch();
  return (
    <>
      <BgButton handleClick={() => dispatch(moveBgTop())} position="top" />
      <BgButton handleClick={() => dispatch(moveBgRight())} position="right" />
      <BgButton handleClick={() => dispatch(moveBgLeft())} position="left" />
      <BgButton
        handleClick={() => dispatch(moveBgBottom())}
        position="bottom"
      />
    </>
  );
};

export default BgButtons;
