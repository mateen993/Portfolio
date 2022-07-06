import Navbar from './Components/Navbar'
import Home from './Components/Home';
import SocialLinks from './Components/SocialLinks';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Experience from './Components/Experience';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <div className='pt-20'>
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
      </div>
    </div>
  );
}

export default App;
