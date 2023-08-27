import React from "react";
import "./work.css";
import Works from "./Works";

const Work = () => {
    return (
        <section className="work__section section" id='portfolio'>
            <div className="container">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">
            </span>
            <Works />
            </div>
        </section>
    )
}

export default Work;