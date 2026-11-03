import React, { useEffect, useState } from "react";
import projectsData from "./data/project.json";
import ProjectModal from "./ProjectModal";
import useReveal from './useReveal';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useReveal();

  useEffect(() => {
    setProjects(projectsData.projects);
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="projects sec-pad" ref={ref}>
      <div className="main-container">
        <div className="section-head reveal">
          <span className="eyebrow">Selected Work</span>
          <h2 className="section-head__title">Projects built for real businesses</h2>
          <p className="section-head__sub">
            A selection of client and personal projects, each with its own case study.
          </p>
        </div>

        <div className="projects__content">
          {projects.map((project, index) => (
            <div className="project-entry reveal" key={project.id}>
              <div className="project-entry__media">
                <img
                  src={project.bannerImg}
                  alt={project.title}
                  className="project-entry__img"
                  loading="lazy"
                />
              </div>
              <div className="project-entry__content">
                <div className="project-entry__meta">
                  <span className="project-entry__index">{String(index + 1).padStart(2, "0")}</span>
                  <span>{project.category || "Project"}</span>
                  {project.projectType && (
                    <span className="project-entry__type">{project.projectType}</span>
                  )}
                </div>
                <h3 className="project-entry__title">{project.shortTitle}</h3>
                <p className="project-entry__desc">{project.shortDescription}</p>
                <div className="project-entry__tools">
                  {project.toolsUsed.slice(0, 5).map((tool, i) => (
                    <span className="tag" key={i}>{tool}</span>
                  ))}
                </div>
                <div className="project-entry__actions">
                  <button
                    className="btn btn--primary btn--sm"
                    onClick={() => openModal(project)}
                  >
                    View Details
                  </button>
                  <a
                    href={project.projectLink}
                    className="project-entry__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit Site &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
