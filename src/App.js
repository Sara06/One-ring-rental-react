
import './assets/images/logo.png';
import React from 'react';
import './assets/css/bootstrap-datepicker.css';
import './assets/css/bootstrap.css';
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.css';
import './assets/css/font-awesome.min.css';
import './assets/css/font.css';
import './assets/css/owl.transitions.css';
import './assets/css/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import './assets/css/style.less';
import Header from './Components/Header.js';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import Footer from './Components/Footer.js';
import Regions from './Components/Regions.js';
import News from './Components/News.js';
import Contact from './Components/Contact.js';

// eslint-disable-next-line

function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Navbar />
              <Home />
              <Footer />

            </>
          }
        />
        <Route
          path="/regions"
          element={
            <>
              <Header />
              <Navbar />
              <Regions />
            </>
          }
        />
        <Route
          path="/news"
          element={
            <>
              <Header />
              <Navbar />
              <News />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <Navbar />
              <Contact />
            </>
          }
        />
       
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;