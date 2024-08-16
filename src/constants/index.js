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
  hakeem,
  intern,
  shopify,
  carrent1,
  crypto,
  tripguide,
  location,
  threejs,
} from "../assets";

export const navLinks = [
  {
  id: "home",
  title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
  id: "experience",
  title: "Experience",
  },
];

const services = [
  {
    title: "Fullstack Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DSA Enthusiast",
    icon: creator,
  },
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
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "Lazeez Hakeem",
    icon: hakeem,
    iconBg: "#383E56",
    date: "August 2023 - October 2023",
    points: [
      "Developing and maintaining the famous FMCG brand lazeez Hakeem's website using MERN stack.",
      "Developing the website for continuous maintainance, organisation, and updation of available menu dishes in order to provide the best experience to customers",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to develop a successful website.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "MERN Stack Developer intern",
    company_name: "Bharat Intern",
    icon: intern,
    iconBg: "#E6DEDD",
    date: "November 2023 - December 2023",
    points: [
      "Successfully completed 2 assigned projects as part of the internship.",
      "Tasks included: Registration Form Builder and an expense Tracker web app",
      "Tech stack: HTML, CSS, Node.js, Express.js, MongoDB",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "HyperShip (BlockChain)",
    description:
      "Innovative platform empowering private supply & transport agencies to provide real-time and verifiable shipment location data through integrated smart contracts on ethereum, tackling inefficiencies and vulnerabilities in traditional logistics systems while enhancing accountability and security throughout the supply chain.",
    tags: [
      {
        name: "Ethereum",
        color: "orange-text-gradient",
      },
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Node",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "Jest",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "orange-text-gradient",
      },
    ],
    image: location,
  },
  {
    name: "MERN money engine",
    description:
      "Combining personal and business expense tracking capabilities, MERN money- Engine is a User friendly expense tracker Web App.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Mongoose",
        color: "green-text-gradient",
      },
      {
        name: "Pandas",
        color: "blue-text-gradient",
      },
    ],
    image: carrent1,
  },
  {
    name: "Crypto Sentinels (SIH 2023 Finalist)",
    description:
      "Crypto Sentinels is a toolkit for government agencies to help them monitor and deanonymize cryptocurrency wallets related to illegal activities on the dark web. Based on problem statement SIH1445, 2023: De-anonymisation for monitoring & tracking of illegal activities performed using cryptocurrency transaction technology",
    tags: [
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "electron",
        color: "blue-text-gradient",
      },
      {
        name: "SciKit Learn",
        color: "green-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
      {
        name: "Mongoose",
        color: "orange-text-gradient",
      },
      {
        name: "AWS EC2",
        color: "blue-text-gradient",
      },
    ],
    image: crypto,
  },
  {
    name: "Bert4Crypto",
    description:
      "A transformer model to identify fraudulent cryptocurrency transactions and wallets with help of Elliptic++ Dataset.",
    tags: [
      {
        name: "TensorFlow",
        color: "blue-text-gradient",
      },
      {
        name: "SciKit Learn",
        color: "green-text-gradient",
      },
      {
        name: "Pandas",
        color: "pink-text-gradient",
      },
      {
        name: "numPy",
        color: "pink-text-gradient",
      },
      {
        name: "Transformers",
        color: "orange-text-gradient",
      },
    ],
    // image: tripguide,
  },
];

export { services, technologies, experiences, testimonials, projects };
