import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homecard from './components/Home-card/Homecard';
import Hairrange from './components/Hair-range/Hairrange';
import Aboutus from './components/AboutUs/Aboutus';
import Services from './components/Services/Services';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Homecard/>
    <Hairrange/>
    <Aboutus/>
    <Services/>
    <Reviews/>
    <Footer/>
    </>
  );
}

export default App;
