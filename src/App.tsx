import React from "react";
import { Github, Linkedin, Phone } from "lucide-react";
import LanyardSection from "./components/LanyardSection";
import TechStack from "./components/TechStack";
import Portfolio from "./components/Portfolio";
import Certificates from "./components/Certificates";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
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
