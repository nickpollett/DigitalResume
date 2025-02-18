import './index.css';
import NavigationBar from './components/Header';
import About from './components/About';
import Portfolios from './components/Portfolios';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-dark-gray font-montserrat">
      <NavigationBar />
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-8">
        <About />
        <Portfolios />
      </main>
      <Footer />
    </div>
  );
}

export default App;