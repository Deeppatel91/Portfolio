// Screenshot imports
import blockchainWalletImg from "@/public/screenshots/CHATAPP.png";
import eventureImg from "@/public/screenshots/EmployeeManagement.png";
import libraryImg from "@/public/screenshots/GBCTRAVEL.png";
import serveease from "@/public/screenshots/SERVEEASECAP.png";
import movieSpaceImg from "@/public/screenshots/Weather.png";
import pythongame from "@/public/screenshots/bfs_pygame.png";
import portfolioImg from "@/public/screenshots/inventories.png";
import Library from "@/public/screenshots/library.png";
import weatherWidgetImg from "@/public/screenshots/EmployeeManagement.png";

// Logo imports
import dayforceImg from "@/public/logos/ser.png";
import isbImg from "@/public/logos/isb.webp";
import parImg from "@/public/logos/par.webp";
import GBCImg from "@/public/logos/George_Brown_College_logo.svg";

// Icon imports
import angularIcon from "@/public/icons/angular.png";
import awsIcon from "@/public/icons/aws.svg";
import csharpIcon from "@/public/icons/csharp.svg";
import dockerIcon from "@/public/icons/docker.svg";
import gitIcon from "@/public/icons/git.svg";
import githubIcon from "@/public/icons/github.svg";
import javaIcon from "@/public/icons/java.svg";
import mongodbIcon from "@/public/icons/mongodb.svg";
import oraclesqlIcon from "@/public/icons/Oracle_SQL_Developer-Logo.wine.png";
import mysqlIcon from "@/public/icons/mysql.svg";
import springICON from "@/public/icons/SpringBoot.png";
import nextjsIcon from "@/public/icons/nextjs.svg";
import nodejsIcon from "@/public/icons/nodejs.svg";
import postgresqlIcon from "@/public/icons/postgresql.svg";
import reactIcon from "@/public/icons/react.svg";
import typescriptIcon from "@/public/icons/typescript.svg";


import {
  CodeIcon,
  EnvelopeClosedIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
  HomeIcon,
  LightningBoltIcon,
  LinkedInLogoIcon,
  PersonIcon,
  PlayIcon
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
    title: "Software Developer Capstone Project - ServeEase",
    company: "Capstone Project - ServeEase",
    Project: "Capstone Project - ServeEase",
    img: dayforceImg,
    imgSize: "lg",
    date: "September 2025 - Present",
    location: "Toronto, Ontario, Canada",
    responsibilities: [],
  },
  {
    title: "Advance Diploma - Computer Programming and Analysis",
    company: "George Brown College",
    img: GBCImg,
    imgSize: "lg",
   //imgSize: { width: 19000, height: 80000 }, // Directly adding width and height values for "lg"
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
    stack: [
      "Java",
      "Spring Boot",
      "Angular",
      "Typescript",
      "HTML/CSS",
      "Azure",
    ],
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
    stack: [
      "Angular",
      "TypeScript",
      "HTML/CSS",
      "Ionic",
      "SQLite",
      "Google Play",
    ],
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
    img: eventureImg,
    desc: "A cross-platform social media application with an emphasis on organizing and attending events.",
    stack: ["Angular", "TypeScript", "HTML/CSS", "Ionic", "Firebase"],
    links: [
      {
        title: "Demo",
        icon: PlayIcon,
        type: "default",
        url: "https://www.youtube.com/watch?v=r-ZLR86G9oo",
      },
      {
        title: "GitHub",
        icon: GitHubLogoIcon,
        type: "outline",
        url: "https://github.com/hershk17/capstone-events-app",
      },
    ],
  },
  {
    title: "Employee Management System",
    img: weatherWidgetImg,
    desc: "A web-based application for viewing detailed weather information for any location.",
    stack: ["React", "JavaScript", "HTML/CSS", "Bootstap", "Vercel"],
    links: [
      {
        title: "Live",
        icon: ExternalLinkIcon,
        type: "default",
        url: "https://weatherite.vercel.app/",
      },
      {
        title: "GitHub",
        icon: GitHubLogoIcon,
        type: "outline",
        url: "https://github.com/hershk17/weather-web-app",
      },
    ],
  },
  {
    title: "CHATTAPP",
    img: portfolioImg,
    desc: "A web-based application showcasing my skills, goals, and projects.",
    stack: ["React", "JavaScript", "HTML/CSS", "MUI", "Firebase"],
    links: [
      {
        title: "GitHub",
        icon: GitHubLogoIcon,
        type: "outline",
        url: "https://github.com/hershk17/portfolio",
      },
    ],
  },
  {
    title: "Weather WedApp",
    img: libraryImg,
    desc: "A desktop application for tracking and managing library resources.",
    stack: ["Java", "JavaFX", "PostgreSQL"],
    links: [
      {
        title: "GitHub",
        icon: GitHubLogoIcon,
        type: "outline",
        url: "https://github.com/hershk17/library-manager-app",
      },
    ],
  },
  {
    title: "Inventory Management System",
    img: serveease,
    stack: ["Qt", "C++"],
    desc: "A desktop application for managing emails.",
    links: [
      {
        title: "GitHub",
        icon: GitHubLogoIcon,
        type: "outline",
        url: "https://github.com/hershk17/desktop-mail-app",
      },
    ],
  },
  {
    title: "Personal Portfolio",
    img: Library,
    stack: ["C++"],
    desc: "A terminal-based version of the Snakes n' Ladders board game.",
    links: [
      {
        title: "GitHub",
        icon: GitHubLogoIcon,
        type: "outline",
        url: "https://github.com/hershk17/snl-terminal-app",
      },
    ],
  },
];

export const ABOUT = [
  {
    id: "01",
    title: "Who I Am",
    paragraphs: [
      "Hello, I'm Deep Patel I'm a passionate Full-Stack Developer with an Advanced Diploma in Computer Programming and Analysis from George Brown College. I love building scalable, user-centric web applications and experimenting with modern frameworks and technologies.When I’m not coding, I’m diving into DevOps, exploring cutting-edge web technologies, and honing my problem-solving skills on LeetCode. I’m always eager to learn, innovate, and push the boundaries of what’s possible in tech. Welcome to my space—where curiosity meets creation!"
    ],
  },
  {
    id: "02",
    title: "My Passion",
    paragraphs: [
      "Through my college years, I deepened my understanding of software development, mastering new technologies and honing my problem-solving skills. But for me, learning never stops. With every project I build and every challenge I tackle, my passion for technology only grows stronger. I thrive on innovation, continuous learning, and the excitement of turning ideas into reality—one line of code at a time."
    ],
  },
  {
    id: "03",
    title: "My Goals",
    paragraphs: [
      "My goal is to become a skilled Software Developer capable of making meaningful contributions in the industry. The possibilities are truly exciting, and I look forward to what the future holds.",
    ],
  },
];

export const SKILLS = [
  {
    title: "Databases",
    technologies: [
      { name: "PostgreSQL", icon: postgresqlIcon, experience: 90 },
      { name: "OracleSQL", icon:oraclesqlIcon , experience: 95 },
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
    icon: EnvelopeClosedIcon,
  },
  {
    title: "LinkedIn",
    description: "Deep Patel",
    href: "https://www.linkedin.com/in/deep-patel-a7181520b/",
    icon: LinkedInLogoIcon,
  },
  {
    title: "GitHub",
    description: "Deeppatel91",
    href: "https://github.com/Deeppatel91",
    icon: GitHubLogoIcon,
  },
];
