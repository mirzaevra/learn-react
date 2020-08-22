import React from "react";

import './AsideNav.css'

export default function AsideNav() {
    return (
        <nav>
            <ul className="asideNav">
                <li className="asideNav__item">
                    <a href="" className="asideNav__link">Profile</a>
                </li>
                <li className="asideNav__item">
                    <a href="" className="asideNav__link">Messages</a>
                </li>
                <li className="asideNav__item">
                    <a href="" className="asideNav__link">News</a>
                </li>
                <li className="asideNav__item">
                    <a href="" className="asideNav__link">Music</a>
                </li>
                <li className="asideNav__item">
                    <a href="" className="asideNav__link">Settings</a>
                </li>
            </ul>
        </nav>
    );
}
