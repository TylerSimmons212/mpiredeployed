import './App.css';
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import Brands from './Components/Brands/Brands';


function App() {
  return (
    <div className="App">
    {/* Nav */}
    <Nav />
    {/* Hero */}
    <Hero />
    {/* Brands */}
    <Brands />
    </div>
  );
}

export default App;
