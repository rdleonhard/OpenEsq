// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import AboutUs from './AboutUs';
import OurServices from './OurServices';
import FAQ from './FAQ';
import Payment from './Payment'; // import the Payment component
import ContactUs from './ContactUs';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/payment" element={<Payment />} /> // add a route for the Payment page
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
