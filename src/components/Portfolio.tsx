import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform Top Up Game",
      description:
        "A full-featured online shopping Top Up game platform built with React and NextJs 12",
      image: "https://i.postimg.cc/mr6vRwxF/Top-Up-Game.png",
      link: "#",
    },
    {
      title: "Online Shopping Vegeta",
      description:
        "A full-featured online shopping Vegeta platform built with React and NextJs 12",
      image: "https://i.postimg.cc/KYhX0ykp/Vegeta.png",
      link: "#",
    },
    {
      title: "Online Shopping Staycation",
      description:
        "A full-featured online shopping Staycation platform built with React and NextJs 12",
      image: "https://i.postimg.cc/Hnsv6j8Y/Staycation.png",
      link: "#",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-green-400 hover:text-green-300 font-semibold"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
