import React from "react";
import { projects } from "../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import github from "../assets/github.png";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div variants={textVariant()} className="text-center">
          <p className="text-lg text-blue-400 font-semibold tracking-wide uppercase">
            My Work
          </p>
          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Projects
          </h2>
        </motion.div>

        {/* Description */}
        <div className="w-full flex justify-center mt-6">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-gray-300 text-lg max-w-2xl leading-relaxed font-light"
          >
            Here are some of my projects that showcase my skills and expertise.
          </motion.p>
        </div>

        {/* Project Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Tilt
              key={project.name}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              transitionSpeed={450}
              className="w-full"
            >
              <motion.div
                variants={fadeIn("right", "spring", index * 0.3, 0.75)}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-white text-xl font-semibold text-center mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm text-center line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* GitHub and Live Link Buttons */}
                <div className="flex justify-center gap-4 pb-6">
                  {project.source_code_link && (
                    <a
                      href={project.source_code_link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.name} source code on GitHub`}
                      className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-blue-600 transition-all duration-200 opacity-80 hover:opacity-100 cursor-pointer"
                    >
                      <img src={github} alt="GitHub icon" className="w-7 h-7" />
                    </a>
                  )}

                  {project.live_link && (
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noreferrer"
                      className="relative z-10 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full transition duration-200"
                    >
                      Live Demo
                    </a>
                  )}
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-blue-500/30 transition-all duration-300"></div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
