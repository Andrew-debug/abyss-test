import { PointerEventHandler, useEffect, useState } from "react";
import PanAndZoomBg from "./components/PanAndZoomBg";
import Block from "./components/Block";

const defaultBlock = {
  width: 100,
  height: 100,
  x: 0,
  y: 0,
};

function App() {
  const [blockSelected, setBlockSelected] = useState(false);
  const [block, setBlock] = useState(defaultBlock);
  const [pointer, setPointer] = useState<number[] | null>(null);
  const [pointerOffSet, setPointerOffSet] = useState<number[]>([0, 0]);
  const onPointerDown: PointerEventHandler<HTMLDivElement> = (
    e: React.PointerEvent<HTMLDivElement>
  ) => {
    e.preventDefault();
    if (e.currentTarget) {
      const { x, y } = e.currentTarget.getBoundingClientRect();
      const ox = e.clientX - x;
      const oy = e.clientY - y;
      setPointerOffSet([ox, oy]);
      setBlockSelected((prev) => !prev);
    }
  };

  useEffect(() => {
    const moveHandler = (e: PointerEvent) => {
      const x = e.pageX;
      const y = e.pageY;
      setPointer([x, y]);
    };
    const upHandler = () => {
      if (blockSelected) {
        setBlockSelected(false);
      }
    };
    document.addEventListener("pointermove", moveHandler);
    document.addEventListener("pointerup", upHandler);

    return () => {
      document.removeEventListener("pointermove", moveHandler);
      document.removeEventListener("pointerup", upHandler);
    };
  }, [blockSelected]);

  useEffect(() => {
    if (pointer && blockSelected) {
      const [x, y] = pointer;
      setBlock((prev) => ({
        ...prev,
        x: x - pointerOffSet[0],
        y: y - pointerOffSet[1],
      }));
    }
  }, [pointer, blockSelected, pointerOffSet]);

  return (
    <div className="App">
      <div className="nav">aboba</div>
      <PanAndZoomBg src="https://images.unsplash.com/photo-1572512484487-5a471e8986af?q=80">
        <Block
          {...block}
          onPointerDown={onPointerDown}
          selected={blockSelected}
        />
      </PanAndZoomBg>
    </div>
  );
}

export default App;
