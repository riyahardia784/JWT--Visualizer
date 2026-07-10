import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Grid, OrbitControls, MeshReflectorMaterial } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import CameraController from './CameraController';

function SynthwaveFloor() {
  return (
    <group position={[0, -2.2, 0]}>
      {/* 1. THE GRID LINES */}
      <Grid
        position={[0, 0.01, 0]} 
        args={[50.0, 50.0]}      
        cellSize={2}        
        cellThickness={0.7}    
        cellColor="#7ec2c5" // Vibrant Cyan grid lines from image
        sectionSize={0}         
        sectionThickness={0}  
        fadeDistance={50}       
        infiniteGrid          
      />

      {/* 2. THE CRISP MIRROR REFLECTION FLOOR */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
    resolution={1024}
    mixBlur={1}
    mixStrength={30}
    roughness={0.2}
    metalness={1}
    color="#050515"
    mirror={0.8}
    depthScale={1}
    minDepthThreshold={0.4}
    maxDepthThreshold={1.4}         // High metallic quality for real-time reflections
        />
      </mesh>
    </group>
  );
}

export default function Floor({ children ,currentStep}) {
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#010108' }}>
      <Canvas  camera={{ position: [0, 3, 10], fov: 50 }}>
        <CameraController currentStep={currentStep} />
        <color attach="background" args={['#02020c']} />
        
       <ambientLight intensity={0.2} />

<pointLight
    position={[0,6,4]}
    color="#00eaff"
    intensity={6}
/>

<pointLight
    position={[0,2,-8]}
    color="#00eaff"
    intensity={7}
/>

<pointLight
    position={[-6,2,3]}
    color="#00ffff"
    intensity={4}
/>

        {/* Render child elements */}
        {children}

        {/* Reflective Studio Floor */}
        <SynthwaveFloor />

        {/* Post-Processing Bloom Pass */}
        <EffectComposer>
          <Bloom 
            intensity={2.0}           
            luminanceThreshold={0}  
            luminanceSmoothing={0.4}  
            mipmapBlur               
          />
        </EffectComposer>

        <OrbitControls
  target={[0, 0.5, 0]}
  enableRotate={false}
  enablePan={false}
  enableZoom={false}
/>
      </Canvas>
    </div>
  );
}
