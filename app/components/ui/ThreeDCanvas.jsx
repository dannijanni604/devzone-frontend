
// app/components/ui/ThreeDCanvas.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

export default function ThreeDCanvas() {
  return (
    <Canvas className="absolute inset-0 w-full h-full">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      <mesh position={[0, -2, 0]}>
        <torusGeometry args={[10, 3, 16, 100]} />
        <meshStandardMaterial color="#0d9488" metalness={0.5} roughness={0.2} />
      </mesh>
    </Canvas>
  );
}