import BallCanvas from "./canvas/Ball";
import { motion } from "framer-motion";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 320">
          <path
            fill="#60a5fa"
            fillOpacity="0.3"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 tracking-tight mb-12"
        >
          Tech Stacks
        </motion.h2>

        {/* Technology Balls */}
        <div className="flex flex-row flex-wrap justify-center gap-12">
          {technologies.map((technology) => (
            <motion.div
              key={technology.name}
              className="w-28 h-28 relative group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <BallCanvas icon={technology.icon} />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 text-gray-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {technology.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
