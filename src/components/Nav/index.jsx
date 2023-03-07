import React from "react";
import { NavLink, Link, useNavigate } from 'react-router-dom';

function Nav() {
    let activeStyle = {
        textDecoration: "underline",
    };

    const isLogIn = window.localStorage.getItem("token") !== null;
    const username = window.localStorage.getItem("username");
    const navigate = useNavigate();

    const onLogOut = () => {
        localStorage.clear();
        navigate('/');
    }

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
                            to="/projects"
                            style={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Projects
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="nav-login">
                {isLogIn && <p>Hi, {username}</p>}
                {isLogIn && <Link to="/" onClick={onLogOut}>Log out</Link>}
                {!isLogIn && <Link to="/login">Log in</Link>}
                {!isLogIn && <Link to="/signup">Sign up </Link>}
            </div>
        </header>
    )
};

export default Nav;