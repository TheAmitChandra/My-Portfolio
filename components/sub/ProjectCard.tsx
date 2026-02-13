import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  liveLink?: string;
  githubLink?: string;
}

const ProjectCard = ({ src, title, description, liveLink, githubLink }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:border-purple-500 transition-all duration-300">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        
        {(liveLink || githubLink) && (
          <div className="flex gap-3 mt-4">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm rounded-lg hover:opacity-80 transition-opacity"
              >
                Live Demo
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-purple-500 text-purple-400 text-sm rounded-lg hover:bg-purple-500/20 transition-colors"
              >
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
