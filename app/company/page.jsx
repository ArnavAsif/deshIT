"use client";

import React from "react";
import Lottie from "lottie-react";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

const headingContainer = {
  hidden: { opacity: 1 },
  visible: {
    transition: {
      staggerChildren: 0.05, // Delay between letters
    },
  },
};
const letterVariant = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};
const AnimatedHeading = ({ text }) => (
  <motion.h1
    className="text-[30px] md:text-[40px] font-bold mb-[13px] flex justify-center leading-11 text-[#020F40]"
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
const MissionHeading = ({ text }) => (
  <motion.h1
    className="sm:text-[50px] lg:text-[70px] font-bold mb-[13px] flex justify-center leading-11 text-[#020F40]"
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
const WorkHeading = ({ text }) => (
  <motion.h1
    className="text-[40px] lg:text-6xl font-bold mb-[13px] flex justify-center leading-[72px]"
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

// for side up
const textVariants = {
  hidden: { opacity: 0, x: -150 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const lottieVariants = {
  hidden: { opacity: 0, x: 150 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const AnimatedHeader = ({ text }) => (
  <motion.h1
    className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0C1E3A] mb-6 leading-[72px] "
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
const Company = () => {
  return (
    <div>
      <div className="bg-[#FDF8F8] pt-[100px] pb-[60px] md:pt-[158px] md:pb-[113px] text-center">
        <AnimatedHeading text="Company" />
        <p className="text-[15px]">
          Home <span className="text-[#646464]">{">"} Company</span>
        </p>
      </div>
      <section className="mt-14 max-w-7xl mx-auto px-4 md:w-10/12">
        <div className="mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-center">
            {/* Left Side: Heading, Subheading, Text */}
            <motion.div
              className=""
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <AnimatedHeader text="DeshITBD" />

              <h2 className="text-[#FA8370] text-xl md:text-2xl font-semibold tracking-widest uppercase mb-10">
                Simplifying Complexity Through Technology
              </h2>

              <p className="text-base md:text-lg leading-relaxed text-[#717171] text-justify max-w-4xl">
                We, DeshITbd, are a mobile application development startup in
                Bangladesh. We develop apps from sketches to fully workable
                products, bringing them to marketplaces like Google Play. Our
                full-stack team includes system analysts, programmers, testers,
                deployment specialists, and database engineers. Having launched
                several successful apps, we also offer software products that
                our clients use with satisfaction. Explore our products and
                projects here.
              </p>
            </motion.div>

            {/* Right Side: Lottie Animation */}
            <motion.div
              className="w-full max-w-[500px] mx-auto lg:mx-0 scale-110 lg:mt-5"
              variants={lottieVariants}
              initial="hidden"
              animate="visible"
            >
              <Lottie animationData={assets.meetingAnimation} loop={true} />
            </motion.div>
          </div>
        </div>
        <div>
          <MissionHeading text="Mission" />
          <div className="flex items-center flex-col lg:flex-row">
            <motion.div
              className=""
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="text-base md:text-lg leading-relaxed text-[#717171] text-justify max-w-4xl">
                Our mission is to transform ideas into digital products and
                enable organizations to leverage technology for betterment. Our
                priority is to deliver impactful digital solutions with superior
                user experience. We build such a solution that can accelerate
                the growth of your business.
              </p>
            </motion.div>

            <motion.div
              className="w-full max-w-[300px] mx-auto lg:mx-0"
              variants={lottieVariants}
              initial="hidden"
              animate="visible"
            >
              <Lottie animationData={assets.target} loop={true} />
            </motion.div>
          </div>
        </div>
      </section>
      {/* how we work */}
      <div className="bg-gradient-to-r from-[#FA7470] to-[#FA9370]">
        <div className="max-w-7xl px-4 md:w-10/12 mx-auto text-white py-[60px] flex flex-col justify-center items-center">
          <WorkHeading text="How We Work" />
          <p className="text-base md:text-lg leading-[35px] text-center lg:text-justify my-8">
            We believe in agile development. We manage our projects by following
            Scrum, the most popular widely practiced agile approach. Delivering
            working applications on budget, and on time is always our concern
            and Scrum enables us to manage our projects in such a way. Scope of
            flexibility and collaboration enable us to manage the resources
            effectively and deliver the quality product.
          </p>
          <div className="flex justify-center items-center">
            <button className="py-[9px] px-[42px] rounded-[60px] border-2 border-transparent bg-white text-[#FA7470] cursor-pointer hover:border-2 font-medium hover:border-white hover:bg-transparent hover:text-white transition-all duration-500">
              Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
