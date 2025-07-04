import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { service } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      scale={1.02}
      transitionSpeed={450}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.3, 0.75)}
        className="group relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl p-6 min-h-[260px] flex flex-col justify-center items-center border border-white/10">
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain mb-4 transition-transform duration-300 group-hover:scale-110"
          />
          <h3 className="text-white text-xl font-semibold text-center tracking-tight">
            {title}
          </h3>
        </div>
        <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-blue-400/30 transition-all duration-300"></div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div variants={textVariant()} className="text-center">
          <p className="text-lg text-blue-400 font-semibold tracking-wide uppercase">
            Introduction
          </p>
          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Overview
          </h2>
        </motion.div>

        {/* Introduction Paragraph */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-6 text-gray-200 text-lg max-w-3xl mx-auto leading-relaxed font-light"
        >
          I'm a passionate software engineer dedicated to crafting innovative
          solutions that blend creativity and technology. With a strong
          foundation in modern development practices, I thrive on transforming
          ideas into impactful, user-centric applications. My journey is driven
          by a love for problem-solving and a commitment to pushing the
          boundaries of what's possible.
        </motion.p>

        {/* Service Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {service.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
