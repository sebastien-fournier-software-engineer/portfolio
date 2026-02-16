import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "./About/Techstack";
import Toolstack from "./About/Toolstack";
import { useLanguage } from "../Context/LanguageContext";

function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="skills-section" style={{ minHeight: "50vh", padding: "80px 0" }}>
      <Container>
        <h1 className="project-heading">
          {t("skills.skillset")}
        </h1>
        <Techstack />
        <Toolstack />
      </Container>
    </section>
  );
}

export default Skills;
