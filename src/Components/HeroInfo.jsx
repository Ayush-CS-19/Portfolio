import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 rounded-xl shadow-md">
      Hi, 👋 I am <span className="font-bold">Ayush Kaushik</span>
      <br /> A Web Developer from India
    </h1>
  ),
  2: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 rounded-xl shadow-md">
      I specialize in building full-stack web apps <br />
      using the <span className="font-bold">MERN Stack</span> (MongoDB, Express,
      React, Node.js).
    </h1>
  ),
  3: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 rounded-xl shadow-md">
      Passionate about <span className="font-bold">problem-solving</span> and
      <br /> always curious to learn new technologies.
    </h1>
  ),
  4: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 rounded-xl shadow-md">
      I love building things that make life easier 💡 <br />
      and creating digital experiences that delight users.
    </h1>
  ),
};
const HeroInfo = ({ currStage }) => {
  return renderContent[currStage] || null;
};
export default HeroInfo;
