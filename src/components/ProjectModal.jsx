import React, { useEffect, useRef, useState } from "react";

const withParaClass = (htmlString) => {
  if (!htmlString) return "";
  return htmlString.replace(/<p>/g, '<p class="project-details__desc-para">');
};

const ProjectModal = ({ isOpen, onClose, project }) => {
  const closeBtnRef = useRef(null);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsZoomOpen(false);
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsZoomOpen((wasOpen) => {
          if (wasOpen) return false;
          onClose();
          return wasOpen;
        });
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleZoomBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsZoomOpen(false);
    }
  };

  return (
    <div
      className="modal is-visible"
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div
        className="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          ref={closeBtnRef}
          className="close-modal"
          aria-label="Close project details"
          onClick={onClose}
        >
          ✕
        </button>
        <section className="modal-content">
          <figure className="project-details__figure">
            <div className="project-details__heading">
              <h2 id="project-modal-title">{project.shortTitle}</h2>
              {project.projectType && (
                <span className="project-details__type">{project.projectType}</span>
              )}
            </div>

            <button
              type="button"
              className="project-details__media project-details__media--zoomable"
              onClick={() => setIsZoomOpen(true)}
              aria-label={`Zoom in on ${project.shortTitle} screenshot`}
            >
              <img
                src={project.bannerImg}
                alt={project.title}
                className="projects__row-img"
                loading="lazy"
              />
              <span className="project-details__zoom-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </span>
            </button>

            <div className="project-details__links">
              <a
                href={project.projectLink}
                className="btn btn--primary btn--sm project-details__links-btn"
                target="_blank"
                rel="noreferrer"
              >
                Visit Live Site
              </a>
              {project.repoLink && (
                <a
                  href={project.repoLink}
                  className="btn btn--outline btn--sm project-details__links-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Source Code
                </a>
              )}
            </div>
          </figure>
          <div className="text">
            {project.shortTitle !== project.title && (
              <h2 className="project-details__full-title">{project.title}</h2>
            )}

            {project.businessProblem && (
              <div className="project-details__desc">
                <h2 className="project-details__content-title">Business Problem</h2>
                <p className="project-details__desc-para">{project.businessProblem}</p>
              </div>
            )}

            {project.challenges && (
              <div className="project-details__desc">
                <h2 className="project-details__content-title">Challenges</h2>
                <p className="project-details__desc-para">{project.challenges}</p>
              </div>
            )}

            {project.solutionHtml && (
              <div className="project-details__desc">
                <h2 className="project-details__content-title">Solution</h2>
                <div
                  className="project-details__desc"
                  dangerouslySetInnerHTML={{ __html: withParaClass(project.solutionHtml) }}
                />
              </div>
            )}

            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="project-details__desc">
                <h2 className="project-details__content-title">Key Features</h2>
                <ul className="project-details__desc-para">
                  {project.keyFeatures.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.contributionHtml && (
              <div className="project-details__desc">
                <h2 className="project-details__content-title">My Contribution</h2>
                <div
                  className="project-details__desc"
                  dangerouslySetInnerHTML={{ __html: withParaClass(project.contributionHtml) }}
                />
              </div>
            )}

            {project.technicalHtml && (
              <div className="project-details__desc">
                <h2 className="project-details__content-title">Technical Implementation</h2>
                <div
                  className="project-details__desc"
                  dangerouslySetInnerHTML={{ __html: withParaClass(project.technicalHtml) }}
                />
              </div>
            )}

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
          </div>
        </section>
      </div>

      {isZoomOpen && (
        <div
          className="image-lightbox is-visible"
          onClick={handleZoomBackdropClick}
          role="presentation"
        >
          <button
            className="image-lightbox__close"
            aria-label="Close zoomed screenshot"
            onClick={() => setIsZoomOpen(false)}
          >
            ✕
          </button>
          <img
            src={project.bannerImg}
            alt={project.title}
            className="image-lightbox__img"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectModal;
