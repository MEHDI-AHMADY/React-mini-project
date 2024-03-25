import React from 'react';
import "../src/styles/main.css";
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Info from './components/Info/Info.jsx';
import Newsletter from './components/Newsletter/Newsletter.jsx';
import Cards from './components/Cards/Cards.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Info></Info>
      <Newsletter></Newsletter>
      <Cards></Cards>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
