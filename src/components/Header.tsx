import  { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-12 py-5 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-blue-900 font-bold text-xl">E</span>
          </div>
          <div className="text-xl font-bold">Electroline Rwanda Ltd.</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-yellow-300 transition">
            About
          </a>
          <a href="#services" className="hover:text-yellow-300 transition">
            Services
          </a>
          <a href="#projects" className="hover:text-yellow-300 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-yellow-300 transition">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800 px-4 py-2">
          <a
            href="#about"
            className="block py-2 hover:text-yellow-300 transition"
          >
            About
          </a>
          <a
            href="#services"
            className="block py-2 hover:text-yellow-300 transition"
          >
            Services
          </a>
          <a
            href="#projects"
            className="block py-2 hover:text-yellow-300 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block py-2 hover:text-yellow-300 transition"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
