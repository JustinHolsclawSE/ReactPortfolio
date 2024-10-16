import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mx-auto flex justify-end">
      <div className="relative inline-block text-left justify-right pr-4 pt-4">
        {/* Hamburger Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-blue-200 hover:bg-gray-300 focus:outline-none focus:ring-indigo-500"
          onClick={toggleMenu}
          // onMouseEnter={toggleMenu}
          // onMouseLeave={toggleMenu}
        >
          {/* Three Bars Icon */}
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button">
              <Link
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                to="/">
                Home
              </Link>
              <Link
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                to="/projects">
                Projects
              </Link>
              <Link
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                to="/about">
                About
              </Link>
              <Link
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                to="/contact">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
