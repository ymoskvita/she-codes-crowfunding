import React from "react";
import { Link } from "react-router-dom";

function Hero() {

    return (
        <section className="hero">
            <h1>Fund Your Dreams</h1>
            <p>Join our community and discover the power of crowdfunding</p>
            <Link to={'/'} className="button">Get Started</Link>
        </section>
    )
};

export default Hero;