import React from "react";
import style from "./index.module.css";
import resume from "../../assets/resume.pdf";
import Card from "../../components/Card";
import longPotrait from "../../assets/long_potrait.jpg";

const keyPoints = [
  { id: 1, title: "Experience", desc: "4.5+ years Working" },
  { id: 2, title: "Projects", desc: "180+ Completed" },
  { id: 3, title: "Clients", desc: "70+ happy clients" },
];

const About = () => {
  return (
    <section id="about">
      <div className={`container ${style.about__container}`}>
        <div className={style.about__left}>
          <div className={style.about__portrait}>
            <img src={longPotrait} alt="Portfolio" />
          </div>
        </div>
        <div className={style.about__right}>
          <h2>About me</h2>
          <div className={style.about__cards}>
            {keyPoints.map((item) => (
              <Card key={item.id}>
                <span className={style.about__card_icon}></span>
                <h4>{item.title}</h4>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            With 4.5 years of dedicated experience as a senior frontend
            developer, you have carved a niche for yourself in the tech
            industry. Throughout your career, you have demonstrated a robust
            understanding of frontend technologies, effectively translating
            complex designs into user-friendly interfaces
          </p>
          <p>
            Your expertise in a wide range of frontend technologies, including
            the most advanced frameworks and libraries, has enabled you to push
            the boundaries of what's possible on the web, creating engaging and
            interactive user experiences. Your journey reflects a blend of
            technical proficiency, creative problem-solving, and a passion for
            developing cutting-edge web applications
          </p>
          <a
            href={resume}
            download
            className={`btn primary ${style.about__right_btn}`}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
