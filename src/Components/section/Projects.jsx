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
    {
      title: "TraVoa - Hotel Booking Platform",
      photo: "https://i.ibb.co/Gvnh3Cyk/Travoa-Page-1.png",
      description:
        "TraVoa is a modern, full-featured Hotel Booking Platform built using the MERN stack with secure authentication and dynamic features. It offers users a seamless experience for discovering and booking hotel rooms, submitting reviews, and managing their bookings. The platform is mobile-responsive, secure, and designed to be both functional and visually appealing for users and recruiters.",
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
          live: "https://travoa.netlify.app/",
          githubRepo:
            "https://github.com/noboKumar/TraVoa-hotel-Booking-Platform-Client",
        },
      ],
    },
    {
      title: "Event Voyage - A Local Event Discovery PlatForm",
      photo: "https://i.ibb.co/S4RnwRNN/event-Voyage-page.png",
      description:
        "Event Explorer is a web application designed to help users discover, explore, and get detailed information about upcoming local events like conferences, workshops, sports events, art exhibitions, and more. Users can log in, browse events, view detailed info and reserve Seat.",
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
      ],

      links: [
        {
          live: "https://event-voyage.netlify.app/",
          githubRepo: "https://github.com/noboKumar/Event-Voyage",
        },
      ],
    },
    {
      title: "Doc Talk",
      photo: "https://i.ibb.co/4wdr21Hf/doc-Talk-page.png",
      description:
        "Doc Talk is designed to simplify the process of finding doctors, viewing their details, and booking appointments—all powered by dynamic JSON data. Users can view a list of available doctors, check details for each doctor, and book appointments if slots are available. The app prevents double-booking, allows users to view their bookings with insightful charts, and provides the ability to cancel bookings easily.",
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
      ],

      links: [
        {
          live: "https://doc-talk-nk.netlify.app/",
          githubRepo: "https://github.com/noboKumar/Doc-Talk",
        },
      ],
    },
  ];
  return (
    <Container id={"projects"} className="my-20">
      <Heading text={"Projects"}></Heading>
      <ProjectCard projectData={projectData}></ProjectCard>
    </Container>
  );
};

export default Projects;
