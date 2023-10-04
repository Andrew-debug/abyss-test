import React, { ReactNode, useEffect, useRef, useState } from "react";

const PanAndZoomBg = ({
  src,
  children,
}: {
  src: string;
  children: ReactNode;
}) => {
  const [isPanning, setPanning] = useState(false);
  //   const [image, setImage] = useState<{ width: number; height: number } | null>({
  //     width: 2000,
  //     height: 900,
  //   });
  const image = { width: -4000, height: -4000 };
  const [position, setPosition] = useState({
    oldX: 0,
    oldY: 0,
    x: -1000,
    y: -1550,
    z: 1,
  });

  //   useEffect(() => {
  //     if (position.y > 150 && position.y > -3130) {
  //       setPosition({ ...position, y: 0 });
  //     }
  //     if (position.y < -3270) {
  //       setPosition({ ...position, y: -3130 });
  //     }
  //     if (position.x > 150 && position.x > -2720) {
  //       setPosition({ ...position, x: 0 });
  //     }
  //     if (position.x < -2720) {
  //       setPosition({ ...position, x: -2570 });
  //     }
  //   }, [position]);

  const containerRef = useRef<HTMLDivElement | null>(null);

  //   const onLoad = (e: React.SyntheticEvent<HTMLDivElement, Event>) => {
  //     const target = e.target as HTMLDivElement;
  //     setImage({
  //       width: target.naturalWidth,
  //       height: target.naturalHeight,
  //     });
  //   };

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setPanning(true);
    setPosition({
      ...position,
      oldX: e.clientX,
      oldY: e.clientY,
    });
  };

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaY) {
      const sign = Math.sign(e.deltaY) / 10;
      const scale = 1 - sign;
      //   setScale((prev) => prev - sign);
      const rect = containerRef.current?.getBoundingClientRect();

      if (rect && image) {
        setPosition({
          ...position,
          x: position.x * scale - (rect.width / 2 - e.clientX + rect.x) * sign,
          y:
            position.y * scale -
            ((image.height * rect.width) / image.width / 2 -
              e.clientY +
              rect.y) *
              sign,
          z: position.z * scale,
        });
      }
    }
  };

  useEffect(() => {
    const mouseup = () => {
      setPanning(false);
    };

    const mousemove = (e: MouseEvent) => {
      if (isPanning) {
        setPosition({
          ...position,
          x: position.x + e.clientX - position.oldX,
          y: position.y + e.clientY - position.oldY,
          oldX: e.clientX,
          oldY: e.clientY,
        });
      }
    };

    window.addEventListener("mouseup", mouseup);
    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mouseup", mouseup);
      window.removeEventListener("mousemove", mousemove);
    };
  });

  return (
    <div
      className="PanAndZoomImage-container"
      ref={containerRef}
      onMouseDown={onMouseDown}
      onWheel={onWheel}
    >
      <div
        className="pan-img-wrap"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${position.z})`,
        }}
      >
        <div
          className="PanAndZoomImage-image"
          //   alt="floorplan"
          //   src={src}
          //   onLoad={onLoad}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default PanAndZoomBg;
