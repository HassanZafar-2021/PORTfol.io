import { useContext } from "react";
import { ProjectContext } from "./ProjectProvider"; // Ensure consistency in the name of the context

function Project() {
  const projects = useContext(ProjectContext); // Use context to get the projects

  if (!projects || projects.length === 0) {
    return <p>No projects to display.</p>;
  }

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {/* Project Name */}
            <h3>{project.name}</h3>

            {/* Project Image */}
            <img
              src={project.image || "/fallback-image.jpg"} // Fallback image in case of an error
              alt={`Screenshot of ${project.name} interface`} // More meaningful alt text
              style={{ width: "100%" }}
            />

            {/* Project Description */}
            <p>{project.description}</p>

            {/* Project Link */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
