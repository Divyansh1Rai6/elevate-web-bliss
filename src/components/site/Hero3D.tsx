import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Torus, Sphere, Float } from "@react-three/drei";

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 4, 4]} intensity={1.4} color="#f0a937" />
      <directionalLight position={[-4, -2, -4]} intensity={0.8} color="#22d3c9" />

      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.8}>
        <Sphere args={[1.3, 64, 64]}>
          <MeshDistortMaterial
            color="#0f2a4a"
            attach="material"
            distort={0.42}
            speed={1.8}
            roughness={0.15}
            metalness={0.6}
          />
        </Sphere>
      </Float>

      <Float speed={0.8} rotationIntensity={1.2} floatIntensity={0.4}>
        <Torus args={[2.1, 0.04, 16, 100]} rotation={[Math.PI / 2.3, 0.4, 0]}>
          <meshStandardMaterial color="#f0a937" emissive="#f0a937" emissiveIntensity={0.4} roughness={0.3} metalness={0.8} />
        </Torus>
      </Float>

      <Float speed={1.1} rotationIntensity={0.9} floatIntensity={0.6}>
        <Torus args={[2.5, 0.025, 16, 100]} rotation={[Math.PI / 1.8, -0.3, 0.5]}>
          <meshStandardMaterial color="#22d3c9" emissive="#22d3c9" emissiveIntensity={0.3} roughness={0.3} metalness={0.8} />
        </Torus>
      </Float>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.2}
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI / 1.7}
      />
    </>
  );
}

export function Hero3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 42 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
