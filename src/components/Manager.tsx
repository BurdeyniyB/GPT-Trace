"use client";

import style from "@/styles/Manager.module.css";
import { useState } from "react";

export default function Manager() {
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

        const result = await response.json();

        if (result.status === "Success") {
            setFormData({ firstName: "", lastName: "", email: "", phone: "" });
        }
    };

    return (
        <div id="partners" className={style.container}>
            <div className={style.form}>
                <h1>Get your personal manager</h1>
                <h3>Today only!</h3>
                <p>Get a personal consultation from our top manager to choose an individual earning strategy for you <span>absolutely FOR FREE</span></p>
                <p>Sign up and wait for a life-changing call</p>
                
                <form onSubmit={handleSubmit}>
                    <label htmlFor="first_name">First Name</label>
                    <input id="first_name" name="firstName" type="text" placeholder="Add your first name" value={formData.firstName} onChange={handleChange} required />

                    <label htmlFor="last_name">Last Name</label>
                    <input id="last_name" name="lastName" type="text" placeholder="Add your last name" value={formData.lastName} onChange={handleChange} required />

                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="Add your email" value={formData.email} onChange={handleChange} required />

                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" placeholder="Add your phone number" value={formData.phone} onChange={handleChange} required />

                    <button type="submit">Get your profit</button>
                </form>
            </div>
            <img src="/image/robot2.png" alt="robot 2" />
        </div>
    );
}
