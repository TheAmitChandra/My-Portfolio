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
            a passionate <span className="text-cyan-400 font-semibold">AI/ML Engineer</span> specializing in 
            <span className="text-purple-400 font-semibold"> model building</span>, <span className="text-purple-400 font-semibold">RAG systems</span>, 
            and <span className="text-purple-400 font-semibold">intelligent automation pipelines</span>.
          </p>
          
          <p>
            I architect and deploy end-to-end AI solutions, from data engineering to production-ready AI agents and chatbot systems. 
            Currently working as an AI/ML Engineer at <span className="text-cyan-400 font-semibold">Vervebot INC</span>, 
            based in New Delhi, India.
          </p>
        </motion.div>

        {/* Core Expertise Section */}
        <motion.div
          variants={slideInFromRight(0.5)}
          className="flex flex-col gap-6 mt-6"
        >
          <h2 className="text-[28px] font-semibold text-white">
            Core Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-[#0300145e] border border-[#7042f861] rounded-lg p-6 hover:border-purple-500 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <h3 className="text-xl font-semibold text-white">AI/ML Engineering</h3>
              </div>
              <p className="text-gray-400">
                Model Building, Training, Fine-tuning, and Deployment. Creating production-ready machine learning solutions 
                with optimized performance and scalability.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0300145e] border border-[#7042f861] rounded-lg p-6 hover:border-purple-500 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <h3 className="text-xl font-semibold text-white">RAG Systems</h3>
              </div>
              <p className="text-gray-400">
                Retrieval-Augmented Generation for intelligent document processing. Building context-aware AI systems 
                with vector databases and semantic search.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0300145e] border border-[#7042f861] rounded-lg p-6 hover:border-purple-500 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <h3 className="text-xl font-semibold text-white">LLM Integration</h3>
              </div>
              <p className="text-gray-400">
                Expert integration with OpenAI GPT, Claude, Llama, and Gemini. Building AI Agents with tool use 
                and multi-step reasoning capabilities.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#0300145e] border border-[#7042f861] rounded-lg p-6 hover:border-purple-500 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <h3 className="text-xl font-semibold text-white">Conversational AI</h3>
              </div>
              <p className="text-gray-400">
                Chatbots, Support Systems, and WhatsApp Integration. Building intelligent conversational interfaces 
                for enterprise solutions.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-[#0300145e] border border-[#7042f861] rounded-lg p-6 hover:border-purple-500 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <h3 className="text-xl font-semibold text-white">MLOps & Pipelines</h3>
              </div>
              <p className="text-gray-400">
                End-to-end ML pipeline development and automation. Implementing CI/CD for machine learning with 
                monitoring and model versioning.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-[#0300145e] border border-[#7042f861] rounded-lg p-6 hover:border-purple-500 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <h3 className="text-xl font-semibold text-white">Full-Stack Development</h3>
              </div>
              <p className="text-gray-400">
                From frontend (Next.js/React) to backend (Django/FastAPI) to cloud deployment (AWS). 
                Strong hands-on experience with Odoo ERP, Flask, and modern web technologies.
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
            I believe in building intelligent systems that seamlessly integrate with business processes. 
            My approach combines cutting-edge AI capabilities with practical engineering principles, 
            creating solutions that are not only innovative but also reliable and scalable. 
            I&apos;m proficient in AWS Cloud Services (EC2, S3, Lambda, SageMaker, RDS, DynamoDB) and DevOps practices, 
            ensuring smooth deployment and maintenance of AI systems. I hold a B.Tech degree in Computer Science & Engineering from AKTU.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
