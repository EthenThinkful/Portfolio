import React from "react";
import reactSvg from "../../assets/assets/logos/react.svg";
import nodeSvg from "../../assets/assets/logos/nodejs.svg";
import javascriptSvg from "../../assets/assets/logos/javascript.svg";
import typescriptSvg from "../../assets/assets/logos/typescript.svg";
import nextjsSvg from "../../assets/assets/logos/nextjs.svg";
import postgresqlSvg from "../../assets/assets/logos/postgresql.svg";
import springSvg from "../../assets/assets/logos/spring.svg";
import javaSvg from "../../assets/assets/logos/java.svg";
import jestSvg from "../../assets/assets/logos/jest.svg";
import dockerSvg from "../../assets/assets/logos/docker.svg";
import awsSvg from "../../assets/assets/logos/aws.svg";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Ethen Roth
      </h1>
      <h3 className="home__subtitle">Full Stack Software Engineer</h3>
      <p className="home__description">
            Hi, I'm Ethen. A passionate full stack software engineer based in Denver, Colorado. 
            <div className="logo__container">
            <img src={reactSvg} alt="react logo" className="logo"/>
            <img src={nodeSvg} alt="react logo" className="logo"/>
            <img src={javascriptSvg} alt="react logo" className="logo"/>
            <img src={jestSvg} alt="react logo" className="logo"/>
            <img src={typescriptSvg} alt="react logo" className="logo"/>
            <img src={nextjsSvg} alt="react logo" className="logo"/>
            <img src={postgresqlSvg} alt="react logo" className="logo"/>
            <img src={springSvg} alt="react logo" className="logo"/>
            <img src={javaSvg} alt="react logo" className="logo"/>
            <img src={dockerSvg} alt="react logo" className="logo"/>
            <img src={awsSvg} alt="react logo" className="logo"/>
            </div>
      </p>
    </div>
  );
};

export default Data;
