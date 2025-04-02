"use client";

import style from "@/styles/Home.module.css";
import { useState } from "react";

export default function Home() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await fetch("/api/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setFormData({ firstName: "", lastName: "", email: "", phone: "" });
        }
    };

    return (
        <div id="home" className={style.home_container}>
            <div className={style.left_content}>
                <h1>The new standard in <br /> Crypto trading</h1>
                <p>Use OpenAi algorithms created <br /> by Elon Musk to make profit 24/7</p>
                <button>Get your profit</button>
            </div>

            <div className={style.right_form}>
                <h3>Today only!</h3>
                <p>Get a personal consultation from our top manager to choose an individual earning strategy for you <span>absolutely FOR FREE</span></p>

                <form onSubmit={handleSubmit} >
                    <label htmlFor="first_name">First Name</label>
                    <input id="first_name" name="firstName" type="text" placeholder="Add your first name" value={formData.firstName} onChange={handleChange} required />

                    <label htmlFor="last_name">Last Name</label>
                    <input id="last_name" name="lastName" type="text" placeholder="Add your last name" value={formData.lastName} onChange={handleChange} required />

                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="Add your email" value={formData.email} onChange={handleChange} required />

                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" placeholder="Add your phone number" value={formData.phone} onChange={handleChange} required />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}