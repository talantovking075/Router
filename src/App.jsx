import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/ui/Home/Home';
import Contact from './components/ui/Contact/Contact';
import About from './components/ui/About/About';

const App = () => {
  return (
    <div className="app-wrapper"> 
      <Navbar />

      <div className="content"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1 className='error'>404 ERROR</h1>} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;