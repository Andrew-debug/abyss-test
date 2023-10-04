import { useEffect, useState } from "react";

const Block = ({
  scale,
  parentSize,
}: {
  scale: number;
  parentSize: { width: number; height: number };
}) => {
  const [position, setPosition] = useState({ top: 10, left: 10 });
  const [isBlockDraggable, setIsBlockDraggable] = useState(false);
  const [blockOffset, setBlocksetOffset] = useState({ x: 0, y: 0 });
  const blockSize = { width: 100, height: 100 };

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const maxTop = parentSize.height - blockSize.height;
      const maxHeight = parentSize.width - blockSize.width;
      const targetPositionTop = e.clientY / scale - blockOffset.y;
      const targetPositionLeft = e.clientX / scale - blockOffset.x;
      setPosition({
        ...position,
        top: Math.max(0, Math.min(targetPositionTop, maxTop)),
        left: Math.max(0, Math.min(targetPositionLeft, maxHeight)),
      });
    };
    if (isBlockDraggable) {
      document.addEventListener("mousemove", handleMove);
    }
    const outOfBoundsMouse = () => {
      setIsBlockDraggable(false);
    };
    document.addEventListener("mouseup", outOfBoundsMouse, { once: true });
    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", outOfBoundsMouse);
    };
  }, [isBlockDraggable]);

  return (
    <div
      style={{
        position: "relative",
        top: position.top * scale,
        left: position.left * scale,
        width: blockSize.width * scale,
        height: blockSize.height * scale,
      }}
      className="block"
      onMouseDown={(e) => {
        e.stopPropagation();
        setIsBlockDraggable(true);
        setBlocksetOffset({
          x: e.clientX / scale - position.left,
          y: e.clientY / scale - position.top,
        });
      }}
      onMouseUp={() => setIsBlockDraggable(false)}
    ></div>
  );
};

export default Block;
