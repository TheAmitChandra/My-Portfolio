import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      {/* AI & Machine Learning Solutions */}
      <h2 className="text-[28px] font-semibold text-white mb-8">
        🤖 AI & Machine Learning Solutions
      </h2>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 mb-16">
        <ProjectCard
          src="/NextWebsite.png"
          title="Relay AI"
          description="An intelligent AI agent system that connects with your database for automated assistance. Features direct database integration, smart support agent mechanism with human handoff, and WhatsApp-like communication interface."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Tripmind"
          description="Complete travel management software integrated with AI agents. AI-powered travel recommendations, intelligent itinerary planning, real-time availability and pricing insights with conversational AI interface."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="AI-Powered Crop Recommendation"
          description="Helping farmers make data-driven decisions for optimal crop selection. ML model trained on agricultural data analyzing land characteristics, soil type, climate, and regional factors."
        />
        <ProjectCard
          src="/NextWebsite.png"
          title="Content Recommendation System"
          description="Advanced recommendation engine using collaborative filtering and deep learning. Personalized content delivery based on user behavior with real-time recommendations and low latency."
          liveLink="https://content-recommendation-system.onrender.com/"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Bank Customer Churn Prediction"
          description="Predictive ML model to identify customers at risk of churning. Feature engineering and model optimization for high accuracy with dashboard for visualization and actionable insights."
          githubLink="https://github.com/TheAmitChandra/Bank-Customer-Churn-Prediction"
        />
      </div>

      {/* Enterprise & Business Solutions */}
      <h2 className="text-[28px] font-semibold text-white mb-8">
        💼 Enterprise & Business Solutions
      </h2>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 mb-16">
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Warehouse Management System"
          description="Comprehensive inventory and operations management platform. Complete inventory tracking, vendor management, purchase order automation, real-time stock monitoring and multi-location warehouse support."
        />
        <ProjectCard
          src="/NextWebsite.png"
          title="Social Media Dashboard"
          description="Unified platform to manage all social media channels in one place. Schedule posts, track analytics, monitor engagement with multi-account support and real-time performance metrics."
          githubLink="https://github.com/TheAmitChandra/Social-Media-Dashboard"
        />
      </div>

      {/* Web Applications & Tools */}
      <h2 className="text-[28px] font-semibold text-white mb-8">
        🎯 Web Applications & Tools
      </h2>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        <ProjectCard
          src="/CardImage.png"
          title="Sudoku Solver"
          description="AI-powered Sudoku puzzle solver using backtracking algorithm. Interactive web interface for puzzle input with instant solution generation and step-by-step visualization."
          liveLink="https://sudoku-solver-fv8o.onrender.com/"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Snake Game"
          description="Classic snake game with modern UI. Built with smooth controls and engaging gameplay mechanics."
          githubLink="https://github.com/TheAmitChandra/Snake-Game"
        />
        <ProjectCard
          src="/NextWebsite.png"
          title="Brick Breaker"
          description="Arcade-style brick breaker game with multiple levels and power-ups. Fun and challenging gameplay experience."
          githubLink="https://github.com/TheAmitChandra/Brick-Breaker"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Pong Game"
          description="Retro pong game implementation with classic gameplay. Single and multiplayer modes available."
          githubLink="https://github.com/TheAmitChandra/Pong-Game"
        />
      </div>
    </div>
  );
};

export default Projects;
