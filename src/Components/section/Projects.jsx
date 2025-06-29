import React from "react";
import Container from "../UI/Container";
import Heading from "../UI/Heading";
import ProjectCard from "../UI/ProjectCard";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui, SiFirebase, SiMongodb, SiExpress } from "react-icons/si";
import { SiReactrouter } from "react-icons/si"; // Use this for React Router

const Projects = () => {
  const projectData = [
    {
      title: "Garden Nest",
      photo: "https://i.ibb.co/WWLCZFtc/garden-nest.png",
      description:
        "Garden Nest is a social platform for garden enthusiasts made with React JS, to connect all gardeners. This is a resource for plant lovers, hobbyist gardeners, and experts too. Here, gardeners can share garden tips and tricks and discover local garden events. This project is fully responsive, so users across all platforms can use it seamlessly.",
      techStack: [
        { name: "React", icon: <FaReact className="text-[#61DBFB]" /> },
        {
          name: "TailwindCSS",
          icon: <RiTailwindCssFill className="text-[#38BDF8]" />,
        },
        { name: "DaisyUI", icon: <SiDaisyui className="text-[#f9b779]" /> },
        {
          name: "React Router",
          icon: <SiReactrouter className="text-red-600" />,
        },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-white" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      ],

      links: [
        {
          live: "https://garden-nest.netlify.app/",
          githubRepo: "https://github.com/noboKumar/Garden-Nest-Client",
        },
      ],
    },
  ];
  return (
    <Container className="my-20">
      <Heading text={"Projects"}></Heading>
      <ProjectCard projectData={projectData}></ProjectCard>
    </Container>
  );
};

export default Projects;
