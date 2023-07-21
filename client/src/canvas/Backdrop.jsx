import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import React, { useRef } from "react";

const BackDrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scae={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.15]}
    >
      <RandomizedLight
        amount={5}
        radius={9}
        intensity={0.7}
        ambient={0.45}
        position={[7, 7, -15]}
      />
    </AccumulativeShadows>
  );
};

export default BackDrop;
