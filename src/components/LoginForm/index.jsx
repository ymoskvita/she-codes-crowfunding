import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }))
    };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (credentials.username && credentials.password) {
            postData().then((response) => {
                window.localStorage.setItem("token", response.token);
                window.localStorage.setItem("username", credentials.username);
                navigate('/');
            })
        }
    }

    const postData = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}api-token-auth/`, {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
        return response.json();
    }

    return (
        <form action="">
            <div>
                <label htmlFor="username">Username:</label>
                <input onChange={handleChange} type="text" id="username" placeholder="Enter username" />
            </div>
            <div>
                <label htmlFor="password">Passwodr:</label>
                <input onChange={handleChange} type="password" id="password" placeholder="Enter password" />
            </div>
            <button type="submit" className="button" onClick={handleSubmit} >Login</button>
        </form>
    )
};

export default LoginForm;