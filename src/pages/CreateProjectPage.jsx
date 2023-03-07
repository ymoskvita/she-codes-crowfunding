import React from "react";
import {  Link } from "react-router-dom";
import CreateProjectForm from "../components/CreateProjectForm";

function CreateProjectPage() {
    const token = window.localStorage.getItem("token");
    return (
        <main className="container">
            {!token ?
                <div className="hero">
                    <h1>Do you have account? </h1>
                    <Link to="/login" className="button">Log in</Link>
                    <Link to="/signup" className="button" >Sign up </Link>
                </div>
                : <CreateProjectForm />}
        </main>
    )
}

export default CreateProjectPage;