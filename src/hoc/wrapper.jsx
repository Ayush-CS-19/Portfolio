import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles.jsx";
import { staggerContainer } from "../utils/motion";
export const wrapper = (Component, idName) => {
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        style={{ backgroundColor: "#1a1a2e" }} // Set your desired background color here
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  }
  return HOC;
};
