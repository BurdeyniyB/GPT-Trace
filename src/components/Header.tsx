"use client";

import { useRef } from "react";
import style from "../styles/Header.module.css";

function Header() {
    const menu = useRef<HTMLUListElement | null>(null);
    const navRef = useRef<HTMLDivElement | null>(null);


    return (
        <div ref={navRef} className={`${style.nav}`}>
            <div className={style.logo}>
                <img src="/image/logo.png" alt="logo"/>
            </div>

            <ul ref={menu}>
                <li><a href="#home">Home</a></li>
                <li><a href="#get-started">Get Started</a></li>
                <li><a href="#gpt-trade">GPT Trade</a></li>
                <li><a href="#our-team">Our Team</a></li>
                <li><a href="#partners">Partners</a></li>
            </ul>
        </div>
    );
}

export default Header;
