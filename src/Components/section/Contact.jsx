import React from "react";
import Container from "../UI/Container";
import Heading from "../UI/Heading";
import ContactInfo from "../UI/ContactInfo";

const Contact = () => {
  return (
    <Container className="my-20">
      <Heading text={"Contact"}></Heading>
      <div className="py-10">
        <ContactInfo></ContactInfo>
      </div>
    </Container>
  );
};

export default Contact;
