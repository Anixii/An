
import { Outlet, Route, Routes } from 'react-router-dom';
import { Model } from '../Car';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';
import ColorPicker from './ColorPicker';
import CarSelect from './CarSelect'; 
import s from './Car.module.css'
import { setCarColor, setChromColor, setPlasticColor, setWheelColor } from '../store/car-slice';
function CarCustomPage() {  

  return (
    <div className="App">   
    <div className={s.car}> 

    <Canvas shadows camera={{ position: [-4, 2.5, 2], fov: 65 }} >   
    <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
    <ambientLight inyensity={0.5}/>
    <Environment preset="forest" />
    <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
    <Suspense fallback={null}> 
    <Model/>  
    <OrbitControls maxPolarAngle={Math.PI / 2}  minDistance={3} maxDistance={10} zoomSpeed={2} minZoom={3} />
    </Suspense>
</Canvas>   
</div> 
    <CarSelect/>
    <Outlet/>
    </div>
  );
}

export default CarCustomPage; 