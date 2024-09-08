import React from "react";
import "../style/MyNameStyle.css"

function MyName() {
    return (
        <div className="component-1">
            <div className="text-wrap">
                <p className="p-wrap">
                    <span>Hi 👋,<br/></span>
                    <span>My name is</span>
                    <span className="gradient"><br/>Pavan MG</span><br/>
                    <span>I build things for web</span>
                </p>
            </div>
            <div className="circle-wrapper">
                <div className="person-photo"></div>
            </div>
        </div>
    )
}

export default MyName;