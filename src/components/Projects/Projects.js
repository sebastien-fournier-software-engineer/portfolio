import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { useLanguage } from "../../context/LanguageContext";
import jetroverImg from "../../assets/Projects/jetrover.png";
import robotCarImg from "../../assets/Projects/robot_car.png";
import djangoPythonImg from "../../assets/Projects/django_python.png";
import armImg from "../../assets/Projects/arm.png";
import towerfallImg from "../../assets/Projects/towerfall.png";

/** Order must match projects.entries in translations.js */
const PROJECT_META = [
  { imgPath: jetroverImg, ghLink: "https://github.com/sebastien-fournier-software-robotics/solaris_basis", ongoing: true },
  { imgPath: robotCarImg, ghLink: "" },
  { imgPath: djangoPythonImg, ghLink: "https://github.com/sebastien-fournier-software-robotics/Django-Web-Server" },
  { imgPath: armImg, ghLink: "" },
  { imgPath: towerfallImg, ghLink: "" },
];

function Projects() {
  const { t } = useLanguage();
  const entries = t("projects.entries") || [];

  return (
    <Container fluid className="project-section" id="project">
      <Container>
        <h1 className="project-heading">{t("projects.title")}</h1>
        <Row className="justify-content-center" style={{ paddingBottom: "10px" }}>
          {entries.map((entry, index) => (
            <Col key={entry.title} xs={12} lg={4} className="project-card">
              <ProjectCard {...entry} {...PROJECT_META[index]} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
