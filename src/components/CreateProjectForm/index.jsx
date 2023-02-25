import React, { useState } from "react";

function CreateProjectForm() {
    const [projectData, setProjectData] = useState({
        title: "",
	    description: "",
	    goal: 0,
	    image: "",
	    is_open: true,
	    date_created: "2020-03-20T14:28:23.382748Z",
    });


    const handleChange = (event) => {
        const { id, value } = event.target;
        setProjectData((prevProjectData) => ({
            ...prevProjectData,
            [id]: value,
        }))
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        postData().then((response) => {
            console.log(response)
        })

    }

    const postData = async () => {
        const token = window.localStorage.getItem("token");
        const response = await fetch(`${import.meta.env.VITE_API_URL}projects/`, {
            method: "post",
            headers: {
                "content-type": "application/json",
                "Authorization": `token ${token}`,

            },
            body: JSON.stringify(projectData),
        });
        return response.json();
    }

    return (
        <form action="">
            <div>
                <label htmlFor="title">Title:</label>
                <input onChange={handleChange} type="text" id="title" placeholder="Enter title" />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input onChange={handleChange} type="text" id="description" placeholder="Enter description" />
            </div>
            <div>
                <label htmlFor="goal">Goal:</label>
                <input onChange={handleChange} type="text" id="goal" placeholder="Enter goal" />
            </div>
            <div>
                <label htmlFor="image">Image:</label>
                <input onChange={handleChange} type="text" id="image" placeholder="Enter image URL" />
            </div>
            <button type="submit" className="button" onClick={handleSubmit}>Create</button>
        </form>
    )
};

export default CreateProjectForm;