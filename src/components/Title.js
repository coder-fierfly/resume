import React from 'react';
import "../style/Title.css"
import "../App.css";


function Title({ boldText, normalText }) {
    return (
        <div className="title-group">
            <div className="bold-title">
                {boldText}
            </div>
            <div className="normal-title">
                {normalText}
            </div>
        </div>
    );
}

export default Title;
