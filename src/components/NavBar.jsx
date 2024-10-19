import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar bg-white shadow-md border-b-2 border-gray-200">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="flex justify-between w-full md:hidden items-center">
          <button className="text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            <i className="fas fa-bars text-2xl"></i>
          </button>
          <div className="text-center">
            <img
              src="/src/assets/logo1.png"
              alt="YTHAULERS Logo"
              className="w-36 mx-auto"
            />
          </div>
          <i className="fas fa-globe text-gray-700 text-2xl"></i>
        </div>

        <div className="hidden md:flex items-center justify-between w-full">
          <div className="logo">
            <a href="#">
              <img
                src="/src/assets/logo1.png"
                alt="YTHAULERS Logo"
                className="w-40"
              />
            </a>
          </div>

          <ul className="nav-links flex space-x-8">
            <li className="relative group">
              <a href="/" className="text-gray-700 hover:text-red-600">
                Solution
              </a>
              <ul className="dropdown">
                <li>
                  <a href="/Electric">Electric Vehicles</a>
                </li>
                <li>
                  <a href="/Consumer">Consumer Electronics</a>
                </li>
                <li>
                  <a href="/Energy">Energy Storage</a>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <a href="/" className="text-gray-700 hover:text-red-600">
                R&D
              </a>
              <ul className="dropdown">
                <li>
                  <a href="/Aoi">AOI</a>
                </li>
                <li>
                  <a href="/Eri">ERI</a>
                </li>
                <li>
                  <a href="/Rf-box">RF-BOX</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/About" className="text-gray-700 hover:text-red-600">
                About Us
              </a>
            </li>
            <li>
              <a href="/Contact" className="text-gray-700 hover:text-red-600">
                Contact Us
              </a>
            </li>
          </ul>

          <i className="fas fa-globe text-gray-700 text-2xl"></i>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-gray-700">
                Solution
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                R&D
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
