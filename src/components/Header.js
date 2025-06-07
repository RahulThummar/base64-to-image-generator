import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-16 bg-white border-b-2 border-gray-300 shadow-md sticky top-0 z-50 flex items-center justify-between px-6">
      <h1 className="text-xl font-bold text-black">
        <Link to="/">Base64 to Image Generator</Link>
      </h1>

      <ul className="flex gap-6 text-gray-700 font-medium">
        <li>
          <Link to="/" className="hover:text-blue-600 transition">
            Convert
          </Link>
        </li>
        <li>
          <Link to="/examples" className="hover:text-blue-600 transition">
            Example
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
