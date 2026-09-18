export const portfolio = {
  header: {
    name: "Abdul Wasay Ahmad",
    title: "Full Stack AI Developer | Next.js & MERN | SQL & Database Engineering",
    location: "Lahore, Pakistan",
    email: "wasay12005@gmail.com",
    resume: "/Abdul_Wasay_CV.pdf",
    links: [
      { name: "GitHub", url: "https://github.com/AbdulWasayAhmad19" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/abdul-wasay-ahmad-a25526361/" },
      { name: "Instagram", url: "https://www.instagram.com/abdulwasay19" }
    ]
  },
  about: "I am a Software Engineering student at COMSATS Lahore and a Full Stack AI Developer specializing in Next.js and the MERN stack. I build and ship production websites for real clients — from law firms and academies to clinics and e-commerce stores — with a strong foundation in database management: complex SQL queries, stored procedures, triggers, indexing, and schema design. I care about responsive design, robust backend APIs, and thoroughly tested, reliable applications.",
  interests: [
    { name: "Full Stack Development", description: "Building production web applications end-to-end with Next.js, React, Node.js, and Express" },
    { name: "Database Engineering", description: "Complex queries, stored procedures, triggers, and performance tuning across SQL, MySQL, PostgreSQL, and MongoDB" },
    { name: "Client Work", description: "Delivering live websites for businesses — law firms, academies, clinics, and e-commerce stores" },
    { name: "Testing & QA", description: "Black box, white box, unit, and functional testing with Selenium and Playwright" },
    { name: "AI Integration", description: "Embedding AI chatbots and AI-generated content workflows into web applications" }
  ],
  projects: [
    {
      title: "Gondal Law Associates",
      description: "Client website for a law firm built with Next.js — professional practice-area pages, responsive layout, and fast, SEO-friendly rendering. Live and in production.",
      link: "https://gondal-law-associates.vercel.app/",
      image: "/assets/gondal.png",
      category: "Client Website",
      tech: ["Next.js", "Tailwind CSS", "Vercel"],
      year: "2025",
      status: "Live"
    },
    {
      title: "Leaders Academy",
      description: "Client website for a home and online tutoring academy built with Next.js — course listings, WhatsApp-driven trial booking, GSAP motion, and a fully responsive design deployed on Vercel.",
      link: "https://leaders-academy-pk.vercel.app/",
      image: "/assets/leaders.png",
      category: "Client Website",
      tech: ["Next.js", "Tailwind CSS", "GSAP", "Vercel"],
      year: "2026",
      status: "Live"
    },
    {
      title: "Hassan Dental Clinic",
      description: "Client website for a dental clinic built with Next.js — services showcase, appointment-focused layout, and a modern responsive interface. Live and in production.",
      link: "https://hassandentalclinic.vercel.app/",
      image: "/assets/hassan.png",
      category: "Client Website",
      tech: ["Next.js", "Tailwind CSS", "Vercel"],
      year: "2025",
      status: "Live"
    },
    {
      title: "Gulliver Travels",
      description: "Client website for a travel agency — destination and package listings, trip search, Umrah and visa services, and a booking-focused layout built for mobile-first browsing. Live and in production.",
      // TODO: replace with the live URL of the deployed Gulliver Travels site.
      link: "https://github.com/AbdulWasayAhmad19",
      image: "/assets/gulliver.jpg",
      category: "Client Website",
      tech: ["Next.js", "Tailwind CSS", "Vercel"],
      year: "2026",
      status: "Live"
    },
    {
      title: "Elegant Mart — Grocery Store",
      description: "Full-stack e-commerce platform (MERN) with dynamic product listing, cart system, user checkout, and an admin panel for product management. Live at elegantsuperstore.com.",
      link: "https://www.elegantsuperstore.com/",
      image: "/assets/elegant.jpg",
      category: "Full Stack",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      year: "2025",
      status: "Live"
    },
    {
      title: "Pin Auto — Pinterest & Facebook Automation",
      description: "MERN automation platform that schedules and publishes pins and posts automatically, generates AI-powered titles, descriptions, hashtags and videos, tracks performance, and drives traffic to Etsy stores on autopilot.",
      link: "https://www.linkedin.com/in/abdul-wasay-ahmad-a25526361/",
      image: "/assets/pinauto.jpg",
      category: "Full Stack",
      tech: ["MERN", "AI Content", "Pinterest API", "Scheduling"],
      year: "2026",
      status: "Shipped"
    },
    {
      title: "Vision Guard — AI Surveillance System",
      description: "Real-time CCTV intelligence: detects people with YOLOv8, keeps their identity across frames with DeepSORT, flags suspicious activity, and surfaces everything on a central monitoring dashboard backed by FastAPI.",
      link: "https://www.linkedin.com/in/abdul-wasay-ahmad-a25526361/",
      image: "/assets/visionguard.jpg",
      category: "AI & Computer Vision",
      tech: ["YOLOv8", "DeepSORT", "OpenCV", "PyTorch", "FastAPI"],
      year: "2026",
      status: "In Development",
      features: [
        "Detect people in real time using YOLOv8",
        "Track people and maintain their identity using DeepSORT",
        "Process CCTV and video feeds using OpenCV",
        "Detect predefined or suspicious activities and generate alerts",
        "Maintain activity and history logs",
        "Centralised monitoring through a dashboard",
        "Backend APIs built with FastAPI",
        "PyTorch for the deep-learning components",
        "Surveillance and activity data stored in a database"
      ]
    },
    {
      title: "StudyNet — Discussion Forum & Course Reviews",
      description: "MERN platform combining a discussion forum, course review system, and past papers portal with user authentication, profile management, and an integrated AI chatbot for academic queries.",
      link: "https://www.linkedin.com/in/abdul-wasay-ahmad-a25526361/",
      image: "/assets/studynet.jpg",
      category: "Full Stack",
      tech: ["MERN", "JWT Auth", "AI Chatbot"],
      year: "2026",
      status: "Shipped"
    },
    {
      title: "Bank Management System",
      description: "C++ desktop application built with OOP and file handling — account management, transactions, fund transfers, and secure customer record storage.",
      link: "https://www.linkedin.com/in/abdul-wasay-ahmad-a25526361/",
      image: "/assets/bank.jpg",
      category: "Desktop",
      tech: ["C++", "OOP", "File Handling"],
      year: "2023",
      status: "Completed"
    }
  ],
  skills: [
    { category: "Frontend", items: ["Next.js", "React.js", "JavaScript", "HTML", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
    { category: "Databases", items: ["SQL", "MySQL", "PostgreSQL", "MongoDB", "Stored Procedures", "Triggers", "Indexing & Schema Design"] },
    { category: "Testing & QA", items: ["Selenium", "Playwright", "Black Box", "White Box", "Unit Testing", "Functional Testing", "Postman"] },
    { category: "Tools & Deployment", items: ["GitHub", "Jira", "Vercel", "Firebase"] },
    { category: "Languages", items: ["JavaScript", "C++", "Python", "SQL"] },
    { category: "Other", items: ["Advanced Excel", "AI Integration", "Communication", "Customer Acquisition"] }
  ],
  experience: [
    {
      title: "Freelance Full Stack Developer",
      company: "Client Projects",
      location: "Lahore, Pakistan",
      date: "2025 – PRESENT",
      type: "Freelance",
      description: "Designing, building, and deploying production websites for business clients using Next.js and the MERN stack.",
      highlights: [
        "Delivered live client websites for Gondal Law Associates, Leaders Academy, and Hassan Dental Clinic — all built on Next.js and deployed to production.",
        "Built and launched Elegant Mart, a full-stack MERN e-commerce store with cart, checkout, and admin panel, live at elegantsuperstore.com.",
        "Handled the complete lifecycle: requirements, responsive UI, backend APIs, database design, testing, and Vercel deployment.",
        "Validated features through functional and CRUD testing to ensure data integrity and reliability."
      ]
    },
   {
title: "Siemens ANA Project",
company: "Siemens Digital Industry Software",
location: "Lahore, Pakistan",
date: "MAY 2025 – PRESENT",
type: "Professional",
description: "Contributed to ANA, a virtual chip testing and validation platform, working with Next.js on the frontend and NestJS on the backend to support test configuration and execution workflows.",
highlights: [
"Developed and enhanced Next.js-based interfaces for configuring chip ports, executing tests, and monitoring test results.",
"Implemented and integrated backend APIs using NestJS to handle test configurations, execution requests, and result processing.",
"Contributed to the end-to-end test execution workflow, connecting frontend user actions with backend services and analyzer processes.",
"Worked with virtual testing workflows to support chip behavior validation and comparison of expected versus actual test responses."
]
}

  ],
  education: [
    {
      degree: "Bachelor of Science in Software Engineering (BSSE)",
      institution: "COMSATS University",
      location: "Lahore, Pakistan",
      date: "SEP 2023 – JUN 2027",
      description: "Focusing on Full Stack development, database systems, software testing, and scalable application design."
    },
    {
      degree: "FSc (Intermediate)",
      institution: "KIPS College, Bahria Campus",
      location: "Lahore, Pakistan",
      date: "2021 – 2023",
      description: "Scored 1061/1100 (96%)."
    },
    {
      degree: "Matriculation",
      institution: "Unique High School, Bahria Campus",
      location: "Lahore, Pakistan",
      date: "2019 – 2021",
      description: "Science stream matriculation."
    }
  ]
};
