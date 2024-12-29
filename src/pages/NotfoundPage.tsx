import React from "react";
import { Link } from "react-router-dom";


export default function NotfoundPage() {


    return (
        <div className="flex flex-col items-center justify-center h-screen  text-[#00df9a]">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl mb-6">Oops! The page you are looking for does not exist.</p>
          <button
            className="px-6 py-3 bg-[#00df9a] text-gray-900 font-semibold rounded-md hover:bg-[#00c387] transition duration-300"
          >
            <Link to="/">Go back to Home</Link>
          </button>
        </div>
      );
}

