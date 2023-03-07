import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function SignUpForm() {
    const [credentials, setCredentials] = useState({
        username: '',
        email: '',
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

        postData().then((response) => {
            console.log(response)
        })
        navigate('/');
    }

    const postData = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}users/`, {
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
                <label htmlFor="email">Email:</label>
                <input onChange={handleChange} type="text" id="email" placeholder="Enter email" />
            </div>
            <div>
                <label htmlFor="password">Passwodr:</label>
                <input onChange={handleChange} type="password" id="password" placeholder="Enter password" />
            </div>
            <button type="submit" className="button" onClick={handleSubmit}>Sign up</button>
        </form>
    )
};


export default SignUpForm;