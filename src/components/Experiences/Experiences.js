import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiOutlineCalendar,
    AiOutlineProject,
    AiOutlineCheckCircle,
    AiOutlineRocket,
    AiOutlineLineChart,
    AiOutlineClockCircle,
    AiOutlineEnvironment,
    AiOutlineTool,
} from "react-icons/ai";
import { FaBriefcase } from "react-icons/fa";
import { useLanguage } from "../../Context/LanguageContext";

const LIST_BLOCKS = [
    { labelKey: "missions", Icon: AiOutlineCheckCircle, dataKey: "missions" },
    { labelKey: "achievements", Icon: AiOutlineRocket, dataKey: "achievements" },
    { labelKey: "results", Icon: AiOutlineLineChart, dataKey: "results" },
];

function ExperienceBlockHeader({ labelKey, Icon }) {
    const { t } = useLanguage();
    const label = t(`experiences.labels.${labelKey}`);
    return (
        <div className="experiences-block-header">
            <span className="experiences-block-icon-wrap">
                <Icon className="experiences-block-icon" />
            </span>
            <span className="experiences-block-label">{label}</span>
        </div>
    );
}

function ExperienceListBlock({ labelKey, Icon, items }) {
    if (!items || (Array.isArray(items) && items.length === 0)) return null;

    const list = Array.isArray(items) ? items : [items];

    return (
        <div className={`experiences-block experiences-block--${labelKey}`}>
            <ExperienceBlockHeader labelKey={labelKey} Icon={Icon} />
            <ul className="experiences-block-list">
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

function ExperienceProjectBlock({ project }) {
    if (!project) return null;

    return (
        <div className="experiences-block experiences-block--project">
            <ExperienceBlockHeader labelKey="project" Icon={AiOutlineProject} />
            <p className="experiences-block-text">{project}</p>
        </div>
    );
}

function ExperienceCard({ exp }) {
    return (
        <div className="experiences-card">
            <Row className="align-items-start">
                {/* Colonne gauche : entreprise, période, durée cumulée, lieu */}
                <Col md={3} className="experiences-meta">
                    <div className="experiences-company">{exp.company}</div>
                    <div className="experiences-period">
                        <AiOutlineCalendar className="experiences-meta-icon" />
                        <span>{exp.period}</span>
                    </div>
                    {exp.duration && (
                        <div className="experiences-meta-row">
                            <AiOutlineClockCircle className="experiences-meta-icon" />
                            <span>{exp.duration}</span>
                        </div>
                    )}
                    {exp.location && (
                        <div className="experiences-meta-row">
                            <AiOutlineEnvironment className="experiences-meta-icon" />
                            <span>{exp.location}</span>
                        </div>
                    )}
                </Col>
                {/* Colonne droite : poste, contexte, missions, réalisations, résultats, outils */}
                <Col md={9} className="experiences-content">
                    <div className="experiences-role">
                        <FaBriefcase className="experiences-meta-icon" />
                        <strong>{exp.role}</strong>
                    </div>

                    <ExperienceProjectBlock project={exp.project} />

                    {LIST_BLOCKS.map(({ labelKey, Icon, dataKey }) => (
                        <ExperienceListBlock
                            key={labelKey}
                            labelKey={labelKey}
                            Icon={Icon}
                            items={exp[dataKey]}
                        />
                    ))}

                    {exp.tags?.length > 0 && (
                        <div className="experiences-block experiences-block--tools">
                            <ExperienceBlockHeader labelKey="tools" Icon={AiOutlineTool} />
                            <div className="experiences-tags">
                                {exp.tags.map((tag, i) => (
                                    <span key={i} className="experiences-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </Col>
            </Row>
        </div>
    );
}

function ExperienceTimelineItem({ exp }) {
    return (
        <div className="experiences-timeline-item">
            <div className="experiences-timeline-node">
                <span className="experiences-timeline-node-dot" />
            </div>
            <div className="experiences-timeline-connector" aria-hidden="true" />
            <ExperienceCard exp={exp} />
        </div>
    );
}

function Experiences() {
    const { t } = useLanguage();
    const entries = t("experiences.entries") || [];

    return (
        <section id="experiences" className="experiences-section" style={{ minHeight: "50vh", padding: "80px 0" }}>
            <Container>
                <h1 className="project-heading">{t("experiences.title")}</h1>
                <p className="experiences-subtitle">{t("experiences.subtitle")}</p>

                <div className="experiences-timeline">
                    <div className="experiences-timeline-track" aria-hidden="true" />
                    {entries.map((exp, index) => (
                        <ExperienceTimelineItem key={index} exp={exp} />
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Experiences;
