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
    return (
        <div className="tech-title-group">
            <div className="tech-logo-cont">
                <img className="" src={html} alt="HTML"/>
            </div>
            <div className="tech-logo-cont">
                <img className="" src={css} alt="css"/>
            </div>
            <div className="tech-logo-cont">
                <img className="" src={js} alt="js"/>
            </div>
            <div className="tech-logo-cont">
                <img className="" src={react} alt="react"/>
            </div>
            <div className="tech-logo-cont">
                <img className="" src={vector} alt="vector"/>
            </div>
            <div className="tech-logo-cont">
                <img className="" src={bootstrap} alt="bootstrap"/>
            </div>
            <div className="tech-logo-cont">
                <img className="" src={tail} alt="tail"/>
            </div>
            <div className="tech-logo-cont">
                <img className="" src={sass} alt="sass"/>
            </div>
            <div className="tech-logo-cont">
                <img className="" src={git} alt="git"/>
            </div>
            <div className="tech-logo-cont">
                <img className="" src={green} alt="green"/>
            </div>
            <div className="tech-logo-cont">
                <img className="" src={vs} alt="vs"/>
            </div>
            <div className="tech-logo-cont">
                <img className="" src={github} alt="github"/>
            </div>

        </div>
    )
}

export default Tech;