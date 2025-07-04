import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Ayush-CS-19",
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LeetCode",
      href: "https://leetcode.com/Ayush_k_19",
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L.436 12.94a1.4 1.4 0 0 0 0 1.925l12.086 12.501a1.375 1.375 0 0 0 .961.436 1.377 1.377 0 0 0 .964-.404l12.087-12.5a1.401 1.401 0 0 0 0-1.925L14.447.438A1.375 1.375 0 0 0 13.483 0zm8.086 15.637l-8.95 9.25-8.95-9.25 8.95-9.262 8.95 9.262zM15.4 14.5h4.737l1.762 1.825-7.287 7.512h-1.887l-7.287-7.512 1.762-1.825H12l-2.6-2.688h3.475V9.5h2.775v2.312H19.2l-2.6 2.688z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/ayushkaushik19",
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black py-12 overflow-hidden">
      {/* Background Decorative Wave */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 320">
          <path
            fill="#60a5fa"
            fillOpacity="0.3"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-125 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-center text-gray-400 text-sm font-medium">
          All Rights Reserved &copy; {new Date().getFullYear()} Ayush
        </p>
      </div>
    </footer>
  );
};

export default Footer;
