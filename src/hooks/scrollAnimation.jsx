import { useState, useEffect,useRef,useContext} from "react";
import * as THREE from "three";
import modelContext from "../models/modelContext";
function useScrollAnimation(animations, scrollRange) {
  const modelsContext = useContext(modelContext);
  const { currentTimeWindow, setCurrentTimeWindow } = modelsContext;
  const group = useRef();

  const [state, setState] = useState({
    animationDirection: 1,
    lastScrollPosition: 0,
  });

  const [scroll, setScroll] = useState();
  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY);
      console.log(window.screenY)
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const FPS = 40;

  useEffect(() => {
    // let percentScroll = (scroll * 100) / windowHeight;
    if (animations.length > 0) {
      const mixer = new THREE.AnimationMixer(group.current);
      animations.forEach((animation) => {
        const action = mixer.clipAction(animation);
        let frameDuration = 1 / FPS;
        animation.loop = false;
        animation.clampWhenFinished = true;

        if (scroll <= scrollRange) {
          action.play();
          setCurrentTimeWindow(0);
          mixer.setTime(currentTimeWindow * frameDuration);
          mixer.timeScale = 1;
          action.reset();
        } else {
          if (state.animationDirection < 0) {
            action.play();
            setCurrentTimeWindow(currentTimeWindow - 1.5);
            mixer.setTime(currentTimeWindow * frameDuration);

            if (currentTimeWindow <= 0) {
              action.stop();
              action.reset();
            }
          } else {
            action.play();
            setCurrentTimeWindow(currentTimeWindow + 1.5);
            mixer.setTime(currentTimeWindow * frameDuration);
          }
        }
      });
    }
  }, [scroll]);


  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const currentScrollY = scroll;
    if (currentScrollY > prevScrollY) {
      setState({ ...state, animationDirection: 1 });
    } else if (currentScrollY < prevScrollY) {
      setState({ ...state, animationDirection: -1 });
    }
    setPrevScrollY(currentScrollY);
  }, [scroll]);

  return (ref) => {
    group.current = ref;
  };
}

export default useScrollAnimation;