// src/components/Projects/ProjectDetails.js
import React from "react";
import "./ProjectDetails.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ProjectDetails({ show, handleClose, project, onPrev, onNext }) {
  if (!show || !project) return null;

  // Split paragraphs and points
  const paragraphs = project.longDescription
    ? project.longDescription.split("\n").map((line) => line.trim()).filter(Boolean)
    : [project.description];

  const mainText = [];
  const bulletPoints = [];

  paragraphs.forEach((line) => {
    if (
      line.startsWith("What was done") ||
      line.startsWith("Why") ||
      line.startsWith("Advantage") ||
      line.startsWith("Future")
    ) {
      bulletPoints.push(line);
    } else {
      mainText.push(line);
    }
  });

  return (
    <div
      className="project-details-overlay"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="project-details-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="project-details-x" onClick={handleClose} aria-label="Close">
          ×
        </button>

        {/* Left Arrow */}
        <button className="nav-arrow left" onClick={onPrev}>
          <FaArrowLeft />
        </button>

        <div className="project-details-inner">
          <h2 className="project-details-title">{project.title}</h2>
          <img
            src={project.imgPath}
            alt={project.title}
            className="project-image"
          />

          <div className="project-details-desc">
            {mainText.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}

            {bulletPoints.length > 0 && (
                <ul className="custom-bullet-list">
                    {bulletPoints.map((point, idx) => (
                        <li key={idx} className="gradient-bullet">{point}</li>
                    ))}
                </ul>
            )}

          </div>

          <div className="project-details-actions">
            {project.demoLink && (
              <a
                className="project-demo-btn"
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
              >
                View Demo
              </a>
            )}
          </div>
        </div>

        {/* Right Arrow */}
        <button className="nav-arrow right" onClick={onNext}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
