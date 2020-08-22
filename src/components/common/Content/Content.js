import React from "react";
import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import './Content.css'

export default function Content() {
    return (
        <section className="content">
            <div className="container container_grid">
                <Header />
                <Aside />
                <Main />
                <Footer />
            </div>
        </section>
    )
}
