import { useState } from "react";
import NavButton from "./NavButton";
import { Plus, Minus, Check } from "lucide-react";
import { zoomsVal } from "../constants";
import {
  selectZoom,
  zoomIn,
  zoomOut,
  zoomToValue,
} from "../redux/features/zoomSlice";
import { useDispatch, useSelector } from "react-redux";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const zoom = useSelector(selectZoom);

  return (
    <div className="nav-zoom">
      <NavButton
        handleClick={() => dispatch(zoomOut())}
        content={<Minus color="gray" />}
      />
      <div style={{ position: "relative" }} onClick={() => setIsOpen(!isOpen)}>
        <NavButton content={zoom + "%"} />
        {isOpen && (
          <div className="dropdown">
            {zoomsVal.map((zoomVal, index) => (
              <div
                key={index}
                onClick={() => dispatch(zoomToValue(zoomVal))}
                className="dropdown-item"
              >
                <div style={{ color: zoomVal === zoom ? "#7371ec" : "" }}>
                  {zoomVal}%
                </div>
                {zoomVal === zoom && (
                  <Check size={18} style={{ marginTop: 2 }} color="#7371ec" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <NavButton
        handleClick={() => dispatch(zoomIn())}
        content={<Plus color="gray" />}
      />
    </div>
  );
};

export default Dropdown;
