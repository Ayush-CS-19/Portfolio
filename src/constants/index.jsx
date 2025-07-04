import web from "../assets/web.png";
import backend from "../assets/backend.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactjs from "../assets/reactjs.png";
import redux from "../assets/redux.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import git from "../assets/git.png";
import jobPortal from "../assets/JobPortal.png";
import PBDDS from "../assets/PBDDS.png";
import HungerZap from "../assets/HungerZap.png";
import docker from "../assets/docker.png";
export const service = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: web,
  },
];
export const technologies = [
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
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];
export const projects = [
  {
    name: "Job Portal",
    description:
      "A full-featured job portal where employers can post job listings and candidates can search and apply for jobs. Includes authentication, role-based access, and real-time notifications using MERN stack.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobPortal,
    source_code_link: "https://github.com/Ayush-CS-19/Job-Portal",
    live_link: "https://job-portal-three-ashen.vercel.app/",
  },
  {
    name: "Plant Disease Detection System",
    description:
      "A machine learning-based web application that identifies plant diseases from leaf images using a trained Convolutional Neural Network (CNN). Built with TensorFlow and a user-friendly interface, the system helps farmers and researchers detect diseases early and take preventive measures effectively.",
    tags: [
      {
        name: "TensorFlow",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Jupyter Notebook",
        color: "pink-text-gradient",
      },
    ],
    image: PBDDS,
    source_code_link:
      "https://github.com/Ayush-CS-19/Plant-Disease-Detection-System-Using-Python-Lib",
  },
  {
    name: "HungerZap",
    description:
      "HungerZap is a fast and user-friendly food ordering web app that connects hungry users with nearby restaurants in seconds. With real-time menus, quick checkout, and live order tracking, HungerZap zaps your hunger—fast, easy, and delicious!",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: HungerZap,
    source_code_link: "https://github.com/Ayush-CS-19/HungerZap",
    live_link: "https://hunger-zap.vercel.app/",
  },
];
