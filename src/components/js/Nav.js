/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import '../css/Nav.css';

export default function Navbar(props) {
    return (
        <nav className={props.darkMode ? "dark": ""}>
            <img src='../images/cola.png' className="nav--logo" />
            <h3 className="nav--logo_text">ItalianoFood</h3>

            <div className="toggler" >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>

        </nav>
    )
}