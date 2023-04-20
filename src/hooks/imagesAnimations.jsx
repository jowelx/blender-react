import { useState, useEffect, useRef } from 'react';

const useRenderAnimation = (images, fps = 30,scroll=0) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const intervalRef = useRef(null);
    const [direction, setDirection] = useState(0)
    const [lastPosition,setLastPosition]=useState(0)
  useEffect(() => {


      const handleWheel = (event) => {
    
          setLastPosition(window.scrollY)
          console.log(currentFrame)
          if (window.scrollY > scroll) {
                  if (window.scrollY>lastPosition) {
           
              setCurrentFrame(currentFrame =>currentFrame >images.length - 2?images.length - 1: currentFrame +2)
          } 
                  if (window.scrollY<lastPosition) {
              setCurrentFrame(currentFrame =>currentFrame < 2?currentFrame =0: currentFrame -2)
        }    
          }
      
    };


    window.addEventListener('wheel', handleWheel);

    return () => {
     
      window.removeEventListener('wheel', handleWheel);
    };
  }, [images, fps, currentFrame]);

  return{ currentFrame};
};

export default useRenderAnimation;
