import React from "react";
import "../style/BottomStyle.css"
import '../App.css';
import linkedin from '../svg/in.svg';
import github from '../svg/github.svg';
import twi from '../svg/twi.svg';
import logo from '../svg/logo-dw.svg'
import "../style/HeadStyle.css"

function Bottom() {
    return (
        <>
            <div className="bottom-group">
                <div className="bottom-contact">
                    <div className="logo-cont">
                        <img className="" src={logo} alt="Logo"/>
                    </div>
                    <div className='contact'>
                        <p>+91 12345 09876</p>
                        <p>info@example.com</p>
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
                </div>

            </div>
            <div className="botton-nav">
                <div className="nav-group">
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
                <p className="pav-text"> Designed and built by
                    <span className="gradient"> Pavan MG
                        <span className="simple-text"> with </span>
                Love
                   <span className="simple-text"> & </span>
                     Coffee</span>
                </p>
            </div>


        </>
    )
}

export default Bottom;