import react from 'react';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Music from './components/Music';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './styles/tailwind.css'
import { Canvas } from "@react-three/fiber"
import Cylinder3d from './components/three';


function App() {

  return (
    <div className="App">
      <Intro />
			<Canvas>
				{/* <pointLight position={[10, 10, 10]} /> */}
				{/* <ambientLight /> */}
				<Cylinder3d position={[-1.2, 0, 0]} />
				<Cylinder3d position={[1.2, 0, 0]} />
			</Canvas>
      <Portfolio />
      <Timeline />
      
      
    </div>
  )
}

export default App
