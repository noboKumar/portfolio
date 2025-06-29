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
      features: [
        "Dynamic Home Banner: Event-themed slider using swiperJS to view events.",
        "Homepage highlights top 6 “Active” gardener profiles fetched dynamically from MongoD",
        "Explore Gardeners: Browse gardener profiles with detailed info like experience, status, and number of shared tip",
        "Browse Tips: Users can view all gardening advice and tips shared publicly with filtering based on difficulty level (Easy, Medium, Hard).",
        "Share a Garden Tip: Users can post their own tips and tricks (publicly/privately); all public tips will be visible in the browse route.",
        "Like & Trending System: Users can like gardening tips.",
        "Dark/Light Mode: Toggle between light and dark themes from the navbar.",
        " Authentication System: Users can sign in/sign up using Email/Password or Google. Includes password validation, show/hide password, and secure private routes.",
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
      features: [
        "Hero Banner with SwiperJS Slider",
        "Featured Rooms with rating, image, price, and quick booking",
        "Email & Password Authentication with Validation",
        "Secure private routes using JWT",
        "Browse all hotel rooms with filter by price range",
        "View and manage bookings in My Bookings page",
        "Review modal with rating (1-5), timestamp, and display on room details",
        "Sorted descending by latest",
        "Custom 404 with Lottie react and redirect button",
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
      features: [
        "Browse and discover local events.",
        "Upcoming Event discovery.",
        "View Event Details.",
        "User Can Reserve seat for any Event.",
        "User authentication and login system.",
        "Responsive design for mobile and desktop.",
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
      features: [
        " Browse doctors from live JSON data",
        "Book available doctors (prevents double-booking)",
        "Detailed doctor information view",
        " See all your bookings with visual charts",
        "Cancel your bookings anytime",
        "Clean, modern, and responsive UI",
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
