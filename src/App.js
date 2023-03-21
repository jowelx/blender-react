import "./App.css";
import { GLBObject } from "./Component";
import { motion } from "framer-motion";
import { Canvas } from "react-three-fiber";
import { useControls } from "leva";
import { OrbitControls, Bounds } from "@react-three/drei";
import { Model } from "./Window";
import { useRef } from "react";
import { useFrame } from "react-three-fiber";
//import { Model } from "./Cube";
import { useState, useEffect } from "react";
import { ModelNoBroken } from "./WindowNoBroken";
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  const color = "rgb(200,200,255)";
  return (
    <>
      <div
        style={{
          background: "rgb(2,0,36)",
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(105,7,62,1) 39%, rgba(9,9,121,1) 64%, rgba(121,9,94,1) 91%)",
          height: "90vh",
          width: "100%",
        }}
      >
        <div
          style={{
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0,0)",
          }}
        >
          <button onClick={handleClick}>enviar</button>
          <p style={{ color: "white" }}>{count}</p>
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
              <Model count={count} />
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
        </div>
      </div>
    </>
  );
}

export default App;
