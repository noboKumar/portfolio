import React from "react";
import profileImg from "../../assets/profile-photo-B&W.jpg";
import Container from "../UI/Container";
import BlurText from "../UI/BlurText";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Hero = () => {
  return (
    <Container className="flex flex-col-reverse items-center justify-around gap-10 lg:flex-row lg:gap-0">
      <div className="space-y-4 text-center lg:text-left">
        <div>
          <p className="text-lg">Hi, i am</p>
          <BlurText
            text="Nobo Kumar"
            delay={150}
            animateBy="words"
            direction="bottom"
            className="heading-font text-6xl font-bold md:text-8xl"
          />
        </div>
        <p className="text-2xl">
          <Typewriter
            words={["Full-Stack Web Developer"]}
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
        <p className="text-xl lg:w-[900px]">
          I specialize in creating performant, responsive, and maintainable web applications using React, TailwindCSS, Express.js, MongoDB. Let's discuss your next project.
        </p>
        <div className="flex items-center gap-10 py-4 text-4xl [&>*]:cursor-pointer">
          <a
            href="https://github.com/noboKumar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nobo-kumar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/noboKumar227"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX />
          </a>
        </div>
        <button className="btn btn-primary">Download Resume</button>
      </div>
      <div className="avatar">
        <div className="w-[400px] rounded-full object-cover lg:w-[600px]">
          <img src={profileImg} />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
