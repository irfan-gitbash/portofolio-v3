import React from "react";

const Certificates = () => {
  const certificates = [
    {
      title: "Belajar Dasar AI",
      issuer: "Dicoding",
      date: "January 2025",
      image: "https://i.postimg.cc/rKx9VRPL/Belajar-Dasar-AI.png",
    },
    {
      title: "Belajar-Dasar-Pemrograman-Java-Script",
      issuer: "Dicoding",
      date: "January 2025",
      image:
        "https://i.postimg.cc/VSGqGqdX/Belajar-Dasar-Pemrograman-Java-Script.png",
    },
    {
      title: "Belajar Membuat Front-End Web Untuk Pemula",
      issuer: "Dicoding",
      date: "January 2025",
      image:
        "https://i.postimg.cc/XrgcFSWH/Belajar-Membuat-Front-End-Web-Untuk-Pemula.png",
    },
    {
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding",
      date: "January 2025",
      image: "https://i.postimg.cc/NLZTSGb2/Belajar-Dasar-Pemrograman-Web.png",
    },
    {
      title: "Introduction To Javascript",
      issuer: "Solo learn",
      date: "Sept 2024",
      image: "https://i.postimg.cc/d7tRjHtq/Introduction-To-Javascript.png",
    },
    {
      title: "MBKM Learning X Full Stack Web Development",
      issuer: "Learning X",
      date: "Jun 2024",
      image:
        "https://i.postimg.cc/68fv8rKC/MBKM-Learning-X-Full-Stack-Web-Development.png",
    },
    {
      title: "Freecodecamp Javascript Algorithm and Data Structures",
      issuer: "Freecodecamp",
      date: "Dec 2021",
      image:
        "https://i.postimg.cc/gxWhcMCY/Freecodecamp-Javascript-Algoritm.png",
    },
    {
      title: "Responsive Web Design",
      issuer: "Freecodecamp",
      date: "Dec 2021",
      image:
        "https://i.postimg.cc/kVMtK2Mz/Responsive-Web-Design-Freedcode-camp.png",
    },
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-400">{cert.issuer}</p>
                <p className="text-green-400">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
