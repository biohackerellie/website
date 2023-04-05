import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';


const Computers = ({ isMobile }) => {
	const computer = useGLTF('cube/scene.gltf')
  return (
    <mesh>
			<hemisphereLight intensity={0.15}
			groundColor="black" />
			<pointLight intensity={10} />
			<spotLight 
				position={[-20, 50, 10]}
				angle={0.12}
				color="#0c8cbf"
				penumbra={1}
				intensity={12}
				castShadow
				shadow-mapSize={1024}
			/>
			<primitive
				object={computer.scene}
				scale={isMobile ? .02 : .03}
				position={isMobile ? [0, -1, 0] : [5, -.25, -1.5]}
				rotation={[-2.05, -0.1, -0.9]}
			/>
		</mesh>
  );
};

const ComputersCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 500px)');
		setIsMobile(mediaQuery.matches);
		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		}
		mediaQuery.addEventListener('change', handleMediaQueryChange);
		return() => {
			mediaQuery.removeEventListener('change', handleMediaQueryChange);
		}
	}, [])

	return (
		<Canvas
			frameLoop="demand"
			
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true}}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls 
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers isMobile={isMobile} />
			</Suspense>
			<Preload all />
		</Canvas>
	)
}


export default ComputersCanvas