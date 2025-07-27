import {
  DivideIcon as LucideIcon,
  Briefcase,
  GraduationCap,
  Award,
  Heart,
  User,
  Code,
  Linkedin,
  Github,
  Mail,
  Twitter,
  Coffee,
  Palette,
  Database,
  Globe,
  BookOpen,
  MessageCircle, // Add this import
  // Whatsapp, // Remove or keep commented out as this doesn't exist
} from "lucide-react";

export type NavItem = {
  name: string;
  hash: string;
};

export const navItems: NavItem[] = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export type PortfolioItem = {
  title: string;
  description: string;
  role: string;
  duration: string;
  skills: string[];
  imageUrl: string;
  link: string;
  width?: number; // Properti opsional untuk lebar gambar
  height?: number; // Properti opsional untuk tinggi gambar
};

export const portfolioData: PortfolioItem[] = [
  {
    title: "Data Management Dashboard - PT Cahaya Toner Printer",
    description:
      "Dashboard untuk monitoring dan manajemen data produk, penjualan, dan transaksi secara real-time.",
    role: "Full Stack Web Developer",
    duration: "Jan 2024 - Juni 2024",
    skills: ["Python", "Flask", "MongoDB", "Bootstrap", "RESTful API"],
    imageUrl: "/Portofolio/Cahayatoner.PNG", // Changed from .png to .PNG
    link: "#",
    width: 350,
    height: 183,
  },
  {
    title: "CFEST Info Dashboard BNI Indonesia",
    description:
      "Developed CFEST (Campus Financial Ecosystem for Students) digital platform...",
    role: "Software Developer",
    duration: "July 2024 - Agustus 2024",
    skills: ["Java springboot", "Javascript Axml", "RESTful API", "MPASS"],
    imageUrl: "/Portofolio/CFEST1.PNG", // Changed from .png to .PNG
    link: "#",
    width: 121,
    height: 250,
  },
  {
    title: "KKP Management Dashboard - BNI Indonesia",
    description: "Dashboard untuk manajemen Kartu Kredit Pemerintah (KKP)...",
    role: "Software Developer",
    duration: "Oktober 2024",
    skills: ["Golang", "React.js", "Tailwind CSS", "RESTful API", "NodeJS"],
    imageUrl: "/Portofolio/bnikkp.PNG", // Changed from /portofolio/ to /Portofolio/ and .png to .PNG
    link: "#",
    width: 375,
    height: 186,
  },
  {
    title: "Bank Neo Commerce Audit Management System ",
    description: "",
    role: "Software Developer",
    duration: "April 2025",
    skills: [
      "NodeJS",
      "React.js",
      "Tailwind CSS",
      "AXIOS",
      "MOMENTS JS",
      "Redux",
    ],
    imageUrl: "/Portofolio/audit1.PNG", // Changed from /portofolio/ to /Portofolio/ and .png to .PNG
    link: "#",
    width: 375,
    height: 187,
  },
  {
    title:
      "Sistem Pendukung Keputusan Untuk pemilihan Jurusan SMA DAN SMK Metode Forward Chaining",
    description: "",
    role: "Software Developer",
    duration: "MEI 2025",
    skills: ["PHP Native", "MYSQL", "Tailwind CSS", "Javascript"],
    imageUrl: "/Portofolio/spksekolah.PNG", // Changed from /portofolio/ to /Portofolio/ and .png to .PNG
    link: "#",
    width: 375,
    height: 186,
  },
  {
    title: "Sistem Pakar Pemilihan Skincare metode forward chaining",
    description: "",
    role: "Software Developer",
    duration: "MEI 2025",
    skills: ["PHP Native", "MYSQL", "Tailwind CSS", "Javascript"],
    imageUrl: "/Portofolio/spkskincare.PNG", // Changed from /portofolio/ to /Portofolio/ and .png to .PNG
    link: "#",
    width: 375,
    height: 187,
  },
  {
    title: "Sistem Pendukung Keputusan Pinjaman Usaha Metode AHP",
    description: "",
    role: "Software Developer",
    duration: "MEI 2025",
    skills: ["PHP Native", "MYSQL", "Boostrap", "Javascript"],
    imageUrl: "/Portofolio/spkahp.PNG", // Changed from /portofolio/ to /Portofolio/ and .png to .PNG
    link: "#",
    width: 1920,
    height: 550,
  },
  {
    title: "Sistem Pendukung Keputusan Metode MOORA",
    description: "",
    role: "Software Developer",
    duration: "Juni 2025",
    skills: ["PHP Native", "MYSQL", "Tailwindcss", "Javascript"],
    imageUrl: "/Portofolio/spkmora.PNG", // Changed from /portofolio/ to /Portofolio/ and .png to .PNG
    link: "#",
    width: 1920,
    height: 550,
  },
  {
    title: "Aplikasi JAVA Metode Forward Chainig",
    description: "",
    role: "Software Developer",
    duration: "Juni 2025",
    skills: ["JAVA", "MYSQL", "Visual Studio Code"],
    imageUrl: "/Portofolio/ahaskemang.png", // Changed from /portofolio/ to /Portofolio/ and .png to .PNG
    link: "#",
    width: 1920,
    height: 550,
  },
  {
    title: "Website TOP UP GAME 2021",
    description: "",
    role: "Software Developer",
    duration: "Septem 2021",
    skills: ["REACT JS", "Tailwind CSS", "NODE JS", "Typescript"],
    imageUrl: "/Portofolio/topupgame.PNG", // Changed from /portofolio/ to /Portofolio/ and .png to .PNG
    link: "#",
    width: 350,
    height: 175,
  },
  {
    title: "Website FRESH VEGATABLE ECOMMERCE 2021",
    description: "",
    role: "Software Developer",
    duration: "Oktob 2021",
    skills: ["REACT JS", "Tailwind CSS", "NODE JS", "Typescript"],
    imageUrl: "/Portofolio/vegeta.PNG", // Changed from /portofolio/ to /Portofolio/ and .png to .PNG
    link: "#",
    width: 350,
    height: 172,
  },
];
export type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  description: string;
  icon: typeof Briefcase;
  date: string;
};

export const experienceData: ExperienceItem[] = [
  {
    title: "Freelance Full Stack Web Developer",
    company: "Remote",
    location: "Indonesia",
    description:
      "Developed an Audit Management System for Bank Neo Commerce, aimed at enhancing the efficiency and transparency of internal audit processes. The system was initiated under Phase 1 of the project by PT Sekawan Media Informatika The applications was built using React.js Axios,Moment JS,Redux.\n\n" +
      "Developed a real-time skincare product selection dashboard to assist users in choosing the most suitable skincare based on multiple criteria. The application was built using native PHP for the backend and Tailwind CSS with JavaScript for the frontend to deliver a responsive and modern user experience. The system enables administrators to manage criteria and alternatives dynamically, while also providing real-time recommendation results. The dashboard features lightweight performance and clean UI, optimized for both desktop and mobile use.\n\n" +
      "Created a web-based decision support system for school selection, which helps users evaluate and choose the most appropriate school based on weighted criteria. Built using native PHP as the backend and Bootstrap CSS with JavaScript for the frontend. The application features a real-time dashboard, interactive input forms, and dynamic scoring logic. Administrators can efficiently manage data for schools, criteria, and weights while the system processes selections instantly with clear visual feedback.\n\n" +
      "Built a decision-making dashboard based on the Analytical Hierarchy Process (AHP) method to support complex evaluations with multiple layers of criteria. The backend was developed using native PHP, while the frontend utilizes Bootstrap CSS and JavaScript to ensure a responsive and intuitive interface. The system allows for pairwise comparisons, automatic weight calculations, and consistency checks. It also provides detailed output reports to guide decision-makers through structured recommendations.",
    icon: Briefcase,
    date: "April 2025 ",
  },
  {
    title: "Software Developer",
    company: "BNI Indonesia.",
    location: "Jakarta, Indonesia",
    description:
      "Developed KKP (Goverment Credit Card) management dashboard for BNI Bank, which provides real-time data on KKP and KKPD users. The Dashboard includes information such as the number of active and inactive users and user distribution by institution. The Application was built using golang for backend with RESTful API connection for system to the database. the frontend was developed using react.js and tailwind css microfrontend system. for responsive moderen interface Addtionally the application supports graphical reports the adjustable time filters allowing administrations to efficiently monitor",
    icon: Briefcase,
    date: "July 2024 - February 2025",
  },
  {
    title: "Full stack Web Developer",
    company: "PT LX International",
    location: "Remote",
    description:
      "Developed a data management dashboard for PT Cahaya Toner Printer, enabling real-time monitoring and management of product inventory, sales, and transaction data. The dashboard displays key metrics such as inventory levels, recent sales, and customer distribution by region. The backend was built using Python with Flask and MongoDB, along with a RESTful API to ensure secure and efficient communication with the database. For the frontend, Bootstrap was used to create a responsive, user-friendly interface. Additionally, the application includes dynamic reports with adjustable filters, empowering administrators to track performance metrics and trends over customizable time periods, thereby supporting data-driven decision-making..",
    icon: Briefcase,
    date: "January 2024 - July 2024",
  },
  {
    title: "Web Developer Intern",
    company: "Freecodecamp",
    location: "New York, NY",
    description:
      "Assisted in developing web applications using JavaScript frameworks. Learned modern development workflows and best practices. Participated in code reviews and team meetings.",
    icon: Briefcase,
    date: "Sept 2021 - Feb 2022",
  },
];

export type EducationItem = {
  school: string;
  degree: string;
  description: string;
  icon: typeof GraduationCap;
  date: string;
};

export const educationData: EducationItem[] = [
  {
    school: "University Indraprasta PGRI",
    degree: "Bachelor's degree in Computer Science",
    description:
      "Specialized in Web Technologies and User Interface Design. Graduated with honors.",
    icon: GraduationCap,
    date: "2021-2025",
  },
];

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
};

export const projectsData: ProjectItem[] = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and secure checkout process.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    imageUrl:
      "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "#",
  },
  {
    title: "Task Management Dashboard",
    description:
      "Responsive dashboard for team task management with real-time updates, drag-and-drop interface, and performance analytics.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Socket.io", "Chart.js"],
    imageUrl:
      "https://images.pexels.com/photos/8391552/pexels-photo-8391552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "#",
  },
  {
    title: "Travel Blog Platform",
    description:
      "Content management system for travel bloggers with rich text editing, image optimization, and social sharing features.",
    tags: ["Vue.js", "Firebase", "Tailwind CSS", "Cloudinary", "MapBox"],
    imageUrl:
      "https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "#",
  },
];
export type CertificationItem = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  imageUrl: string;
  credentialLink: string;
};

export const certificationsData: CertificationItem[] = [
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding",
    date: "January 08 2025",
    description:
      "Comprehensive certification covering modern web development technologies and practices.",
    imageUrl: "/images/dicodingai.PNG",
    credentialLink: "https://www.dicoding.com/certificates/MRZMNGYLLPYQ",
  },
  {
    title: "Belajar Dasar Pemrograman Javascript",
    issuer: "Dicoding",
    date: "January 06 2025",
    description:
      "In-depth course on advanced React patterns, hooks, and performance optimization.",
    imageUrl: "/images/js1coding.PNG",
    credentialLink: "https://www.dicoding.com/certificates/81P2L18JJZOY",
  },
  {
    title: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding",
    date: "January 06 2025",
    description:
      "Introduction to cloud infrastructure, services, and deployment models.",
    imageUrl: "/images/js2coding.PNG",
    credentialLink: "https://www.dicoding.com/certificates/NVP75G96OXR0",
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding",
    date: "18 Oktober 2024",
    description:
      "Introduction to cloud infrastructure, services, and deployment models.",
    imageUrl: "/images/js3coding.PNG",
    credentialLink: "https://www.dicoding.com/certificates/53XEQY94YXRN",
  },
  {
    title: "Introduction to Javascript",
    issuer: "Dicoding",
    date: "Sept 2024",
    description:
      "Introduction to cloud infrastructure, services, and deployment models.",
    imageUrl: "/images/js4coding.PNG",
    credentialLink: "https://www.sololearn.com/en/certificates/CC-KNUHVLIU",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Learning X",
    date: "Juni 2024",
    description:
      "Introduction to cloud infrastructure, services, and deployment models.",
    imageUrl: "/images/js5coding.PNG",
    credentialLink: "https://www.sololearn.com/en/certificates/CC-KNUHVLIU",
  },
  {
    title: "Javascript Algoritms and Data Structures",
    issuer: "Freecodecamp",
    date: "December 31 2021",
    description:
      "Introduction to cloud infrastructure, services, and deployment models.",
    imageUrl: "/images/js6coding.PNG",
    credentialLink:
      "https://www.freecodecamp.org/certification/muhammadirfansuherman/javascript-algorithms-and-data-structures",
  },
  {
    title: "Responsive Web Design",
    issuer: "Freecodecamp",
    date: "May 10 2021",
    description:
      "Introduction to cloud infrastructure, services, and deployment models.",
    imageUrl: "/images/js7coding.PNG",
    credentialLink:
      "https://www.freecodecamp.org/certification/muhammadirfansuherman/responsive-web-design",
  },
];

export type SkillCategory = {
  category: string;
  icon: typeof Code;
  skills: string[];
};

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    icon: Palette,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "NuxtJS",
      "Tailwind CSS",
      "SCSS",
      "Redux",
    ],
  },
  {
    category: "Backend",
    icon: Database,
    skills: [
      "Node.js",
      "PHP",
      "Laravel",
      "Python",
      "Django",
      "GraphQL",
      "REST API",
      "MongoDB",
      "PostgreSQL",
      "MYSQL",
    ],
  },
  {
    category: "Tools & Others",
    icon: Globe,
    skills: [
      "Git",
      "Postman",
      "Figma",
      "ThunderClient",
      "NGROK",
      "Mockoon",
      "Responsive Design",
      "Visual Studio Code",
      "XAMPP",
      "Laragon",
      "LaravelHerd",
      "MPASS",
    ],
  },
];

export type SocialLink = {
  name: string;
  url: string;
  icon: typeof Github;
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/irfan-gitbash",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-irfan-suherman-7b7871194/",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "suhermanirfan23@gmail.com",
    icon: Mail,
  },
  {
    name: "Whatsapp",
    url: "https://wa.me/+6289629973589",
    icon: MessageCircle, // use the imported icon here
  },
];

export const aboutData = {
  title: "About Me",
  description: `I’m a final-year Informatics Engineering student at Indraprasta PGRI University with a GPA of 3.47, deeply passionate about web and mobile application development. I have hands-on experience building scalable and responsive applications using modern technologies such as React.js, TailwindCSS, and native PHP. My backend expertise spans across Golang, Java Spring Boot, and mPaaS, with a strong focus on RESTful API integration and microfrontend architecture using Single SPA.

Previously, I worked as a Software Quality Assurance Engineer at PT Bank BNI Indonesia  , where I was responsible for both manual and automated testing to ensure application reliability and a seamless user experience. I have also developed various decision-support systems and dashboards, including audit management platforms and recommendation engines, applying structured logic and clean UI design.

Driven by a passion for continuous learning and innovation, I thrive in collaborative environments where analytical thinking, problem-solving, and adaptability are essential. I’m always eager to explore new technologies and contribute to impactful digital solutions.
My expertise includes developing responsive user interfaces using React.js and TailwindCSS, creating and testing RESTful APIs, and implementing cloud-based systems. I am passionate about tackling new challenges in the technology field, equipped with strong analytical and problem-solving skills.`,
  icon: User,
  imageUrl: "/images/foto.jpg",
  stats: {
    yearsOfExperience: "1+",
    projectsCompleted: "50+",
  },
};
