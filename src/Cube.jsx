import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useAnimation } from "framer-motion";
import { useViewportScroll } from "framer-motion";
import { motion } from "framer-motion";
export function Model(props) {
  const group = useRef();
  const { nodes, animations } = useGLTF("/cube.glb");
  let action;
  useEffect(() => {
    if (animations.length > 0) {
      const mixer = new THREE.AnimationMixer(group.current);
      action = mixer.clipAction(animations[0]);
      action.play();
    }
  }, [animations]);

  // Crea un controlador de animación usando el hook useAnimation
  const controls = useAnimation();
  // Obtiene el valor actual del scroll
  const { scrollY } = useViewportScroll();
  // Inicia o detiene la animación según el valor del scroll
  useEffect(() => {
    if (scrollY.get() > window.innerHeight / 2) {
      controls.start("play");
    } else {
      controls.stop();
    }
    // Agrega las dependencias necesarias a la lista de dependencias
  }, [scrollY, controls]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <motion.mesh
          {...props}
          name="Cubo"
          geometry={nodes.Cubo.geometry}
          material={nodes.Cubo.material}
          rotation={[-Math.PI, 1.43, -Math.PI]}
          initial="stop"
          animate={controls}
          variants={{
            play: () => {
              if (action) {
                return { ...action.play() };
              }
            },
            stop: () => {
              if (action) {
                return { ...action.stop() };
              }
            },
          }}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/cube.glb");