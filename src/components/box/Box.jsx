import React from 'react';

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

function Box() {
  return (
    <mesh rotation={[90,0,20]}>
          <boxBufferGeometry attach='geometry' args={[2,2,2]}/>
          <meshLambertMaterial attach='material' />
    </mesh>
  )
}

export default Box
