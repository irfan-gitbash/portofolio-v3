import React, { useState, useEffect } from "react";
import { Github, Linkedin, Phone, Sun, Moon } from "lucide-react";
import LanyardSection from "./components/LanyardSection";
import TechStack from "./components/TechStack";
import Portfolio from "./components/Portfolio";
import Certificates from "./components/Certificates";

function App() {
  const [isZoomed, setIsZoomed] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <Sun className="w-6 h-6 text-yellow-500" />
        ) : (
          <Moon className="w-6 h-6 text-gray-700" />
        )}
      </button>
      {/* Hero Section with Lanyard */}
      <LanyardSection />

      {/* Social Media Links */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/irfan-gitbash"
            className="hover:text-green-400 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-irfan-suherman-7b7871194/"
            className="hover:text-green-400 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B6289629973589&text&type=phone_number&app_absent=0"
            className="hover:text-green-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone size={24} />
          </a>
        </div>
      </div>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Certificates Section */}
      <Certificates />
    </div>
  );
}

export default App;
