import React from 'react';

import Navbar from '../Components/Landing/Navbar';
import MainContent from '../Components/Landing/MainContent';
import Footer from '../Components/Landing/Footer';

function Landing() {
  return (
    <div className="w-full min-h-screen bg-[#f8fdf9] flex justify-center items-center">
      <div className="bg-[#fffdef] w-full shadow-[4px_4px_12px_rgba(0,0,0,0.1)] p-10 ">
        <Navbar />
        <MainContent />
        <Footer/>
      </div>
    </div>
  );
}

export default Landing;