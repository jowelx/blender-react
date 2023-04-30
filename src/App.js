import * as THREE from "three";
import React, { useEffect, useRef, useState, useContext } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { OrbitControls, Bounds } from "@react-three/drei";
import { ModelAvion } from "./Avion";
import { Model } from "./Escena_total";
import { ArtisSfere } from "./ArtisSfere";
import { ModelGraficas } from "./Mundi";
// Crea la instancia del renderizador y establece el nivel de filtrado anisotrópico
import useScrollAnimation from "./hooks/scrollAnimation";
function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scene, setScene] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleChangeScena = () => {
    setScene(!scene);
  };
  return (
    <div style={{ height: "1000vh" }}>
      <button
        style={{ position: "fixed", zIndex: 99999 }}
        onClick={() => handleChangeScena()}
      >
        Cambio de escena
      </button>
      {scene ? (
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: 10,
            background: "linear-gradient(rgb(10,0,20),rgb(255,255,240))",
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
            <video style={{ width: "100%", opacity: 0.4 }} autoPlay muted loop>
              <source src="clouds.mp4" type="video/mp4" />
            </video>
          </div>
          <div
            style={{
              position: "absolute",
              zIndex: 9999,
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            <video
              style={{
                width: "100%",
                opacity: 0.2,
                transform: "rotate(180deg)",
              }}
              autoPlay
              muted
              loop
            >
              <source src="clouds.mp4" type="video/mp4" />
            </video>
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg,rgba(10,0,20,0)80%,rgba(1,0,20,0.5)100%)",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 9999,
              opacity: 1,
            }}
          ></div>
          <Canvas shadows camera={{ rotation: [0, 1, 0] }}>
            <fog attach="fog" args={["#333333", -10, 100]} />
            <ambientLight intensity={0.15} />
            <directionalLight
              rotation={[80, 300, 0]}
              castShadow
              shadow-mapSize={[1024, 1024]}
              shadow-bias={-0.001}
              shadow-camera-near={0.5}
              shadow-camera-far={500}
              position={[-4, 10, -4]}
              color="rgb(240,200,180)"
              intensity={3}
            />
            <Bounds>
              <ModelGraficas />
              <ModelAvion />
              <ArtisSfere />
            </Bounds>
            {
              //<OrbitControls />
            }
          </Canvas>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: 10,
            background: "linear-gradient(rgb(100,80,80),rgb(255,255,240))",
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
            <video style={{ width: "100%", opacity: 0.3 }} autoPlay muted loop>
              <source src="clouds.mp4" type="video/mp4" />
            </video>
          </div>
          <div
            style={{
              position: "absolute",
              zIndex: 9999,
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            <video
              style={{
                width: "100%",
                opacity: 0.2,
                transform: "rotate(180deg)",
              }}
              autoPlay
              muted
              loop
            >
              <source src="clouds.mp4" type="video/mp4" />
            </video>
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg,rgba(1,0,20,0.2)20%,rgba(10,0,20,0)70%,rgba(1,0,20,0.2)100%)",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 9999,
              opacity: 1,
            }}
          ></div>
          <Canvas shadows camera={{ rotation: [0, 0, 0] }}>
            <fog attach="fog" args={["#333333", -10, 100]} />
            <ambientLight intensity={0.01} />
            <directionalLight
              rotation={[0, 0, 0]}
              castShadow
              shadow-mapSize={[1024, 1024]}
              shadow-bias={-0.001}
              shadow-camera-near={0.5}
              shadow-camera-far={500}
              position={[1, 14, 30]}
              color="rgb(240,200,150)"
              intensity={2}
            />
            <Bounds>
              <Model />
            </Bounds>
            {
              //<OrbitControls />
            }
          </Canvas>
        </div>
      )}
    </div>
  );
}

export default App;
