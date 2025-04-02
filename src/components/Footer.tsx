"use client";

import { useRef } from "react";
import style from "../styles/Footer.module.css";

function Footer() {
    const menu = useRef<HTMLUListElement | null>(null);
    const navRef = useRef<HTMLDivElement | null>(null);


    return (
        <div ref={navRef} className={`${style.nav}`}>

            <ul ref={menu}>
            <li><a href="#home">Home</a></li>
                <li><a href="#get-started">Get Started</a></li>
                <li><a href="#gpt-trade">GPT Trade</a></li>
                <li><a href="#our-team">Our Team</a></li>
                <li><a href="#partners">Partners</a></li>
            </ul>
            <div className={style.logo}>
                <img src="/image/logo.png" alt="logo"/>
            </div>
        </div>
    );
}

export default Footer;
