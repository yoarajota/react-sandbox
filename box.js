import React from "react";

function Box(props) {
    return (
        <mesh {...props} recieveShadow={true}>
            <boxBufferGeometry args={props.newArg ?? [1, 2, 0.1]} />
            <sphereBufferGeometry args={[1, 20, 40]} />
            <meshPhysicalMaterial color={props.color ?? "blue"} />
        </mesh>
    );
}
export default Box;
