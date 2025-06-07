import React from "react";

const Header = () => {
  return (
    <div className="w-full h-16 bg-white border-b-2 border-gray-300 shadow-md sticky top-0 z-50 flex items-center justify-between px-6">
      {/* Logo / Brand Name */}
      <h1 className="text-xl font-bold text-black">
        Base64 to Image Generator
      </h1>

      {/* Navigation Links */}
      <nav>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <a href="#" className="hover:text-gray-900 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-900 transition">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-900 transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
