import React from "react";
import { Link } from "react-router-dom";

function ProjectCard(props) {
    const { projectData } = props;

    return (
        <div className="project-card">
            <Link to={`/project/${projectData.id}`}>
                <img src={projectData.image} alt="" />
                <h2>{projectData.title}</h2>
                <p>Short description of the project goes here</p>
                <a href="#" class="button">Support This Project</a>
            </Link>
        </div>
    )
};

export default ProjectCard;