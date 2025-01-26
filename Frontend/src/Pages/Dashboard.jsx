import React from 'react';

import NavBar from '../Components/NavBar';
import MainContent from '../Components/LandingPage/MainContent';
import Footer from '../Components/Footer'

function Dashboard() {
  return (
    <div className="w-screen min-h-screen bg-[#f8fdf9] flex justify-center items-center">
      <div className="bg-[#fffdef] w-[90%] max-w-7xl rounded-4xl shadow-[4px_4px_12px_rgba(0,0,0,0.1)] p-10 my-10">
        <NavBar />
        <MainContent />
        <Footer/>
      </div>
    </div>
  );
}

export default Dashboard;
