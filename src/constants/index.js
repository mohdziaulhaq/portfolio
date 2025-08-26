import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import freelancerlogo from "../assets/images.png"
import mavy from "../assets/mavy.png"
import fiverr from "../assets/fiverr.png"
import capgemini from "../assets/capgemini.png"
import ucm from "../assets/ucm-acro-shield.jpg"
import cmr from "../assets/cmr.jpg"
import eccomerceApp from "../assets/eccomerceApp.png"
import chatView from "../assets/chatView.png"
import crypto from "../assets/crypto.png"
import spring from "../assets/spring.png"
import react from "../assets/React.png"
import share from "../assets/share.png"
export const navLinks = [
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Spring Boot Developer",
    icon: spring,
  },
  {
    title: "React Developer",
    icon: react,
  }

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];


const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "Capgemini",
    icon: capgemini,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Dec 2023",
    points: [
      "• Architected and implemented scalable, fault-tolerant microservices with AWS ECS, S3, and MongoDB.",
"• Enabled secure and efficient open banking integration by building compliant APIs under PSD2 and UK Open Banking standards.",
"• Managed container orchestration using Kubernetes; deployed and monitored clusters, jobs, and services.",
"• Optimized Docker container builds, improved image efficiency, and implemented metadata labeling.",
"• Enabled full-stack CI/CD automation, integrating GIT workflows with Jenkins and Maven artifact repositories.",
"• Mentored junior developers and collaborated with cross-functional teams to deliver complex software solutions.",
"• Improved system observability with AWS CloudWatch and implemented alerting mechanisms for proactive monitoring.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Capgemini",
    icon: capgemini,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Aug 2022",
    points: [
"Developed and maintained microservices using Java (Spring Boot), Hibernate, and RESTful APIs.",
"Designed and implemented secure authentication flows for end users using microservices architecture.",
"Contributed to the development of UK Open Banking and PSD2-compliant APIs, enhancing data-sharing capabilities with third-party providers.",
"Integrated CI/CD pipelines with Jenkins, Bitbucket, and Maven; ensured high code quality using SonarQube.",
"Participated in Agile development lifecycle using JIRA for sprint tracking and task management.",
"Conducted unit testing with JUnit and performed API testing using Postman.",
"Managed application state and logging in containerized environments using Docker and AWS ECS."],
  },
  {
    title: "Graduate Engineering Trainee",
    company_name: "Capgemini",
    icon: capgemini,
    iconBg: "#E6DEDD",
    date: "Mar 2020 - Mar 2021",
    points: [
      "end-to-end development of a React and Spring Boot project, from initial planning to deployment",
      "Developing and maintaining web applications using React.js and Spring Boot, AWS and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const educations = [
  {
    degree: "Master of Science in Computer Science",
    school_name: "University of Central Missouri - Warrensburg, MO",
    icon: ucm, // put your logo path
    iconBg: "#383E56",
    date: "Jan 2024 - Aug 2025",
    points: [
      "Specialized in Full-Stack Development and Cloud Computing",
      "Worked on projects using React, Spring Boot, and Microservices",
      "Gained experience in AI/ML and system design"
    ],
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school_name: "CMR Institute Of Technology",
    icon: cmr,
    iconBg: "#E6DEDD",
    date: "Aug 2016 - Nov 2020",
    points: [
      "Built strong foundations in Data Structures and Algorithms",
      "Worked on Java, Python, and web development projects",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I had the pleasure of working with Zia on Java spring boot projects, and I was continually impressed by their dedication, technical proficiency, and eagerness to learn. He consistently delivered high-quality code and demonstrated a strong understanding of Java fundamentals. Zia is a proactive team player who communicates effectively and collaborates well with others. I highly recommend him for any Java-related role.",
    name: "Pranita Yeole",
    designation: "Team Lead",
    company: "Capgemini",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQH8NqqlSfZddQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1687293676547?e=1758758400&v=beta&t=XaM6VWVjXUjm7HAyndkZhQ0RLZd4vdVLM1YJuzGbnGY",
  }
];

const projects = [
  {
    name: "Ecommerce Admin",
    description:
      "The admin panel boasts an intuitive dashboard with key metrics like sales trends, customer analytics, and inventory status. Customizable widgets provide at-a-glance insights into the store's performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: eccomerceApp,
    source_code_link: "https://frontend-ecommerce-ts.vercel.app",
  },
  {
    name: "Chat App",
    description:
      "Our chat application harnesses the capabilities of the MERN create a seamless communication platform. Users can register, login, create groups, and exchange messages, fostering real-time interactions and collaboration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: chatView,
    source_code_link: "https://chat-app-mern-beta.vercel.app/",
  },
  {
    name: "Cryptocurrency Tracker",
    description:
      "Our cryptocurrency tracker application utilizes the MERN stack—MongoDB, Express.js, React.js, and Node.js—to provide real-time information and analysis on various cryptocurrencies. Users can monitor cryptocurrency prices, view historical data, set alerts, and stay updated with market trends",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https://crypto-app-kappa-smoky.vercel.app/coins",
  },
];

export { services, technologies, educations, experiences, testimonials, projects };
