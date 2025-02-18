import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';  // Tailwind CSS
import NavigationBar from './components/NavigationBar';
import Personal from './components/Personal';
import Commercial from './components/Commercial';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-dark-gray font-montserrat">
      <Router>
        <NavigationBar />
        <div className="flex-grow max-w-7xl mx-auto w-full bg-dark-gray">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
