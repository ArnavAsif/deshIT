"use client";

import { projectsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

// Parent animation for the heading (staggered letters)
const headingContainer = {
  hidden: { opacity: 1 },
  visible: {
    transition: {
      staggerChildren: 0.05, // Delay between letters
    },
  },
};

// Individual letter animation
const letterVariant = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Card animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 150 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 12,
    },
  },
};

// Helper to split text into animated letters
const AnimatedHeading = ({ text }) => (
  <motion.h1
    className="text-[30px] md:text-[40px] font-bold mb-[13px] flex justify-center leading-11"
    variants={headingContainer}
    initial="hidden"
    animate="visible"
  >
    {text.split("").map((char, index) => (
      <motion.span
        key={index}
        variants={letterVariant}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </motion.h1>
);

const Projects = () => {
  return (
    <div>
      {/* Header section */}
      <div className="bg-[#FDF8F8] pt-[100px] pb-[60px] md:pt-[158px] md:pb-[113px] text-center">
        <AnimatedHeading text="Our Projects" />
        <p className="text-[15px]">
          Home <span className="text-[#646464]">{">"} Our Projects</span>
        </p>
      </div>

      {/* Projects grid */}
      <motion.div
        className="flex flex-col md:flex-row flex-wrap gap-[30px] justify-center items-center mx-auto px-4 md:px-0 mt-10 md:mt-[83px] max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projectsData.map((product, index) => (
          <motion.div key={index} className="group" variants={cardVariants}>
            <div className="aspect-square flex flex-col justify-center items-center mb-[30px]">
              <Image
                src={product.img}
                alt={product.title}
                width={364}
                height={273}
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <p className="relative mt-[-20px] w-[250px] md:w-[344px] mx-auto text-center py-6 rounded-[15px] bg-white shadow-[0_3px_4px_rgba(0,0,0,0.25)] overflow-hidden font-semibold leading-6">
                <span className="relative inline-block">
                  {product.title}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-600 group-hover:w-full"></span>
                </span>
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
