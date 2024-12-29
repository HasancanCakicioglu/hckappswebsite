import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped as Typed } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH INNOVATIVE MOBILE APPS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Expand your mobile experience.
        </h1>
        <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4">
          Fast, responsive, and feature-rich for
        </p>
        {/* Typed animation now below */}
        <Typed
          className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
          strings={["Personal Projects", "Business Solutions", "Entertainment"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
        <p className="md:text-2xl text-xl font-bold text-gray-500 mt-8">
          Enhance your daily productivity with mobile apps tailored to your
          needs.
        </p>

        {/* Horizontal icon buttons with additional margin and line */}
        <div className="flex justify-center mt-12 space-x-12">
          <div className="text-center">
            <p className="font-bold mb-4">Discover Apps</p>
            {/* Update path to assets to match your project directory */}
            <hr className="border-t-2 border-white mb-8 w-full mx-auto" />
            <div className="flex justify-center space-x-4">
            <Link to="/apps" className="flex flex-col items-center">
              <img
                src="/apps/voidnote/voidnote.png"
                alt="App 1"
                className="w-16 h-16 mb-2 border-2 border-white rounded-lg p-2"
              />
              <p className="text-white mt-2 font-bold">VoidNote</p>{" "}
              {/* VoidNote bold */}
            </Link>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
