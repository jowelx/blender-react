import * as THREE from "three";
import React, { useEffect, useRef, useState, useContext } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { OrbitControls, Bounds } from "@react-three/drei";
import { Model } from "./Car";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { Fog } from "three";

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
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <video style={{ width: "100%" }} autoPlay muted loop>
            <source src="fondo2.webm" type="video/webm" />
          </video>
        </div>

        <Canvas shadows camera={{ rotation: [0, 0, 0] }}>
          <fog attach="fog" args={["#333333", -10, 100]} />
          <ambientLight intensity={0.4} />
          <directionalLight
            rotation={[80, 300, 0]}
            castShadow
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.001}
            shadow-camera-near={0.5}
            shadow-camera-far={500}
            position={[-4, 10, -4]}
            color="rgb(240,190,120)"
            intensity={1.4}
          />
          <Bounds>
            <Model />
          </Bounds>
          {<OrbitControls />}
        </Canvas>
      </div>
    </div>
  );
}

export default App;
