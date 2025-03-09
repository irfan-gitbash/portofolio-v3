import React from "react";

const TechStack = () => {
  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "TypeScript", icon: "📘" },
    { name: "Python", icon: "🐍" },
    { name: "PHP", icon: "🔺" },
    { name: "Tailwind CSS", icon: "🌊" },
    { name: "Bootstrap", icon: "🅱️" },
    { name: "PostgreSQL", icon: "🐬" },
    { name: "MySQL", icon: "🐬" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Jira", icon: "🎯" },
    { name: "Git", icon: "🔑" },
    { name: "GitLab", icon: "🔑" },
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-colors"
            >
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="text-xl font-semibold">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
