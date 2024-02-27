import { OrbitControls } from "@react-three/drei";


const Experience = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
            <meshBasicMaterial />
            <boxGeometry />
        </mesh>
    </>
  );
};

export default Experience