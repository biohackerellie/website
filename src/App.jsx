import react from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Navbar,Hero, Tech, Works, StarsCanvas, } from './components';
import { motion } from 'framer-motion'
import './styles/index.css'


const App = () => {
  return (
		
		<BrowserRouter>

			<motion.div 
				className="relative z-0 bg-primary"
				animate={{ opacity: 1 }}
				transition={{ from: 0, duration: 3 }}
				>
				<div className = "bg-hero-pattern  bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
					
				</div>
				<About />
				<Experience />
				<Tech />
				<Works />
				<div className="relative z-0">
					<Contact />
					
				</div>
			</motion.div>
			
		</BrowserRouter>
  )
}

export default App

/////test