import React from "react";
import "./about.css";
import CV from "../../assets/assets/Ethen_Roth_Resume.pdf";
import aboutImg from "../../assets/assets/aboutMe.png";

const About = () => {
  return (
    <section className="section container" id="about">
      <div className="about__container">
      <img src={aboutImg} alt="" className="about__img" />
      </div>
      <div className="about__container about__grid">
        <h2 className="section__title">About Me</h2>
        <div className="about__data">
          <p className="about__description">
            I am passionate about advancing my skills in the industry through
            hands-on experience. I learned how to code in a tech boot camp where
            the main stack was React, Node, Express, and PostgreSQL. However, I
            have not limited myself since graduating and have been adamant with
            my independent studies and project work. I prefer to work
            collaboratively on projects, where the team can learn from each
            other and enjoy the process of learning by applying. In every new
            project I develop I try to include something I haven’t learned yet.
            I’m a firm believer in this approach for anything in life.
          </p>
          <a
            download=""
            href={CV}
            className="button button--flex about__button"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
