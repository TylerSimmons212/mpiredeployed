import './App.css';
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import Brands2 from './Components/Brands/Brands2';
import UsvOthers from './Components/UsvOthers/Usvothers';
import Capabilities from './Components/OurCapabilities/Capabilities';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/AboutUs/Aboutus';

function App() {
  return (
    <div className="App">
    {/* Nav */}
     <Nav />
    {/* Hero */}
    <Hero />
    {/* Brands */}
    <Brands2 />
    {/* Us VS Other */}
    <UsvOthers />
    {/* About US */}
    <AboutUs />
    {/* Brands Results */}
    {/* Our Capabilities */}
    <Capabilities />
    {/* Footer */}
    <Footer />
    </div>
  );
}

export default App;
