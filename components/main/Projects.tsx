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
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="AI-Powered Application"
          description="Developed intelligent applications leveraging Python frameworks and machine learning algorithms to solve complex real-world problems with optimized performance."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Data Processing Pipeline"
          description="Built scalable data processing pipelines using Python, implementing efficient algorithms for data transformation, analysis, and automation of complex workflows."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Backend API Development"
          description="Designed and implemented robust RESTful APIs using Python frameworks, ensuring high performance, security, and scalability for enterprise applications."
        />
      </div>
    </div>
  );
};

export default Projects;
