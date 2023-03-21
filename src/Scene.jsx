import { Canvas, useLoader, useFrame } from "react-three-fiber";
import { OrbitControls, Bounds } from "@react-three/drei";
import { Model } from "../../../../models/Window";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { ModelNoBroken } from "../../../../models/WindowNoBroken";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Scene() {
  const [scroll, setScroll] = useState(false);
  const [outRange, setOutRange] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    function scrollHandler() {
      const currentPosition = window.scrollY;
      // console.log(currentPosition);
      // console.log(outRange);
      if (currentPosition > 0 && currentPosition < window.innerHeight) {
        setScroll(true);
      }
      if (currentPosition > window.innerHeight) {
        setOutRange(true);
      } else {
        setOutRange(false);
      }
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    let timeoutId = null;
    if (scroll) {
      setIsVisible(true);
      timeoutId = setTimeout(() => {
        // setIsVisible(false);
        // setScroll(false);
      }, 4000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [scroll]);
  const color = "rgb(200,200,255)";

  return (
    <>
      <div
        style={{
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 9999,
          right: 0,
          backgroundColor: "rgba(0,0,0,0)",
        }}
      >
        {!outRange && (
          <Canvas
            style={{
              backgroundColor: "transparent",
            }}
            shadows
          >
            <ambientLight intensity={0.1} />
            <hemisphereLight intensity={0.125} color="#8040df" />
            <spotLight
              castShadow
              color={color}
              intensity={10}
              position={[50, 0, 0]}
              angle={0.25}
              penumbra={2}
              shadow-mapSize={[128, 128]}
              shadow-bias={0.00005}
            />
            <Bounds>
              {isVisible && <Model />}
              {!isVisible && <ModelNoBroken scroll={scroll} />}
            </Bounds>
            <OrbitControls
              enableRotate={false}
              minAzimuthAngle={1.57}
              maxAzimuthAngle={1.57}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
              enablePan={false}
              zoom={10}
              enableZoom={false}
            />
          </Canvas>
        )}
      </div>
    </>
  );
}

export default Scene;
