import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import Hero from "../components/Hero";


function HomePage() {
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
            <Hero/>
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

export default HomePage;