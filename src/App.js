import './App.css';
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import Brands from './Components/Brands/Brands';
import UsvOthers from './Components/UsvOthers/Usvothers';
import Results from './Components/BrandsResults/Results';
import AboutUs from './Components/AboutUs/Aboutus';
import Capabilities from './Components/OurCapabilities/Capabilities';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
    {/* Nav */}
    <Nav />
    {/* Hero */}
    <Hero />
    {/* Brands */}
    <Brands />
    {/* Us VS Other */}
    <UsvOthers />
    {/* About US */}
    <AboutUs />
    {/* Brands Results */}
    <Results />
    {/* Our Capabilities */}
    <Capabilities />
    {/* Footer */}
    <Footer />
    </div>
  );
}

export default App;
