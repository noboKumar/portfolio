import React from "react";
import Heading from "../UI/Heading";
import Container from "../UI/Container";
import DecryptedText from "../UI/DecryptedText";

const About = () => {
  return (
    <Container className="mt-20 space-y-5">
      <Heading text={"About Me"}></Heading>
      <div className="mx-auto w-11/12 text-center text-xl leading-8">
        <DecryptedText
          text="I'm a passionate full-stack web developer from Bangladesh, blending creative design with robust functionality. With hands-on experience in React, Tailwind CSS, Node.js, Express.js, and MongoDB, I specialize in building visually compelling and high-performing web applications.I'm currently pursuing a BBA in Accounting at National University. My fascination with programming and technology has driven me to carve a path in the tech industry.My journey began with FreeCodeCamp and The Odin Project, and I'm currently advancing my skills through Programming Hero, with plans to explore CS50x soon. Beyond development, I'm deeply enthusiastic about tech hardware, love optimizing performance, and bring the same discipline from the gym into my code—consistent, focused, and always pushing limits.
          Let's build something extraordinary."
          className="mx-auto w-10/12 text-center"
          animateOn="view"
          revealDirection="center"
          speed={50}
        />
      </div>
    </Container>
  );
};

export default About;
