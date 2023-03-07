import React, { useState } from "react";
import { useParams } from "react-router-dom";

function CreatePledgeForm() {
    const { id } = useParams();
    const [pledgeData, setPledgeData] = useState({
        amount: 0,
	    comment: '',
	    anonymous: false,
	    project: id,
    });


    const handleChange = (event) => {
        const { id, value } = event.target;
        setPledgeData((prevPledgeData) => ({
            ...prevPledgeData,
            [id]: value,
        }))
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        postData().then((response) => {
            console.log(response)
        })

    };

    const postData = async () => {
        const token = window.localStorage.getItem("token");
        const response = await fetch(`${import.meta.env.VITE_API_URL}pledges/${id}`, {
            method: "post",
            headers: {
                "content-type": "application/json",
                "Authorization": `token ${token}`,

            },
            body: JSON.stringify(pledgeData),
        });
        return response.json();
    }

    return (
        <form action="">
            <div>
                <label htmlFor="amount">Amount:</label>
                <input onChange={handleChange} type="text" id="amount" placeholder="Enter amount" />
            </div>
            <div>
                <label htmlFor="comment">Comment:</label>
                <input onChange={handleChange} type="text" id="comment" placeholder="Enter comment" />
            </div>
            <div>
                <label htmlFor="anonymous">Anonymous: </label>
                <input type="checkbox" className="checkbox" onChange={handleChange} /> Yes
            </div>
            <button type="submit" className="button" onClick={handleSubmit}>Create</button>
        </form>
    )
};

export default CreatePledgeForm;