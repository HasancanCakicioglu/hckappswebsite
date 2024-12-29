import React from 'react';
import Navbar from '../components/Navbar';

function AboutMe() {
  return (
    <div>
      <header className=''><Navbar /></header>
      <div className="bg-black text-white  flex flex-col " style={{ minHeight: "calc(100vh - 96px)" }}>
      <div className="bg-[#0a0b10] flex-1 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#00df9a] mb-4">
            Under Construction
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            This page is currently under construction. It will be completed and available to you soon.
            Please be patient and check back later!
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AboutMe;



