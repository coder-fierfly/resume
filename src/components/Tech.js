import React from "react";
import "../style/TechStyle.css"
import '../App.css';
import html from "../svg/html.svg";
import css from "../svg/css.svg"
import js from "../svg/js-official.svg"
import react from "../svg/logos_react.svg"
import vector from "../svg/Vector.svg"
import bootstrap from "../svg/bootstrap.svg"
import tail from "../svg/tailwind.svg"
import sass from "../svg/sass.svg"
import git from "../svg/git-icon.svg"
import green from "../svg/cib_greensock.svg"
import vs from "../svg/vscode.svg"
import github from "../svg/github-fill.svg"

function Tech() {

    const techLogos = [
        {src: html, alt: "HTML"},
        {src: css, alt: "CSS"},
        {src: js, alt: "JavaScript"},
        {src: react, alt: "React"},
        {src: vector, alt: "Vector"},
        {src: bootstrap, alt: "Bootstrap"},
        {src: tail, alt: "Tailwind"},
        {src: sass, alt: "Sass"},
        {src: git, alt: "Git"},
        {src: green, alt: "GreenSock"},
        {src: vs, alt: "VS Code"},
        {src: github, alt: "GitHub"}
    ];
    return (
        <div className="tech-title-group">
            {techLogos.map((logo, index) => (
                <div className="tech-logo-cont" key={index}>
                    <img src={logo.src} alt={logo.alt}/>
                </div>
            ))}
        </div>
    )
}

export default Tech;