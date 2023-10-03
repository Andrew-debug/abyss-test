import { PointerEventHandler, useRef } from "react";

type TBlock = {
  width: number;
  height: number;
  x: number;
  y: number;
  onPointerDown: PointerEventHandler<HTMLDivElement>;
  selected: boolean;
};

const Block = ({ width, height, x, y, onPointerDown, selected }: TBlock) => {
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <div
      ref={ref}
      className="block"
      style={{
        width,
        height,
        transform: `translate(${x}px, ${y}px)`,
        border: selected ? "2px solid red" : "none",
      }}
      onPointerDown={onPointerDown}
    ></div>
  );
};

export default Block;
