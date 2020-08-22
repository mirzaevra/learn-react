import React from "react";
import logo from './../../../logo.svg'
import './Header.css'

function Header() {
    return (
        <header className="header">
            <div className="header__row">
                <div className="header__col">
                    <img className="logo" src={logo} alt="logo"/>
                </div>
                <div className="header__col"><h2>Header</h2></div>
            </div>
        </header>
    );
}

export default Header;
