import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineCarryOut, AiOutlineTeam, AiOutlineTool, AiOutlineShareAlt, AiOutlineCompass, AiOutlineEnvironment, AiOutlineProject, AiOutlineCode } from "react-icons/ai";
import { SiCplusplus, SiPython, SiKubernetes, SiSwagger, SiFastapi, SiRos, SiNvidia, SiOpencv, SiPytorch, SiTensorflow, SiDocker, SiGitlab, SiGithubactions, SiGrafana, SiBoost, SiPytest, SiRobotframework, SiJira, SiGoogle } from "react-icons/si";
import { useLanguage } from "../../Context/LanguageContext";
import translations from "../../Context/translations";

import Nav2Icon from "../../Assets/TechIcons/Nav2.png";
import HuggingFaceIcon from "../../Assets/TechIcons/HuggingFace.svg";
import PlotJugglerIcon from "../../Assets/TechIcons/PlotJuggler.svg";
import FoxGloveIcon from "../../Assets/TechIcons/FoxGlove.svg";
import GazeboIcon from "../../Assets/TechIcons/Gazebo.svg";
import RVizIcon from "../../Assets/TechIcons/RViz.svg";
import TensorRTIcon from "../../Assets/TechIcons/TensorRT.svg";

const TECH_ICON_IMGS = {
  "Nav2": Nav2Icon,
  "HuggingFace": HuggingFaceIcon,
  "PlotJuggler": PlotJugglerIcon,
  "FoxGlove": FoxGloveIcon,
  "Gazebo": GazeboIcon,
  "RViz": RVizIcon,
  "TensorRT": TensorRTIcon,
};

const TECH_ICONS = {
  "C++": SiCplusplus,
  "Python": SiPython,
  "microservices": SiKubernetes,
  "API Rest": SiSwagger,
  "FastAPI": SiFastapi,
  "ROS2": SiRos,
  "Nav2": null,
  "SLAM Toolbox": AiOutlineCompass,
  "RTAB-Map": AiOutlineEnvironment,
  "Cartographer": AiOutlineEnvironment,
  "NVIDIA Jetson": SiNvidia,
  "OpenCV": SiOpencv,
  "PyTorch": SiPytorch,
  "TensorFlow": SiTensorflow,
  "HuggingFace": null,
  "TensorRT": null,
  "GitLab CI": SiGitlab,
  "GitHub Actions": SiGithubactions,
  "Docker": SiDocker,
  "PlotJuggler": null,
  "FoxGlove": null,
  "Grafana": SiGrafana,
  "Gazebo": null,
  "Isaac Sim": SiNvidia,
  "RViz": null,
  "Google Test": SiGoogle,
  "Boost": SiBoost,
  "PyTest": SiPytest,
  "Robot Framework": SiRobotframework,
  "Agile": SiJira,
  "Scrum": SiJira,
  "Facilitation": AiOutlineTeam,
  "Roadmap": AiOutlineProject,
};

const VALUE_PILLARS = [
  { key: "delivery", Icon: AiOutlineCarryOut },
  { key: "leadership", Icon: AiOutlineTeam },
  { key: "expertise", Icon: AiOutlineTool },
  { key: "knowledge", Icon: AiOutlineShareAlt },
];

const CATEGORY_KEYS = [
  "architecture",
  "robotics",
  "computerVision",
  "devops",
  "observability",
  "simulation",
  "qa",
  "strategy",
];

function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="skills-section" style={{ minHeight: "50vh", padding: "80px 0" }}>
      <Container>
        <h1 className="project-heading">{t("skills.title")}</h1>

        {/* Value proposition */}
        <div className="skills-value-proposition">
          <h3 className="skills-value-title">{t("skills.valuePillarsTitle")}</h3>
          <Row className="skills-value-pillars">
            {VALUE_PILLARS.map(({ key, Icon }) => {
              const pillar = translations.skills.valuePillars[key];
              if (!pillar) return null;
              const title = t(`skills.valuePillars.${key}.title`);
              const description = t(`skills.valuePillars.${key}.description`);
              return (
                <Col key={key} xs={12} sm={6} md={3} className="skills-value-pillar-col">
                  <div className="skills-value-pillar">
                    <div className="skills-value-pillar-icon">
                      <Icon />
                    </div>
                    <h4 className="skills-value-pillar-title">{title}</h4>
                    <p className="skills-value-pillar-desc">{description}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>

        {/* Skill categories + Operational */}
        <div className="skills-categories-wrapper">
          <h3 className="skills-categories-title">{t("skills.categoriesTitle")}</h3>
          <Row className="skills-categories">
            {CATEGORY_KEYS.map((key) => {
              const cat = translations.skills.categories[key];
              if (!cat) return null;
              const title = t(`skills.categories.${key}.title`);
              const description = t(`skills.categories.${key}.description`);
              const tech = cat.tech || [];
              return (
                <Col key={key} xs={12} sm={6} lg={3} className="skills-category-col">
                  <div className="skills-category-card">
                    <h4 className="skills-category-title">{title}</h4>
                    <p className="skills-category-desc">{description}</p>
                    <div className="skills-tech-badges">
                      {tech.map((tag) => {
                        const iconSrc = TECH_ICON_IMGS[tag];
                        const IconComponent = TECH_ICONS[tag];
                        return (
                          <span key={tag} className="skills-tech-badge">
                            <span className="skills-tech-badge-icon">
                              {iconSrc ? (
                                <img src={iconSrc} alt={tag} className="skills-tech-badge-img" />
                              ) : (
                                <>{IconComponent ? <IconComponent /> : <AiOutlineCode />}</>
                              )}
                            </span>
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>

          {/* Opérationnel, gestion & accompagnement */}
          <div className="skills-operational">
            <h3 className="skills-operational-title">{t("skills.operationalTitle")}</h3>
            <div className="skills-operational-tags">
              {(t("skills.operationalItems") || []).map((point, i) => (
                <span key={i} className="skills-operational-tag">{point}</span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Skills;
