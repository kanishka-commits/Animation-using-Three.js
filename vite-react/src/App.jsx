import {Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls, Sparkles} from "@react-three/drei";
import {useRef} from "react";
 

const CanvasComponent=()=>{
  const mref=useRef();
  useFrame(()=>{
    if(mref.current){ 
      mref.current.rotation.y+=0.01;
    }
  })
  return (
    <mesh ref={mref}>
      <cylinderGeometry args={[1,1,1]}/>
      <meshLambertMaterial color="#4682B4" emissive="#4682B4"/>
      <Sparkles count={100} scale={[1,5,6]} color="red" speed={0.02} size={4} noise={0.5}/>
      </mesh>
  )
}

const App=()=>{
  return (
    <Canvas style={{height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <OrbitControls enableZoom enablePan enableRotate/>
      <directionalLight position={[0,1,1]} intensity={10} color={0x9CDBA6}/>
      <color attach="background" args={['#F0F0F0']}/>
       <CanvasComponent/>
    </Canvas>
    // we're using canvas to convert everything into 3d object
  )
}
export default App;