
import { Route, Routes } from 'react-router-dom';
import './App.css';  
import { Model } from './Car';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';
import ColorPicker from './components/ColorPicker';
function App() {  

  return (
    <div className="App">  
    {/* <Canvas shadows camera={{ position: [0, 0, 4], fov: 45 }} >   
    <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
    <ambientLight inyensity={0.5}/>
    <Environment preset="forest" />
        <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
    <Suspense fallback={null}> 
    <Model/>  
    <OrbitControls/>
    </Suspense>
    </Canvas>    */}
    <ColorPicker/>
    </div>
  );
}

export default App; 
