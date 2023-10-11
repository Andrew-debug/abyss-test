import { useState, useEffect, useRef } from "react";
import { selectZoom } from "../redux/features/zoomSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBgPosition,
  updateBgPosition,
} from "../redux/features/bgPositionSlice";
import { Bcg, ClientBg } from "../styles/bgStyles";
import Graph from "./Graph";
const Bg = () => {
  const bgRef = useRef(null);
  const [isDraggable, setIsDraggable] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const zoom = useSelector(selectZoom);
  const { top, left } = useSelector(selectBgPosition);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const newPosition = {
        top: e.clientY - offset.y,
        left: e.clientX - offset.x,
      };
      dispatch(updateBgPosition(newPosition));
    };
    if (isDraggable) {
      document.addEventListener("mousemove", handleMove);
    }
    return () => {
      document.removeEventListener("mousemove", handleMove);
    };
  }, [isDraggable]);

  return (
    <ClientBg>
      <Bcg
        ref={bgRef}
        style={{
          top,
          left,
          transform: `translate(-25%,-25%) scale(${zoom / 100})`,
        }}
        onMouseDown={(e) => {
          setIsDraggable(true);
          setOffset({
            x: e.clientX - left,
            y: e.clientY - top,
          });
        }}
        onMouseUp={() => setIsDraggable(false)}
      >
        <Graph />
      </Bcg>
    </ClientBg>
  );
};

export default Bg;
