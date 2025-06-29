import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const contactDetails = [
  {
    icon: <FaEnvelope className="text-primary text-xl" />,
    info: "nobokumar227@gmail.com",
    href: "mailto:nobokumar227@gmail.com",
  },
  {
    icon: <FaPhoneAlt className="text-primary text-xl" />,
    info: "+880 1404647970",
    href: "tel:+8801404647970",
  },
  {
    icon: <FaMapMarkerAlt className="text-primary text-xl" />,
    info: "Khulna, Bangladesh",
    href: "https://www.google.com/maps/place/Khulna,+Bangladesh",
  },
  {
    icon: <FaLinkedin className="text-primary text-xl" />,
    info: "linkedin.com",
    href: "https://www.linkedin.com/in/nobo-kumar/",
  },
  {
    icon: <FaWhatsapp className="text-primary text-xl" />,
    info: "+880 1404647970",
    href: "https://wa.me/8801404647970",
  },
];

const ContactInfo = () => {
  return (
    <div className="mx-auto grid max-w-md gap-4">
      {contactDetails.map((contact, idx) => (
        <a
          key={idx}
          href={contact.href}
          target={contact.href.startsWith("http") ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="bg-base-200 hover:bg-base-300 flex items-center gap-4 rounded-xl p-4 shadow-md transition-colors"
        >
          <div className="bg-primary/10 rounded-full p-2">{contact.icon}</div>
          <div className="text-base font-semibold text-current">
            {contact.info}
          </div>
        </a>
      ))}
    </div>
  );
};

export default ContactInfo;
