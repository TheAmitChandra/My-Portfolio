import React from "react";
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaDev, FaHackerrank, FaCode } from "react-icons/fa";
import { SiLeetcode, SiReplit } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Connect</div>
                    <a href="https://github.com/TheAmitChandra" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">GitHub</span>    
                    </a>
                    <a href="https://www.linkedin.com/in/connect-amit-chandra/" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                        <RxLinkedinLogo />
                        <span className="text-[15px] ml-[6px]">LinkedIn</span>    
                    </a>
                    <a href="https://dev.to/amitchandra/" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                        <FaDev />
                        <span className="text-[15px] ml-[6px]">Dev.to</span>    
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Coding Profiles</div>
                    <a href="https://www.hackerrank.com/profile/amitchandra/" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                        <FaHackerrank />
                        <span className="text-[15px] ml-[6px]">HackerRank</span>    
                    </a>
                    <a href="https://leetcode.com/Amit-Chandra/" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                        <SiLeetcode />
                        <span className="text-[15px] ml-[6px]">LeetCode</span>    
                    </a>
                    <a href="https://replit.com/@Amit-Chandra" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                        <SiReplit />
                        <span className="text-[15px] ml-[6px]">Replit</span>    
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Contact</div>
                   <a href="mailto:ask.amitchandra@gmail.com" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                        <MdEmail />
                        <span className="text-[15px] ml-[6px]">ask.amitchandra@gmail.com</span>    
                    </a>
                    <a href="#about" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                      
                        <span className="text-[15px] ml-[6px]">Learn about me</span>    
                    </a>
                    <p className="flex flex-row items-center my-[15px]">
                  
                        <span className="text-[15px] ml-[6px]">New Delhi, India</span>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Amit Chandra 2026. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer