import Navbar from './Components/Navbar'
import Home from './Components/Home';
import SocialLinks from './Components/SocialLinks';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import {Helmet} from 'react-helmet'

function App() {
  return (
    <div>
      <Helmet>
            <meta charSet="utf-8" />
            <title>My Portfolio Website</title>
            <link rel="canonical" href="https://my-portolio.netlify.app/" />
            <meta name="description" content="This is my portfolio website I made with the use of React and Tailwind css" />
      </Helmet>
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
