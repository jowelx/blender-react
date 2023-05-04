import { useState, useEffect, useRef } from "react";
const useRenderVideo = ( scroll = 0,range=0.1) => {

  const videoRef = useRef();
  const [lastPosition, setLastPosition] = useState(0);
  useEffect(() => {
    const handleWheel = (event) => {
      setLastPosition(window.scrollY);
      if (window.scrollY > scroll) {
        if (window.scrollY > lastPosition) {
          videoRef.current.currentTime += range;
        }
        if (window.scrollY < lastPosition) {
          videoRef.current.currentTime -= range;
        }
      }
    };
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [lastPosition]);

  return videoRef;
};
export default useRenderVideo;
