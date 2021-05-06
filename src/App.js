import './App.css';
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import UsvOthers from './Components/UsvOthers/Usvothers';
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
    {/* Us VS Other */}
    <UsvOthers />
    {/* About US */}
    {/* Brands Results */}
    {/* Our Capabilities */}
    <Capabilities />
    {/* Footer */}
    <Footer />
    </div>
  );
}

export default App;
