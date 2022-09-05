import React from "react";

// to comp
function LightBulb(props) {
  return (
    <mesh {...props} >
      <pointLight castShadow />
      <sphereBufferGeometry  args={[9, 90, 90]} />
      <meshPhongMaterial emissive={"yellow"} />
    </mesh>
  );
}

export default LightBulb;
