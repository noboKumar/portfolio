import React from "react";
import SpotlightCard from "./SpotlightCard";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";


const ProjectCard = ({ projectData }) => {
  return (
    <div className="grid grid-cols-1 gap-10 py-8">
      {projectData.map((project, idx) => (
        <SpotlightCard
          key={idx}
          spotlightSize={50}
          spotlightColor={"rgba(255, 255, 255, 0.08)"}
          className="mx-auto flex max-w-7xl items-center gap-5 rounded-2xl shadow-xl"
        >
          {/* img section */}
          <div className="max-h-[400px] flex-1 overflow-y-auto p-5">
            <img
              src={project.photo}
              alt={project.title}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          {/* text section */}
          <div className="flex-1 space-y-5">
            <h3 className="text-4xl font-semibold">{project.title}</h3>
            <p className="text-lg">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <p
                  key={idx}
                  className="badge bg-base-300 inline-flex items-center gap-1"
                >
                  <span>{tech.icon}</span>
                  <span>{tech.name}</span>
                </p>
              ))}
            </div>
            <div>
              {project.links.map((link, idx) => (
                <div key={idx} className="flex flex-wrap gap-2">
                  <a className="btn btn-primary" href={link.live}>
                   <IoIosLink /> Live Link
                  </a>
                  <a className="btn btn-primary" href={link.githubRepo}>
                    <FaGithub size={20} /> GitHub
                  </a>
                </div>
              ))}
            </div>
          </div>
        </SpotlightCard>
      ))}
    </div>
  );
};
export default ProjectCard;
