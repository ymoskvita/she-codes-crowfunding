import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ProjectPage() {
    const [projectData, setProjectData] = useState({ pledges:[]});
    const { id } = useParams();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}projects/${id}`).then((results) => {
            return results.json();
        }).then((data) => {
            setProjectData(data);
        })
    }, []);
    return (
        <main className="container">
            <section className="project-header">
                <div className="container">
                    <h2>{projectData.title}</h2>
                    <p className="project-tagline">Short description of the campaign</p>
                    <div className="project-stats">
                        <div className="stat">
                            <span className="stat-number">80%</span>
                            <span className="stat-label">Funded</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">10</span>
                            <span className="stat-label">Days left</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">5000</span>
                            <span className="stat-label">Pledges</span>
                        </div>
                    </div>
                    <Link to={`/pledges/${projectData.id}`} className="button">Support This Project</Link>
                </div>
            </section>
            <section className="project-description">
                <div className="container">
                    <h3>About this campaign</h3>
                    <p>{projectData.description}</p>
                    <h3>Risks and challenges</h3>
                    <p>Suspendisse sollicitudin elit a dolor consequat, vel venenatis odio scelerisque. Ut in ante erat.
                        Proin finibus nunc eros, euismod posuere augue laoreet ac. Etiam id enim dui. Etiam porta dui id
                        velit faucibus dictum. Proin eu felis bibendum, pellentesque magna eu, dapibus nisi. Nam vitae
                        tristique purus, eu elementum velit. Nunc congue ligula massa, nec scelerisque tellus blandit eu. In
                        in lectus vel augue pulvinar semper. Nulla facilisi. Nullam fermentum mauris eu felis tempor, vel
                        lobortis ex tincidunt. Integer lacinia, magna a dictum tincidunt, enim massa ornare nunc, nec
                        pulvinar mi elit vel risus.</p>
                </div>
            </section>
        </main>
    )
};

export default ProjectPage;