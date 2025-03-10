import React from "react";
import Lanyard from "./Lanyard/Lanyard";

const LanyardSection = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/CV ATS Muhammad Irfan Suherman Copy1.pdf"; // Pastikan path benar
    link.download = "CV_Muhammad_Irfan_Suherman.pdf"; // Nama file yang diunduh
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="relative h-screen flex items-center justify-center bg-grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <div className="inline-block bg-green-400 text-black px-4 py-1 rounded-full mb-4">
            Available for Projects
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            I'm Muhammad Irfan Suherman
          </h1>
          <h2 className="text-2xl md:text-4xl text-green-400 font-bold mb-4">
            Full Stack Developer
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            I am an 8th-semester Informatics Engineering student at Indraprasta
            PGRI University with a GPA of 3.47. I have experience in web and
            mobile application development, including building microfrontend
            systems with Single SPA and integrating APIs using Java Spring Boot,
            Golang, and mPaaS. I have also worked as a Software Quality
            Assurance Engineer at PT. Alpha Solusi Nusantara, performing manual
            and automated application testing while ensuring system reliability
            and user satisfaction. My expertise includes developing responsive
            user interfaces using React.js and TailwindCSS, creating and testing
            RESTful APIs, and implementing cloud-based systems. I am passionate
            about tackling new challenges in the technology field, equipped with
            strong analytical and problem-solving skills.
          </p>

          <div className="flex gap-4">
            <button
              onClick={handleDownload}
              className="bg-green-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-green-300 transition-colors"
            >
              Download CV
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanyardSection;
