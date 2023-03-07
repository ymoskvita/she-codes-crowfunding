import React from "react";
import {  Link } from "react-router-dom";
import CreatePledgeForm from "../components/CreatePledgeForm";

function PledgePage() {
    const token = window.localStorage.getItem("token");

    return (
        <main className="container">
            {!token ?
                <div className="hero">
                    <h1>Do you have acount? </h1>
                    <Link to="/login" className="button">Log in</Link>
                    <Link to="/signup" className="button" >Sign up </Link>
                </div>
            : <CreatePledgeForm />}
        </main>
    )
};

export default PledgePage;