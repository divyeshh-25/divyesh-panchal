import React from "react";

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;
  const addClassToPtags = (htmlString) => {
    // Add the class to each <p> tag
    return htmlString.replace(/<p>/g, '<p class="project-details__desc-para">');
  };

  const modifiedOverviewHtml = addClassToPtags(project.overviewHtml);
  return (
    <div className="modal is-visible">
      <div className="modal-dialog">
        <button
          className="close-modal"
          aria-label="close modal"
          onClick={onClose}
        >
          ✕
        </button>
        <section className="modal-content">
          <figure>
            <div>
              <h2>{project.shortTitle}</h2>
            </div>
            <img
              src={project.bannerImg}
              alt={project.title}
              className="projects__row-img"
              loading="lazy"
            />
          </figure>
          <div className="text">
            <div className="project-details__desc">
              <h2 className="project-details__content-title">{project.shortTitle === project.title ? '' : project.title}</h2>
              <h2 className="project-details__content-title">Project Overview</h2>
              <div
              className="project-details__desc"
              dangerouslySetInnerHTML={{ __html: modifiedOverviewHtml }}
            />
            </div>
            <div className="project-details__tools-used">
              <h2 className="project-details__content-title">Tools Used</h2>
              <div className="skills">
                {project.toolsUsed.map((tool, index) => (
                  <div className="skills__skill" key={index}>
                    {tool}
                  </div>
                ))}
              </div>
            </div>
            <div className="project-details__links">
              <h2 className="project-details__content-title">See Live</h2>
              <a
                href={project.projectLink}
                className="btn btn--med btn--theme project-details__links-btn"
                target="_blank"
                rel="noreferrer"
              >
                Project Link
              </a>
              <button
                className="btn btn--med btn--theme-inv project-details__links-btn"
                onClick={onClose}
              >
                Go Back
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectModal;
