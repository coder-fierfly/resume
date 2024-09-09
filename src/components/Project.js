import React from "react";
import "../style/ProjectStyle.css";
import littleGit from "../svg/little-git.svg";
import group_x2 from "../svg/group_x2.svg"
import rec1 from "../images/rectangle_4.jpg"
import rec2 from "../images/rectangle_6.jpg"
import rec3 from "../images/rectangle_8.jpg"
import rec4 from "../images/rectangle_12.jpg"
import rec5 from "../images/rectangle_13.jpg"
import rec6 from "../images/rectangle_14.jpg"

function Project() {

    const projectsLogo = [
        {src: rec1, alt: "rec1"},
        {src: rec2, alt: "rec2"},
        {src: rec3, alt: "rec3"},
        {src: rec4, alt: "rec4"},
        {src: rec5, alt: "rec5"},
        {src: rec6, alt: "rec6"}
    ];
    return (
        <div className="projects-cont">
            <div className="projects-grid">
                {projectsLogo.map((logo, index) => (
                    <div className="project-wrap" key={index}>
                        <div className="pic-wrap">
                            <img className="pic" src={logo.src} alt={logo.alt}></img>
                        </div>
                        <div className="text-wrap">
                            <div className="project-tile">
                                Project Tile goes here
                            </div>
                            <div
                                className="little-text">
                                This is sample project description random things are here in description This is sample
                                project
                                lorem ipsum generator for dummy content
                            </div>
                            <p className="tech-stack">
                        <span className="tech-stack-html">
                            Tech stack :
                        </span>
                                HTML , JavaScript, SASS, React
                            </p>
                            <div className="button-icons">
                                <div className="container-links">
                                    <div className="group-x2-cont">
                                        <img src={group_x2} alt="group_x2"/>
                                    </div>
                                    <span className="live-preview-4">
                            Live Preview
                            </span>
                                </div>
                                <div className="container-links">
                                    <div className="little-git">
                                        <img src={littleGit} alt="littleGit"/>
                                    </div>
                                    <span className="view-code-4">
                                View Code
                            </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project;