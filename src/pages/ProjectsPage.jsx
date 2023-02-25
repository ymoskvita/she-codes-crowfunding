import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";


function ProjectsPage() {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}projects`).then((results) => {
            return results.json();
        }).then((data) => {
            setProjectList(data);
        });
    }, []);

    return (
        <main className="container">
            <section className="hero">
                <Link to={'/create-project'} className="button">Create Project</Link>
            </section>
            <section className="featured-projects">
                <div id="project-list" className="project-row">
                    {projectList.map((projectData, index) => {
                        return <ProjectCard
                            projectData={projectData}
                            key={projectData.id}/>
                    })}
                </div>
            </section>
        </main>

    )
};

export default ProjectsPage;