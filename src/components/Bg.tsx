import { useState, useEffect, useRef } from "react";
import Block from "./Block";

const Bg = () => {
  const bgRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [isDraggable, setIsDraggable] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const size = { width: 4000, height: 4000 };
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({
        ...position,
        top: e.clientY - offset.y,
        left: e.clientX - offset.x,
      });
    };
    if (isDraggable) {
      document.addEventListener("mousemove", handleMove);
    }
    return () => {
      document.removeEventListener("mousemove", handleMove);
    };
  }, [isDraggable]);

  return (
    <>
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          width: size.width * scale,
          height: size.height * scale,
        }}
        className="lmao"
        onMouseDown={(e) => {
          setIsDraggable(true);
          setOffset({
            x: e.clientX - position.left,
            y: e.clientY - position.top,
          });
        }}
        onMouseUp={() => setIsDraggable(false)}
      >
        <Block scale={scale} parentSize={size} />
      </div>
      <header>
        <button onClick={() => setScale(scale + 0.1)}>+</button>
        <button onClick={() => setScale(scale - 0.1)}>---</button>
      </header>
    </>
  );
};

export default Bg;
