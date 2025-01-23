import React, { useEffect, useState } from "react";
import projectsData from "./data/project.json";
import ProjectModal from "./ProjectModal"; // Import Modal component

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Projects</span>
          <span className="heading-sec__sub">
            Here you will find some of the personal and client projects that I
            created, each project containing its own case study.
          </span>
        </h2>
        <div className="projects__content">
          {projects.map((project, index) => (
            <div className="projects__row" key={index}>
              <div className="projects__row-img-cont">
                <img
                  src={project.bannerImg}
                  alt={project.title}
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">{project.title}</h3>
                <p className="projects__row-content-desc">
                  {project.shortDescription}
                </p>
                <button
                  className="btn btn--med btn--theme dynamicBgClr open-modal"
                  onClick={() => openModal(project)} // Open modal with specific project data
                >
                  Case Study
                </button>
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
