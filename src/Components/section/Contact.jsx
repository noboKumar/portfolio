import React from "react";
import Container from "../UI/Container";
import Heading from "../UI/Heading";
import ContactInfo from "../UI/ContactInfo";
import SendEmail from "../UI/SendEmail";

const Contact = () => {
  return (
    <Container className="my-20">
      <Heading text={"Contact"}></Heading>
      <div className="py-10 mt-5 flex items-start gap-10 bg-base-300 rounded-4xl">
        <ContactInfo></ContactInfo>
        <SendEmail></SendEmail>
      </div>
    </Container>
  );
};

export default Contact;
