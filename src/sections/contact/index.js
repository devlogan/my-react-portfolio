import React from "react";
import style from "./index.module.css";
import { contacts } from "./constants";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get in Touch</h2>
      <p>Drop a message using one of these platforms</p>
      <div className={`container ${style.contact__container}`}>
        {contacts.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
