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
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:border-purple-500 transition-all duration-300 hover:scale-105">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain h-[180px]"
      />

      <div className="relative p-3">
        <h1 className="text-lg font-semibold text-white line-clamp-1">{title}</h1>
        <p className="mt-1 text-gray-300 text-sm line-clamp-3">{description}</p>
        
        {(liveLink || githubLink) && (
          <div className="flex gap-2 mt-3">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs rounded-md hover:opacity-80 transition-opacity"
              >
                Live Demo
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 border border-purple-500 text-purple-400 text-xs rounded-md hover:bg-purple-500/20 transition-colors"
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
