import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Router komponentlarini chaqiramiz
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/ui/Home/Home';
import Contact from './components/ui/Contact/Contact';
import About from './components/ui/About/About';

const App = () => {
  return (
    <div className="app-wrapper"> {/* Flex konteyner */}
      <Navbar />

      <div className="content"> {/* Asosiy kontent */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Sahifa topilmadi!</h1>} />
        </Routes>
      </div>

      <Footer /> {/* Endi footer har doim eng pastda bo'ladi */}
    </div>
  );
};

export default App;