import React from "react";
import { NavLink, Link } from 'react-router-dom';

function Nav() {
    let activeStyle = {
        textDecoration: "underline",
    };

    const isLogIn = window.localStorage.getItem("token") !== null;
    const username = window.localStorage.getItem("username");

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            style={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/project"
                            style={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Project
                        </NavLink>
                    </li>
                    {isLogIn && <li>Hi, {username}</li>}
                    {isLogIn && <li><NavLink
                        to="/"
                        style={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Log out
                    </NavLink></li>}
                    {!isLogIn && <li><NavLink
                        to="/login"
                        style={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Login
                    </NavLink></li>}
                    {!isLogIn && <li><NavLink
                        to="/"
                        style={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Sign up
                    </NavLink></li>}
                </ul>
            </nav>
        </header>
    )
};

export default Nav;