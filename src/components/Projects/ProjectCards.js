import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useLanguage } from "../../context/LanguageContext";

const hasValidLink = (link) => link && link !== "#";

function ProjectCard({
  imgPath,
  imgAlt,
  title,
  description,
  stack = [],
  ghLink,
  demoLink,
  isBlog = false,
  ongoing = false,
}) {
  const { t } = useLanguage();
  const showActions = hasValidLink(ghLink) || (!isBlog && demoLink);

  return (
    <Card className="project-card-view">
      {ongoing && (
        <div className="project-card-ongoing-ribbon" aria-hidden="true">
          <span className="project-card-ongoing-ribbon-text">{t("projects.ongoing")}</span>
        </div>
      )}
      <div className="project-card-img-wrap">
        <div className="project-card-img-frame">
          <img
            src={imgPath}
            alt={imgAlt || title || "Projet"}
            className="project-card-img"
          />
        </div>
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {stack.length > 0 && (
          <div className="project-stack">
            {stack.map((tech) => (
              <span key={tech} className="project-stack-tag">
                {tech}
              </span>
            ))}
          </div>
        )}
        {showActions && (
          <div className="project-card-actions">
            {hasValidLink(ghLink) && (
              <Button variant="primary" href={ghLink} target="_blank" rel="noopener noreferrer">
                <BsGithub /> &nbsp;{isBlog ? "Blog" : "GitHub"}
              </Button>
            )}
            {!isBlog && demoLink && (
              <Button variant="primary" href={demoLink} target="_blank" rel="noopener noreferrer">
                <CgWebsite /> &nbsp;Demo
              </Button>
            )}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
