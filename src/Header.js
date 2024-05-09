import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="w-full bg-gray-800 text-white py-4 z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Mental Health App</h1>
        <button className="lg:hidden p-2 text-white" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
        <ul className={`space-x-4 flex flex-col lg:flex-row lg:space-x-4 lg:items-center ${isMenuOpen ? 'flex' : 'hidden'} lg:flex`}>
          <li>
            <Link to="/projecttest" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-300">About Us</Link>
          </li>
          <li>
            <Link to="/journalentry" className="hover:text-gray-300">Your Journal</Link>
          </li>
          <li>
            <Link to="/news" className="hover:text-gray-300">News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
