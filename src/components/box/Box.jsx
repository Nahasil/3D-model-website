import React from 'react';


function Box() {
  return (
    <mesh rotation={[0,0,10]} >
          <boxBufferGeometry attach='geometry' args={[2,2,2]}/>
          <meshLambertMaterial color={'red'}  attach='material' />
    </mesh>
  )
}

export default Box
