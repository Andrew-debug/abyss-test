import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";

interface IBgButton {
  position: "top" | "right" | "left" | "bottom";
  handleClick: () => void;
}

const BgButton = ({ position, handleClick }: IBgButton) => {
  const btnPosition = {
    top: {
      top: 130,
      left: "calc(50% - 55px)",
      width: 150,
      height: 50,
    },
    left: { top: "calc(50% - 55px)", left: 0, width: 50, height: 150 },
    right: { top: "calc(50% - 55px)", right: 0, width: 50, height: 150 },
    bottom: { bottom: 0, left: "calc(50% - 55px)", width: 150, height: 50 },
  };
  return (
    <button
      onClick={handleClick}
      style={{ ...btnPosition[position] }}
      className="bg-button"
    >
      {
        {
          top: <ChevronUp color="#fff" />,
          left: <ChevronLeft color="#fff" />,
          right: <ChevronRight color="#fff" />,
          bottom: <ChevronDown color="#fff" />,
        }[position]
      }
    </button>
  );
};

export default BgButton;
