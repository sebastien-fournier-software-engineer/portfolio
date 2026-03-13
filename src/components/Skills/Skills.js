import React, { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiOutlineCarryOut,
    AiOutlineTeam,
    AiOutlineTool,
    AiOutlineShareAlt,
    AiOutlineCompass,
    AiOutlineEnvironment,
    AiOutlineLineChart,
    AiOutlineCode,
    AiOutlineCluster,
} from "react-icons/ai";
import {
    SiCplusplus,
    SiSwagger,
    SiFastapi,
    SiRos,
    SiNvidia,
    SiPytorch,
    SiTensorflow,
    SiDocker,
    SiGitlab,
    SiGithubactions,
    SiGrafana,
    SiBoost,
    SiRobotframework,
    SiJira,
} from "react-icons/si";
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../context/translations";

import Nav2Icon from "../../assets/TechIcons/Nav2.png";
import PythonIcon from "../../assets/TechIcons/Python.svg";
import OpenCVIcon from "../../assets/TechIcons/OpenCV.svg";
import PyTestIcon from "../../assets/TechIcons/PyTest.svg";
import HuggingFaceIcon from "../../assets/TechIcons/HuggingFace.svg";
import PlotJugglerIcon from "../../assets/TechIcons/PlotJuggler.svg";
import FoxGloveIcon from "../../assets/TechIcons/FoxGlove.svg";
import GoogleIcon from "../../assets/TechIcons/Google.svg";
import GazeboIcon from "../../assets/TechIcons/Gazebo.svg";
import TensorRTIcon from "../../assets/TechIcons/TensorRT.svg";

const DEFAULT_BADGE_COLOR = "#444";

const TECH_ICON_IMGS = {
    "Nav2": Nav2Icon,
    "Python": PythonIcon,
    "OpenCV": OpenCVIcon,
    "PyTest": PyTestIcon,
    "HuggingFace": HuggingFaceIcon,
    "PlotJuggler": PlotJugglerIcon,
    "FoxGlove": FoxGloveIcon,
    "Google Test": GoogleIcon,
    "Gazebo": GazeboIcon,
    "TensorRT": TensorRTIcon,
};

const TECH_COLORS = {
    "C++": "#00599C",
    "Python": "#FFD43B",
    "microservices": "#000000",
    "API Rest": "#000000",
    "FastAPI": "#009688",
    "ROS2": "#22314E",
    "RViz": "#22314E",
    "NVIDIA Jetson": "#76B900",
    "OpenCV": "#00A86B",
    "PyTorch": "#EE4C2C",
    "TensorFlow": "#FF6F00",
    "GitLab CI": "#FC6D26",
    "GitHub Actions": "#2088FF",
    "Docker": "#2496ED",
    "Grafana": "#F46800",
    "Boost": "#8511b3",
    "PyTest": "#DA0000",
    "Robot Framework": "#00C0B5",
    "Agile": "#0052CC",
    "Scrum": "#0052CC",
    "Roadmap": "#000000",
    "Google Test": "#34A853",
    "Isaac Sim": "#76B900",
};

const TECH_ICONS = {
    "C++": SiCplusplus,
    "Python": null,
    "microservices": AiOutlineCluster,
    "API Rest": SiSwagger,
    "FastAPI": SiFastapi,
    "ROS2": SiRos,
    "Nav2": null,
    "SLAM Toolbox": AiOutlineCompass,
    "RTAB-Map": AiOutlineEnvironment,
    "Cartographer": AiOutlineEnvironment,
    "NVIDIA Jetson": SiNvidia,
    "OpenCV": null,
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
    "RViz": SiRos,
    "Google Test": null,
    "Boost": SiBoost,
    "PyTest": null,
    "Robot Framework": SiRobotframework,
    "Agile": SiJira,
    "Scrum": SiJira,
    "Facilitation": AiOutlineTeam,
    "Roadmap": AiOutlineLineChart,
};

const VALUE_PILLARS = [
    { key: "delivery", Icon: AiOutlineCarryOut },
    { key: "leadership", Icon: AiOutlineTeam },
    { key: "expertise", Icon: AiOutlineTool },
    { key: "knowledge", Icon: AiOutlineShareAlt },
];

const CATEGORY_KEYS = [
    "architecture",
    "computerVision",
    "devops",
    "qa",
    "embedded",
    "robotics",
    "simulation",
    "strategy",
];

const TechBadge = memo(function TechBadge({ tag }) {
    const iconSrc = TECH_ICON_IMGS[tag];
    const IconComponent = TECH_ICONS[tag];
    const color = TECH_COLORS[tag] || DEFAULT_BADGE_COLOR;

    const iconContent = iconSrc ? (
        <img src={iconSrc} alt={tag} className="skills-tech-badge-img" />
    ) : IconComponent ? (
        <IconComponent color={color} />
    ) : (
        <AiOutlineCode color={DEFAULT_BADGE_COLOR} />
    );

    return (
        <span className="skills-tech-badge">
            <span className="skills-tech-badge-icon">{iconContent}</span>
            {tag}
        </span>
    );
});

const ValuePillarCard = memo(function ValuePillarCard({ pillarKey, Icon }) {
    const { t } = useLanguage();
    const pillar = translations.skills.valuePillars[pillarKey];
    if (!pillar) return null;

    return (
        <Col xs={12} sm={6} md={3} className="skills-value-pillar-col">
            <div className="skills-value-pillar">
                <div className="skills-value-pillar-icon">
                    <Icon />
                </div>
                <h4 className="skills-value-pillar-title">{t(`skills.valuePillars.${pillarKey}.title`)}</h4>
                <p className="skills-value-pillar-desc">{t(`skills.valuePillars.${pillarKey}.description`)}</p>
            </div>
        </Col>
    );
});

const SkillCategoryCard = memo(function SkillCategoryCard({ categoryKey }) {
    const { t } = useLanguage();
    const cat = translations.skills.categories[categoryKey];
    if (!cat) return null;

    const tech = cat.tech || [];

    return (
        <Col xs={12} sm={6} lg={3} className="skills-category-col">
            <div className="skills-category-card">
                <h4 className="skills-category-title">{t(`skills.categories.${categoryKey}.title`)}</h4>
                <p className="skills-category-desc">{t(`skills.categories.${categoryKey}.description`)}</p>
                <div className="skills-tech-badges">
                    {tech.map((tag) => (
                        <TechBadge key={tag} tag={tag} />
                    ))}
                </div>
            </div>
        </Col>
    );
});

const SECTION_STYLE = { minHeight: "50vh", padding: "80px 0" };

function Skills() {
    const { t } = useLanguage();

    return (
        <section id="skills" className="skills-section" style={SECTION_STYLE}>
            <Container>
                <h1 className="project-heading">{t("skills.title")}</h1>

                <div className="skills-value-proposition">
                    <h3 className="skills-value-title">{t("skills.valuePillarsTitle")}</h3>
                    <Row className="skills-value-pillars">
                        {VALUE_PILLARS.map(({ key, Icon }) => (
                            <ValuePillarCard key={key} pillarKey={key} Icon={Icon} />
                        ))}
                    </Row>
                </div>

                <div className="skills-categories-wrapper">
                    <h3 className="skills-categories-title">{t("skills.categoriesTitle")}</h3>
                    <Row className="skills-categories">
                        {CATEGORY_KEYS.map((key) => (
                            <SkillCategoryCard key={key} categoryKey={key} />
                        ))}
                    </Row>
                </div>
            </Container>
        </section>
    );
}

export default Skills;
