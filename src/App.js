import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Card from './pages/Card';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <Home/>
   <Card/>
   <Footer/>
    </div>
  );
}

export default App;
