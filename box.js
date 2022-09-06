import React from "react";

function Box(props) {
    console.log(props)
    return (
        <mesh {...props} recieveShadow={true}>
            <boxBufferGeometry />
            <boxBufferGeometry args={props.newArg} />
            <meshPhysicalMaterial color={props.color ?? "blue"} />
        </mesh>
    );
}
export default Box;
