import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "#hero" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  // Handle smooth scrolling with offset for navbar height
  const handleLinkClick = (e, path) => {
    e.preventDefault();
    setMenuOpen(false); // Close mobile menu
    const target = document.querySelector(path);
    if (target) {
      const offset = 80; // Adjust based on navbar height
      const elementPosition =
        target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 shadow-xl transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/80 backdrop-blur-md border-b border-white/10"
          : "bg-gradient-to-r from-gray-900 via-indigo-950 to-gray-900"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo & Mobile Button */}
          <div className="flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden p-2 rounded-lg text-gray-200 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              {menuOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, "#hero")}
              className="flex items-center ml-3"
            >
              <img
                className="h-10 w-auto rounded-full hover:scale-110 transition-transform"
                src={logo}
                alt="Logo"
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden sm:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  window.location.hash === link.path
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "text-gray-200 hover:bg-indigo-500 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 pt-2 space-y-2 bg-gradient-to-b from-gray-900 to-indigo-950">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => handleLinkClick(e, link.path)}
              className={`block px-4 py-3 text-base font-medium rounded-xl transition-all ${
                window.location.hash === link.path
                  ? "bg-indigo-600 text-white"
                  : "text-gray-200 hover:bg-indigo-500 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
