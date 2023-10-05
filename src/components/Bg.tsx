import { useState, useEffect, useRef } from "react";
import Graph from "./Graph";
import { selectZoom } from "../redux/features/zoomSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBgPosition,
  updateBgPosition,
} from "../redux/features/bgPositionSlice";

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
    <div className="bg-view">
      <div
        ref={bgRef}
        className="bg"
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
        <div className="graph-wrap">
          <Graph />
        </div>
      </div>
    </div>
  );
};

export default Bg;
