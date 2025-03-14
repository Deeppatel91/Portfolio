// Screenshot imports
import portfolio from "@/public/screenshots/portfolio.png";
import employee from "@/public/screenshots/EmployeeManagement.png";
import GBCTRV from "@/public/screenshots/GBCTRAVEL.png";
import serveease from "@/public/screenshots/SERVEEASECAP.png";
import CHAT from "@/public/screenshots/CHATAPP.png";
import pythongame from "@/public/screenshots/bfs_pygame.png";
import inven from "@/public/screenshots/inventories.png";
import Library from "@/public/screenshots/library.png";
import weatherWidgetImg from "@/public/screenshots/Weather.png";

// Logo imports
import dayforceImg from "@/public/logos/ser.png";
import isbImg from "@/public/logos/isb.webp";
import parImg from "@/public/logos/par.webp";
import GBCImg from "@/public/logos/George_Brown_College_logo.svg";

// Icon imports
import { FaLinkedin, FaGithub, FaEnvelopeOpen, FaEnvelopeSquare } from "react-icons/fa";
import angularIcon from "@/public/icons/angular.png";
import awsIcon from "@/public/icons/aws.svg";
import csharpIcon from "@/public/icons/csharp.svg";
import dockerIcon from "@/public/icons/docker.svg";
import gitIcon from "@/public/icons/git.svg";
import githubIcon from "@/public/icons/github.svg";
import javaIcon from "@/public/icons/java.svg";
import mongodbIcon from "@/public/icons/mongodb.svg";
import oraclesqlIcon from "@/public/icons/icons8-oracle-logo.svg";
import mysqlIcon from "@/public/icons/mysql.svg";
import springICON from "@/public/icons/icons8-spring-boot.svg";
import nextjsIcon from "@/public/icons/nextjs.svg";
import nodejsIcon from "@/public/icons/nodejs.svg";
import postgresqlIcon from "@/public/icons/postgresql.svg";
import reactIcon from "@/public/icons/react.svg";
import typescriptIcon from "@/public/icons/typescript.svg";

import {
  CodeIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  HomeIcon,
  LightningBoltIcon,
  LinkedInLogoIcon,
  PersonIcon,
  PlayIcon,
} from "@radix-ui/react-icons";
import { BackpackIcon } from "lucide-react";

export const NAV_ITEMS = [
  { name: "Overview", href: "#overview", icon: HomeIcon },
  { name: "About", href: "#about", icon: PersonIcon },
  { name: "Experience", href: "#experience", icon: BackpackIcon },
  { name: "Skills", href: "#skills", icon: LightningBoltIcon },
  { name: "Projects", href: "#projects", icon: CodeIcon },
  { name: "Contact", href: "#contact", icon: EnvelopeClosedIcon },
];

export const EXPERIENCES = [
  {
    title: "Software Developer",
    company: "Capstone Project - ServeEase",
    Project: "Capstone Project - ServeEase",
    img: dayforceImg,
    imgSize: "lg",
    date: "September 2024 - Present",
    location: "Toronto, Ontario, Canada",
    responsibilities: [],
  },
  {
    title: "Advance Diploma - Computer Programming and Analysis",
    company: "George Brown College",
    img: GBCImg,
    imgSize: "lg",
    date: "September 2022 - April 2025",
    location: "Toronto, Ontario, Canada",
    responsibilities: [
      "Cumulative GPA 3.5 / 4.0",
      "George Brown College Dean's Honour List 2023 - 2025",
    ],
  },
];

export const PROJECTS = [
  {
    title: "ServeEase",
    img: serveease,
    desc: "Developed a React Native marketplace app enabling real-time booking and tracking for homeowners and service providers. Integrated Firebase, Stripe, and Google Maps APIs to optimize scheduling, payments, and location-based service matching.",
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "Thymeleaf",
      "Docker",
    ],
    links: [
      {
        title: "GitHub",
        icon: GitHubLogoIcon,
        type: "outline",
        url: "https://github.com/Milan-p23/ServeEase",
      },
    ],
  },
  {
    title: "DSA Python Game",
    img: pythongame,
    desc: "This project is a Pygame-based visualization tool for three popular pathfinding algorithms: A* (A-star), Breadth-First Search (BFS), and Dijkstra's Algorithm. It allows users to create grids, set start and goal positions, and visualize how each algorithm finds the shortest path.",
    stack: ["Python", "Pygame"],
    links: [
      {
        title: "GitHub",
        icon: GitHubLogoIcon,
        type: "outline",
        url: "https://github.com/Deeppatel91/Python-Dijkstra-BFS-A-star",
      },
    ],
  },
  {
    title: "Library Room Management System",
    img: Library,
    desc: "Library Room Reservation Project is a Spring Boot Java-based microservices application for library room reservations. Key features include: Keycloak OAuth 2.0 Authentication. Resilience4J Circuit Breakers & Fallback Mechanisms.",
    stack: ["Spring Boot", "Java", "Keycloak", "Resilience4J"],
    links: [
      {
        title: "GitHub",
        icon: GitHubLogoIcon,
        type: "outline",
        url: "https://github.com/Deeppatel91/Library-Room-Booking-Application",
      },
    ],
  },
  {
    title: "GBC Travel",
    img: GBCTRV,
    desc: "GBC Travel Group 45 is a comprehensive travel platform designed to simplify the travel planning process for users worldwide. Built as an ASP.NET Core MVC application, it serves as a one-stop solution for booking flights, hotels, and car rentals. The platform offers an intuitive and seamless user experience, enabling travelers to explore a wide range of options with ease.",
    stack: ["ASP.NET Core", "C#", "MVC", "SQL Server"],
    links: [
      {
        title: "GitHub",
        icon: GitHubLogoIcon,
        type: "outline",
        url: "https://github.com/Deeppatel91/GBC-TRAVEL-GROUP",
      },
    ],
  },
  {
    title: "Employee Management System",
    img: employee,
    desc: "The Employee Management Web Application is a responsive and secure web application built using the MERN stack (MongoDB, Express.js, React, Node.js). It is designed to streamline employee data management with features like real-time search, CRUD operations, and secure access using JWT authentication.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    links: [
      {
        title: "GitHub",
        icon: GitHubLogoIcon,
        type: "outline",
        url: "https://github.com/Deeppatel91/Employee-Management-Web-Application",
      },
    ],
  },
  {
    title: "CHATAPP",
    img: CHAT,
    desc: "This project is a simple chat application using Socket.io and MERN stack that allows users to sign up, log in, and participate in chat rooms. It includes features such as real-time messaging, joining and leaving rooms, and a typing indicator.",
    stack: ["React", "Node.js", "Socket.io", "MongoDB"],
    links: [
      {
        title: "GitHub",
        icon: GitHubLogoIcon,
        type: "outline",
        url: "https://github.com/Deeppatel91/ChatAPPSOCKET.IO",
      },
    ],
  },
  {
    title: "Weather App",
    img: weatherWidgetImg,
    desc: "Weather App 🌤️ A ReactJS-based weather application that fetches real-time weather data from the OpenWeatherMap API. Features include dynamic city search, current weather conditions, a 5-day forecast, and an enhanced UI/UX for seamless user interaction.",
    stack: ["React", "OpenWeatherMap API", "CSS"],
    links: [
      {
        title: "GitHub",
        icon: GitHubLogoIcon,
        type: "outline",
        url: "https://github.com/Deeppatel91/Weather-App-Using-ReactJS",
      },
    ],
  },
  {
    title: "Inventory Management System",
    img: inven,
    desc: "The Inventory Management Application is a robust, microservices-based application built using Spring Boot and Java. The application is containerized using Docker for easy deployment and uses PostgreSQL and MongoDB for reliable data storage. APIs are documented using Swagger, and Postman is used for testing. Security is implemented using Keycloak OAuth 2.0, and the project is managed with GitHub for version control.",
    stack: ["Spring Boot", "Java", "Docker", "PostgreSQL", "MongoDB"],
    links: [
      {
        title: "GitHub",
        icon: GitHubLogoIcon,
        type: "outline",
        url: "https://github.com/Deeppatel91/InventoryManagementApplication-UsingSpringBoot",
      },
    ],
  },
  {
    title: "Personal Portfolio",
    img: portfolio,
    desc: "A web-based portfolio showcasing my skills, projects, and experiences. Built with Next.js, Tailwind CSS, and TypeScript, this responsive and interactive website is designed to provide an overview of my work and achievements. The site includes sections for an about me, skills, projects, and contact information, as well as a dark mode toggle for enhanced user experience.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    links: [
      {
        title: "GitHub",
        icon: GitHubLogoIcon,
        type: "outline",
        url: "https://github.com/Deeppatel91/Portfolio",
      },
    ],
  },
];
export const ABOUT = [
  {
    id: "01",
    title: "Who I Am",
    paragraphs: [
      "Hello, I'm Deep Patel, a passionate Full-Stack Developer with an Advanced Diploma in Computer Programming and Analysis from George Brown College. I specialize in building scalable, user-centric web applications and leveraging modern technologies to create seamless digital experiences. Beyond coding, I explore DevOps, cloud computing, and problem-solving challenges to refine my skills. Welcome to my space—where creativity meets technology!",
    ],
  },
  {
    id: "02",
    title: "My Passion",
    paragraphs: [
      "Technology is more than just a profession for me—it's a lifelong pursuit of innovation and growth. Throughout my college years, I mastered diverse technologies and deepened my problem-solving abilities, but my learning never stops. Every project I build fuels my curiosity, pushing me to explore new frameworks, optimize performance, and create impactful solutions that solve real-world challenges.",
    ],
  },
  {
    id: "03",
    title: "My Goals",
    paragraphs: [
      "My goal is to evolve into a highly skilled Software Developer who not only writes clean, efficient code but also contributes to meaningful technological advancements. I strive to work on innovative projects, collaborate with talented professionals, and continuously grow in an ever-evolving tech landscape. The future is full of possibilities, and I’m excited to be a part of it!",
    ],
  },
];

export const SKILLS = [
  {
    title: "Databases",
    technologies: [
      { name: "PostgreSQL", icon: postgresqlIcon, experience: 90 },
      { name: "OracleSQL", icon: oraclesqlIcon, experience: 95 },
      { name: "MySQL", icon: mysqlIcon, experience: 85 },
      { name: "Mongo", icon: mongodbIcon, experience: 80 },
    ],
  },
  {
    title: "DevOps",
    technologies: [
      { name: "Git", icon: gitIcon, experience: 90 },
      { name: "Actions", icon: githubIcon, experience: 90, invert: true },
      { name: "AWS", icon: awsIcon, experience: 80, invert: true },
      { name: "Docker", icon: dockerIcon, experience: 80 },
    ],
  },
  {
    title: "Frontend",
    technologies: [
      { name: "React", icon: reactIcon, experience: 90 },
      { name: "TypeScript", icon: typescriptIcon, experience: 90 },
      { name: "Next.js", icon: nextjsIcon, experience: 85, invert: true },
      { name: "Angular", icon: angularIcon, experience: 80 },
    ],
  },
  {
    title: "Backend",
    technologies: [
      { name: ".NET/C#", icon: csharpIcon, experience: 95 },
      { name: "Java", icon: javaIcon, experience: 85 },
      { name: "Node.js", icon: nodejsIcon, experience: 85 },
      { name: "SpringBoot", icon: springICON, experience: 80 },
    ],
  },
];

export const LINKS = [
  {
    title: "Email",
    description: "deeppatel9171@gmail.com",
    href: "mailto:deeppatel9171@gmail.com",
    icon: FaEnvelopeSquare,
    size: 24, // Add explicit size
  },
  {
    title: "LinkedIn",
    description: "Deep Patel",
    href: "https://www.linkedin.com/in/deep-patel-a7181520b/",
    icon: FaLinkedin,
    size: 24, // Keep consistent
  },
  {
    title: "GitHub",
    description: "Deeppatel91",
    href: "https://github.com/Deeppatel91",
    icon: FaGithub,
    size: 24, // Keep consistent
  },
];
