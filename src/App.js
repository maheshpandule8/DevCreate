import React from 'react';
import Nav from './components/nav';
import EngineeringSolutions from './components/EngineeringSolutions';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <EngineeringSolutions />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
