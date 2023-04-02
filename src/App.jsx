import react from 'react';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Music from './components/Music';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './styles/tailwind.css'

function App() {

  return (
    <div className="App">
      <Intro />
      <Portfolio />
      <Timeline />
      
      
    </div>
  )
}

export default App
