import React from 'react';
import logo from '../svg/logo.svg';
import linkedin from '../svg/in.svg';
import github from '../svg/github.svg';
import twi from '../svg/twi.svg';
import "../App.css";


function Header() {
    return (
        <div className="group-3">
            <div className="logo-11">
                <div className="container-13">
                    <img className="" src={logo} alt="Logo"/>
                </div>
            </div>
                <div className="group-2">
                    <button className="header-btn">
                        Home
                    </button>
                    <button className="header-btn">
                        About
                    </button>
                    <button className="header-btn">
                        Tech Stack
                    </button>
                    <button className="header-btn">
                        Projects
                    </button>
                    <button className="header-btn">
                        Contact
                    </button>
                </div>
                <div className="messenger-btns-cont">
                    <div className="mess-btn-cont">
                        <img className="" src={github} alt="github"/>
                    </div>
                    <div className="mess-btn-cont">
                        <img className="" src={twi} alt="twi"/>
                    </div>
                    <div className="mess-btn-cont">
                        <img className="" src={linkedin} alt="linkedin"/>
                    </div>
            </div>
        </div>
    );
}

export default Header;
