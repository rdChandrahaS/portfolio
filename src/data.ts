import { Globe, Server, Database, Cloud, Layout, Cpu } from 'lucide-react';

import { SiOpenai } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { SiSpringboot, SiReact, SiTypescript, SiMysql, SiPostgresql, SiMongodb, SiNodedotjs } from 'react-icons/si';

export const personalDetails = {
  name: "Rajdeep Debnath",
  role: "Full Stack Developer & B.Tech Student",
  about: "I am a 3rd-year B.Tech IT student at Haldia Institute of Technology. I specialize in backend development with Java & Spring Boot and full-stack applications using the MERN stack. I am also exploring AI/ML and constantly solving problems on LeetCode.",
  imgUrl: "/myImage.jpg",
  location: "Nagarukhra, Nadia, West Bengal",
  dob: "2003-08-30",
  copyrightYear: "2026",

  // --- BLANK SPACES FOR YOUR LINKS ---
  email: "debnathrajdeep30082003@gmail.com",
  phone: "8670472370",
  linkedin: "https://www.linkedin.com/in/rajdeepdebnath03",
  github: "https://github.com/rdChandrahaS",
};

export const skills = [
  { name: "Java", icon: FaJava, color: "#ED8B00" }, // ✅ Using FaJava here
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "GenAI", icon: SiOpenai, color: "#10A37F" },
];

export const services = [
  { title: "Backend Systems", icon: Server, description: "Robust REST APIs using Spring Boot & Java." },
  { title: "Full Stack Web", icon: Globe, description: "Scalable apps with MERN or React + Spring." },
  { title: "Database Design", icon: Database, description: "Optimized schemas for MySQL & MongoDB." },
  { title: "API Integration", icon: Layout, description: "Seamless third-party service connections." },
  { title: "Problem Solving", icon: Cpu, description: "Efficient algorithms and logic optimization." },
  { title: "Cloud / DevOps", icon: Cloud, description: "Basic deployment and CI/CD workflows." },
];

export const projects = [
  {
    id: 1,
    title: "School Management Portal",
    description: "A comprehensive full-stack application...",
    stack: ["Java", "Spring Boot", "React", "MySQL", "Hibernate"],

    githubUrl: "https://github.com/rdChandrahaS/Project/tree/main/Fullstack-College-Portal",
    liveUrl: "",
  },
  {
    id: 2,
    title: "Trie Data Structure Database",
    description: "A high-performance, in-memory data storage...",
    stack: ["Java", "Data Structures", "Algorithms"],

    githubUrl: "https://github.com/rdChandrahaS/Project/tree/main/trie-user-database",
    liveUrl: "",
  },
];