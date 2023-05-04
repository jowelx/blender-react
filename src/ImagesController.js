import React, { useRef } from "react";
import { images } from "./data/images1";
import useRenderAnimation from "./hooks/imagesAnimations";
import useRenderVideo from "./hooks/scrollVideo";
const ImagesController = () => {
  const setRef = useRenderVideo(10, 0.08);

  return (
    <>
      <div style={{ height: 10000 }}>
        <video style={{ width: "20%", position: "fixed" }} ref={setRef}>
          <source src="Secuencia3.webm" type="video/webm" />
        </video>
      </div>
    </>
  );
};
export default ImagesController;
