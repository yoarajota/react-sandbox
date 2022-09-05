import React from "react";

// to comp
function Floor(props) {
  return (
    <mesh style={{height: '500px'}} {...props} recieveShadow={true}>
      <boxBufferGeometry args={[200,10,10]} />
      <meshPhysicalMaterial color='white' />
    </mesh>
  );
}

export default Floor;
