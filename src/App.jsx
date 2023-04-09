import react from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Navbar,Hero, Tech, Works, StarsCanvas } from './components';
import { Loader } from '@react-three/drei'
import './styles/index.css'


const App = () => {
  return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div className = "bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
					<Loader />
				</div>
				<About />
				<Experience />
				<Tech />
				<Works />
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
  )
}

export default App

/////test