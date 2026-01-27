"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center py-20 px-10 relative z-[20]"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-[1200px] flex flex-col gap-8"
      >
        {/* Section Title */}
        <motion.h1
          variants={slideInFromLeft(0.3)}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          About Me
        </motion.h1>

        {/* Introduction */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 text-gray-300 text-lg leading-relaxed"
        >
          <p>
            I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold">Amit Chandra</span>, 
            a passionate <span className="text-cyan-400 font-semibold">AI Engineer</span> and Python Developer specializing in building intelligent systems 
            and solving complex problems through innovative technological solutions.
          </p>
          
          <p>
            My expertise lies in developing AI-powered applications, implementing machine learning algorithms, 
            and creating scalable backend systems. I have a strong commitment to code quality, optimization, 
            and craftsmanship in software development.
          </p>
        </motion.div>

        {/* What I Do Section */}
        <motion.div
          variants={slideInFromRight(0.5)}
          className="flex flex-col gap-6 mt-6"
        >
          <h2 className="text-[28px] font-semibold text-white">
            What I Do
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-[#0300145e] border border-[#7042f861] rounded-lg p-6 hover:border-purple-500 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <h3 className="text-xl font-semibold text-white">AI & Machine Learning</h3>
              </div>
              <p className="text-gray-400">
                Developing intelligent applications using cutting-edge machine learning algorithms, 
                natural language processing, and computer vision techniques to solve real-world challenges.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0300145e] border border-[#7042f861] rounded-lg p-6 hover:border-purple-500 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <h3 className="text-xl font-semibold text-white">Backend Development</h3>
              </div>
              <p className="text-gray-400">
                Building robust RESTful APIs and scalable backend systems using Python frameworks, 
                ensuring high performance, security, and maintainability.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0300145e] border border-[#7042f861] rounded-lg p-6 hover:border-purple-500 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <h3 className="text-xl font-semibold text-white">Data Processing</h3>
              </div>
              <p className="text-gray-400">
                Designing and implementing efficient data processing pipelines for analysis, transformation, 
                and automation of complex workflows at scale.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#0300145e] border border-[#7042f861] rounded-lg p-6 hover:border-purple-500 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <h3 className="text-xl font-semibold text-white">Code Optimization</h3>
              </div>
              <p className="text-gray-400">
                Passionate about writing clean, efficient, and optimized code with a focus on performance, 
                scalability, and maintainability for production-grade applications.
              </p>
            </div>
          </div>
        </motion.div>

        {/* My Approach */}
        <motion.div
          variants={slideInFromLeft(0.7)}
          className="flex flex-col gap-4 mt-6"
        >
          <h2 className="text-[28px] font-semibold text-white">
            My Approach
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I believe in continuous learning and staying updated with the latest technologies in AI and software development. 
            My approach combines deep technical knowledge with practical problem-solving skills, always striving for 
            elegant solutions that balance innovation with reliability. I&apos;m committed to writing code that not only 
            works but excels in performance and maintainability.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
