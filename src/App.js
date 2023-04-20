import * as THREE from "three";
import React, { useEffect, useRef, useState, useContext } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { OrbitControls, Bounds } from "@react-three/drei";
import { Model } from "./Mundi";
import { ModelAvion } from "./Avion";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
// Crea la instancia del renderizador y establece el nivel de filtrado anisotrópico

function App() {
  function CameraControls() {
    const { camera } = useThree();
    camera.position.set(0, 0, 0); // ajusta la posición de la cámara
    camera.rotation.set(0, 10, 0); // ajusta la rotación de la cámara

    return null;
  }
  const scene = new THREE.Scene();
  const hdrTextureUrl = new URL(".//bg.hdr", import.meta.url);
  const hdrTextureLoader = new RGBELoader();
  const hdrTexture = hdrTextureLoader.load(hdrTextureUrl);
  console.log(hdrTexture);
  const loader = new RGBELoader();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "1000vh" }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 10,
          background: "linear-gradient(red,blue)",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          position: "fixed",
        }}
      >
        <Canvas shadows camera={{ rotation: [0, 1, 0] }}>
          <ambientLight intensity={0} />
          <directionalLight
            castShadow
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.001}
            shadow-camera-near={0.5}
            shadow-camera-far={500}
            position={[2.5, 1, 5]}
            color="rgb(255,245,160)"
            intensity={1}
          />
          <Bounds>
            <Model />
            <ModelAvion />
          </Bounds>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
